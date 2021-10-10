export default () => {
    return (
        <section id="hero" className="d-flex align-items-center">
    <div className="container-fluid" data-aos="fade-up">
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" id="heroHome" >
          <h1>Projeto Pindorama</h1>
          <h2>Somos <u><strong>o</strong></u> projeto brasileiro</h2>
          <div><a href="#hotlinks" className="btn-get-started scrollto">Hotlinks</a></div>
        </div>
        <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" id="carouselResponsive">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100 imageRadius"
                  src="https://s2.glbimg.com/0XrVWnG3cM701KAvxsupC5wgOTY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/6/k/Mc8FdjTAaGxaRXLTspeQ/3756139071-7503cdbe19-o.jpg"
                  alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 imageRadius"
                  src="https://s2.glbimg.com/0XrVWnG3cM701KAvxsupC5wgOTY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/6/k/Mc8FdjTAaGxaRXLTspeQ/3756139071-7503cdbe19-o.jpg"
                  alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 imageRadius"
                  src="https://s2.glbimg.com/0XrVWnG3cM701KAvxsupC5wgOTY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/6/k/Mc8FdjTAaGxaRXLTspeQ/3756139071-7503cdbe19-o.jpg"
                  alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}
