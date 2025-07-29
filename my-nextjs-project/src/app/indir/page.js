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
        Flexsoft Cari Takip’i Hemen İndirin – Finansal Süreçlerinizi Güvenle Yönetin! (Pek Yakında...)
      </h1>


      <div className={styles.qrContainer}>
        <div className={styles.playContainer}>
          <div className={styles.playAltContainer}>
            <h2>QR ile Yükle - iOS</h2>
            <img
              className={styles.qrImage}
              src="/qrdeneme.jpeg"
              alt="Ölçek | İlaç, Besin Takviyesi Doz Hesaplama ve Hatırlatma Uygulaması İndir QRCODE - Android"
            />
            <img
              className={styles.urlImage}
              src="/storeios.png"
              alt="Ölçek : İlaç, Besin Takviyesi Doz Hesaplama ve Hatırlatma Uygulaması İndir - Android"
            />
          </div>
        </div>

        <div className={styles.iosContainer}>
          <div className={styles.playAltContainer}>
            <h2>QR ile Yükle - Android</h2>
            <img
              className={styles.qrImage}
              src="/android-qr.png"
              alt="Ölçek | İlaç, Besin Takviyesi Doz Hesaplama ve Hatırlatma Uygulaması İndir QRCODE - iOS"
            />
            {/* <a
              className={styles.connectionContainer}
              href="https://play.google.com/store/apps/details?id=com.olcekapp&utm_source=emea_OO"
              target="_blank"
              rel="noopener noreferrer"
            > */}
            <img
              className={styles.urlImage}
              src="/storegoogle.png"
              alt="Ölçek: İlaç, Besin Takviyesi Doz Hesaplama ve Hatırlatma Uygulaması İndir - Android"
            />
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
