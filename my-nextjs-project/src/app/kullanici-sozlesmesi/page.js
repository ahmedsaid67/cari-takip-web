import React from 'react';
import styles from "./Sozlesme.module.css";
import Head from 'next/head';

const Politika = () => {
  return (
    <div>
      <Head>
        <title>Kullanıcı Sözleşmesi | Flexsoft Cari Takip Uygulaması</title>
        <meta 
          name="description" 
          content="Flexsoft Cari Takip Uygulaması Gizlilik Politikası." 
        />
      </Head>

      <div className={styles.firstContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.mainTitle}>Kullanıcı Sözleşmesi</div>
        </div>

      <h1 className={styles.baslik}>
        Flexsoft Cari Takip Uygulaması Gizlilik Politikası
      </h1>

      <div className={styles.metinContainer}>
        <h2 className={styles.subHeading}>1. Giriş</h2>
        <p className={styles.paragraph}>
          Bu gizlilik politikası, Flexsoft Cari Takip Uygulaması (“Uygulama”) ile uygulamayı kullanan kullanıcı (“Kullanıcı”) arasında akdedilmiştir. Kullanıcı, Uygulama’yı kullanarak bu gizlilik politikasını kabul etmiş sayılacaktır.
        </p>
        <p className={styles.paragraph}>
          Bu gizlilik politikası kapsamında, kullanıcılarımızdan toplanan bilgilerin hangi amaçlarla işlendiği, nasıl korunduğu ve kullanıcı haklarının neler olduğu açıklanmaktadır. Flexsoft, kullanıcı gizliliğini ve veri güvenliğini önemsemekte ve bu doğrultuda yasal sorumluluklarını yerine getirmektedir.
        </p>

        <h2 className={styles.subHeading}>2. Toplanan Veriler</h2>
        <p className={styles.paragraph}>
          Uygulama kapsamında kullanıcıdan ad, soyad, e-posta adresi ve şifre bilgisi alınmaktadır. Ayrıca kullanıcı tarafından oluşturulan cari hesaplar, cari hareketler (alacak, borç, ödeme, tahsilat), hatırlatıcılar ve bildirim bilgileri kaydedilmektedir. Her kullanıcıya tanımlanan cari hak verisi de uygulama içi işlemler doğrultusunda kaydedilmekte ve yönetilmektedir.
        </p>

        <h2 className={styles.subHeading}>3. Verilerin Kullanım Amaçları</h2>
        <p className={styles.paragraph}>
          Toplanan veriler; kullanıcı girişi ve kimlik doğrulama, cari hesapların ve hareketlerin oluşturulması ve listelenmesi, bakiye hesaplamaları, hatırlatıcı tanımlama ve bildirim gönderimi ile listeleme, cari hak yönetimi ve çeşitli raporlama işlemleri amacıyla kullanılmaktadır.
        </p>


        <h2 className={styles.subHeading}>4. Hatırlatıcılar ve Bildirimler</h2>
        <p className={styles.paragraph}>
          Kullanıcı, cari hareketlere bağlı olarak hatırlatıcılar oluşturabilir. Belirtilen tarih ve saatte, cihazda bildirim izni verilmişse, kullanıcıya hatırlatma bildirimi gönderilir. Bildirimlerin çalışabilmesi için kullanıcıdan açık izin alınır. Kullanıcı bu izni cihaz ayarları üzerinden dilediği zaman değiştirebilir. Flexsoft, bildirimleri yalnızca kullanıcının belirlediği saatlerde bilgilendirme amacıyla gönderir; reklam veya pazarlama içerikleri gönderilmez.
        </p>

        <h2 className={styles.subHeading}>5. Veri Saklama ve Güvenlik</h2>
        <p className={styles.paragraph}>
          Tüm veriler güvenli sunucularda saklanmakta, yetkisiz erişime karşı teknik ve idari önlemlerle korunmaktadır. Şifreler geri döndürülemeyecek şekilde şifrelenmiş biçimde tutulur. Kullanıcı verileri üçüncü kişilerle satılmaz veya ticari amaçla paylaşılmaz.
        </p>

        <h2 className={styles.subHeading}>6. Üçüncü Taraf SDK ve Reklam Entegrasyonları</h2>
        <p className={styles.paragraph}>
          Flexsoft Cari Takip Uygulaması’nda, reklam ve tanıtım faaliyetlerinin yürütülmesi, kampanya performanslarının ölçülmesi, kullanıcı etkileşimlerinin analiz edilmesi, uygulamanın teknik performansının izlenmesi ve kullanıcı deneyiminin iyileştirilmesi amacıyla üçüncü taraf yazılım geliştirme kitleri (SDK) entegre edilebilmektedir.
        </p>
        <p className={styles.paragraph}>
          Bu SDK’lar, kullanıcı davranışları, cihaz bilgileri, reklam tanımlayıcıları, IP adresi ve uygulama içi etkileşim verileri gibi bilgileri toplayabilir. Toplanan veriler, reklam gösterimlerinin optimize edilmesi, yeniden hedefleme yapılması, uygulama içi analizlerin gerçekleştirilmesi ve tanıtım stratejilerinin geliştirilmesi amacıyla kullanılabilir.
        </p>
        <p className={styles.paragraph}>
          Kullanılan SDK’lar; reklam servis sağlayıcıları, analiz araçları ve bildirim servisleri gibi hizmetleri kapsayabilir. Bu kapsamda toplanan veriler, ilgili hizmet sağlayıcıların gizlilik politikaları ve veri koruma standartları çerçevesinde işlenmektedir.
        </p>
        <p className={styles.paragraph}>
          Flexsoft, kişisel verilerin ticari amaçlarla üçüncü taraflara satılmadığını veya izinsiz aktarılmadığını taahhüt eder. Kullanıcılar, uygulama içindeki reklam ve analiz süreçlerine ilişkin tercihlerini cihaz ve uygulama ayarları üzerinden yönetebilir.
        </p>

        <h2 className={styles.subHeading}>7. Hesap Silme</h2>
        <p className={styles.paragraph}>
          Kullanıcılar diledikleri zaman <strong>Flexsoft Cari Takip Uygulaması'nın resmi internet sitesi</strong> üzerinden hesaplarını tamamen silebilir. Hesap silme işlemi sonrasında, kullanıcıya ait tüm bilgiler sistemden geri döndürülemez şekilde kaldırılır.
        </p>
        <p className={styles.paragraph}>
          Kullanıcının hesabını silmeden uygulama içinden yaptığı silme işlemleri yalnızca kullanıcının kendi ekranında görünürlüğü kaldırır, veriler sistemde saklanmaya devam eder. Kalıcı veri silme için resmi hesap silme işlemi gerçekleştirilmelidir.
        </p>

        <h2 className={styles.subHeading}>8. Üçüncü Taraflarla Paylaşım</h2>
        <p className={styles.paragraph}>
          Flexsoft Cari Takip Uygulaması, kullanıcı verilerini ticari amaçlarla üçüncü taraflara satmaz veya izinsiz paylaşmaz. Ancak, 6. maddede belirtilen SDK’lar kapsamında, reklam ve analiz hizmetleri için sınırlı ve amaç odaklı veri paylaşımı yapılabilir. Bu paylaşımlar, yalnızca uygulamanın işleyişini iyileştirmek ve reklam performansını artırmak içindir.
        </p>
        <p className={styles.paragraph}>
          Uygulamada konum takibi veya diğer hassas veriler üçüncü taraflarla paylaşılmaz.
        </p>

        <h2 className={styles.subHeading}>9. Yürürlük</h2>
        <p className={styles.paragraph}>
          Bu gizlilik politikası, Kullanıcı’nın Uygulama’yı kullanmaya başlamasıyla birlikte yürürlüğe girer. Kullanıcı, bu politikayı kabul ederek Uygulama’yı kullanmaya başlamaktadır.
        </p>

        <h2 className={styles.subHeading}>10. Yetkili Mahkeme ve Uygulanacak Hukuk</h2>
        <p className={styles.paragraph}>
          Bu gizlilik politikasından veya Uygulama kullanımından doğabilecek her türlü uyuşmazlık Türkiye Cumhuriyeti kanunlarına tabidir. Taraflar arasında ortaya çıkabilecek uyuşmazlıklarda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
        </p>

        <h2 className={styles.subHeading}>11. Sorumluluk Reddi</h2>
        <p className={styles.paragraph}>
          Flexsoft Cari Takip Uygulaması, her koşulda kesintisiz, hatasız veya tüm kullanıcı beklentilerini eksiksiz karşılayacak şekilde çalışacağına dair herhangi bir garanti vermez. Uygulama kapsamında sunulan tüm veri ve hesaplamalar, kullanıcının sisteme manuel olarak girdiği bilgilere dayanır.
        </p>
        <p className={styles.paragraph}>
          Flexsoft, kullanıcıların cari hesapları ile ilgili yaptığı işlemlerin doğruluğundan veya sonuçlarından sorumlu değildir. Uygulama, yalnızca kullanıcı tarafından girilen veriler doğrultusunda kayıt oluşturur, hareketleri listeler ve raporlama sağlar. Bu nedenle, kullanıcıların uygulama üzerinden elde ettiği bilgilere dayanarak alacak, borç veya ödeme gibi işlemleri yapmadan önce kendi ticari ve hukuki değerlendirmelerini yapmaları önerilir.
        </p>
        <p className={styles.paragraph}>
          Ayrıca, internet bağlantısı sorunları, kullanıcı cihazındaki teknik problemler veya sunucu erişim kesintileri nedeniyle oluşabilecek veri kayıpları ya da hizmet aksaklıklarından Flexsoft sorumlu tutulamaz. Ancak, mümkün olan en iyi hizmetin sağlanması için azami çaba gösterilmektedir.
        </p>
      </div>

      </div>
    </div>
  );
};

export default Politika;
