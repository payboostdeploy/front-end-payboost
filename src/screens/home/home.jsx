import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Home = () => {
  const [limitOnAmount, setAmountLimit] = useState();
  const [nameError, setNameError] = useState("");
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

    if (name === "accountHolder") {
      if (/\d/.test(value)) {
        setNameError("Account Holder Name should not contain numbers");
        return;
      }
      if (value.length < 3) {
        setNameError("Account Holder Name should be at least 3 characters");
        return;
      } else {
        setNameError("");
      }
    }

    if (name === "phoneNumber" || name === "confirmPhoneNumber") {
      if (!value.startsWith("+1")) return;
      if (value.length > 12) return;
    }
    if (name === "pin") {
      if (value.length > 4) return;
      if (parseInt(value) < 0) return;
    }
    if (name === "amountToPay") {
      if (parseInt(value) < 0) return;
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
            <h2 className="text-lg font-semibold">
              Let's start with the Account holder name you want to pay
            </h2>
            <label className="label">
              <span className="label-text">Account Holder Name</span>
            </label>
            <div className="flex flex-col md:flex-row">
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full"
                name="accountHolder"
                value={formData.accountHolder}
                onChange={handleChange}
                required
              />
            </div>
            {nameError && <p className="text-red-600 mt-3">{nameError}</p>}
          </div>

          <div className="form-control">
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
            <h2 className="text-lg font-semibold">
              Please let us know how much money should be added to your Boost
              Mobile number.
            </h2>
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

        <div>
          <div className="font-bold mt-4 text-2xl mb-2">
            Welcome to Pay Boost Bills
          </div>
          <p className="py-4">
            At Pay Boost Bills, we simplify the process of managing your Boost
            Mobile payments. Our goal is to provide a simple, user-friendly way
            to pay your Boost Mobile bill quickly and securely. Whether you’re a
            regular customer or just need to make a one-time payment, we’ve got
            you covered.
          </p>
          <div>
            <div className="font-bold mt-4 text-2xl">
              Pay Boost Mobile Bill as Guest
            </div>
            <p className="py-4">
              For quick payments without the hassle of logging in, you can{" "}
              <span className="font-semibold">
                pay your Boost Mobile bill as a guest.
              </span>{" "}
              This feature is perfect for those who may not have their account
              details on hand or anyone who pays on behalf of another user. Our
              guest payment process is convenient and secure, ensuring that your
              payment is processed efficiently. At Pay Boost Bills, we simplify
              the process of managing your Boost Mobile payments. Our goal is to
              provide a simple, user-friendly way to pay your Boost Mobile bill
              quickly and securely. Whether you’re a regular customer or just
              need to make a one-time payment, we’ve got you covered.
            </p>
          </div>
          <div>
            <div className="font-bold mt-4 mb-4 text-xl">
              Here’s how you can pay your Boost Mobile bill as a guest:
            </div>
            <ol className="list-disc	 space-y-6 pl-5  ">
              <li>
                <div className="ml-4">
                  Visit our homepage and select the "Guest Payment" option.
                </div>{" "}
              </li>
              <li>
                <div className="ml-4">
                  Enter your phone number and the amount you wish to pay.
                </div>{" "}
              </li>
              <li>
                <div className="ml-4">Provide your payment details and confirm the transaction.</div>{" "}

              </li>
            </ol>
            <p className="py-4 mt-4">Our platform is designed to make this process as smooth as possible, so you can get back to what matters most without any delays.</p>
            <div>
              <div className="font-bold mt-4 text-2xl">
                Pay My Boost Mobile Bill with PayPal
              </div>
            </div>
            <p className="py-4">For those who prefer using PayPal for their transactions, we offer a convenient option to <span className="font-semibold">pay your Boost Mobile bill with PayPal.</span> PayPal provides an additional layer of security and ease, allowing you to manage your finances with confidence.</p>
            <div className="font-bold mt-4 mb-4 text-xl">
              To pay your Boost Mobile bill with PayPal:
            </div>
            <ol className="list-disc	 space-y-6 pl-5  ">
              <li>
                <div className="ml-4">
                  Enter your phone number and the payment amount.
                </div>{" "}
              </li>
              <li>
                <div className="ml-4">
                  Log into your PayPal account and complete the transaction.
                </div>{" "}
              </li>
              <li>
                <div className="ml-4">Provide your payment details and confirm the transaction.</div>{" "}

              </li>
            </ol>
            <p className="py-4">Using PayPal not only makes payments faster but also keeps your financial information secure. At Pay Boost Bills, we put your privacy and security first, and use advanced encryption techniques to protect your data.</p>

            <div className="font-bold mb  -4 mt-4 text-2xl mb-2">
              Why Choose Pay Boost Bills?

            </div>
            <ol className="list-disc space-y-6 pl-5  ">
              <li>
                <div className="ml-4">
                  <span className="font-semibold">Convenience: </span> Pay your Boost Mobile bill easily, whether as a guest or through PayPal.
                </div>{" "}
              </li>
              <li>
                <div className="ml-4">
                  <span className="font-semibold">Security</span> Our platform uses the latest security technologies to protect your information.
                </div>{" "}
              </li>
              <li>
                <div className="ml-4"><span className="font-semibold">User-Friendly: </span> Designed for ease of use, ensuring a hassle-free payment experience.</div>{" "}

              </li>
            </ol>
            <p className="py-4">Join the countless users who have made paying their Boost Mobile bills easier and more efficient with Pay Boost Bills. If you have any questions or need assistance, our dedicated customer support team is here to help. Experience the convenience of hassle-free payments by visiting our homepage today.</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Home;