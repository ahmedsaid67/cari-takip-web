'use client'
import React, { useRef, useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';  // Yeni ikonlar
import styles from '../styles/home.module.css';

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);


  // Ekran boyutuna göre kaydırma mesafesini hesaplayan fonksiyon
  const getScrollDistance = () => {
    return window.innerWidth < 768 ? 240 : 350; // Mobilde 264, daha büyük ekranlarda 413
  };

  // Görüntülenen öğe sayısını hesapla (örneğin 3)
  const getVisibleItemCount = () => {
    const containerWidth = sliderRef.current ? sliderRef.current.clientWidth : 0;
    const itemWidth = getScrollDistance();
    return Math.floor(containerWidth / itemWidth); // Konteyner genişliğine göre görünen öğeleri hesapla
  };

  // Sağ kaydırma işlemi
  const scrollRightHandler = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const scrollDistance = getScrollDistance();
      const totalItems = slider.children.length; // Toplam öğe sayısı
      const visibleItemCount = getVisibleItemCount(); // Görünen öğe sayısı
      const remainingItems = totalItems - Math.ceil(slider.scrollLeft / scrollDistance) - visibleItemCount;

      // Kalan öğe sayısı 1 ise, tam sona kaydır
      if (remainingItems <= 0) {
        slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: scrollDistance, behavior: 'smooth' });
      }
    }
    checkSliderPosition();
  };

// Sol kaydırma işlemi
const scrollLeftHandler = () => {
  if (sliderRef.current) {
    const slider = sliderRef.current;
    const scrollDistance = getScrollDistance();
    const visibleItemCount = getVisibleItemCount();
    const scrollIndex = Math.floor(slider.scrollLeft / scrollDistance);

    // Eğer kalan öğe sayısı 1 ise, başa kaydır
    const remainingItems = scrollIndex + visibleItemCount;

    if (remainingItems <= 1) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
    }
  }
  checkSliderPosition();
};


  // Kaydırma işleminin başlangıçta mı, bitişte mi olduğunu kontrol et
  const checkSliderPosition = () => {
    const slider = sliderRef.current;
    const tolerance = 1; // Küçük bir tolerans değeri

    const isStart = slider.scrollLeft <= tolerance;
    const isEnd = slider.scrollWidth - slider.scrollLeft - slider.clientWidth <= tolerance;

  
    setIsAtStart(isStart);
    setIsAtEnd(isEnd);
  };

  return (
    <div className={styles.sliderContainer}>
      <h2>Flexsoft Cari Takip’i yakından tanıyın.</h2>
      <div className={styles.imageContainerWrapper}>
        <div
          className={styles.imageContainer}
          ref={sliderRef} 
          onScroll={checkSliderPosition}
        >
          <div className={styles.sliderItem}>
            <img src="/mobileImage/gorsel1.png" alt="Flexsoft Cari Takip uygulamasının ana sayfa arayüzü ekran görüntüsü" />
          </div>
          <div className={styles.sliderItem}>
            <img src="/mobileImage/gorsel2.png" alt="Flexsoft Cari Takip uygulamasında çoklu para birimi desteği özelliği" />
          </div>
          <div className={styles.sliderItem}>
            <img src="/mobileImage/gorsel3.png" alt="Flexsoft Cari Takip ile ödeme ve tahsilatlar için hatırlatıcı oluşturma özelliği" />
          </div>
          <div className={styles.sliderItem}>
            <img src="/mobileImage/gorsel4.png" alt="Flexsoft Cari Takip uygulamasında gelişmiş finansal raporlar ve analiz ekranı" />
          </div>
          <div className={styles.sliderItem}>
            <img src="/mobileImage/gorsel5.png" alt="Flexsoft Cari Takip ile cari ekstrelerinizi kolayca paylaşma imkanı" />
          </div>
          <div className={styles.sliderItem}>
            <img src="/mobileImage/gorsel6.png" alt="Flexsoft Cari Takip uygulamasında verileriniz güvenle saklanır, kaybolmaz ve silinmez" />
          </div>
          <div className={styles.sliderItem}>
            <img src="/mobileImage/gorsel7.png" alt="Flexsoft Cari Takip uygulamasında çoklu cihaz erişimi ve veri senkronizasyonu" />
          </div>
          <div className={styles.sliderItem}>
            <img src="/mobileImage/gorsel8.png" alt="Flexsoft Cari Takip; cüzdan, defter ve muhasebe işlemleri için ideal çözüm" />
          </div>
        </div>
      </div>

      <div className={styles.arrowsContainer}>
        <div
          className={`${styles.arrowButton} ${styles.prevArrow} ${isAtStart ? styles.disabled : ''}`}
          onClick={scrollLeftHandler}
          disabled={isAtStart}
        >
          <MdArrowBackIos />
        </div>
        <div
          className={`${styles.arrowButton} ${styles.nextArrow} ${isAtEnd ? styles.disabled : ''}`}
          onClick={scrollRightHandler}
          disabled={isAtEnd}
        >
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;


