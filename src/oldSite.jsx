import React from 'react'


const Site = props => {
  return (

    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photon/0.1.2-alpha/css/photon.css" />


      {/*Window div*/}
      <div className="window" style={{ width: 1300 }}>
      {/*Header*/}
        <header className="toolbar toolbar-header">
          <h1 style={{ fontSize: 12 }}>
            <div className="toolbar-actions">
              <div className="zoyo-header">
                <div className="left-buttons">
                  <button className="btn btn-large btn-default">
                    <span className="icon icon-cancel" />
                  </button>
                  <div className="btn-group">
                    <button className="btn btn-large btn-default active">
                      <span className="icon icon-reply" />
                    </button>
                    <button className="btn btn-large btn-default">
                      <span className="icon icon-forward" />
                    </button>
                  </div>
                </div>
                <strong>Photos</strong>
                <div className="right-buttons">
                  <div className="btn-group">
                    <button className="btn btn-large btn-default">
                      <span className="icon icon-search" />
                    </button>
                    <button className="btn btn-large btn-default">
                      <span className="icon icon-cog" />
                    </button>
                    <button className="btn btn-large btn-default">
                      <span className="icon icon-resize-full" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </h1>
        </header>
        <div className="window-content" style={{ overflow: 'hidden' }}>
          <div className="pane-group">
          {/*Sidebar*/}
            <div className="pane-sm sidebar" style={{ maxWidth: '100%', width: 275 }}>
              <nav className="nav-group">
                <h2 className="nav-group-title">
                  <span className="icon icon-down-dir" />
                  <strong>Libraries</strong>
                </h2>
                <a className="nav-group-item active">
                  <span className="icon icon-picture" />
                  Photos
                </a>
                <span className="nav-group-item">
                  <span className="icon icon-camera" />
                  Raw Photos
                </span>
                <span className="nav-group-item">
                  <span className="icon icon-back" />
                  Last Import
                </span>
                <span className="nav-group-item">
                  <span className="icon icon-trash" />
                  Trash
                </span>
              </nav>
              <nav className="nav-group">
                <h2 className="nav-group-title">
                  <span className="icon icon-down-dir" />
                  <strong>Events</strong>
                </h2>
                <span className="nav-group-item">
                  <span className="icon icon-down-dir" />
                  <span className="icon icon-folder" />
                  2014
                </span>
                <span className="nav-group-item">
                  <span className="icon" />
                  <span className="icon icon-down-dir" />
                  <span className="icon icon-folder" />
                  May
                </span>
                <span className="nav-group-item">
                  <span className="icon" />
                  <span className="icon" />
                  <span className="icon" />
                  <span className="icon icon-calendar" />
                  Sat, May 17, 2017
                </span>
                <span className="nav-group-item">
                  <span className="icon icon-down-dir" />
                  <span className="icon icon-folder" />
                  2013
                </span>
                <span className="nav-group-item">
                  <span className="icon icon-down-dir" />
                  <span className="icon icon-folder" />
                  2012
                </span>
                <span className="nav-group-item">
                  <span className="icon icon-down-dir" />
                  <span className="icon icon-folder" />
                  2011
                </span>
                <span className="nav-group-item">
                  <span className="icon" />
                  <span className="icon" />
                  <span className="icon icon-calendar">
                  </span>
                  No Events
                </span>
              </nav>
            </div>
            {/*Fig BG and Footer*/}
            <div className="pane pane-with-footer" >
            {/*Figures background*/}
              <div className="figures">
                <img className="active-figure" src="https://loremflickr.com/320/240/jrpg/?random=1" />
                <img className="figure" src="https://loremflickr.com/320/240/jrpg/?random=2" />
                <img className="figure" src="https://loremflickr.com/320/240/jrpg/?random=3" />
                <img className="figure" src="https://loremflickr.com/320/240/jrpg/?random=4" />
                <img className="figure" src="https://loremflickr.com/320/240/jrpg/?random=5" />
                <img className="figure" src="https://loremflickr.com/320/240/jrpg/?random=6" />
                <img className="figure" src="https://loremflickr.com/320/240/jrpg/?random=7" />
                <img className="figure" src="https://loremflickr.com/320/240/jrpg/?random=8" />
              </div>
              {/*Footer*/}
              <div className="toolbar toolbar-footer zoyo-footer" style={{bottom: '0'}}>
                <div className="zoyo-header" style={{paddingTop: 20, paddingBottom: 20}}>
                  <div className="left-buttons">
                    <button className="btn btn-large btn-default">
                      <span className="icon icon-play" />
                    </button>
                    <button className="btn  btn-large btn-default">
                      <span className="icon icon-cw" />
                    </button>
                    <button className="btn btn-large btn-default">
                      <span className="icon icon-code" />
                    </button>
                    <button className="btn btn-large btn-default">
                      <span className="icon icon-brush" />
                    </button>
                    <button className="btn btn-large btn-default">
                      <span className="icon icon-cloud" />
                    </button>
                  </div>
                  <div className="low-right-buttons">
                    <button className="btn btn-large btn-default">
                      <span className="icon icon-login" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
  )
}

export default Site