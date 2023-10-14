import React from "react";
import './styles/Footer.css';

function Footer(){
    return(
        <footer class="footer">
            <div class="container container-fluid">
                <div class="row footer__links">
                    <div class="col footer__col">
                        <div class="footer__title">Quick Links</div>
                        <ul class="footer__items clean-list">
                        <li class="footer__item">
                            <a href="https://animalhealthmetrics.org/" target="_blank" rel="noopener noreferrer" class="footer__link-item">
                                GBADs Main Site
                                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU">
                                    <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                                </svg>
                            </a>
                        </li>
                        <li class="footer__item">
                            <a href="https://gbadske.org/" target="_blank" rel="noopener noreferrer" class="footer__link-item">
                                Documentation Site
                                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU">
                                    <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                                </svg>
                            </a>
                        </li>
                        <li class="footer__item">
                            <a href="https://gbadske.org/ourapi/" target="_blank" rel="noopener noreferrer" class="footer__link-item">
                                Knowledge Engine and Data Portal
                                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU">
                                    <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                                </svg>
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div class="col footer__col">
                        <div class="footer__title">Community</div>
                        <ul class="footer__items clean-list">
                        <li class="footer__item">
                            <a href="https://gbads-oie.com/" target="_blank" rel="noopener noreferrer" class="footer__link-item">
                                GBADs-OIE
                                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU">
                                    <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                                </svg>
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div class="col footer__col">
                        <div class="footer__title">More</div>
                        <ul class="footer__items clean-list">
                        <li class="footer__item"><a class="footer__link-item" href="/blog">Blog</a></li>
                        <li class="footer__item">
                            <a href="https://github.com/GBADsInformatics" target="_blank" rel="noopener noreferrer" class="footer__link-item">
                                GitHub
                                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU">
                                    <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                                </svg>
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__bottom text--center">
                    <div class="footer__copyright">Copyright © 2023 GBADs.</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;