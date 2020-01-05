import React from 'react';

function Footer() {
  return (
    <div>
        <div className="footer-flex-grid site-footer" id="footer-tall">
            <div className="flex-grid">
                <div className="flex-grid-wrapper">
                    <div className="flex-grid-row">
                        <div className="flex-grid-item">
                            <h4>Company</h4>
                            <ul className="nav-list">
                                <li><a href="./">About</a></li>
                                <li><a href="./">Careers</a></li>
                                <li><a href="./">Affiliates</a></li>
                                <li><a href="./">Contact</a></li>
                            </ul>
                        </div>
                        <div className="flex-grid-item">
                            <h4>Community</h4>
                            <ul className="nav-list">
                                <li><a href="./">Become a Partner</a></li>
                                <li><a href="./">Refer a Friend</a></li>
                                <li><a href="./">Scholarships</a></li>
                                <li><a href="./">Programs</a></li>
                            </ul>
                        </div>
                        <div className="flex-grid-item">
                            <h4>Featured Programs</h4>
                            <ul className="nav-list">
                                <li><a href="./">Dropservice Accelerator</a></li>
                                <li><a href="./">Freelancer Mastery</a></li>
                                <li><a href="./">Amazon Seller Machine</a></li>
                                <li><a href="./">Shopify MasterclassName</a></li>
                            </ul>
                        </div>
                        <div className="flex-grid-item">
                            <h4>Mobile (Comming Soon)</h4>
                            <ul className="nav-list">
                                
                            </ul>
                        </div>
                    </div>
                    <div className="base-footer clear">
                        <span className="footer-title footer-section">© Evermentor, Inc. 2020</span>
                        <span className="footer-links">
                            <a className="footer-section" href="./" target="_blank">Help</a>
                            <a className="footer-section" href="./">Privacy</a>
                            <a className="footer-section last" href="./">Terms</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-flex-grid site-footer-mobile">
            <div className="flex-grid">
                <div className="flex-grid-row">
                    <div className="flex-grid-item link-list">
                        <h4>Company</h4>
                        <ul className="nav-list">
                            <li><a href="./">About</a></li>
                            <li><a href="./">Careers</a></li>
                            <li><a href="./">Affiliates</a></li>
                            <li><a href="./">Contact</a></li>
                        </ul>
                    </div>
                    <div className="flex-grid-item link-list">
                        <h4>Community</h4>
                        <ul className="nav-list">
                            <li><a href="./">Become a Partner</a></li>
                            <li><a href="./">Refer a Friend</a></li>
                            <li><a href="./">Scholarships</a></li>
                            <li><a href="./">Programs</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex-grid-row">
                    <div className="flex-grid-item link-list">
                        <h4>Featured Programs</h4>
                        <ul className="nav-list">
                            <li><a href="./">Dropservice Accelerator</a></li>
                            <li><a href="./">Freelancer Mastery</a></li>
                            <li><a href="./">Amazon Seller Machine</a></li>
                            <li><a href="./">Shopify MasterclassName</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex-grid-row">
                    <div className="flex-grid-item download-mobile-apps-row">
                    </div>
                </div>
                <div className="flex-grid-row">
                    <div className="base-footer">
                        <div className="flex-grid-item">
                        </div>
                        <div className="flex-grid-item">
                            <span className="">© Evermentor, Inc. 2020</span>
                        </div>
                        <div className="flex-grid-item">
                            <span className="footer-links">
                                <a className="footer-section" href="./" target="_blank">Help</a>
                                <a className="footer-section" href="./">Privacy</a>
                                <a className="footer-section" href="./">Terms</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;