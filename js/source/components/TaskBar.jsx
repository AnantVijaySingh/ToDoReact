import React from 'react';

class TaskBar extends React.Component {
	render() {
		return 	<div className="mdl-cell mdl-cell--7-col mdl-cell--7-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-cell--1-offset-desktop mdl-cell--1-offset-tablet" id="taskBar">
				  	{this.props.children}
				</div>;
	}
}

export default TaskBar