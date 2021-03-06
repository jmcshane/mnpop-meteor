Navigation = React.createClass({
	render() {
		return (
		    <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
		        <div className="container topnav">
		            <div className="navbar-header">
		                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		                    <span className="sr-only">Toggle navigation</span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                </button>
		                <a className="navbar-brand topnav" href="#">People of Praise</a>
		            </div>
		            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		                <ul className="nav navbar-nav navbar-right">
		                    <li>
		                        <a href="#about">About</a>
		                    </li>
		                    <li>
		                        <a href="#services">Services</a>
		                    </li>
	                    	<UseraccountsNav />
		                </ul>
		            </div>
		        </div>
		    </nav>
		);
	}
})