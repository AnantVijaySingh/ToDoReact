import React from 'react';

class SearchBar extends React.Component {
  render() {
  	{/* Always shows a header, even in smaller screens */}
    return <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
			  <header className="mdl-layout__header">
			    <div className="mdl-layout__header-row">
			      {/* Title */}
			      <span className="mdl-layout-title">Title</span>
			      {/* Add spacer, to align navigation to the right */}
			      <div className="mdl-layout-spacer"></div>
			      <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
			        <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
			          <i className="material-icons">search</i>
			        </label>
			        <div className="mdl-textfield__expandable-holder">
			          <input className="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp"></input>
			        </div>
			      </div>
			    </div>
			  </header>
			  <div className="mdl-layout__drawer">
			    <span className="mdl-layout-title">Title</span>
			    <nav className="mdl-navigation">
			      <a className="mdl-navigation__link" href="">Link</a>
			      <a className="mdl-navigation__link" href="">Link</a>
			      <a className="mdl-navigation__link" href="">Link</a>
			      <a className="mdl-navigation__link" href="">Link</a>
			    </nav>
			  </div>
			  <main className="mdl-layout__content">
			    <div className="page-content">
			    Testing
			    {/* Your content goes here */}
			    </div>
			  </main>
			</div>;
  }
}

export default SearchBar