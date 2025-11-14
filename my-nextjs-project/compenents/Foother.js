'use client'
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'; // Import the icons
import Link from 'next/link'; // Import Next.js Link
import styles from '../styles/foother.module.css';
import { usePathname } from 'next/navigation';

const ImageSlider = () => {

  const pathname = usePathname();

  const hideLayout = pathname.includes('kullanim-talimati');

  if (hideLayout) return null;



  return (
    <div>
      <div className={styles.container}>
        <div className={styles.itemContainer}>
          <h2>Hızlı Linkler</h2>
          <div className={styles.linkItem}>
            <Link href='/'>
              <p>Ana Sayfa</p>
            </Link>
          </div>
          <div className={styles.linkItem}>
            <Link href='/hakkimizda'>
              <p>Hakkımızda</p>
            </Link>
          </div>
          <div className={styles.linkItem}>
            <Link href='/iletisim'>
              <p>İletişim</p>
            </Link>
          </div>
          <div className={styles.linkItem}>
            <Link href='/indir'>
              <p>İndir</p>
            </Link>
          </div>
        </div>

        <div className={styles.itemContainer}>
          <h2>Yasal Koşullar</h2>
          <div className={styles.linkItem}>
            <Link href='/kullanici-sozlesmesi'>
              <p>Kullanıcı Sözleşmesi</p>
            </Link>
          </div>
          <div className={styles.linkItem}>
            <Link href='/kayit-sil'>
              <p>Hesabı Sil</p>
            </Link>
          </div>
        </div>

        <div className={styles.itemContainer}>
          <h2>İletişim</h2>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:flexsoftwaretr@gmail.com"><p>flexsoftwaretr@gmail.com</p></a>
          </div>
          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.icon} />
            <p>05319183467</p>
          </div>
          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.icon} />
            <p>05069405414</p>
          </div>
        </div>

        <div className={styles.itemContainer}>
          <h2>İndir</h2>
          {/* <Link href='/indir'> */}
            <div className={styles.indirContainer}>
              <a href="https://apps.apple.com/us/app/flexsoft-cari-takip-muhasebe/id6751607216" target="_blank" rel="noopener noreferrer">
              <img src="/storeios.png" alt="Flexsoft Cari Takip - Muhasebe Uygulaması İndir - İos" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.caritakip" target="_blank" rel="noopener noreferrer">
                <img src="/storegoogle.png" alt="Flexsoft Cari Takip - Muhasebe Uygulaması İndir - Android" />
              </a>
            </div>
          {/* </Link> */}
        </div>

        <div className={styles.itemContainer}>
          <h2>Sosyal Medya</h2>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={styles.sIcon} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.sIcon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.sIcon} />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok className={styles.sIcon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.altFootherContainer}>
          <div className={styles.altFootherTextContainer}>© 2025 Flexsoft. Tüm haklar saklıdır.</div>
      </div>
    </div>
  );
};

export default ImageSlider;

