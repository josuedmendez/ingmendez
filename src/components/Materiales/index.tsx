import { useEffect, useState } from "react";
import styles from "./Materiales.module.css";
import data from "../../data/asignaciones.json";

export const Materiales = () => {
  return (
    <main className="main">
      {/* <!-- Page Title --> */}
      <div className="page-title">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Material descargable y asignaciones</h1>

          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="../index.html">Inicio</a>
              </li>
              <li>
                <a href="herramientas-logicas-tema-2.html">
                  Aplicar la lógica proposicional y la lógica de predicados en
                  <br />
                  la determinación de la validez de una proposición dada
                </a>
              </li>
              <li className="current">Material descargable y asignaciones</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- End Page Title --> */}

      {/* <!-- Herramientas lógicas detallado --> */}
      <section id="service-details" className="service-details section">
        <div className="container">
          {/* <!-- Lista de Temas e imagen correspondiente  --> */}
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="services-list">
                <a href="herramientas-logicas-tema-1.html" className="justify">
                  1) Resolver problemas utilizando los diferentes sistemas
                  numéricos.
                </a>
                <a href="herramientas-logicas-tema-2.html" className="justify">
                  2) Aplicar la lógica proposicional y la lógica de predicados
                  en la determinación de la validez de una proposición dada.
                </a>
                <a className="active service-sub-list justify" href="#">
                  Material descargable y asignaciones.
                </a>
                <a href="herramientas-logicas-tema-3.html" className="justify">
                  3) Resolver problemas utilizando el álgebra de Boole.
                </a>
              </div>

              <h4>Descripción</h4>
              <p className="justify">
                Introduce al estudiante en la resolución de problemas
                matemáticos aplicados a la informática, la unidad de algoritmos
                y diagramas de flujo brinda al estudiante las herramientas
                básicas para resolución de problemas; que le permitirá al
                estudiante desarrollar las destrezas en planteamiento y análisis
                de problemas en una forma ordenada.
              </p>
            </div>

            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <img
                src="../assets/img/decimo/herramientas-logicas/2-portada.jpg"
                alt=""
                className="img-fluid services-img"
              />
            </div>
          </div>
          {/* <!-- /Lista de Temas e imagen correspondiente  --> */}
        </div>
      </section>
      {/* <!-- /Herramientas lógicas detallado --> */}

      {/* <!-- Material descargable y asignaciones --> */}
      <section id="features" className="features section">
        <div className="container" data-aos="fade-up">
          <ul className="nav nav-tabs row gy-4 d-flex">
            <TipoMaterial />
          </ul>

          <div className="tab-content">
            <ContenidoTipoMaterial />
          </div>
        </div>
      </section>
      {/* <!-- /Material descargable y asignaciones --> */}
    </main>
  );
};

export const TipoMaterial = () => {
  return (
    <>
      {data.map((TipoMaterial) => (
        <li className="nav-item col-6 col-md-4 col-lg-2" key={TipoMaterial.id}>
          <a
            className={"nav-link show " + TipoMaterial.estado}
            data-bs-toggle="tab"
            data-bs-target={"#features-tab-" + TipoMaterial.id}
          >
            <i
              className={"bi " + TipoMaterial.icono}
              style={{ color: TipoMaterial.color }}
            ></i>
            <h4 style={{ textAlign: "center" }}>{TipoMaterial.nombre}</h4>
          </a>
        </li>
      ))}
    </>
  );
};

export const ContenidoTipoMaterial = () => {
  return (
    <>
      {data.map((TipoMaterial) => (
        <div
          className={"tab-pane fade " + TipoMaterial.estado}
          id={"features-tab-" + TipoMaterial.id}
          key={TipoMaterial.id}
        >
          <div className="row gy-4">
            <div
              className="col-lg-8 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>{TipoMaterial.nombre}</h3>
              <p>{TipoMaterial.descripcion}</p>
              <ul>
                <li>
                  <i className="bi bi-check-circle-fill"></i>{" "}
                  <a
                    href="https://docs.google.com/document/d/1L7aYoQkfPtdN13SHVOrkmM6kLMc8yrRWWg4R5sxA9C8/edit"
                    target="_blank"
                  >
                    {TipoMaterial.nombre}
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-4 order-1 order-lg-2 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="../assets/img/decimo/herramientas-logicas/evidencia-teoria.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

// .teoria-descargable {
//   color: #9b59b6;
// }

// {listaOpciones.map((opcion) => (
//   <li key={opcion.id} style={{ color: opcion.color }}>
//     <strong>{opcion.descripcion}</strong> - Icono: {opcion.icono}
//   </li>
// ))}

// <!-- Teoría descargable -->
// <li class="nav-item col-6 col-md-4 col-lg-2">
//     <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
//         <i class="bi bi-file-earmark-text teoria-descargable"></i>
//         <h4 style="text-align: center;">Teoría descargable</h4>
//     </a>
// </li><!-- /Teoría descargable -->

// <!-- Teoría en línea -->
// <li class="nav-item col-6 col-md-4 col-lg-2">
//     <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
//         <i class="bi bi-eye-fill teoria-en-linea"></i>
//         <h4 style="text-align: center;">Teoría en línea</h4>
//     </a>
// </li><!-- /Teoría en línea -->

// <!-- Asignaciones de conocimiento -->
// <li class="nav-item col-6 col-md-4 col-lg-2">
//     <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
//         <i class="bi bi-book evidencia-conocimiento"></i>
//         <h4 style="text-align: center;">Evidencia de Conocimiento</h4>
//     </a>
// </li><!-- /Asignaciones de conocimiento -->

// <!-- Asignaciones de desempeño -->
// <li class="nav-item col-6 col-md-4 col-lg-2">
//     <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4">
//         <i class="bi bi-graph-up-arrow evidencia-desempenno"></i>
//         <h4>Desempeño</h4>
//     </a>
// </li><!-- /Asignaciones de desempeño -->

// <!-- Asignaciones de producto -->
// <li class="nav-item col-6 col-md-4 col-lg-2">
//     <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-5">
//         <i class="bi bi-rocket-takeoff evidencia-producto"></i>
//         <h4>Producto</h4>
//     </a>
// </li><!-- /Asignaciones de producto -->

// <!-- Tareas -->
// <li class="nav-item col-6 col-md-4 col-lg-2">
//     <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-6">
//         <i class="bi bindex.html

// {/* <!-- Tab de teoría descargable --> */}
// <div className="tab-pane fade active show" id="features-tab-1">
// <div className="row gy-4">
//   <div
//     className="col-lg-8 order-2 order-lg-1"
//     data-aos="fade-up"
//     data-aos-delay="100"
//   >
//     <h3>Teoría descargable</h3>
//     <p>
//       En el siguiente enlace podrá descargar el material teórico
//       en formato editable (docx) o pdf.
//     </p>
//     <ul>
//       <li>
//         <i className="bi bi-check-circle-fill"></i>{" "}
//         <a
//           href="https://docs.google.com/document/d/1L7aYoQkfPtdN13SHVOrkmM6kLMc8yrRWWg4R5sxA9C8/edit"
//           target="_blank"
//         >
//           Teoría descargable
//         </a>
//       </li>
//     </ul>
//   </div>
//   <div
//     className="col-lg-4 order-1 order-lg-2 text-center"
//     data-aos="fade-up"
//     data-aos-delay="200"
//   >
//     <img
//       src="../assets/img/decimo/herramientas-logicas/evidencia-teoria.jpg"
//       alt=""
//       className="img-fluid"
//     />
//   </div>
// </div>
// </div>
// {/* <!-- /Tab de teoría descargable --> */}

// {/* <!-- Tab de asignaciones de conocimiento --> */}
// <div className="tab-pane fade" id="features-tab-2">
// <div className="row gy-4">
//   <div
//     className="col-lg-8 order-2 order-lg-1"
//     data-aos="fade-up"
//     data-aos-delay="100"
//   >
//     <h3>Conocimiento</h3>
//     <p>
//       Se recomiendan las siguientes actividades para obtener una
//       evidencias de conocimientos:
//     </p>
//     <ul>
//       <li>
//         <i className="bi bi-check-circle-fill"></i>{" "}
//         <a
//           href="https://docs.google.com/document/d/1-Pas1q1wyuH_coit4xnweo7tPk4h16_DO1VFzkv-SHg/edit"
//           target="_blank"
//         >
//           Evidencia de conocimiento
//         </a>
//       </li>
//     </ul>
//     <p>
//       Recuerde que este tipo de actividades son parte del
//       portafolio de evidencias.
//     </p>
//     <p className="fst-italic">
//       Es posible que algunas actividades requieran acceso, para
//       brindarselo por favor contácteme.
//     </p>
//   </div>
//   <div
//     className="col-lg-4 order-1 order-lg-2 text-center"
//     data-aos="fade-up"
//     data-aos-delay="200"
//   >
//     <img
//       src="../../../assets/img/decimo/herramientas-logicas/evidencia-conocimiento.jpg"
//       alt=""
//       className="img-fluid"
//     />
//   </div>
// </div>
// </div>
// {/* <!-- /Tab de asignaciones de conocimiento --> */}

// {/* <!-- Tab de asignaciones de desempeño --> */}
// <div className="tab-pane fade" id="features-tab-3">
// <div className="row gy-4">
//   <div className="col-lg-8 order-2 order-lg-1">
//     <h3>Desempeño</h3>
//     <p>
//       Se recomiendan las siguientes actividades para obtener una
//       evidencias de desempeño:
//     </p>
//     <ul>
//       <li>
//         <i className="bi bi-check-circle-fill"></i>{" "}
//         <a
//           href="https://docs.google.com/document/d/1ky7Q9EUaU0Amt8dCq04tw9MWqylRI3sfboqEBz17duk/"
//           target="_blank"
//         >
//           Evidencia de desempeño
//         </a>
//       </li>
//     </ul>
//     <p>
//       Recuerde que este tipo de actividades son parte del
//       portafolio de evidencias.
//     </p>
//     <p className="fst-italic">
//       Es posible que algunas actividades requieran acceso, para
//       brindarselo por favor contácteme.
//     </p>
//   </div>
//   <div className="col-lg-4 order-1 order-lg-2 text-center">
//     <img
//       src="../assets/img/decimo/herramientas-logicas/evidencia-desempeño.jpg"
//       alt=""
//       className="img-fluid"
//     />
//   </div>
// </div>
// </div>
// {/* <!-- /Tab de asignaciones de desempeño --> */}

// {/* <!-- Tab de asignaciones de producto --> */}
// <div className="tab-pane fade" id="features-tab-4">
// <div className="row gy-4">
//   <div className="col-lg-8 order-2 order-lg-1">
//     <h3>Producto</h3>
//     <p>
//       Se recomiendan las siguientes actividades para obtener una
//       evidencias de producto:
//     </p>
//     <ul>
//       <li>
//         <i className="bi bi-check-circle-fill"></i>{" "}
//         <a
//           href="https://docs.google.com/document/d/1s2dNCr10GylYxTNfvLpSsd1wWI0ExEcTJ1nN5W5sSOA/"
//           target="_blank"
//         >
//           Evidencia de producto
//         </a>
//       </li>
//     </ul>
//     <p>
//       Recuerde que este tipo de actividades son parte del
//       portafolio de evidencias.
//     </p>
//     <p className="fst-italic">
//       Es posible que algunas actividades requieran acceso, para
//       brindarselo por favor contácteme.
//     </p>
//   </div>
//   <div className="col-lg-4 order-1 order-lg-2 text-center">
//     <img
//       src="../assets/img/decimo/herramientas-logicas/evidencia-producto.jpg"
//       alt=""
//       className="img-fluid"
//     />
//   </div>
// </div>
// </div>
// {/* <!-- /Tab de asignaciones de producto --> */}

// {/* <!-- Tab de tareas --> */}
// <div className="tab-pane fade" id="features-tab-5">
// <div className="row gy-4">
//   <div className="col-lg-8 order-2 order-lg-1">
//     <h3>Tareas</h3>
//     <p>
//       Se recomiendan las siguientes actividades para asignar
//       tareas al hogar:
//     </p>
//     <ul>
//       <li>
//         <i className="bi bi-check-circle-fill"></i>{" "}
//         <a
//           href="https://docs.google.com/document/d/1azA2MoZTdPU8i9tOiESeAqjs6BZl0RPjyEagOGHSixU/"
//           target="_blank"
//         >
//           Tarea
//         </a>
//       </li>
//     </ul>
//     <p className="fst-italic">
//       Es posible que algunas actividades requieran acceso, para
//       brindarselo por favor contácteme.
//     </p>
//   </div>
//   <div className="col-lg-4 order-1 order-lg-2 text-center">
//     <img
//       src="../assets/img/decimo/herramientas-logicas/evidencia-tarea.jpg"
//       alt=""
//       className="img-fluid"
//     />
//   </div>
// </div>
// </div>
// {/* <!-- /Tab de tareas --> */}
