import { useState } from "react";
import emailjs from "@emailjs/browser";
import address from "../../assets/contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0k58rjq",
        "template_qe2jfj6",
        formData,
        "gpf30VYp_SYQ1rlws"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank you for your message. It has been sent.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Sorry, something went wrong. Please try again.");
      });
  };

  return (
    <>
      <div className="flex flex-wrap-reverse justify-center">
        <div className="p-10 flex flex-col justify-center items-center w-full lg:w-1/2 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <h2 className="text-3xl lg:text-5xl font-semibold mb-4">
              GET IN TOUCH WITH US
            </h2>
            <p className="text-lg">
              Give us a call or drop by anytime, we answer all enquiries within
              24 hours.
            </p>
          </div>

          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="w-full mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                maxLength="100"
                className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                name="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                className="border bg-base-300 hover:bg-black transition-colors duration-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-center w-3/4 lg:w-1/2 p-10">
          <img
            className="w-full h-auto lg:w-3/4"
            src={address}
            alt="Contact"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <div id="content" className="max-w-full px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-5xl text-center font-bold mt-2 mb-8">Contacts</h1>
        <p className="mb-4">
          We are here to help you with all your bill payment needs at Pay Boost
          Bills. Whether you have a question about our services, need assistance
          with a payment, or want to provide feedback, we are always ready to
          assist.
        </p>
        <div className="my-7">
          <strong>Customer Support</strong>
          <p>
            For any inquiries or support requests, please contact our customer
            support team. We are available 24/7 to ensure you receive the help
            you need.
          </p>
        </div>
        <div className="mb-4 ">
          <ul className="list-disc space-y-4 pl-4">
            <li>
              <strong>Phone:</strong> Call us at{" "}
              <a href="tel:+13478093331">+1 (833) 443-3203</a> for immediate
              assistance.
            </li>
            <li>
              <strong>Email:</strong> Send us an email at{" "}
              <a href="mailto:Contact@payboostbills.com">
                Contact@payboostbills.com
              </a>
              , and one of our representatives will get back to you as soon as
              possible.
            </li>
            <li>
              <strong>Live Chat:</strong> Use our live chat feature on the
              website for real-time support from one of our customer service
              agents.
            </li>
            <li>
              <strong>Social Media:</strong> Connect with us on social media for
              the latest updates and promotions.
              <ul className="list-disc pl-4">
                <li>
                  <a href="https://www.facebook.com/PayBoostBills">
                    Facebook: Pay Boost Bills
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/PayBoostBills">
                    Twitter: @PayBoostBills
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/PayBoostBills/">
                    Instagram: @PayBoostBills
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <p className="mb-4">
          <strong>Feedback:</strong> We value your feedback and are constantly
          looking to improve our services. Please send your suggestions or
          comments to{" "}
          <a href="mailto:feedback@payboostbills.com">
            feedback@payboostbills.com
          </a>
          .
        </p>
        <p className="mb-4">
          Thank you for choosing Pay Boost Bills for your bill payment needs. We
          look forward to serving you!
        </p>
      </div>
    </>
  );
};

export default Contact;
