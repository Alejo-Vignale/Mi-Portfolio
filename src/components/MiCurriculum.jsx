import React from "react";

import "./CSS/MiCurriculum.css";
function MiCurriculum() {
  const handleDownloadClick = () => {
    // Replace 'your_cv_file_name.pdf' with the actual name of your CV file
    const fileName = "your_cv_file_name.pdf";
    // Replace 'path/to/your/cv' with the actual path to your CV file
    const filePath = "path/to/your/cv/" + fileName;
    // Triggering the download
    window.open(filePath);
  };
  return (
    <div className="curriculum-container">
      <div className="left-section">
        <div className="image-container"></div>
        <div className="description">
          <p>
            A lo largo de mi vida laboral, he adquirido una vasta experiencia en
            el trato con el público y en trabajar en equipos colaborativos. Mi
            capacidad para comunicarme efectivamente y adaptarme a diversas
            dinámicas grupales se ha fortalecido en estos entornos.
          </p>
          <h3>Tecnologias aprendidas</h3>
          <p>Html, CSS, JavaScript, Node.js, React; MongoDB, SQL;</p>

          <h3>Otros Conocimientos</h3>
          <p>
            Inglés avanzado, Curso en primeros auxilios y rescate- 100%
            completo, Curso de rescate internacional para zonas agrestes
          </p>
        </div>
      </div>
      <div className="right-section">
        <div className="personal-info">
          <div className="education-download-section">
            {/* EDUCACIÓN section */}
            <h2>EDUCACIÓN</h2>
            {/* Download button */}
            <button onClick={handleDownloadClick}>Download C.V</button>
          </div>

          <h3> Hack Academy</h3>
          <h4>Full Stack Developer</h4>
          <p>
            • Hack Academy Bootcamp Intesivo de desarrollo web Más de 600 horas
            de programación intensiva en un lapso de 3 meses. Fecha : Julio de
            2023-Septiembre de 2023 • Universidad ORT Fecha : Marzo de
            2016-Abril de 2019- Tecnicatura aprobada con 86% Tec. Gerencia
            Turistica Full Stack Developer
          </p>

          <h3> Universidad ORT</h3>
          <h4>Tec. Gerencia Turistica</h4>
          <p>
            Fecha : Marzo de 2016-Abril de 2019- Tecnicatura aprobada con 86%
          </p>

          <div className="info-section">
            <h3>EXPERIENCIA LABORAL</h3>
            <p>
              <h4>Lugar:</h4> Hillston NSW- Australia Cargo: Manejo de
              maquinaria pesada Fecha: Abril 2019- Julio 2022 Tarea: Manejo y
              manutencion de maquinaria pesada, instruir nuevo personal{" "}
              <h4>Lugar:</h4> Sydney- Australia Cargo: Ventas Fecha: Diciembre
              2018- Marzo 2019 Tarea: Busqueda de donadores para “Breast Cancer
              Fundation”, para la rama de investigacion sobre el cancer de mama.{" "}
              <h4>Lugar:</h4> Warren NSW- Australia Cargo: Manejo de maquinaria
              pesada Fecha: Abril 2018- Agosoto 2018 Tarea:Manejo y manutencion
              de maquinaria pesada
              <h4>Lugar:</h4> Salto del Penitente y Ventorrillo de la Buena
              Vista Cargo: Administración y atención al cliente Fecha: 2013-2018
              Tarea: Trabajo administrativo, organización, atención y
              asesoramiento a Turistas . <h4>Lugar:</h4> Laboratorio Agro-
              Analítico Al Norte Cargo: Administrativo Tarea: Trabajos
              administrativos y atención a clientes. Fecha: 2012-2013 Tarea:
              Facturación y atención al cliente <h4>Lugar:</h4> Hotel Regency
              Suites Cargo: Bell Boy Fecha: 2011-2012 Tarea: Atención al cliente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiCurriculum;
