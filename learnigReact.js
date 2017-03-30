	var MyComponent = React.createClass({
		render: function() {
		return React.DOM.span(null, "Test Custom Component");
		}		
	});

	ReactDOM.render(
		React.createElement(MyComponent),
		document.getElementById("app")
	);

	ReactDOM.render(
		React.DOM.h1(null,"Hello React!"),
		document.getElementById("app")
  		);


	// ----------------------------------------------
		var MyComponent = React.createClass({
		render: function() {
		return React.DOM.span(null, "Test Custom Component");
		}		
	});

	var ComponentFactory = React.createFactory(MyComponent);

	ReactDOM.render(
		ComponentFactory(),
		document.getElementById("app")
	);


	// ----------------------------------------------- Defining props and propTypes

	var Component = React.createClass({
		propTypes: {
			name: React.PropTypes.string.isRequired
		},
			render: function() {
				return React.DOM.span(null, "My name is " + this.props.name);
			}
		});

	ReactDOM.render(
		React.createElement(Component, {
			name: "Anant",
		}),
		document.getElementById("app")
	);

	// --------------------------------------------- Default prop values

		var Component = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired
	},
	getDefaultProps: function() {
		return {
		middleName: '',
		address: 'n/a'
		}
	},
		render: function() {
			return React.DOM.span(null, "My first name is " + this.props.name + " middle name is " + this.props.middleName + " my last name is " + this.props.lastName + " and my address is " + this.props.address);
		}
	});

	ReactDOM.render(
		React.createElement(Component, {
			name: "Anant",
			lastName: "Singh",
		}),
		document.getElementById("app")
	);