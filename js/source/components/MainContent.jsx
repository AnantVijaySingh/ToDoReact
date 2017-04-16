import React from 'react';

class MainContent extends React.Component{
	render() {
		return <main className="mdl-layout__content">
			    <div className="mdl-grid" id="pageContent">
				    {this.props.children}
			    </div>
			  </main>;
	}
}

export default MainContent