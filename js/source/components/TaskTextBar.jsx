import React from 'react';

class TaskTextBar extends React.Component {
	render() {
		return <div className="mdl-card-taskBar mdl-shadow--2dp" id="taskTextBar"> 
					<div>
						<textarea className="mdl-textfield mdl-textfield__input" rows="1" >
							Task . . .
						</textarea>
					</div>
				</div>;
	}
}

export default TaskTextBar