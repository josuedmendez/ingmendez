export const Navbar = () => {
    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container-fluid position-relative d-flex align-items-center justify-content-between">

                <a href="../index.html" className="logo d-flex align-items-center me-auto me-xl-0">
                    {/* <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="../assets/img/logo.png" alt=""> --> */}
                    <h1 className="sitename">Ing<span>.</span> Méndez</h1>
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="../index.html#inicio">Inicio<br /></a></li>
                        <li className="dropdown"><a href="#"><span>Herramientas lógicas</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                            <ul>
                                <li><a href="#">Sistemas numéricos</a></li>
                                <li><a href="#">Lógica proposicional</a></li>
                                <li><a href="#">Álgebra de Boole</a></li>
                            </ul>
                        </li>
                        {/* <li><a href="herramientas-logicas-tema-1.html">Sistemas numéricos</a></li>
                        <li><a href="herramientas-logicas-tema-2.html">Lógica proposicional</a></li>
                        <li><a href="herramientas-logicas-tema-3.html">Álgebra de Boole.</a></li> */}
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                <a className="btn-getstarted" href="../index.html">Inicio</a>

            </div>
        </header>
    )
}
