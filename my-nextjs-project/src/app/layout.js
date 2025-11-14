import './globals.css';
import Navbar from '../../compenents/Navbar';
import Foother from '../../compenents/Foother';
import Script from "next/script"; // ⭐ Bunu ekledik

export const metadata = {
  icons: {
    icon: '/caritakip-logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head></head>
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flex: '1' }}>
            {children}
          </main>
          <Foother />
        </div>

        {/* ⭐ Google Tag (Next.js doğru kullanım) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16778449088"
        />

        <Script id="google-ads-tag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16778449088');
          `}
        </Script>
      </body>
    </html>
  );
}

