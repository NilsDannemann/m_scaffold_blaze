// App Page
FlowRouter.route('/', {
    name: 'app',
    action() {
        BlazeLayout.render("LayoutApp", {
        	page: "PageApp"
        });
    }
});

// Account Page
FlowRouter.route('/account', {
    name: 'account',
    action() {
        BlazeLayout.render("LayoutAccount", {
        	page: "PageAccount"
        });
    }
});
