import { Link } from "react-router-dom"
import { CiMail, CiPhone } from "react-icons/ci";

const Footer = () => {
    return (
        <div>
            <footer data-theme="business" className="footer  p-10 text-white ">
                <aside>
                    <img src="https://www.myboostrecharge.com/static/media/pbblogo.2781af64db3db9d44aa5.png" className="w-32" alt="" />
                    <h2 className="w-40">is an authorized national payment center. As an authorized national payment center it is pur duty to provide you with the highest customer service.</h2>
                </aside>
                <nav>
                    <h1 className="footer-title text-lg">Customer Support</h1>
                    <div className="flex items-center gap-1">
                        <CiMail size={24} />
                        <Link className="link link-hover">contact@payboostbills.com</Link>
                    </div>
                    <div className="flex items-center gap-1">
                        <CiPhone size={24} />
                        <Link className="link link-hover">+1 (833) 443-3203</Link>
                    </div>
                </nav>
                <nav>
                    <h1 className="footer-title text-lg">Policy</h1>
                    <Link to={'/termsAndconditon'} className="link link-hover">Terms and condition</Link>
                    <Link to={'/returnrefund'} className="link link-hover">Return and Refunds Policy</Link>
                    <Link to={'/privacypolicy'} className="link link-hover">Privacy Policy</Link>
                    <Link to={'/cookies'} className="link link-hover">Cookies Policy</Link>

                </nav>
                <nav>
                    <h1 className="footer-title text-lg">Quick Links</h1>
                    <Link to={"/about"} className="link link-hover">About Us</Link>
                    <Link to={"/contact"} className="link link-hover">Contact Us</Link>
                    <Link to={"/frequentlyAsked"} className="link link-hover">Frequently Asked Question</Link>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
