export const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <a
          href="index.html"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          <h1 className="sitename">
            Ing<span>.</span> Méndez
          </h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#inicio" className="active">
                Inicio
                <br />
              </a>
            </li>
            <li>
              <a href="#decimo">Décimo</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="index.html">
          Inicio
        </a>
      </div>
    </header>
  );
};
