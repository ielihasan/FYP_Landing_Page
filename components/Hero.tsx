import styles from "@/styles/style";
import { discount, robot } from "@/public/assets";
import GetStarted from "./GetStarted";
import Image from "next/image";

const Hero: React.FC = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 animate-fade-in-down">
        <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className="font-josefin text-dimWhite text-[18px] leading-[30.8px] ml-2">
          <span className="text-white">20%</span> Faster{" "}
          <span className="text-white">Queue</span> Management
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-josefin font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] animate-fade-in-left">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 animate-fade-in-right">
          <GetStarted />
        </div>
      </div>
      <h1 className="w-full font-josefin font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] animate-fade-in-left animation-delay-200">
        Queue System.
      </h1>
      <p className="font-josefin text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5 animate-fade-in-up animation-delay-400">
        Smart Business Support Platform revolutionizes customer service with
        intelligent queue optimization. Real-time wait time monitoring,
        automated notifications, and accessibility features ensure seamless
        service delivery for every customer.
      </p>
    </div>
    <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
      <Image
        src={robot}
        alt="Smart Business Support"
        className="w-[100%] h-[100%] relative z-[5] animate-float"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient animate-pulse-slow" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient animate-pulse-slow animation-delay-200" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient animate-pulse-slow animation-delay-400" />
    </div>
    <div className={`${styles.flexCenter} ss:hidden animate-fade-in-up`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
