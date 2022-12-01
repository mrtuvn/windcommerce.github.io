export default function Footer() {

    const currentYear = '2022';
    const email = 'tuna9x.it@gmail.com';
    const phone = '+84936536599';

    return (
        <>
        <footer>
            <div className="footer-inner container">
                <div className="mx-auto grid gap-4 grid-cols-2 md:grid-cols-7 xl:grid-cols-12">
                    <div className="logo-area col-span-1 md:col-span-4">
                        <p className="text-uppercase">LOGO</p>
                        Windcommerce is based in Hanoi, Vietnam. We believe in delivering total solutions to our clients from design to support.
                        <ul><li>FB</li></ul>
                    </div>
                    <div className="service-area md:col-span-2">
                        <p className="text-uppercase">Services</p>
                        <ul>
                            <li>Magento Support</li>
                            <li>Integrate Themes</li>
                            <li>Website Design</li>
                        </ul>
                    </div>
                    <div className="design-area md:col-span-3">
                        <p className="text-uppercase">Design agency</p>
                        <ul>
                            <li>Blog</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div className="contact-area md:col-span-3">
                        <p className="text-uppercase">Contact us</p>
                        <ul>
                            <li className="telephone"><a href="tel:${phone}">(+84) 0936536599</a></li>
                            <li className="email-for-work"><a href="mailto:${email}">{email}</a></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="copyright | text-center ">2021 - {currentYear} © WINDCOMMERCE</p>
        </footer>
        </>
    )
}