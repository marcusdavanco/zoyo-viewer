import Vinyl from 'vinyl';
import lf from 'localforage';
import streamToArray from 'stream-to-array';
import t2 from 'through2';

let div = window.div = {};
export default div;

div.lf = lf;

div.arrayFromStream = streamToArray;
div.bufConcat = bufs => Buffer.concat(bufs);

div.bufFromStream = async s => div.bufConcat(
  await div.arrayFromStream(s),
);

div.fs = {};

let prefix = '~/Pictures';

let sleep = d => new Promise(r => setTimeout(r, d));

let makeLazyReadableStream = fn => {
  let ret = t2();

  let isReading = false;
  let originalRead = ret.read;

  ret.read = (...args) => {
    if (!isReading) {
      fn().pipe(ret);
      isReading = true;
    }

    return originalRead.apply(ret, args);
  };

  return ret;
};

let makeVinyl = cfg => new Vinyl({
  ...cfg,

  isDirectory: () => Boolean(
    cfg.stats && cfg.stats.isDirectory,
  ),

  contents: makeLazyReadableStream(() => {
    let ret = t2();

    if (cfg.stats && cfg.stats.isDirectory) {
      ret.destroy(new Error(
        `${cfg.path} is a directory`
      ));

      return ret;
    }

    (async () => {
      let lfData = await lf.getItem(cfg.path);

      if (lfData) {
        ret.push(Buffer.from(lfData));

        ret.end();
        return;
      }

      let fileName = cfg.path.replace(`${prefix}/`, '');
      let fetchPath = `images/${fileName}`;

      let res = await fetch(fetchPath);

      if (!res.ok) {
        ret.destroy(new Error(
          `GET ${fetchPath}: Error ${res.status} ` +
          `(${res.statusText})`,
        ));

        return;
      }

      if (res.headers.get('Content-Type').startsWith('text/html')) {
        ret.destroy(new Error(
          `GET ${fetchPath}: Got an HTML file instead`,
        ));

        return;
      }

      let buf = Buffer.from(await res.arrayBuffer());

      await lf.setItem(cfg.path, buf);
      ret.push(buf);

      ret.end();
    })().catch(err => {
      ret.destroy(err);
    });

    return ret;
  }),

  async save(buf) {
    let isUint8Array = buf instanceof Uint8Array;

    if (!isUint8Array) {
      throw new Error(`buf is not an Uint8Array`);
    }

    await lf.setItem(cfg.path, buf);
  },
});

div.fs.src = (glob, opt) => {
  opt = opt || {};

  let ret = t2.obj();

  if (glob !== `${prefix}/*`) {
    ret.end();
    return ret;
  }

  (async () => {
    await sleep(50);

    ret.push(makeVinyl({
      path: `${prefix}/someDirectory`,

      stats: {
        isDirectory: true,
      },
    }));

    await sleep(50);

    ret.push(makeVinyl({
      path: `${prefix}/atago.jpg`,
    }));

    ret.push(makeVinyl({
      path: `${prefix}/jervis.jpg`,
    }));

    await sleep(100);

    ret.push(makeVinyl({
      path: `${prefix}/remilia.jpg`,
    }));

    await sleep(100);

    ret.push(makeVinyl({
      path: `${prefix}/nonImageFile.txt`,
    }));

    await sleep(100);

    ret.push(makeVinyl({
      path: `${prefix}/tokai.jpg`,
    }));

    ret.push(makeVinyl({
      path: `${prefix}/iws2000.jpg`,
    }));

    await sleep(600);

    ret.end();
  })().catch(err => {
    ret.destroy(err);
  });

  return ret;
};
