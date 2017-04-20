import React from 'react';

class TitleHeader extends React.Component {
	render() {
		return <header id="appHeader">
				<div className="mdl-layout__header-row-custom">
				  <span className="mdl-layout-title"><b>FACTUM</b></span>
				</div>
				</header>;

		{/*<header className="mdl-layout__header mdl-layout__header--transparent" id="appHeader">
				    <div className="mdl-layout__header-row">
				      <span className="mdl-layout-title"><b>FACTUM</b></span>
				    </div>
				  </header>;*/}
	}
}

export default TitleHeader