import { useEffect } from "react";
import Layout from "../components/Layout";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletNFTs } from "../hooks/useWalletNFTs";

const Home = () => {
  const wallet = useWallet();
  const updateAuthority = "9u48hDfYSQsEuV9mdKaP31dF1CtqSuxL1mqeBY6Mz1CP";
  const { nfts, loading, fetchNFTs } = useWalletNFTs(updateAuthority);

  useEffect(() => {
    if (wallet.connected) {
      fetchNFTs(wallet.publicKey.toString());
    }
  }, [wallet.connected]);

  return (
    <Layout>
      <div
        id="uni_hero"
        className="uni-hero uk-section-2xlarge uk-section-xlarge@m uk-padding-remove-bottom@m uk-panel"
      >
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
                  <div className="centerText">
                    <h1>Welcome to the coin viewer</h1>
                    <WalletMultiButton />
                    {wallet.connected && (
                      <>
                        <p>Connected wallet: {wallet.publicKey.toString()}</p>
                        <button className="uk-button uk-button-large@m uk-button-gradient uk-margin-small-top"
                          onClick={() => fetchNFTs(wallet.publicKey.toString())}
                          disabled={loading}
                        >
                          {loading ? "Loading..." : "Refresh NFTs"}
                        </button>
                      </>
                    )}

                    {/* Display NFTs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "10px",
          marginTop: "20px",
          padding: "20px",
        }}
      >
        {nfts.map((nft, index) => (
          <div
            key={index}
            style={{ border: "1px solid #ccc", padding: "10px" }}
          >
            <img
              src={nft.image}
              alt={nft.name}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <p>{nft.name}</p>
          </div>
        ))}
      </div>
                  </div>
                 
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
