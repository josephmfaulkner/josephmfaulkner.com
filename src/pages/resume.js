import React, { useState } from "react"

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import MainTemplate from "../components/_mainTemplate";
import AboutSection from "./_aboutSection";
import ProjectSection from "./_projectSection";


import { Viewer, SpecialZoomLevel, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Create new plugin instance
const defaultLayoutPluginInstance = defaultLayoutPlugin();

// markup
const ResumePage = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
/*
  return (
    <MainTemplate>

      <Document
        file={resumeFile}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>

    </MainTemplate>
    )
*/

const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [
      defaultTabs[0], // Thumbnails tab
    ],
  });


  return (
      <MainTemplate>

        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <section
            id="review-pdf"
            className="border border-white text-pink text-sm"
        >
            <Viewer
            fileUrl="/Resume.pdf"
            plugins={[defaultLayoutPluginInstance]}
            />
        </section>
        </Worker>


      </MainTemplate>
  )    

}

export default ResumePage
