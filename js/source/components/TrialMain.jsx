import React from 'react';

class TrialMain extends React.Component{
	render() {
		return 	<div className="mdl-layout mdl-js-layout  mdl-layout--fixed-header">
				  <header className="mdl-layout__header mdl-layout__header--transparent">
				    <div className="mdl-layout__header-row">
				      <span className="mdl-layout-title">Tasks To Do</span>
				      <div className="mdl-layout-spacer"></div>
				      <nav className="mdl-navigation">
						<form action="#">
						  <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
						    <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample6">
						      <i className="material-icons">search</i>
						    </label>
						      <label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
						  </div>
						</form>
				      </nav>
				    </div>
				  </header>
				  <main className="mdl-layout__content" id="TrailMainId">
				  	<div className="mdl-grid">
					  <div className="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-cell--4-offset-desktop mdl-cell--1-offset-tablet">
					  		  	Simple Textfield
						   <label className="mdl-textfield__label" htmlFor="sample1">Task...</label>
					   </div>
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
				  </main>
				</div>;
	}
}

export default TrialMain