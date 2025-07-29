'use client'
import React, { useRef, useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos, MdVerified, MdSmartphone, MdPerson, MdLocalPharmacy, MdLock, MdUpdate, MdAccessTime, MdStore } from 'react-icons/md'; // New icons for each item
import styles from '../styles/vitrinSecond.module.css';

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const getScrollDistance = () => {
    return window.innerWidth < 768 ? 266 : 413;
  };

  const getVisibleItemCount = () => {
    const containerWidth = sliderRef.current ? sliderRef.current.clientWidth : 0;
    const itemWidth = getScrollDistance();
    return Math.floor(containerWidth / itemWidth);
  };

  const scrollRightHandler = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const scrollDistance = getScrollDistance();
      const totalItems = slider.children.length;
      const visibleItemCount = getVisibleItemCount();
      const remainingItems = totalItems - Math.ceil(slider.scrollLeft / scrollDistance) - visibleItemCount;

      if (remainingItems <= 0) {
        slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: scrollDistance, behavior: 'smooth' });
      }
    }
    checkSliderPosition();
  };

  const scrollLeftHandler = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const scrollDistance = getScrollDistance();
      const visibleItemCount = getVisibleItemCount();
      const scrollIndex = Math.floor(slider.scrollLeft / scrollDistance);
  
      // Eğer kalan öğe sayısı 1 ise, başa kaydır
      const remainingItems = scrollIndex + visibleItemCount;
      
      // Kalan öğe sayısı 1 ya da 2 ise, başa kaydır
      if (remainingItems <= 1) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
      }
    }
    checkSliderPosition();
  };

  const checkSliderPosition = () => {
    const slider = sliderRef.current;
    const tolerance = 1;

    const isStart = slider.scrollLeft <= tolerance;
    const isEnd = slider.scrollWidth - slider.scrollLeft - slider.clientWidth <= tolerance;

    setIsAtStart(isStart);
    setIsAtEnd(isEnd);
  };

  return (
    <div className={styles.sliderContainer}>
      <h2>Neden Flexsoft Cari Takip'i Tercih Etmelisiniz?</h2>
      <div className={styles.imageContainerWrapper}>
        <div
          className={styles.responseContainer}
          ref={sliderRef} 
          onScroll={checkSliderPosition}
        >
          <div className={styles.responseItem}>
            <div className={styles.icon}><MdPerson /></div>
              <h3>Cari Profilleri Oluşturun</h3>
              <p>Flexsoft Cari Takip ile müşterilerinizi kolayca sisteme ekleyebilir, her biri için özel cari profilleri oluşturabilirsiniz. Müşteri bilgilerini düzenli bir şekilde saklayarak ihtiyaç duyduğunuzda anında erişebilirsiniz.</p>
            </div>

            <div className={styles.responseItem}>
              <div className={styles.icon}><MdLocalPharmacy /></div>
              <h3>Finansal Hareketleri Takip Edin</h3>
              <p>Alacak, borç, tahsilat ve ödeme gibi tüm işlemleri saniyeler içinde ekleyebilir, carilerinizin geçmiş hareketlerini detaylı olarak görüntüleyebilirsiniz. Bu sayede hiçbir ödeme ya da tahsilat gözden kaçmaz.</p>
            </div>

            <div className={styles.responseItem}>
              <div className={styles.icon}><MdAccessTime /></div>
              <h3>Anlık Bakiye Görüntüleme</h3>
              <p>Her cari için yapılan tüm işlemler otomatik olarak hesaplanır ve güncel bakiye anında görüntülenir. Türk Lirası, Dolar ve Euro gibi farklı para birimleriyle çalışabilir, dövizli carilerde de kontrol sizde olur.</p>
            </div>

            <div className={styles.responseItem}>
              <div className={styles.icon}><MdUpdate /></div>
              <h3>Hatırlatıcılarla Zamanlamayı Kaçırmayın</h3>
              <p>Herhangi bir borç, alacak veya ödeme için hatırlatıcılar kurabilir, zamanı geldiğinde bildirim alarak unutmaların önüne geçebilirsiniz. Bu özellik sayesinde finansal süreçleriniz her zaman kontrol altında olur.</p>
            </div>

            <div className={styles.responseItem}>
              <div className={styles.icon}><MdSmartphone /></div>
              <h3>Çoklu Cihazla Erişim</h3>
              <p>Flexsoft Cari Takip mobil uygulaması sayesinde aynı hesabınıza birden fazla cep telefonu ya da tabletten giriş yapabilirsiniz. Tüm verileriniz senkronize şekilde çalışır, cihaz fark etmeksizin her an elinizin altındadır.</p>
            </div>

            <div className={styles.responseItem}>
              <div className={styles.icon}><MdStore /></div>
              <h3>Raporlama ve PDF Paylaşımı</h3>
              <p>Genel raporlar, tahsilat ve ödeme analizleri gibi detaylı çıktılar oluşturabilir, carilerinize ait ekstreleri PDF formatında hazırlayıp hızlıca paylaşabilirsiniz. İşinizi kolaylaştıran profesyonel raporlarla öne çıkın.</p>
            </div>

            <div className={styles.responseItem}>
              <div className={styles.icon}><MdVerified /></div>
              <h3>Güvenli ve Kalıcı Kayıt</h3>
              <p>Tüm bilgiler bulutta güvenli bir şekilde saklanır; veri kaybı yaşamazsınız. Otomatik yedeklemeler sayesinde geçmiş kayıtlarınıza her zaman ulaşabilirsiniz.</p>
            </div>

            <div className={styles.responseItem}>
              <div className={styles.icon}><MdLock /></div>
              <h3>Gelişmiş Güvenlik Altyapısı</h3>
              <p>Kullanıcı verileriniz en üst düzey güvenlik önlemleriyle korunur. Şifrelenmiş girişler, yetkisiz erişim engeli ve hassas veri koruma sistemleriyle gönül rahatlığıyla kullanabilirsiniz.</p>
            </div>
        </div>
      </div>

      <div className={styles.arrowsContainer}>
        <div
          className={`${styles.arrowButton} ${styles.prevArrow} ${isAtStart ? styles.disabled : ''}`}
          onClick={scrollLeftHandler}
        >
          <MdArrowBackIos />
        </div>
        <div
          className={`${styles.arrowButton} ${styles.nextArrow} ${isAtEnd ? styles.disabled : ''}`}
          onClick={scrollRightHandler}
        >
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

