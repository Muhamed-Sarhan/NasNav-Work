import React from 'react';
import { Link } from 'react-router-dom';
import Cash from '../Icons/Cash';
import FaceBook from '../Icons/Facebook';
import Instgram from '../Icons/Instgram';
import LinkedIn from '../Icons/LinkedIn';
import MasterCard from '../Icons/MasterCard';
import NasNavFooter from '../Icons/Nasnav-footer';
import Send from '../Icons/Send';
import Tweeter from '../Icons/Twitter';
import Visa from '../Icons/Visa';
import YeshteryFooter from '../Icons/YeshteryFooter';

function Footer() {
  return (
    <div className='main-footer'>
      <div className='footer-Container'>
        {/* Column1 */}

        <div className='containerFooter'>
          <div className='about'>
            <div className='list-unstyled'>
            <div className='footerLogeY'>
              <Link to='/about'>
              <YeshteryFooter />
              </Link>
              </div>
              <p>
                Lerom Law Firm was founded in Toronto on the confidence that the
                best way to serve you is to be on the same wavelength with your
                goals, in accord with your moment in life or business, and
                resourceful for your prosperity. Guided by the big goals of
                diversity, inclusion, and the economic prosperity of Canada, we
                achieve the best results for our great clients looking for new
                opportunities in one of the best countries in the world.
              </p>
            </div>
          </div>

          {/* Column2 */}
          <div className='social'>
            <h4 className='inputCaption'>subscribe to our newsletter</h4>
            <div className='buttonInInput'>
              <input placeholder='enter mail' />
              <button>
                Subscribe
                <Send />
              </button>
            </div>
            <div className='footermenu'>
              <div className='sections'>
                <Link to='/about' className='yLinks'>
                  About Us
                </Link>
                <Link to='/about' className='yLinks'>
                  Contact Us
                </Link>
                <Link to='/about' className='yLinks'>
                  Track Order
                </Link>
                <Link to='/about' className='yLinks'>
                  Terms & Conditions
                </Link>
                <Link to='/about' className='yLinks'>
                  Privecy Policy
                </Link>
                <Link to='/about' className='yLinks'>
                  Sell With Us
                </Link>
                <Link to='/about' className='yLinks'>
                  Shipping And Returns
                </Link>
              </div>

              <div className='media'>
              <Link to='/about'>
                <div className='ySocial'>
                  <FaceBook />
                  <p>/YESHTERY</p>
                </div>
                </Link>
                <Link to='/about'>
                <div className='ySocial'>
                  <Instgram />
                  <p>/YESHTERY</p>
                </div>
                </Link>
                <Link to='/about'>
                <div className='ySocial'>
                  <LinkedIn />
                  <p>/YESHTERY</p>
                </div>
                </Link>
                <Link to='/about'>
                <div className='ySocial'>
                  <Tweeter />
                  <p>/YESHTERY</p>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/********part Two**********/}
        <hr className='hrStyle' />
        <div className='secondDiv'>
          <div className='copyRights'>
            <p className='col-sm'>
              &copy;{new Date().getFullYear()} | yeshtery, all rights reserved.
            </p>
          </div>

          <div className='payment'>
            <Cash />
            <Visa />
            <MasterCard />
          </div>

          <div className='nasnav'>
            Powered By<Link to='/about'><NasNavFooter /></Link> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
