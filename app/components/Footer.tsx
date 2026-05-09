import { storeConfig } from '../data/store';
import WhatsAppButton from './WhatsAppButton';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__shell">
        <div className="site-footer__grid">
          <div>
            <h2 className="site-footer__brand">{storeConfig.name}</h2>
            <p className="site-footer__text">
              Productos dulces artesanales hechos con dedicacion, ideales para compartir,
              regalar y resolver un antojo con una experiencia de compra simple.
            </p>
            <WhatsAppButton label="Hacer un pedido" />
          </div>

          <div>
            <h3 className="site-footer__title">Contacto</h3>
            <ul className="site-footer__list">
              <li>
                <a href={storeConfig.social.whatsappUrl} target="_blank" rel="noreferrer">
                  WhatsApp: {storeConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={storeConfig.social.instagramUrl} target="_blank" rel="noreferrer">
                  Instagram: {storeConfig.social.instagramHandle}
                </a>
              </li>
              <li>{storeConfig.location}</li>
            </ul>
          </div>

          <div>
            <h3 className="site-footer__title">Horarios</h3>
            <ul className="site-footer__list">
              {storeConfig.openingHours.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>{storeConfig.footerNote}</p>
        </div>
      </div>
    </footer>
  );
}
