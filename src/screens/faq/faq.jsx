
import { Helmet } from 'react-helmet';
import { faqMetadata } from '../../metadata';



const Faq = () => {
    return (
        <>
            <Helmet>
                <title>{faqMetadata.title}</title>
                <meta name="description" content={faqMetadata.description} />
            </Helmet>
            <div>
                <h1 className="text-center text-5xl cursor-default font-semibold my-10">Frequently Asked Questions</h1>
            </div>
            <div className="flex justify-center px-4 md:px-0">
                <div className="w-full md:w-8/12 lg:w-8/12">
                    <details open className="collapse collapse-arrow my-2 bg-base-200">
                        <summary className="collapse-title text-xl font-medium">
                            What services does PayBoost Bills offer?
                        </summary>
                        <div className="collapse-content">
                            <p>PayBoost Bills offers a convenient platform for paying various bills online, including utilities, credit cards, and more.</p>
                        </div>
                    </details>

                    <details open className="collapse collapse-arrow my-2 bg-base-200">
                        <summary className="collapse-title text-xl font-medium">
                            Can I pay my mobile bill using PayPal?
                        </summary>
                        <div className="collapse-content">
                            <p>Yes, you can pay your mobile bill using PayPal through PayBoost Bills secure payment portal.</p>
                        </div>
                    </details>

                    <details open className="collapse collapse-arrow my-2 bg-base-200">
                        <summary className="collapse-title text-xl font-medium">
                            How quickly are payments processed?
                        </summary>
                        <div className="collapse-content">
                            <p>Payments made through PayBoost Bills are typically processed instantly, ensuring that your bills are paid on time.</p>
                        </div>
                    </details>

                    <details open className="collapse collapse-arrow my-2 bg-base-200">
                        <summary className="collapse-title text-xl font-medium">
                            Is it safe to use PayBoost Bills for online payments?
                        </summary>
                        <div className="collapse-content">
                            <p>Yes, PayBoost Bills prioritizes security and employs advanced encryption technology to safeguard your payment information.</p>
                        </div>
                    </details>

                    <details open className="collapse collapse-arrow my-2 bg-base-200">
                        <summary className="collapse-title text-xl font-medium">
                            Are there any fees for using PayBoost Bills?
                        </summary>
                        <div className="collapse-content">
                            <p>PayBoost Bills does not charge any additional fees for using its services. However, some billers may apply their own transaction fees.</p>
                        </div>
                    </details>

                    <details open className="collapse collapse-arrow my-2 bg-base-200">
                        <summary className="collapse-title text-xl font-medium">
                            Can I set up automatic payments for my mobile bill through PayBoost Bills?
                        </summary>
                        <div className="collapse-content">
                            <p>Yes, PayBoost Bills allows you to set up automatic payments for your mobile bill, providing convenience and peace of mind.</p>
                        </div>
                    </details>
                </div>
            </div>
        </>
    );
};

export default Faq;