import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mobileImage from '../../assets/mobile.png';
import contentMobileImage from '../../assets/content-mobile.png';
import logoImage from '../../assets/logo.png';
import botsitoImage from '../../assets/botsito.png';
import backgroundImage from '../../assets/background.png';
import messengerImage from '../../assets/messenger.svg';
import facebookImage from '../../assets/facebook.svg';
import maskImage from '../../assets/mask.svg';
import writeImage from '../../assets/write.svg';
import heartImage from '../../assets/heart.svg';
import './Landing.css';

class Landing extends Component {
  static propTypes = {
    goToHomePage: PropTypes.func,
  };

  render() {
    const {
      goToHomePage,
    } = this.props;

    return (
      <div className="Landing">
        <div className="LandingSection IsHeader">
          <div className="LandingHeader">
            <a href="#">
              <div className="LandingLogoWrapper">
                <img src={logoImage} alt="Logo SF" className="LandingLogo"/>
              </div>
            </a>
            <div className="LandingHeaderLinks">
              <a onClick={goToHomePage} className="LandingHeaderLink">
                <div>DEMO</div>
              </a>
              {/*<a href="#" className="LandingHeaderLink">
                <div>DEVS</div>
              </a>*/}
              <a href="#" className="LandingHeaderLink">
                <div className="LandingHeaderLinkButton">NUESTRO BOT</div>
              </a>
            </div>
          </div>
        </div>
        <div className="LandingSection IsBlue">
          <div className="LandingContent">
            <div className="LandingMobileWrapper">
              <img src={mobileImage} alt="Mobile" className="LandingMobile"/>
              <img src={contentMobileImage} alt="Contenido Mobile" className="LandingContentMobile"/>
            </div>
            <h1 className="LandingTitle">
              Conoce a Rocky
              <br/>
              tu nuevo amigo
            </h1>
            <div className="LandingBotImageWrapper">
              <img src={botsitoImage} alt="Rocky" className="LandingBotImage"/>
            </div>
          </div>
          <img src={backgroundImage} alt="" className="LandingBackground"/>
        </div>
        <div className="LandingSection IsWhite">
          <div className="LandingContent">
            <h2 className="LandingSubtitle">
              Búscanos en Facebook y Messenger como:
              <br/><br/>
              <div className="LandingText">Secret Friend Bot</div>
              <div className="LandingIcons">
                <div className="LandingIconWrapper">
                  <img src={facebookImage} alt="facebook" className="LandingIcon"/>
                </div>
                <div className="LandingIconWrapper">
                  <img src={messengerImage} alt="messenger" className="LandingIcon"/>
                </div>
              </div>
            </h2>
          </div>
        </div>
        <div className="LandingSection IsGray">
          <div className="LandingContent IsFeatures">
            <div className="LandingFeatures">
              <div className="LandingFeature">
                <div className="LandingFeatureImage">
                  <img src={writeImage} alt="Escribenos" className="LandingIcon"/>
                </div>
                <div className="LandingFeatureTitle">
                  Escríbenos
                </div>
              </div>
              <div className="LandingFeature">
                <div className="LandingFeatureImage">
                  <img src={maskImage} alt="Anonimo" className="LandingIcon"/>
                </div>
                <div className="LandingFeatureTitle">
                  Es anónimo
                </div>
              </div>
              <div className="LandingFeature">
                <div className="LandingFeatureImage">
                  <img src={heartImage} alt="Queremos Ayudar" className="LandingIcon"/>
                </div>
                <div className="LandingFeatureTitle">
                  Queremos ayudarte
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="LandingSection IsRed">
          <div className="LandingContent">
            <p className="LandingContactTitle">
              ¿Quieres apoyarnos con la idea?
              <br/>
              Déjanos tu contacto
            </p>
            <div className="LandingForm">
              <div className="LandingInputGroup">
                <label htmlFor="name" className="LandingLabel">Nombre</label>
                <input type="text" className="LandingInput"/>
              </div>
              <div className="LandingInputGroup">
                <label htmlFor="dni" className="LandingLabel">DNI</label>
                <input type="text" className="LandingInput"/>
              </div>
              <div className="LandingInputGroup">
                <label htmlFor="email" className="LandingLabel">Correo</label>
                <input type="text" className="LandingInput"/>
              </div>
              <div className="LandingInputGroup">
                <label htmlFor="reason" className="LandingLabel">Cuéntanos, ¿Por qué te interesó la idea?</label>
                <input type="text" className="LandingInput"/>
              </div>
              <div className="LandingFormButton">ENVIAR</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
