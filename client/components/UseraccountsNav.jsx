UseraccountsNav = React.createClass({

	componentDidMount() {
		this.view = Blaze.render(Template.navButton,
			ReactDOM.findDOMNode(this.refs.container));
	},
	componentWillUnmount() {
		Blaze.remove(this.view);
	},
	render() {
		return <li ref="container"></li>;
	}
});

Template.navButton.helpers(AccountsTemplates.atNavButtonHelpers);

Template.navButton.events(AccountsTemplates.atNavButtonEvents);
