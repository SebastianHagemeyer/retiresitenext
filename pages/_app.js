import "../public/assets/css/theme/main.min.css"; // Global styles
import "../public/assets/css/fa.min.css"; // Global styles
import "../public/assets/css/swiper-bundle.min.css"; // Swiper styles
import "../public/assets/css/uikit.min.css"; // UIkit styles

import Script from "next/script"; // For efficient script handling


import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css'; // Wallet styles



function MyApp({ Component, pageProps }) {

  const network = WalletAdapterNetwork.Mainnet; // Change to Devnet for development
  const endpoint = clusterApiUrl(network);

  const wallets = [new PhantomWalletAdapter()];


  return (
    <>
      {/* Critical Scripts */}
      <Script src="/assets/js/uikit.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/uikit-components.js" strategy="beforeInteractive" />
      <Script src="/assets/js/app-head.js" strategy="beforeInteractive" />

      {/* Non-Critical Scripts */}
      <Script src="/assets/js/jquery.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/swiper-bundle.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/feather.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/typed.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/anime.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/app.js" strategy="lazyOnload" />
      <Script src="/assets/js/swiper-helper.js" strategy="lazyOnload" />
      <Script src="/assets/js/typed-helper.js" strategy="lazyOnload" />
      <Script src="/assets/js/anime-helper.js" strategy="lazyOnload" />
      <Script src="/assets/js/anime-helper-defined-timelines.js" strategy="lazyOnload" />

      {/* Dark/Light Schema Toggle Logic */}
      <Script id="schema-toggle" strategy="afterInteractive">
        {`
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const getSchema = urlParams.get("schema");

          if (getSchema === "dark") {
            document.documentElement.classList.add("uk-dark");
            localStorage.setItem("darkMode", "1");
          } else if (getSchema === "light") {
            document.documentElement.classList.remove("uk-dark");
            localStorage.setItem("darkMode", "0");
          }
        `}
      </Script>

      {/* Render the Component */}
      <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Component {...pageProps} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    </>
  );
}

export default MyApp;