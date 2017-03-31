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
		name: React.PropTypes.string.isRequired,
		middleName: React.PropTypes.string,
		lastName: React.PropTypes.string.isRequired,
		address: React.PropTypes.string
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

	// --------------------------------------------- Statefulness with event handling and lifecycle methods to add conditions on redenering of compotnents
	var TextAreaCounter = React.createClass({

		propTypes: {
			defaultValue: React.PropTypes.string
		},

		getDefaultProps: function() {
			return {
				text: ''
			};
		},

		getInitialState: function() {
			return {
				text: this.props.defaultValue
			};
		},

		_textChange: function(ev) {
			this.setState({
				text: ev.target.value
			});
		},

		_log: function(methodName, args) {
			console.log('componentDidUpdate', arguments)
		},

		// this method is called after the render function and is passed the old prop and state value
		// it is being used to make sure the input is never more than 5 characters, if it is, the component reverts to the old values
		// ***** replaceState unlike setState overwrites the does not merge the properties but overwrites everything *****

		componentDidUpdate: function(oldProps, oldState) {  
			if(this.state.text.length > 5) {
				this.replaceState(oldState);
			}
		},

		render: function() {
			return React.DOM.div(null,
				React.DOM.textarea({
				value: this.state.text,
				onChange: this._textChange,
				}),
				React.DOM.h3(null,this.state.text.length)
				);
		}
	});

	ReactDOM.render(
			React.createElement(TextAreaCounter, {
			defaultValue: "Anant"
		}),
		document.getElementById("app")
	);


	// --------------------------------------------------- Log function

	_log: function(methodName, args) {
		console.log(methodName, args);
	}

	// ------------------------------------------------------ Mixins

	var logMixin = {
	_log: function(methodName, args) {
          console.log(this.name + '::' + methodName, args);
        },

	componentWillUpdate: function() {this._log('componentWillUpdate',  arguments);},
	componentDidUpdate: function() {this._log('componentDidUpdate', arguments);},
};

var TextAreaCounter = React.createClass({

	name: 'TextAreaCounter',

	mixins: [logMixin],

	propTypes: {
		defaultValue: React.PropTypes.string
	},

	getInitialState: function() {
		return {
			text: this.props.defaultValue
		};
	},

	_textChange: function(ev) {
		this.setState({
			text: ev.target.value
		});
	},

	componentDidUpdate: function(oldProps, oldState) { 
		if(this.state.text.length > 5) {
			this.replaceState(oldState);
			console.log('testing');
		}
	},

	render: function() {
		return React.DOM.div(null,
			React.DOM.textarea({
			value: this.state.text,
			onChange: this._textChange,
			}),
			React.DOM.h3(null,this.state.text.length)
			);
	}
});

ReactDOM.render(
		React.createElement(TextAreaCounter, {
		defaultValue: "Anant",
	}),
	document.getElementById("app")
);