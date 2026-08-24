import React from 'react';
import './DashboardModal.css';

export default function DashboardModal({ isOpen, onClose, title, src }) {
  if (!isOpen) return null;

  return (
    <div className="dashboard-modal-overlay" onClick={onClose} aria-modal="true" role="dialog">
      <div className="dashboard-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="dashboard-modal-header">
          <h3>{title}</h3>
          <button className="dashboard-modal-close" onClick={onClose} aria-label="Fechar dashboard">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div className="dashboard-modal-body">
          {src ? (
            <iframe 
              title={title}
              width="100%" 
              height="100%" 
              src={src} 
              frameBorder="0" 
              allowFullScreen={true}
            ></iframe>
          ) : (
            <div className="dashboard-placeholder">
              <div className="placeholder-chart bar-chart"></div>
              <div className="placeholder-chart pie-chart"></div>
              <div className="placeholder-chart line-chart"></div>
              <p>O dashboard interactivo seria carregado aqui (ex: via iframe do Power BI).</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
