import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Home = () => {
  const [limitOnAmount, setAmountLimit] = useState();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: "+1",
    confirmPhoneNumber: "+1",
    amountToPay: "",
    pin: "",
  });

  const inputRef = useRef(null);
  const SecinputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phoneNumber" || name === "confirmPhoneNumber") {
      if (!value.startsWith("+1")) return;
      if (value.length > 12) return;
    }
    if (name === "pin") {
      if (value.length > 4) return;
      // Prevent negative pin numbers
      if (parseInt(value) < 0) return;
    }
    if (name === "amountToPay") {
      // Prevent negative amount
      if (parseInt(value) < 0) return;
      // Prevent amount starting with 0
      if (value.startsWith("0")) return;
      if (value > 200) {
        setAmountLimit("Amount must be in between 10 and 200");
        return;
      } else {
        setAmountLimit(null);
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.phoneNumber.length !== 12 ||
      formData.confirmPhoneNumber.length !== 12
    ) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "There should be 10 digits after +1",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    if (formData.phoneNumber !== formData.confirmPhoneNumber) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Phone numbers do not match",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    if (formData.amountToPay < 10 || formData.amountToPay > 200) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Amount must be between 10 and 200",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    if (formData.pin.length !== 4) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "PIN should be 4 digits",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    await Swal.fire({
      position: "center",
      icon: "success",
      title: "Checking out",
      showConfirmButton: false,
      timer: 1500,
    });

    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("Form Data:", formData);
    navigate("checkout");
  };

  function disableWheel(e) {
    e.preventDefault();
  }

  return (
    <div
      id="home-div"
      className="hero gap-10 mb-20 min-h-screen flex flex-col items-center justify-center space-y-8 md:space-y-16 px-4"
    >
      <div className="card mt-10 w-full border border-slate-700 md:w-2/4 max-w-4xl shadow-xl bg-base-200 p-3">
        <form className="card-body space-y-4" onSubmit={handleSubmit}>
          <h1 className="text-center text-2xl font-bold">
            Boost Mobile Refill
          </h1>
          <div className="form-control">
            <h1 className="text-lg font-semibold">
              Let's start with the phone number you want to pay
            </h1>
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <div className="flex flex-col md:flex-row">
              <input
                type="text"
                placeholder="+1 xxxxxxxxxx"
                className="input input-bordered w-full"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Phone Number</span>
            </label>
            <div className="flex flex-col md:flex-row">
              <input
                type="text"
                placeholder="+1 xxxxxxxxxx"
                className="input input-bordered w-full"
                name="confirmPhoneNumber"
                value={formData.confirmPhoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <hr />
          <div className="form-control">
            <h1 className="text-lg font-semibold">
              Please let us know how much money should be added to your Boost
              Mobile number.
            </h1>
            <label className="label">
              <span className="label-text">Amount to Pay</span>
            </label>
            <input
              type="number"
              placeholder="Amount to pay"
              className="input input-bordered w-full"
              name="amountToPay"
              value={formData.amountToPay}
              onChange={handleChange}
              required
              onFocus={() => {
                if (inputRef.current) {
                  inputRef.current.addEventListener("wheel", disableWheel, {
                    passive: false,
                  });
                }
              }}
              onBlur={() => {
                if (inputRef.current) {
                  inputRef.current.removeEventListener("wheel", disableWheel);
                }
              }}
              ref={inputRef}
            />
            <p className="text-red-600 mt-3">{limitOnAmount}</p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">4 Digit PIN</span>
            </label>
            <input
              type="number"
              placeholder="4 digit PIN"
              className="input input-bordered w-full"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
              required
              onFocus={() => {
                if (SecinputRef.current) {
                  SecinputRef.current.addEventListener("wheel", disableWheel, {
                    passive: false,
                  });
                }
              }}
              onBlur={() => {
                if (SecinputRef.current) {
                  SecinputRef.current.removeEventListener(
                    "wheel",
                    disableWheel
                  );
                }
              }}
              ref={SecinputRef}
            />
          </div>
          <div className="form-control">
            <button
              type="submit"
              className="btn border border-slate-600 transition-colors duration-300 hover:bg-white hover:text-black rounded-md mx-auto w-full md:w-2/3"
            >
              Next
            </button>
          </div>
        </form>
      </div>
      <div
        id="steps-div"
        className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl space-y-4 md:space-y-0 md:space-x-6"
      >
        <div className="card bg-base-200 border border-slate-700 flex-grow min-w-full md:min-w-[200px] shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Step No 1</h2>
            <p>Enter Your Mobile Number</p>
          </div>
        </div>
        <FaArrowAltCircleRight className="rotate-90 md:rotate-0" size={24} />
        <div className="card bg-base-200 border border-slate-700 flex-grow min-w-full md:min-w-[200px] shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Step No 2</h2>
            <p>Enter your due amount</p>
          </div>
        </div>
        <FaArrowAltCircleRight className="rotate-90 md:rotate-0" size={24} />
        <div className="card bg-base-200 border border-slate-700 flex-grow min-w-full md:min-w-[200px] shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Step No 3</h2>
            <p>Check out</p>
          </div>
        </div>
      </div>
      <div id="content" className="p-5 shadow-2xl rounded-lg w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 ">
          How do I pay my bill online?
        </h2>
        <h3 className="text-xl mt-10 font-bold mb-2">
          Paying boost mobile bill with PayPal
        </h3>
        <div className="mb-8">
          <p className="mb-4">Check out the Pay Boost Bills website</p>
          <p>
            Go to Pay Boost Bills and login to your account. If you don’t have
            an account, sign up to get started.
          </p>
        </div>
        <ol className="list-decimal space-y-6 pl-5 mb-4">
          <li>
            <div className="font-bold">
              Enter your Boost Mobile account details
            </div>{" "}
            Enter your Boost Mobile account number and payment amount.
          </li>
          <li>
            <div className="font-bold">Select PayPal as Payment Method</div>{" "}
            Select PayPal as your preferred payment method. You will be
            redirected to the PayPal login page.
          </li>
          <li>
            <div className="font-bold">Login to your PayPal account</div> Enter
            your PayPal credentials to sign in and confirm payment.
          </li>
          <li>
            <div className="font-bold">Confirm and pay the bill</div> Check your
            payment details and click ‘Confirm’ to complete the transaction. You
            will receive a confirmation email from Pay Boost Bills and PayPal.
          </li>
        </ol>
        <h3 className="text-xl mt-10 font-bold mb-2">Paying by debit card</h3>
        <div className="mb-8">
          <p className="mb-4">Check out the Pay Boost Bills website</p>
        </div>
        <ol className="list-decimal space-y-6 pl-5 mb-4">
          <li>
            <div className="font-bold">
              Enter your Boost Mobile account details
            </div>{" "}
            Fill in your Boost Mobile account number and payment amount.
          </li>
          <li>
            <div className="font-bold">
              Choose a debit card as a payment option
            </div>{" "}
            Select the debit card option for the payment method.
          </li>
          <li>
            <div className="font-bold">Enter the debit card details</div>{" "}
            Provide your debit card information.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
