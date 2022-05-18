import React from 'react';
import  { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Pdf from './wireframe2.pdf';


const Admin = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    return (
        <div>
             <Document file={Pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
           <a href={Pdf}>Show PDF</a>  
             
      <p>
        Page {pageNumber} of {numPages}
      </p>
        </div>
    );
};

export default Admin;