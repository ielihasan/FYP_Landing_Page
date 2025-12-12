import { apple, bill, google } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Image from "next/image";

const Billing: React.FC = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse} animate-fade-in-left`}>
      <Image
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={`${layout.sectionInfo} animate-fade-in-right`}>
      <h2 className={`${styles.heading2} font-poppins`}>
        Easily control your <br className="sm:block hidden" />
        billing & invoicing.
      </h2>
      <p
        className={`${styles.paragraph} font-poppins max-w-[470px] mt-5 animate-fade-in-right animation-delay-200`}
      >
        Manage your business finances effortlessly with our integrated billing
        system. Track service usage, view transaction history, and download
        invoices anytime. Our secure payment gateway ensures your data remains
        protected.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 animate-fade-in-up animation-delay-400">
        <Image
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer hover:scale-110 transition-transform duration-300"
        />
        <Image
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  </section>
);

export default Billing;
