import React from "react";
import GetStarted from "./GetStarted";

import styles from "../style";
import { discount, robot } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* Discount Bar */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient uppercase rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount for{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        {/* NextGenretion Payment Method */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-white flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            The Next
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>

          {/* Get Started Button */}
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        {/* Payment method description */}
        <h1 className="text-white font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full">
        Payment Method.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
        We examine annual percentage rates, annual fees.
        </p>
      </div>

      {/* Billing image */}
      <div className={`flex flex-1 ${styles.flexCenter} relative`}>
        <img src={robot} alt="billing" className="relative w-[100%] h-[100%] z-[5]" />
        <div className="absolute w-[20%] h-[15%] top-0 z-[0] pink__gradient" />
        <div className="absolute w-[80%] h-[80%] bottom-40 z-[1] rounded-full white__gradient" />
        <div className="absolute w-[50%] h-[50%] right-20 bottom-20 z-[0] blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
