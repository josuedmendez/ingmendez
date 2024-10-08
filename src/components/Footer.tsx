export const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Ing. Mendez</span>
              </a>
              <div className="footer-contact pt-3">
                <p>Ulloa</p>
                <p>Heredia</p>
                <p className="mt-3">
                  <strong>Tel&eacute;fono:</strong> <span>pendiente</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>lola.lku2o@passmail.net</span>
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright text-center">
        <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
          <div className="d-flex flex-column align-items-center align-items-lg-start">
            <div>
              © Copyright{" "}
              <strong>
                <span>Ing. Mendez</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              {/* <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/herobiz-bootstrap-business-template/ --> */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>

          <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
            <a href="https://mastodon.social/@josdmen" target="_blank">
              <i className="bi bi-mastodon"></i>
            </a>
            <a rel="me" href="https://mastodon.social/@josdmen">
              Mastodon
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
