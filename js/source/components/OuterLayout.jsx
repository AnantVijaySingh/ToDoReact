import React from 'react';

class OuterLayout extends React.Component {
  render() {
  	{/* Always shows a header, even in smaller screens */}
    return <div className="mdl-layout mdl-js-layout  mdl-layout--fixed-header" id='allLayout'>
    				{this.props.children}
				</div>;
  }
}

export default OuterLayout