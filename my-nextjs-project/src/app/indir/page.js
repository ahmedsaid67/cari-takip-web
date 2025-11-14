// app/indir/page.js
import Link from 'next/link';
import styles from './Indir.module.css';

export const metadata = {
  title: 'Flexsoft Cari Takip Uygulamasını İndirin - Cari Takip ve Finans Yönetimi',
  description:
    'Flexsoft Cari Takip uygulamasını hemen indirin. Carilerinizi kolayca oluşturun, alacak ve borç hareketlerini takip edin, finansal süreçlerinizi hızlı ve güvenilir yönetin.',
};

export default function Indir() {
  return (
    <div className={styles.firstContainer}>
      <div className={styles.titleContainer}>
        <div className={styles.mainTitle}>Hemen İndir!</div>
      </div>

      <h1 className={styles.baslik}>
        Flexsoft Cari Takip’i Hemen İndirin – Finansal Süreçlerinizi Güvenle Yönetin!
      </h1>


      <div className={styles.qrContainer}>
          {/* iOS */}
          <div className={styles.playContainer}>
            <div className={styles.playAltContainer}>
              <h2>QR ile Yükle - iOS</h2>
              <img
                className={styles.qrImage}
                src="/frame.png"
                alt="Flexsoft Cari Takip - iOS QR Kodu"
              />
              <a
                href="https://apps.apple.com/us/app/flexsoft-cari-takip-muhasebe/id6751607216"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.urlImage}
                  src="/storeios.png"
                  alt="Flexsoft Cari Takip - iOS App Store"
                />
              </a>
            </div>
          </div>

          {/* Android */}
          <div className={styles.iosContainer}>
            <div className={styles.playAltContainer}>
              <h2>QR ile Yükle - Android</h2>
              <img
                className={styles.qrImage}
                src="/frame2.png"
                alt="Flexsoft Cari Takip - Android QR Kodu"
              />
              <a
                href="https://play.google.com/store/apps/details?id=com.caritakip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.urlImage}
                  src="/storegoogle.png"
                  alt="Flexsoft Cari Takip - Google Play"
                />
              </a>
            </div>
          </div>


      </div>
    </div>
  );
}
