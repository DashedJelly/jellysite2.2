import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/background2.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          
          <div className={styles.heroAssetFrame}>
            
          <br/>
          <div className={styles.heroBodyContainer}>
            
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                
                <span className={styles.heroTitleGradient}>
                  The Jelly Collective
                </span>
                <br />
                 
              </h1>
              <h1 className={styles.heroSubtitle}>
              <div>  ° Community - Utility - Art - Charity °
                <br/>
                º An Evolved PFP Project º
                <br/>
                Community Driven & Nestled Firmly on the
                <br/>
                Polygon Blockchain</div>
              
              
                <br/><br/>
                
              </h1>

              <div className={styles.heroCtaContainer}>
                
                <Link className={styles.heroCta} href="https://ipfs-2.thirdwebcdn.com/ipfs/QmRtKLLjdksJtcFhYd7mFx4yoAhgtfrcREAP3Dncsnzoqm?contract=0x83b8D9070bFD74eed1b70eB0539b45668cA31724&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%7D&theme=dark&primaryColor=purple">
                  Alpha Jelly MINT
                </Link>

                <Link className={styles.heroCta} href="https://ipfs-2.thirdwebcdn.com/ipfs/QmRtKLLjdksJtcFhYd7mFx4yoAhgtfrcREAP3Dncsnzoqm?contract=0x070f195b6aa5db85C9967B0f1A15d6Ca1dE2bdd1&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%7D&theme=dark&primaryColor=purple">
                  Jelly3DropZ MINT
                </Link>

                <Link className={styles.heroCta} href="https://the-jelly-market.vercel.app/">
                  $Jelly Market
                </Link>

                <Link className={styles.heroCta} href="https://www.paws.org">
                  PAWS : Charity
                </Link>

                
              </div>

              <h1 className={styles.heroSubtitle}>
              <div>  Interdimensionl Jellified Beings Discovered 
                <br/>travelling through portals into Our dimention.

                <br/>
                These Jell-intelligent lifeforms have been found to have hundreds of Original Traits and Characteristics.
                <br/>
                And a Love for Bread 🍞
                <br/>

                A Multi-Collection Collective each with its own Utility
                <br/>
                Working together to create the Jelly EcoSystem
                <br/>
                -------------------------------------------------------------------
                </div>
                </h1>
                

                <h1 className={styles.heroSubtitle2}>
                <br/>
                Our Alpha Collection Mint Contributes 25% of every mint to our Charity Partner : <b>PAWS</b>
                <br/>
                The Progressive Animal Welfair Society, 
                <br/>
                A Non Profit Rehabilitation project that Helps
                <br/>
                Wild and domesticated animals get back to their homes aswell as,
                <br/>
                Helps Educated the Community on ways they can help share this world with our Furry Friends.
                
                <Image
              
              src="/pawsbanner2.jpeg"
              width={1000}
              height={250}
              alt=" marketplace"
              quality={100}
              className={styles.heroAsset}
              
            />
              
      
              </h1>
              </div>
              <div className={styles.heroAssetFrame2}>
          
              
            </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            Made Fresh by Dash
          </footer>
          </div>
       
      
    
  );
};

export default Home;
