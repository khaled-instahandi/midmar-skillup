import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import file from "src/files/Khaled-Al-Ahmad.pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css"; // Import default layout styles

import ExcelUploadInput from "src/elements/ImageUploadInput/ExcelUploadInput";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import Arabic localization files
import ar_AE from "@react-pdf-viewer/locales/lib/ar_AE.json";

const CoachReports = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="activity-page">
      <ExcelUploadInput
        label={"السيرة الذاتية"}
        className="important-width"
        required
        margin={"0.5rem"}
      />
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div style={{ marginTop: "1rem", direction: "ltr", height:"100VH"}}>
          <Viewer
            fileUrl={file}
            localization={ar_AE}
            plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
};

export default CoachReports;
