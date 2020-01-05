import React, {Fragment} from 'react';

import Header from './components/header';
import Footer from './components/footer';

import HomePage from './contents/homepage/home';

function BodyComponent() {
  return (
  	<Fragment>
	  	<div id="site-content">
		  	<Header />
		  	<HomePage />
		  	<Footer />
  		</div>
  	</Fragment>
  );
}

export default BodyComponent;