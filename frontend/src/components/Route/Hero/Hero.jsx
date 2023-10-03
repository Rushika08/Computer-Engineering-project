import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://wallpaperaccess.com/full/2286651.jpg)",
        backgroundSize: "100% 100%",
        //filter: "brightness(70%)",
      }}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black opacity-30`}
        style={{ filter: "brightness(50%)" }}
      ></div>
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#ffffff] font-[600] capitalize`}
        >
          Reviving Resources, <br /> Preserving the Planet.
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#ffffff]">
        Discover a New Way to Reduce, Reuse, and Connect! Welcome to our platform, <br/>
        where you can easily sell your waste to collectors. Find local collectors through <br/>
        our marketplace and join the recycling revolution today.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Discover Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
