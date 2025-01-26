import "../public/assets/css/theme/main.min.css"; // Global styles
import "../public/assets/css/fa.min.css"; // Global styles
import "../public/assets/css/swiper-bundle.min.css"; // Swiper styles
import "../public/assets/css/uikit.min.css"; // UIkit styles

import Script from "next/script"; // For efficient script handling

function MyApp({ Component, pageProps }) {
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;