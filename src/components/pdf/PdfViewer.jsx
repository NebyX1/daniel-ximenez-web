import React from "react";
import { EmbedPDF } from "@simplepdf/react-embed-pdf";
import styles from '../../styles/pdfviewer.module.css';

const PdfViewer = () => {
  const pdfUrl = 'https://cdn.jsdelivr.net/gh/NebyX1/plataforma-gobierno-2025@main/Plataforma%20Program%C3%A1tica%20Lavalleja%20S%C3%AD!.pdf';

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <EmbedPDF
          mode="inline"
          className={styles.embedpdf}
          documentURL={pdfUrl}
        />
      </div>
    </div>
  );
};

export default PdfViewer;

