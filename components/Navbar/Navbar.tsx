import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";


export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/JClogo.png"
              width={48}
              height={48}
              alt="Jelly Collective Logo"
            />
          </Link>

          
<div></div>
        

            

            <Link href="https://thejellycollective.com/collections" className={styles.link}>
              Collections
            </Link>

           |

           <Link href="https://app.flair.finance/public/claim/137/0xbf06138f8f67a0a8bfa23f6649b594c8c92238d7" className={styles.link}>
              Alpha Rewards
            </Link>

           |

            <Link href="https://jellylab2.vercel.app/" className={styles.link}>
              Lab Jelly Rewardz
            </Link>

           |

            <Link href="https://jelly-goon-z-capture-reward-system.vercel.app/stake" className={styles.link}>
              GoonZ Lab Rewardz
            </Link>

            |

          
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
          </div>
          <br/>
          {address && (
            <Link className={styles.link} href="https://www.sushi.com/swap?fromChainId=137&fromCurrency=NATIVE&toChainId=137&toCurrency=0xbb71538BB1db7c2C8C5bD78D1b443e440b697d66">
              <Image
                className={styles.profileImage}
                src="/gengif.gif"
                width={56}
                height={56}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}