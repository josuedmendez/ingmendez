import hero from "../assets/img/hero-img.jpg";
import Unidad1 from "../assets/img/10-Unidad-1.jpg";
export const Main = () => {

  return (
    <main className="main">
      {/* <!-- Inicio Section --> */}
      <section id="inicio" className="hero section">
        <div
          className="container d-flex flex-column justify-content-center align-items-center text-center position-relative"
          data-aos="zoom-out"
        >
          <img src={hero} className="img-fluid animated" alt="" />
          <h1>
            Bienvenido a <span>Ing. Mendez</span>
          </h1>
          <p>
            Nos dedicamos a promover la creación y distribución de material
            didáctico de calidad, beneficiando a estudiantes y docentes del MEP.
          </p>
          <div className="d-flex">
            {/* <!-- <a href="#about" className="btn-get-started scrollto">Get Started</a>
<a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
  className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch
    Video</span></a> --> */}
          </div>
        </div>
      </section>
      {/* <!-- /Inicio Section --> */}

      {/* <!-- Services Section --> */}
      <section id="decimo" className="services section">
        {/* <!-- Section Title --> */}
        <div
          className="container section-title"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2>Décimo</h2>
          <p>Programación</p>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5">
            {/* <!-- Herramientas lógicas -->
<!-- Remover el offset xl y md al agregar nuevos elementos --> */}
            <div className="col-xl-4 col-md-6 offset-xl-4 offset-md-3">
              <div className="service-item">
                <div className="img">
                  <img src={Unidad1} className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-activity"></i>
                  </div>
                  <a
                    // "../assets/img/10-Unidad-1.jpg"
                    href="/materiales"
                    className="stretched-link"
                  >
                    <h3>Herramientas lógicas.</h3>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- /Herramientas lógicas --> */}

            {/* <!-- <div className="col-xl-4 col-md-6">
  <div className="service-item">
    <div className="img">
      <img src="assets/img/10-Unidad-2.jpg" className="img-fluid" alt="">
    </div>
    <div className="details position-relative">
      <div className="icon">
        <i className="bi bi-broadcast"></i>
      </div>
      <a href="" className="stretched-link">
        <h3>Algoritmos y diagramas de flujo.</h3>
      </a>
    </div>
  </div>
</div> --> */}
            {/* <!-- End Service Item --> */}

            {/* <!-- <div className="col-xl-4 col-md-6">
  <div className="service-item">
    <div className="img">
      <img src="assets/img/10-Unidad-3.jpg" className="img-fluid" alt="">
    </div>
    <div className="details position-relative">
      <div className="icon">
        <i className="bi bi-easel"></i>
      </div>
      <a href="" className="stretched-link">
        <h3>Robótica.</h3>
      </a>
    </div>
  </div>
</div> --> */}
            {/* <!-- End Service Item --> */}

            {/* <!-- <div className="col-xl-4 col-md-6">
  <div className="service-item">
    <div className="img">
      <img src="assets/img/10-Unidad-4.jpg" className="img-fluid" alt="">
    </div>
    <div className="details position-relative">
      <div className="icon">
        <i className="bi bi-bounding-box-circles"></i>
      </div>
      <a href="" className="stretched-link">
        <h3>Programación.</h3>
      </a>
      <a href="" className="stretched-link"></a>
    </div>
  </div>
</div> --> */}
            {/* <!-- End Service Item --> */}
          </div>
        </div>
      </section>
      {/* <!-- /Services Section --> */}
    </main>
  );
};
