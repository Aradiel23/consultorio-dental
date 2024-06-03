import React from 'react';
import { Button } from '@material-ui/core';
import whatsappIcon from '../../assets/whatsapp-icon.png';
import tiktokIcon from '../../assets/tiktok-icon.png';
import facebookIcon from '../../assets/facebook-icon.png';
import instagramIcon from '../../assets/instagram-icon.png';
import twitterIcon from '../../assets/twitter-icon.png';
import youtubeIcon from '../../assets/youtube-icon.png';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <Button component="a" href="#" style={{ textDecoration: 'none' }}>
          <img src={whatsappIcon} alt="WhatsApp" />
        </Button>
        <Button component="a" href="#" style={{ textDecoration: 'none' }}>
          <img src={tiktokIcon} alt="TikTok" />
        </Button>
        <Button component="a" href="#" style={{ textDecoration: 'none' }}>
          <img src={facebookIcon} alt="Facebook" />
        </Button>
        <Button component="a" href="#" style={{ textDecoration: 'none' }}>
          <img src={instagramIcon} alt="Instagram" />
        </Button>
        <Button component="a" href="#" style={{ textDecoration: 'none' }}>
          <img src={twitterIcon} alt="Twitter" />
        </Button>
        <Button component="a" href="#" style={{ textDecoration: 'none' }}>
          <img src={youtubeIcon} alt="YouTube" />
        </Button>
      </div>
      <p>Política de privacidad</p>
    </footer>
  );
};

export default Footer;
