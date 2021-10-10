import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from '../components/Head'

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Open Sans", sans-serif;
  color: #444444;
}

a {
  color: #5846f9;
}

a:hover {
  color: #8577fb;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Poppins", sans-serif;
}

.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid white !important;
    border-radius: .25rem;
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  transition: all 0.5s;
  z-index: 997;
  padding: 20px 0;
  padding-bottom: 0;
  background-color: #0d1c3b;
}

#header.header-scrolled, #header.header-inner-pages {
  background: #0d1c3b;
  padding: 12px 0;
}

#header .logo {
  font-size: 32px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
}

#header .logo a {
  color: #fff;
}

#header .logo img {
  max-height: 70px;
}

@media (max-width: 992px) {
  #header {
    padding: 12px 0;
  }
  #header .logo {
    font-size: 28px;
  }
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Desktop Navigation */
.nav-menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu > ul {
  display: flex;
}

.nav-menu > ul > li {
  position: relative;
  white-space: nowrap;
  padding: 10px 0 10px 5px;
}

.nav-menu a {
  display: block;
  position: relative;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.3s;
  font-size: 15px;
  font-weight: 600;
  padding: 0 3px;
  font-family: "Open Sans", sans-serif;
}

.nav-menu > ul > li > a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #fff;
  visibility: hidden;
  width: 0px;
  transition: all 0.3s ease-in-out 0s;
}

.nav-menu a:hover:before, .nav-menu li:hover > a:before, .nav-menu .active > a:before {
  visibility: visible;
  width: 100%;
}

.nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {
  color: #fff;
}

.nav-menu .drop-down ul {
  display: block;
  position: absolute;
  left: 22px;
  top: calc(100% + 30px);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  padding: 10px 0;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
}

.nav-menu .drop-down:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.nav-menu .drop-down li {
  min-width: 180px;
  position: relative;
}

.nav-menu .drop-down ul a {
  padding: 10px 20px;
  font-size: 14px;
  text-transform: none;
  color: #2c4964;
}

.nav-menu .drop-down ul a:hover, .nav-menu .drop-down ul .active > a, .nav-menu .drop-down ul li:hover > a {
  color: darkblue;
}

.nav-menu .drop-down > a:after {
  content: "\ea99";
  font-family: IcoFont;
  padding-left: 5px;
}

.nav-menu .drop-down .drop-down ul {
  top: 0;
  left: calc(100% - 30px);
}

.nav-menu .drop-down .drop-down:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
}

.nav-menu .drop-down .drop-down > a {
  padding-right: 35px;
}

.nav-menu .drop-down .drop-down > a:after {
  content: "\eaa0";
  font-family: IcoFont;
  position: absolute;
  right: 15px;
}

@media (max-width: 1366px) {
  .nav-menu .drop-down .drop-down ul {
    left: -90%;
  }
  .nav-menu .drop-down .drop-down:hover > ul {
    left: -100%;
  }
  .nav-menu .drop-down .drop-down > a:after {
    content: "\ea9d";
  }
}


@media (max-width: 992px) {
  .get-started-btn {
    margin: 0 48px 0 0;
    padding: 6px 18px;
  }
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
  width: 100%;
  height: 100vh;
  /*background-color: #1c3264;*/
  /*background: linear-gradient(45deg, rgba(26, 6, 138, 0.9) 0%, #1c3264 100%);*/
  background: #0d1c3b
  ;
  background-size: cover;
}

#heroHome {
     background-color: rgba(255, 255, 255, 0.411);
     color: black !important;
     border-radius: 10px;
}

#hero .container, #hero .container-fluid {
  padding-top: 84px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}

#hero h1 {
  margin: 0;
  font-size: 52px;
  font-weight: 700;
  line-height: 64px;
  color: #fff;
}

#hero h2 {
  color: rgba(255, 255, 255, 0.8);
  margin: 10px 0 0 0;
  font-size: 20px;
}

#hero .btn-get-started {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 28px;
  border-radius: 5px;
  transition: 0.5s;
  margin-top: 30px;
  color: #fff;
  border: 2px solid #fff;
}

#hero .btn-get-started:hover {
  background: #fff;
  color: #5846f9;
}

#hero .animated {
  animation: up-down 2s ease-in-out infinite alternate-reverse both;
}

.imageRadius {
  border-radius: 10px;
}

@media (min-width: 1200px) {
  #hero {
    background-attachment: fixed;
  }
}

@media (max-width: 991px) {
  #hero {
    text-align: center;
  }
  #hero .container, #hero .container-fluid {
    padding-top: 68px;
  }
  #hero .animated {
    -webkit-animation: none;
    animation: none;
  }
  #hero .hero-img {
    text-align: center;
  }
  #hero .hero-img img {
    width: 50%;
  }
}

@media (max-width: 768px) {
  #hero h1 {
    font-size: 26px;
    line-height: 36px;
  }
  #hero h2 {
    font-size: 18px;
    line-height: 24px;
  }
  #hero .hero-img img {
    width: 60%;
  }
}

@media (max-width: 575px) {
  #hero .hero-img img {
    width: 80%;
  }
}

@-webkit-keyframes up-down {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}

@keyframes up-down {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 100px 0;
  overflow: hidden;
}

.section-bg {
  background-color: #f9f8ff;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}

.section-title h2::after {
  content: '';
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: #5846f9;
  bottom: 0;
  left: calc(50% - 25px);
}

.section-title p {
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
#about {
  color: #5671AE;
}

.about {
  padding: 120px 0;
}

.aboutTitle {
  color: #191970;
}

.about .content h3 {
  font-weight: 600;
  font-size: 32px;
  color: #2c4964;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  padding-bottom: 10px;
}

.about .content ul i {
  font-size: 20px;
  padding-right: 4px;
  color: #5846f9;
}

.about .content p:last-child {
  margin-bottom: 0;
}

.about .content .read-more {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 50px 10px 28px;
  border-radius: 5px;
  transition: 0.5s;
  color: #fff;
  background: linear-gradient(45deg, #5846f9 0%, #7b27d8 100%);
  position: relative;
}

.about .content .read-more:hover {
  background: linear-gradient(180deg, #5846f9 0%, #7b27d8 100%);
}

.about .content .read-more i {
  font-size: 22px;
  position: absolute;
  right: 20px;
  top: 12px;
}

/*--------------------------------------------------------------
# Services
--------------------------------------------------------------*/
.services .icon-box {
  text-align: center;
  padding: 70px 20px 80px 20px;
  transition: all ease-in-out 0.3s;
  background: #fff;
}

.services .icon-box .icon {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 0.3s;
  position: relative;
}

.services .icon-box .icon i {
  font-size: 36px;
  transition: 0.5s;
  position: relative;
}

.services .icon-box .icon svg {
  position: absolute;
  top: 0;
  left: 0;
}

.services .icon-box .icon svg path {
  transition: 0.5s;
  fill: #f5f5f5;
}

.services .icon-box h4 {
  font-weight: 600;
  margin: 10px 0 15px 0;
  font-size: 22px;
}

.services .icon-box h4 a {
  color: #2c4964;
  transition: ease-in-out 0.3s;
}

.services .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.services .icon-box:hover {
  border-color: #fff;
  box-shadow: 0px 0 25px 0 rgba(0, 0, 0, 0.1);
}

.services .iconbox-blue i {
  color: #47aeff;
}

.services .iconbox-blue:hover .icon i {
  color: #fff;
}

.services .iconbox-blue:hover .icon path {
  fill: #47aeff;
}

.services .iconbox-orange i {
  color: #ffa76e;
}

.services .iconbox-orange:hover .icon i {
  color: #fff;
}

.services .iconbox-orange:hover .icon path {
  fill: #ffa76e;
}

.services .iconbox-pink i {
  color: #e80368;
}

.services .iconbox-pink:hover .icon i {
  color: #fff;
}

.services .iconbox-pink:hover .icon path {
  fill: #e80368;
}

.services .iconbox-yellow i {
  color: #ffbb2c;
}

.services .iconbox-yellow:hover .icon i {
  color: #fff;
}

.services .iconbox-yellow:hover .icon path {
  fill: #ffbb2c;
}

.services .iconbox-red i {
  color: #ff5828;
}

.services .iconbox-red:hover .icon i {
  color: #fff;
}

.services .iconbox-red:hover .icon path {
  fill: #ff5828;
}

.services .iconbox-teal i {
  color: #11dbcf;
}

.services .iconbox-teal:hover .icon i {
  color: #fff;
}

.services .iconbox-teal:hover .icon path {
  fill: #11dbcf;
}

/*Footer*/

footer {
  background-color: #0d1c3b;
  color: white;
}

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { 
  #carouselResponsive {
    display: none;
  }

  #heroHome {
    padding: 70px;
    margin: 25px;
  }

 }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) { 
  #carouselResponsive {
    display: none;
  }

  #heroHome {
    padding: 70px;
    margin: 25px;
  }
 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) { 
  #carouselResponsive {
    display: none;
  }

  #heroHome {
    padding: 70px;
    margin: 25px;
  }
 }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head/>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
