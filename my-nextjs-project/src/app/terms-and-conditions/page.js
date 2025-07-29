import React from 'react';
import styles from "./Kullanim.module.css";
import Head from 'next/head';

const KullanımSartlari = () => {
  return (
    <div>
      <Head>
        <title>Şartlar ve Koşullar | Flexsoft Cari Takip Uygulaması</title>
        <meta 
          name="description" 
          content="Flexsoft Cari Takip Uygulaması Şartlar ve Koşullar." 
        />
      </Head>

      <div className={styles.firstContainer}>
        <div className={styles.metinContainer}>
          <h1 className={styles.baslik}>Terms & Conditions</h1>

          <p className={styles.paragraph}>
            These terms and conditions apply to the Flexsoft Cari Takip app (hereby referred to as "Application") for mobile devices created by Ahmet Said Demirtaş and Fatih Keleş (hereby referred to as "Service Provider") as a Free service. These terms cover both Android (Google Play) and iOS (App Store) versions of the Application.
          </p>

          <p className={styles.paragraph}>
            Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application.
          </p>

          <p className={styles.paragraph}>
            Unauthorized copying or modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted.
          </p>

          <p className={styles.paragraph}>
            All intellectual property rights remain the property of the Service Provider.
          </p>

          <p className={styles.paragraph}>
            The Service Provider reserves the right to modify the Application or charge for services at any time, and any charges will be communicated clearly.
          </p>

          <p className={styles.paragraph}>
            The Application stores and processes personal data to provide the Service. It is your responsibility to maintain device security. Jailbreaking or rooting your phone is strongly discouraged.
          </p>

          <h2 className={styles.subHeading}>In-App Purchases</h2>
          <p className={styles.paragraph}>
            The Application offers optional in-app purchases that allow access to additional features or content. These purchases are handled through the respective app stores (Google Play or App Store), and their terms apply.
          </p>
          <p className={styles.paragraph}>
            Prices and availability of in-app purchases may change without prior notice. All purchases are final and non-refundable unless required by applicable law or app store policies.
          </p>

          <h2 className={styles.subHeading}>Third-Party Services</h2>
          <p className={styles.paragraph}>
            The Application may use third-party services that have their own Terms and Conditions.
          </p>

          <h2 className={styles.subHeading}>Connectivity & Charges</h2>
          <p className={styles.paragraph}>
            The Application requires an internet connection. The Service Provider is not responsible if full functionality is not available due to internet issues or mobile data limits.
          </p>

          <p className={styles.paragraph}>
            You are responsible for any charges from your mobile network provider including roaming fees.
          </p>

          <h2 className={styles.subHeading}>Device Responsibilities</h2>
          <p className={styles.paragraph}>
            It is your responsibility to keep your device charged. If your device runs out of battery and the Service is unavailable, the Service Provider is not responsible.
          </p>

          <h2 className={styles.subHeading}>Updates</h2>
          <p className={styles.paragraph}>
            The Application may be updated. The Service Provider is not obligated to maintain compatibility with all operating system versions. By using the app, you agree to accept updates when offered.
          </p>

          <p className={styles.paragraph}>
            The Service Provider may terminate the Application and usage rights at any time without notice.
          </p>

          <h2 className={styles.subHeading}>Changes to These Terms and Conditions</h2>
          <p className={styles.paragraph}>
            The Service Provider may periodically update these Terms and Conditions. Please review this page regularly.
          </p>

          <p className={styles.paragraph}>
            <strong>Effective Date:</strong> 2025-05-30
          </p>

          <h2 className={styles.subHeading}>Contact Us</h2>
          <p className={styles.paragraph}>
            If you have any questions or suggestions about the Terms and Conditions, please contact the Service Provider at <a href="mailto:flexsoftwaretr@gmail.com">flexsoftwaretr@gmail.com</a>.
          </p>
        </div>
      </div>

    </div>
  );
};

export default KullanımSartlari;
