// app/hakkimizda/page.js
import styles from './Hakkimizda.module.css';

export const metadata = {
  title: 'Hakkımızda | Flexsoft',
  description:
    'Flexsoft, yazılım ve teknoloji alanında yenilikçi çözümler sunan dinamik bir şirkettir. Mobil ve web tabanlı yazılım çözümleriyle işletmelerin dijital dönüşümünü destekliyoruz.',
};

export default function Hakkimizda() {
  return (
    <div>
      <div className={styles.firstContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.mainTitle}>Hakkımızda</div>
        </div>
        <h1 className={styles.baslik}>
          Flexsoft: Yazılımda Güvenilir Ortağınız ve Mobil Cari Takip Çözümü
        </h1>

        <div className={styles.metinContainer}>
          <p className={styles.paragraph}>
            Flexsoft, yazılım ve teknoloji alanında faaliyet gösteren, kullanıcı odaklı, esnek ve yenilikçi çözümler üreten bir teknoloji firmasıdır. 
            Kuruluşumuzdan itibaren, dijital dönüşümün gücüne inanarak, müşterilerimizin iş süreçlerini kolaylaştırmak ve verimliliklerini artırmak için mobil ve web platformlarda kapsamlı yazılım geliştirme hizmetleri sunuyoruz.
          </p>

          <p className={styles.paragraph}>
            Firmamızın temel uzmanlık alanlarından biri, <strong>hem mobil uygulama geliştirme</strong> hem de <strong>web tabanlı çözümler üretme</strong> konusudur. 
            Bu sayede, müşterilerimizin her platformda, ister ofiste ister hareket halindeyken, en iyi deneyimi yaşamasını sağlıyoruz. 
            Modern teknolojileri kullanarak geliştirdiğimiz mobil uygulamalar, performans ve kullanıcı dostu tasarımı ön planda tutarken; web çözümlerimiz kurumsal ihtiyaçlara güçlü ve sürdürülebilir altyapılar sunar.
          </p>

          <p className={styles.paragraph}>
            Geliştirdiğimiz yazılımlar arasında kurumsal web siteleri, e-ticaret platformları, ürün tanıtım siteleri ve özel iş yazılımları yer almaktadır. 
            Projelerimizi, müşteri taleplerine uygun şekilde özelleştiriyor, sade ve kolay anlaşılır arayüzler ile kullanıcıların işlerini kolaylaştırıyoruz. 
            Flexsoft’un mobil ve web çözümleri, işletmelerin dijital varlıklarını güçlendirmeye, süreçlerini hızlandırmaya ve rekabet avantajı sağlamaya yöneliktir.
          </p>

          <p className={styles.paragraph}>
            Bu kapsamda geliştirdiğimiz ürünlerden biri olan <strong>Flexsoft Cari Takip</strong>, bireysel kullanıcılar ve küçük işletmeler için tasarlanmış, 
            borç-alacak, tahsilat ve ödeme işlemlerini hızlıca takip etmeye imkân tanıyan mobil ön muhasebe uygulamasıdır. 
            Uygulama, <strong>çoklu para birimi desteği</strong>, <strong>gelişmiş raporlama araçları</strong>, <strong>otomatik hatırlatıcı sistemi</strong> ve <strong>PDF ekstre oluşturma</strong> gibi güçlü özellikleriyle kullanıcılarına pratik ve güvenli bir deneyim sunar.
          </p>

          <p className={styles.paragraph}>
            Flexsoft Cari Takip, sadece bir mobil uygulama değil; aynı zamanda Flexsoft’un yazılım geliştirme konusundaki uzmanlığının, kullanıcı ihtiyaçlarına verdiği yanıtın ve teknolojideki yenilikçi bakış açısının somut bir yansımasıdır. 
            Bu ürünle, iş süreçlerinizi dijitalleştirirken, finansal takibinizi her an her yerden kolayca yönetmenizi amaçlıyoruz.
          </p>

          <p className={styles.paragraph}>
            Firmamız, yazılım geliştirmede yalnızca teknik çözümler sunmakla kalmayıp, müşterileriyle uzun soluklu iş birlikleri kurmaya ve onları dijital dönüşüm yolculuklarında desteklemeye odaklanmıştır. 
            Esnek, güvenilir ve kullanıcı dostu yazılımlarımızla, her büyüklükteki işletmenin ihtiyaçlarına yanıt veriyor, iş süreçlerini sadeleştiriyor ve rekabet güçlerini artırıyoruz.
          </p>

          <p className={styles.paragraph}>
            Teknolojiyi iş dünyasına en faydalı şekilde entegre etmek için sürekli olarak yeni teknolojileri takip ediyor, alanında uzman ekibimizle en iyi çözümleri geliştiriyoruz. 
            Mobil ve web geliştirmede sunduğumuz kapsamlı hizmetler, işlerinizi dijital çağa taşırken aynı zamanda size zamandan ve maliyetten tasarruf sağlar.
          </p>

          <p className={styles.paragraph}>
            Siz de iş süreçlerinizi dijitale taşımak, teknolojinin sunduğu tüm avantajlardan faydalanmak ve mobil ile web platformlarında etkin çözümler arıyorsanız, Flexsoft olarak yanınızdayız. 
            Flexsoft Cari Takip ve diğer yazılım çözümlerimizle işinizi kolaylaştırmak ve büyütmek için bize güvenebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}


