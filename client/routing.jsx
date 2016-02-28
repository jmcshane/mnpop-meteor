FlowRouter.route('/', {
	action: function() {
		ReactLayout.render(Layout, {
			content: <App />
		});
	}
});


AccountsTemplates.configure({
  defaultLayoutType: 'blaze-to-react',
  defaultTemplate: 'fullPageAtForm',  // default
  defaultLayout: Layout,
  defaultLayoutRegions: {},
  defaultContentRegion: 'content'
});

AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('enrollAccount');
