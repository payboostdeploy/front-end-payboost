import React from "react";
import confirmImg from "../../assets/confirm.png";

const Confirmation = () => {
  return (
    <div className="flex justify-center">
      <div className="p-10 m-10 bg-base-300">
        <div className="flex justify-center ">
          <img src={confirmImg} alt="" />
        </div>
        <div className="text-center ">
          <div>
            <h1 className="text-2xl mt-10 text-center font-bold">
              Thank you for your purchase.
            </h1>
            <h2 className="font-semibold mt-5">
              We require 15-20 minutes to process your order.
            </h2>
          </div>
          <div className=" space-y-3 mt-5">
            <p>
              Please do not pay again until we process your request to avoid
              double payment.
            </p>
            <p>
              You will receive order confirmation through email with details of
              your order.
            </p>
            <p>
              If you have any questions about your order, feel free to contact
              our support.
            </p>
            <h2 className="text-xl font-semibold">
              Need support for your order?
            </h2>
            <h2 className="font-bold">+1 (833) 443-3203</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
