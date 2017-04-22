import React from 'react';

class MainContent extends React.Component{
	render() {
		return <main className="mdl-layout__content" id="TrailMainId">
				  	<div className="mdl-grid" id="pageContent">
						{this.props.children}
					   <div className="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-cell--4-offset-desktop mdl-cell--1-offset-tablet">
					   		<div>
								<button className="mdl-button mdl-js-button mdl-button--raised mdl-button-custom" id="todayButton">
								  <span>Today&nbsp<span className="mdl-badge" data-badge="1"></span></span>
								</button>
								<button className="mdl-button mdl-js-button mdl-button--raised mdl-button-custom" disabled id="tomorrowButton">
								  <span>Tomorrow&nbsp<span className="mdl-badge" data-badge="0"></span></span>
								</button>
								<button className="mdl-button mdl-js-button mdl-button--raised mdl-button-custom" disabled id="weekButton">
								  <span>Week&nbsp<span className="mdl-badge" data-badge="0"></span></span>
								</button>
							</div>
					  </div>
					  <div className="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-cell--4-offset-desktop mdl-cell--1-offset-tablet" id="taskList">
						<div className="mdl-card-custom mdl-card mdl-shadow--2dp">
						  <div className="mdl-card__supporting-text">
						    Test User Task Text ..........
						  </div>
						  <div className="mdl-card__actions mdl-card--border">
						    <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored button-icons" id="doneButton">
							  <i className="material-icons">done</i>
							</button>
						    <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored button-icons" id="deleteButton">
							  <i className="material-icons">delete</i>
							</button>
							<button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored button-icons" id="mailButton">
							  <i className="material-icons">email</i>
							</button>
							<span className="timeStamp">
								Time
							</span>
						  </div>
						  <div className="mdl-card__menu">
						    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
						      <i className="material-icons">share</i>
						    </button>
						  </div>
						</div>
					  </div>
					</div>
				  </main>;
	}
}

export default MainContent