App = React.createClass({
	render() {
		return (
			<div>
				<Navigation />
			    <div className="banner">

			        <div className="container">

			            <div className="row">
			            	<div className="col-lg-4 col-lg-offset-2">
			            		<h2>Passage of the Day</h2>
			            	</div>
			                <div className="col-lg-6">
			                    <h2>Pslam 23:1 The Lord is my shepherd, I shall not want.
			                    </h2>
			                </div>
			            </div>

			        </div>

			    </div>
			    <div className="intro-header">
			        <div className="container">

			            <div className="row">
			                <div className="col-lg-12">
			                    <div className="intro-message">
			                        <h1>People of Praise</h1>
			                        <h3>Welcome to the Servant Branch Website</h3>
			                    </div>
			                </div>
			            </div>

			        </div>

			    </div>
			    <div className="content-section-a">

			        <div className="container">
			            <div className="row">
			                <div className="col-lg-5 col-sm-6">
			                    <hr className="section-heading-spacer" />
			                    <div className="clearfix"></div>
			                    <h2 className="section-heading">First Callout:<br />Top News Item</h2>
			                    <p className="lead">Here's some short blurb about why it is interesting.</p>
			                </div>
			                <div className="col-lg-5 col-lg-offset-2 col-sm-6">
			                    <img className="img-responsive" src={'img/DeathtoStock_Wired5.jpg'} alt=""/>
			                </div>
			            </div>

			        </div>

			    </div>

			    <div className="content-section-b">

			        <div className="container">

			            <div className="row">
			                <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
			                    <hr className="section-heading-spacer" />
			                    <div className="clearfix"></div>
			                    <h2 className="section-heading">Second Callout:<br />Second Main News Item</h2>
			                    <p className="lead">Here's another great blurb about the importance of the news item!</p>
			                </div>
			                <div className="col-lg-5 col-sm-pull-6  col-sm-6">
			                    <img className="img-responsive" src={'img/DeathtoStock_Wired3.jpg'} alt=""/>
			                </div>
			            </div>

			        </div>

			    </div>
			    <Footer />				
			</div>
		)
	}
});