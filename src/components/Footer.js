import React from "react";
import './styles/Footer.css';

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer id="footer" className="footer">
            <div className="container container-fluid">
                <div className="row footer__links">
                    <div className="col footer__col">
                        <div className="footer__title">Quick Links</div>
                        <ul className="footer__items clean-list">
                        <li className="footer__item">
                            <a href="https://animalhealthmetrics.org/" target="_blank" rel="noopener noreferrer" className="footer__link-item">
                                GBADs Main Site
                                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_nPIU">
                                    <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="https://gbadske.org/" target="_blank" rel="noopener noreferrer" className="footer__link-item">
                                Documentation Site
                                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_nPIU">
                                    <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="https://gbadske.org/ourapi/" target="_blank" rel="noopener noreferrer" className="footer__link-item">
                                Knowledge Engine and Data Portal
                                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_nPIU">
                                    <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                                </svg>
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="col footer__col">
                        <div className="footer__title">Community</div>
                        <ul className="footer__items clean-list">
                        <li className="footer__item">
                            <a href="https://gbads-oie.com/" target="_blank" rel="noopener noreferrer" className="footer__link-item">
                                GBADs-OIE
                                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_nPIU">
                                    <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                                </svg>
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="col footer__col">
                        <div className="footer__title">More</div>
                        <ul className="footer__items clean-list">
                        <li className="footer__item"><a className="footer__link-item" href="/blog">Blog</a></li>
                        <li className="footer__item">
                            <a href="https://github.com/GBADsInformatics" target="_blank" rel="noopener noreferrer" className="footer__link-item">
                                GitHub
                                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_nPIU">
                                    <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                                </svg>
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom text--center">
                    <div className="footer__copyright">Copyright © {currentYear} GBADs</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;