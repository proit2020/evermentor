import React, {Fragment} from 'react';
import logoMobile from '../assets/imgs/logo-img.png';

function Header() {
  return (
  	<Fragment>
        <div id="site-banner" className="js-site-banner clear">
            <a className="banner-content" href="./">
                New members: join Evermentor free for 3 days!&nbsp;<span className="banner-link">Click here to claim your free trial</span>
            </a>
        </div>
        <div className="site-header transparent js-site-header-container">
            <div className="site-header-logo">
                <a href="./" className="site-header-logo-image gray js-site-header-logo"></a>
            </div>

            <div className="site-header-nav site-header-nav-left">
            </div>

            <div className="site-header-nav site-header-nav-right">
                <div className="nav-items js-nav-items-transparent">
                    <div className="nav-item">
                        <a href="./" className="nav-item-link no-bold nav-item-link-light">Login</a>
                    </div>
                    <div className="nav-item">
                        <a href="./" className="button alt-white-ghost transparent initialized">
                            Get Started Free
                        </a>
                    </div>
                </div>
                <div className="nav-items nav-items-hidden js-nav-items">
                    <div className="nav-item">
                        <a href="./" className="nav-item-link no-bold header-signin-button initialized">Get Started For Free</a>
                    </div>
                </div>
            </div>

        </div>
        <div className="site-header-mobile">

            <div className="header-mobile-left">
                <div className="primary-drawer-button drawer-button">
                    More
                </div>
            </div>

            <div className="header-mobile-middle">
                <a href="./" title="Evermentor" className="logo">
                    <img className="logo-image" src={logoMobile} alt="Evermentor"/>
                </a>
            </div>
            <div className="header-mobile-right">
            </div>

            <div className="primary drawer popover bottom shadow">
                <div className="inner-popover">
                    <div className="content">
                        <div className="nav-menu-list nav-left-mobile-drawer">
                            <div className="nav-menu-link">
                                <a href="./" className=" primary">Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  );
}

export default Header;