'use client';

import WhatsAppButton from './WhatsAppButton';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-brand">Delicias Artesanales</h3>
            <p className="footer-description">
              Pastafrolas, alfajores, budines y tortas artesanales hechas con amor. Pedí por WhatsApp.
            </p>
            <WhatsAppButton />
          </div>
          <div>
            <h4 className="footer-schedule-title">Horarios</h4>
            <ul>
              <li className="footer-schedule-item">Lunes a Sábado: 7:00 - 18:00</li>
              <li className="footer-schedule-item">Domingo: Cerrado</li>
            </ul>
          </div>
          <div>
            <h4 className="footer-contact-title">Contacto</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.99 20.91c-1.13 1.13-2.5 2.04-4.09 2.04-1.6 0-3.12-.66-4.28-1.82-3.44-3.44-6.08-7.62-6.08-12.28 0-1.6.62-3.1 1.76-4.24L4.5 2.52a1.7 1.7 0 0 1 1.7-1.7h4.24c.72 0 1.36.28 1.87.77l2.83 2.83c.5.5.77 1.14.77 1.8v.08c0 .72-.28 1.36-.77 1.87l-1.27 1.27c-.2.2-.3.46-.3 1.06 0 .6.1 1.1.3 1.6.2.4.5.8.8 1.2.3.4.6.8.8 1.2.2.4.3.8.3 1.2 0 .7-.2 1.4-.6 2-.4.6-1 1.2-1.6 1.8-.6.6-1.2 1-1.8 1.4-.4.3-.8.6-1.2.8-.4.4-.8.8-1.2 1-.4.4-.8.6-1.2.6h-.08c-.7 0-1.34-.28-1.87-.77L5.5 16.5c-.5-.5-.77-1.14-.77-1.8v-.08c0-.7.28-1.36.77-1.87l2.83-2.83c.5-.5 1.14-.77 1.87-.77h.08c.7 0 1.36.28 1.87.77l1.27 1.27c.5.5.8.8.8 1.2.2.4.3.8.3 1.2 0 .7-.2 1.4-.6 2-.4.6-1 1.2-1.6 1.8-.6.6-1.2 1-1.8 1.4-.4.3-.8.6-1.2.8-.4.4-.8.8-1.2 1-.4.4-.6.6-1 .6H5.5c-.7 0-1.34-.28-1.87-.77L2.5 15.5c-.5-.5-.77-1.14-.77-1.8v-.08c0-.7.28-1.36.77-1.87l2.83-2.83c.5-.5 1.14-.77 1.87-.77h.08c.7 0 1.36.28 1.87.77l1.27 1.27c.5.5.8.8.8 1.2.2.4.3.8.3 1.2 0 .7-.2 1.4-.6 2-.4.6-1 1.2-1.6 1.8-.6.6-1.2 1-1.8 1.4-.4.3-.8.6-1.2.8-.4.4-.8.8-1.2 1-.4.4-.6.6-1 .6z" />
                </svg>
                WhatsApp: 54 9 11 1234 5678
              </li>
              <li className="footer-contact-item">
                <svg className="footer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13 21.314V11a4 4 0 11-8 0v-2m0 0h2m-1 9h2m7-7a4 4 0 11-8 0v-2m0 0h2" />
                </svg>
                Ubicación: CABA, Argentina
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Delicias Artesanales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}