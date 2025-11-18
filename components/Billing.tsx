import { apple, bill, google } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Image from "next/image";

const Billing: React.FC = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Image
        src={bill}
        alt="token-based printing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Secure token-based <br className="sm:block hidden" /> printing workflow.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Generate unique secure tokens for each print request. Connect with
        nearby print shops and track your printing status in real-time. Ensure
        safe and traceable delivery of your study materials with our automated
        printing system.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Image
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <Image
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
