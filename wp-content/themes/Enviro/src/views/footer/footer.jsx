import React from 'react';
import FooterSocial from './footer-social';
import FooterForm from './footer-form';
import FooterEmail from './footer-email';

const Footer = () => (
  <footer>
    <section className="footerHolder">
      <FooterSocial/>
      <FooterForm/>
      <FooterEmail/>
    </section>
    <div>© 2017 WSC LLC, All Rights Reserved. Site by <a href="http://cobblehilldigital.com" target="_blank">Cobble Hill</a></div>
  </footer>

);

export default Footer;
