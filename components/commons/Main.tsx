import Image from "next/image";

export default function Main() {
    return (
        <>
            <section className="main-hero relative">

            </section>
            <section className="introduce text-center mb-4 md:mb-8">
                <div className="container">
                    <h1 className="md:text-3xl">WE ARE A DIGITAL AGENCY SPECIALIZING IN ONLINE COMMERCE SOLUTIONS</h1>
                    <p>Our Focus Is Improving Customer Engagement, and Increase Sales.</p>
                </div>
            </section>
            <section className="main-services mb-4 md:mb-8 sm:text-center">
                <div className="container">
                    <div className="services-wrap flex my-5 xs:flex-col sm:flex-col md:flex-row">
                        <div className="magento2-development bg-custom-brown text-white sm:p-2 md:p-6 xs:w-full md:w-1/3">
                            <Image className="mx-auto mb-4 logo-brand" src="/images/magento2.png" width="80" height="80" alt="service-develop"/>
                            <p className="service-title uppercase pb-4 md:text-2xl">Magento 2 Development</p>
                            <div>
                                <p className="line-clamp-3 mb-4">Using modern tools and technologies, Magento 2 is more flexible, open and more compatible than any other eCommerce platforms.</p>
                                <a className="uppercase mt-auto" href="#">Learn More!</a>
                            </div>
                        </div>
                        <div className="nextjs-development bg-main-orange text-white sm:p-2 md:p-6 xs:w-full md:w-1/3">
                            <div className="mx-auto mb-4 text-center flex gap-2 justify-center">
                                <Image className="logo-brand" src="/images/react.svg" width="120" height="120" alt="service-develop"/>
                                <Image className="logo-brand" src="/images/next-js.svg" width="120" height="120" alt="service-develop"/>
                            </div>
                            <p className="service-title uppercase pb-4 md:text-2xl">Nextjs Development</p>
                            <div>
                                <p className="line-clamp-3 mb-4">Using modern tools and technologies, Nextjs is more flexible also capability with React ecosystem, open and more compatible than any other eCommerce platforms. We use modern frontend stack to delivery your site faster. Reduce time-to-market times</p>
                                <a className="uppercase mt-auto" href="#">Learn More!</a>
                            </div>
                        </div>
                        <div className="consults-audit bg-custom-brown text-white sm:p-2 md:p-6 xs:w-full md:w-1/3">
                            <Image className="mx-auto mb-4 logo-brand" src="/images/audit.svg" width="80" height="80" alt="service-develop"/>
                            <p className="service-title uppercase pb-4 md:text-2xl">Consulting</p>
                            <div>
                                <p className="line-clamp-3 mb-4">We also provide consulting and audit projects or sites to give best advices. Help you improve website for fastest possible following google and standards. Make sure all green CVW. Guarrantee get best results</p>
                                <a className="uppercase mt-auto" href="#">Learn More!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-us mb-4 md:mb-8">
                <div className="container">
                    <h5 className="text-center md:text-2xl mb-4">Contact Us</h5>
                    <form method="post" action="" name="contactForm">
                        <div className="form-inner-wrap grid gap-4 grid-cols-2">
                            <input type="text" className="form-input" name="contact-name" placeholder="Name" />
                            <input type="text" className="form-input" name="contact-email" placeholder="Email" />
                            <input type="text" className="form-input" name="contact-business" placeholder="Business Name" />
                            <input type="tel" className="form-input" name="contact-phone" placeholder="Phone Number" />
                            <textarea name="message" className="form-textarea col-span-2" placeholder="Message"/>
                            <div className="form-actions col-span-2 mx-auto">
                                <button className="btn-primary uppercase rounded-full round-full bg-main-primary inline-flex items-center p-2 px-4 text-white text-center" type="submit">SUbMIT</button>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}