import React from 'react';
import styles from "./Politika.module.css";
import Head from 'next/head';

const Politika = () => {
  return (
    <div>
      <Head>
        <title>Gizlilik Politikası | Flexsoft Cari Takip Uygulaması</title>
        <meta 
            name="description" 
            content="Flexsoft Cari Takip Uygulaması Gizlilik Politikası." 
        />
      </Head>

      <div className={styles.firstContainer}>
        <div className={styles.metinContainer}>
          <h1>Privacy Policy</h1>
          <p>
            This privacy policy applies to the Flexsoft Cari Takip application (“Application”), developed as a free service by Ahmet Said Demirtaş and Fatih Keleş. This service is provided "AS IS."
          </p>
          <p>
            This policy applies to the Application available on both <strong>Android</strong> and <strong>iOS</strong> platforms. It governs the collection, use, and disclosure of information regardless of the device or operating system used.
          </p>

          <h2>Information Collection and Use</h2>
          <p>
            When you download and use the Application, certain information may be collected. This information may include:
          </p>
          <ul>
            <li>Your device’s IP address,</li>
            <li>Pages you visit within the Application, including dates, times, and duration spent on those pages,</li>
            <li>Total time spent using the Application,</li>
            <li>The operating system of your mobile device.</li>
          </ul>
          <p>
            The Application does not collect your mobile device’s precise location information.
          </p>
          <p>
            The Service Provider may use the information you provide from time to time to contact you, provide important information, send necessary notifications, and offer marketing campaigns.
          </p>
          <p>
            To provide a better experience, the Application may request certain personally identifiable information from you during use. This information is stored by the Service Provider and used in accordance with this privacy policy.
          </p>

          <h2>In-App Purchases</h2>
          <p>
            The Application may offer in-app purchases that allow users to access additional features or services. When you make a purchase through the Application, the transaction is processed securely via the app store platform (Google Play Store or Apple App Store). The Service Provider does not store or have access to your payment information, such as credit card numbers.
          </p>
          <p>
            All purchase history and related billing details are managed by the respective app store and are subject to their privacy policies. For more information, please refer to:
          </p>
          <ul>
            <li><a href="https://policies.google.com/privacy" target="_blank">Google Play Privacy Policy</a></li>
            <li><a href="https://www.apple.com/legal/privacy/" target="_blank">Apple Privacy Policy</a></li>
          </ul>
          <p>
            If you encounter any issues with a purchase, please contact the relevant app store or reach out to us at <a href="mailto:flexsoftwaretr@gmail.com">flexsoftwaretr@gmail.com</a>.
          </p>

          <h2>Third-Party Service Providers</h2>
          <p>
            The Application may use third-party service providers’ tools for purposes such as usage analytics, performance measurement, error reporting, and campaign optimization. These providers may collect anonymous or aggregated data to improve application functionality and user experience.
          </p>
          <p>
            The third-party tools used may change over time. Each of these providers has its own privacy policy and processes data in accordance with those policies.
          </p>

          <h2>Information Sharing</h2>
          <p>
            The Service Provider may share information provided by users or collected automatically only in the following cases:
          </p>
          <ul>
            <li>When legally required (e.g., by court order or official request),</li>
            <li>To protect the rights of the Service Provider, ensure the safety of users or others, investigate fraud, or respond to official requests,</li>
            <li>When working with trusted service providers who do not use the data independently and agree to comply with this privacy policy.</li>
          </ul>

          <h2>Advertising and Campaign Optimization</h2>
          <p>
            The Application does not display ads directly to users. However, SDKs and analytics tools provided by social media platforms or advertising networks may collect anonymous data for marketing and development purposes. Such data is processed only in accordance with the relevant third parties’ privacy policies.
          </p>
          <p>
            User privacy is a priority for the Service Provider. The collected data is used solely to improve application quality and campaign effectiveness.
          </p>

          <h2>Data Retention Policy</h2>
          <p>
            The Service Provider will retain the data you provide as long as you use the Application and for a reasonable period thereafter. If you wish to have your data deleted, please contact us at <a href="mailto:flexsoftwaretr@gmail.com">flexsoftwaretr@gmail.com</a>. Your request will be processed within a reasonable time.
          </p>

          <h2>Children’s Privacy</h2>
          <p>
            The Service Provider does not knowingly collect information from children under the age of 13 or target this age group.
          </p>
          <p>
            The Application is not intended for individuals under 13 years old. If it is discovered that a child under 13 has provided personal information, it will be promptly deleted. If you are a parent or guardian and believe your child has shared personal information, please contact the Service Provider at <a href="mailto:flexsoftwaretr@gmail.com">flexsoftwaretr@gmail.com</a>.
          </p>

          <h2>Security</h2>
          <p>
            The Service Provider implements physical, electronic, and procedural safeguards to protect the confidentiality of your information.
          </p>

          <h2>Changes</h2>
          <p>
            This privacy policy may be updated from time to time for various reasons. Updates will be announced on this page. We recommend reviewing this policy regularly. Continued use of the Application constitutes acceptance of any changes made.
          </p>
          <p>
            This privacy policy is effective as of May 30, 2025.
          </p>

          <h2>Your Consent</h2>
          <p>
            By registering and using the Application, you acknowledge that you have been informed about and have consented to the processing of your personal data for specific purposes, including performance analytics and advertising optimization. During registration, users are presented with an Explicit Consent Text, which details the types of data collected, the purposes of processing, and the potential involvement of third-party service providers.
          </p>
          <p>
            By completing the registration process, you confirm that you have read and accepted the User Agreement and the Explicit Consent Text. Continued use of the Application constitutes consent to the processing of your data as described in this Privacy Policy and the associated consent documentation.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions about privacy while using the Application or want to learn more about the Service Provider’s practices, please contact us at <a href="mailto:flexsoftwaretr@gmail.com">flexsoftwaretr@gmail.com</a>.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Politika;
