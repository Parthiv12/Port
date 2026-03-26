import React from "react";
import "./RAGPage.css";
import { FaFilePdf, FaDownload } from "react-icons/fa";

export default function RAGPage() {
  return (
    <div className="rag-container">
      <div className="rag-header">
        <h1>Retrieval-Augmented Generation (RAG) Research</h1>
        <p className="rag-subtitle">
          Exploring practical applications of RAG systems in modern LLM architectures.
        </p>
      </div>

      <div className="rag-content">
        <div className="pdf-viewer-wrapper">
          <div className="pdf-controls">
            <a
              href="/RAG_Research.pdf"
              download="RAG_Research.pdf"
              className="download-btn"
            >
              <FaDownload size={18} />
              Download PDF
            </a>
          </div>
          
          <div className="pdf-embed">
            <iframe
              src="/RAG_Research.pdf#toolbar=1&navpanes=0&scrollbar=1"
              title="RAG Research Paper"
              className="pdf-frame"
            />
          </div>
        </div>

        <div className="paper-info">
          <div className="info-section">
            <h2>Project Overview</h2>
            <p>
              This research explores retrieval-augmented generation techniques, combining
              vector-based document retrieval with large language models to enable more
              accurate, grounded responses across diverse query types.
            </p>
          </div>

          <div className="info-section">
            <h2>Key Areas</h2>
            <ul>
              <li>Vector database design and retrieval optimization</li>
              <li>LLM prompt engineering for RAG pipelines</li>
              <li>Evaluation metrics for RAG system performance</li>
              <li>Real-world implementation considerations</li>
            </ul>
          </div>

          <div className="info-section cta">
            <p>
              <a href="/RAG_Research.pdf" download>Download the full research paper →</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
