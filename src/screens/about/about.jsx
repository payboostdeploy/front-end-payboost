import missionImg from '../../assets/ourmission.png';

const About = () => {
    return (
        <div className='flex flex-wrap lg:flex-nowrap justify-center p-6 md:p-12'>
            <div className='w-3/4 lg:w-1/2 flex justify-center items-center lg:order-2 mb-6 lg:mb-0'>
                <img src={missionImg} className='w-full lg:w-3/4' alt="Our Mission" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col shadow-2xl items-center justify-center">
                <div className="p-6 rounded-lg shadow-md ">
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-center">About Us</h2>
                    <p className="text-lg mb-4">
                        Welcome to Pay Boost Bills, your trusted partner for simple and effective payment solutions. At Pay Boost Bills, we understand the hassle and stress that can come with managing multiple monthly payments. That’s why we’re dedicated to creating an easy-to-use platform that simplifies the entire process, and gives you more time to focus on what really matters
                    </p>
                    <p className="text-lg mb-4">
                        Our mission is simple: to pay bills quickly, securely and hassle-free. Whether you’re paying utility bills, phone bills, or other recurring expenses, Pay Boost Bills offers the perfect solution to keep your finances running. Our platform is built with the latest technology to ensure every transaction is smooth and secure.
                    </p>
                    <p className="text-lg mb-4">
                        With Pay Boost Bills, you can manage all your payments in one place. Our user-friendly interface lets you set up automatic payments, track your payment history, and receive timely reminders to ensure you never miss a due date Moreover, by way paying for your Boost Mobile via PayPal, we make it easy to customize to suit your lifestyle and we offer.
                    </p>
                    <p className="text-lg mb-4">We pride ourselves on exceptional customer service and are committed to providing assistance whenever you need it. Our team of experts are always ready to help with any questions or concerns you may have, ensuring that your experience with Pay Boost Bills is nothing but positive.
                    </p>
                    <p className="text-lg mb-4">Thank you for choosing Pay Boost Bills. We look forward to helping you manage your finances with confidence and security.
                    </p>
                    <h2 className="text-3xl lg:text-2xl font-semibold mb-4 ">24/7 Availability:</h2>
                    <p className="text-lg mb-4">Could it be day or night, we are always on equipment to serve you at any time of day or night, every day of the year. It gives you time to complete your refill order whenever it is convenient to you, and you can be sure that we are here when needed.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
