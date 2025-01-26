import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
       <div
      id="uni_hero"
      className="uni-hero uk-section-2xlarge uk-section-xlarge@m uk-padding-remove-bottom@m uk-panel"
    >
      {/* Background Overlay */}
      <div
        className="uk-position-top uk-position-z-index-negative uk-overflow-hidden uk-blend-overlay"
        data-uk-height-viewport=""
        style={{ minHeight: "calc(100vh)" }}
      >
        <img
          className="uk-position-top-left uk-position-fixed uk-blur-large"
          style={{ left: "-4%", top: "-4%" }}
          width="500"
          src="/assets/images/gradient-circle.svg"
          alt="Circle"
        />
        <img
          className="uk-position-bottom-right uk-position-fixed uk-blur-large"
          style={{ right: "-4%", bottom: "-4%" }}
          width="500"
          src="/assets/images/gradient-circle.svg"
          alt="Circle"
        />
      </div>

      {/* Background Image */}
      <div
        className="uk-position-top uk-position-z-index-negative uk-opacity-50"
        data-uk-height-viewport=""
        style={{ minHeight: "calc(100vh)" }}
      >
        <div
          className="uk-position-cover uk-background-cover dark:uk-hidden"
          data-src="/assets/images/gradient-02.png"
          data-uk-img=""
        ></div>
      </div>

      {/* Hero Content */}
      <div className="uk-panel uk-position-z-index">
        <div className="uk-container">
          <div className="uk-panel">
            <div
              className="uk-grid uk-grid-2xlarge uk-flex-middle uk-flex-between uk-grid-stack"
              data-uk-grid=""
              data-uk-height-viewport="offset-top: true;"
              style={{ minHeight: "calc(-80px + 100vh)" }}
            >
              <div
                className="uk-width-1-1 uk-flex uk-flex-center uk-flex-middle uk-first-column"
                style={{ height: "100vh" }}
              >
                <p>NFT EXAMPLE
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Home;