import { card } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Button from "./Button";
import Image from "next/image";

const CardDeal: React.FC = () => (
  <section className={`${layout.section}`}>
    <div className={`${layout.sectionInfo} animate-fade-in-left`}>
      <h2 className={`${styles.heading2} font-josefin`}>
        Optimize queue flow <br className="sm:block hidden" />
        in few easy steps.
      </h2>
      <p
        className={`${styles.paragraph} font-josefin max-w-[470px] mt-5 animate-fade-in-left animation-delay-200`}
      >
        Streamline your customer service with our intelligent queue management
        system. Set up virtual queues, send real-time notifications, and track
        customer flow with ease. Our accessibility-first approach ensures every
        customer receives seamless service. No complicated setup, just efficient
        queue management.
      </p>
      <Button styles="mt-10 animate-fade-in-left animation-delay-400" />
    </div>
    <div className={`${layout.sectionImg} animate-fade-in-right`}>
      <Image src={card} alt="queue_dashboard" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
