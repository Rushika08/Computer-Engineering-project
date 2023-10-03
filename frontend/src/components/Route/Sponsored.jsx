import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://zerotrash.lk/assets/frontend/img/partners/plastic_cycle.jpg"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://zerotrash.lk/assets/frontend/img/partners/wma.jpg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://zerotrash.lk/assets/frontend/img/partners/recyclerassociation.jpg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        
      </div>
    </div>
  );
};

export default Sponsored;
