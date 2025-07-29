// app/page.js
import styles from '../../styles/home.module.css'
import Vitrin from '../../compenents/Vitrin'
import VitrinSecond from '../../compenents/VitrinSecond'
import Link from 'next/link'

export const metadata = {
  title: 'Flexsoft Cari Takip Uygulaması',
  description: 'Carilerinizi kolayca oluşturun; alacak, borç, tahsilat ve ödeme işlemlerini eksiksiz kaydedin. Flexsoft Cari Takip ile her cari için güncel bakiye takibini anlık yapın, finansal süreçlerinizi hızlı, güvenilir ve düzenli yönetin. Çoklu para birimi desteği, hatırlatıcılar ve kapsamlı raporlarla işletmenizi güçlendirin.',
}

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <div className={styles.textContainer}>
          <h1>Flexsoft Cari Takip</h1>
          <h2>
            Unutan Değil, <span className={styles.mobileHideBr}><br /></span>Yöneten Ol!
          </h2>
          <p>
            Carilerinizi oluşturun, alacak, borç, tahsilat ve ödeme hareketlerini eksiksiz kaydedin. Her cari için güncel bakiye bilgisini anlık olarak takip edin; finansal süreçlerinizi daha verimli ve düzenli yönetin.
          </p>
          <Link href="/indir"><div className={styles.indirButton}>Hemen İndir</div></Link>
        </div>

        <div className={styles.anaSliderContainer}>
          <img
            src="/veriler-portrait.png"
            alt="Flexsoft Cari Takip uygulamasında detaylı cari verileri gösteren ekran"
          />
          <img
            src="/anasayfa-portrait.png"
            alt="Flexsoft Cari Takip ana sayfa arayüzü ekran görüntüsü"
          />
          <img
            src="/raporlar-portrait.png"
            alt="Flexsoft Cari Takip finansal raporlar sayfası ekran görüntüsü"
          />
        </div>
      </div>

      {/* Vitrin and VitrinSecond Components */}
      <div>
        <Vitrin />
      </div>

      <div>
        <VitrinSecond />
      </div>
    </div>
  )
}

