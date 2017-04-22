import React from 'react';

class TaskBar extends React.Component {
	render() {
		return 	<div className="mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-cell--4-offset-desktop mdl-cell--1-offset-tablet" id="taskBar">
				  	{this.props.children}
				   <label className="mdl-textfield__label" htmlFor="sample1">Task...</label>
				</div>;
	}
}

export default TaskBar