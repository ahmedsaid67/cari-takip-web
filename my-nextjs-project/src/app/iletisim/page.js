// app/iletisim/page.js
import styles from './Iletisim.module.css'
import { FaPhone, FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

export const metadata = {
  title: 'İletişim | Flexsoft Cari Takip Uygulaması',
  description:
    'Flexsoft Cari Takip uygulaması ile ilgili sorularınızı bize iletin, geri bildirimlerinizi paylaşın. Hızlı ve kolay iletişim için buradayız.',
};

export default function Iletisim() {
  return (
    <div>
      <div className={styles.firstContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.mainTitle}>Bize Ulaşın</div>
        </div>

        <h1 className={styles.baslik}>
          Sorularınız ve Geri Bildirimleriniz İçin Bizimle İletişime Geçin!
        </h1>

        <div>
          <div className={styles.kutular}>
            <div className={styles.kutum2}>
              <div>
                <h2>İletişim Bilgileri:</h2>
                <div className={styles.klasikonuştur}>
                  <FaPhone className={styles.icon} />
                  <p>(+90) 506 940 5414</p>
                </div>
                <div className={styles.klasikonuştur}>
                  <FaPhone className={styles.icon} />
                  <p>(+90) 531 918 3467</p>
                </div>
                <div className={styles.klasikonuştur}>
                  <FaEnvelope className={styles.icon} />
                  <a href="mailto:flexsoftwaretr@gmail.com">
                    <p>flexsoftwaretr@gmail.com</p>
                  </a>
                </div>
              </div>
              <div>
                <h2>Sosyal Medya Bağlantıları</h2>
                <div className={styles.klasikonuştur}>
                  <div className={styles.sos}>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaTwitter className={styles.sosIcon} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaFacebook className={styles.sosIcon} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className={styles.sosIcon} />
                    </a>
                    <a
                      href="https://www.tiktok.com/@olcekapp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTiktok className={styles.sosIcon} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.kutum1}>
              <img src="/contact.jpg" alt="Flexsoft ile iletişim" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

