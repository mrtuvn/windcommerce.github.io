"use client";

import Image from "next/image";

export default function Main() {
  return (
    <>
      <div className="main-body">
        <section className="main-hero relative"></section>
        <section className="introduce mb-4 text-center md:mb-8">
          <div className="container">
            <h1 className="md:text-3xl">
              WE ARE A DIGITAL AGENCY SPECIALIZING IN ONLINE COMMERCE SOLUTIONS
            </h1>
            <p>
              Our Focus Is Improving Customer Engagement, and Increase Sales.
            </p>
          </div>
        </section>
        <section className="main-services mb-4 sm:text-center md:mb-8">
          <div className="container">
            <div className="services-wrap my-5 flex flex-col md:flex-row">
              <div className="magento2-development xs:w-full bg-brand-brown xs:text-center flex flex-col rounded-bl-lg rounded-tl-lg p-2 text-white md:w-1/3 md:p-8">
                <Image
                  className="logo-brand mx-auto mb-4 min-h-[100]"
                  src="/images/magento2.png"
                  width="80"
                  height="80"
                  alt="service-develop"
                />
                <p className="service-title pb-4 uppercase md:text-2xl">
                  Magento 2 Development
                </p>
                <div className="mt-auto">
                  <p className="mb-4 line-clamp-3">
                    Using modern tools and cutting-edge technologies, Magento 2
                    is more flexible, open and more compatible than any other
                    eCommerce platforms. Build from top with latest aproaches.
                    With mind-sets performance from the beginning
                  </p>
                  <a className="mt-auto uppercase" href="#">
                    Learn More!
                  </a>
                </div>
              </div>
              <div
                className={`xs:w-full bg-brand-orange  xs:text-center flex flex-col p-4 md:w-1/3 md:p-8`}
              >
                <div className="mx-auto mb-4 flex justify-center gap-2 text-center">
                  <Image
                    className="logo-brand min-h-[100]"
                    src="/images/next-js.svg"
                    width="120"
                    height="120"
                    alt="service-develop"
                  />
                </div>
                <p className="service-title pb-4 uppercase md:text-2xl">
                  Nextjs Development
                </p>
                <div className="mt-auto">
                  <p className="mb-4 line-clamp-3">
                    Using modern tools and technologies, Nextjs is more flexible
                    also capability with React ecosystem, open and more
                    compatible than any other eCommerce platforms. We use modern
                    frontend stack to delivery your site faster. Reduce
                    time-to-market times
                  </p>
                  <a className="mt-auto uppercase" href="#">
                    Learn More!
                  </a>
                </div>
              </div>
              <div className="consults-audit xs:w-full  bg-brand-brown xs:text-center flex flex-col rounded-br-lg rounded-tr-lg p-2 text-white md:w-1/3 md:p-8">
                <Image
                  className="logo-brand mx-auto mb-4 min-h-[100]"
                  src="/images/audit.svg"
                  width="80"
                  height="80"
                  alt="service-develop"
                />
                <p className="service-title pb-4 uppercase md:text-2xl">
                  Consulting
                </p>
                <div className="mt-auto">
                  <p className="mb-4 line-clamp-3">
                    We also provide consulting and audit projects or sites to
                    give best advices. Help you improve website for fastest
                    possible following google and standards. Make sure all green
                    CVW. Guarrantee get best results
                  </p>
                  <a className="mt-auto uppercase" href="#">
                    Learn More!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="techstack mb-4 md:mb-10">
          <h5 className="mb-4 text-center md:text-2xl">Our Stacks Used</h5>
          <div className="flex flex-wrap justify-center gap-8">
            <Image
              src="/images/stacks/magento.svg"
              width="80"
              height="82"
              alt="Magento"
            />
            <Image
              src="/images/stacks/html5.svg"
              width="80"
              height="82"
              alt="Html5"
            />
            <Image
              src="/images/stacks/sass.svg"
              width="80"
              height="82"
              alt="Sass"
            />
            <Image
              src="/images/stacks/react.svg"
              width="80"
              height="82"
              alt="React"
            />
            <Image
              src="/images/stacks/apollo.svg"
              width="80"
              height="82"
              alt="Apollo"
            />
            <Image
              src="/images/stacks/webpack.svg"
              width="80"
              height="82"
              alt="Webpack"
            />
            <Image
              src="/images/stacks/graphql.svg"
              width="80"
              height="82"
              alt="Graphql"
            />
            <Image
              src="/images/stacks/redux.svg"
              width="80"
              height="82"
              alt="Redux"
            />
            <Image
              src="/images/stacks/typescript.svg"
              width="80"
              height="82"
              alt="Typescript"
            />
          </div>
        </section>
        <section className="contact-us mb-4 hidden md:mb-8">
          <div className="container">
            <h5 className="mb-4 text-center md:text-2xl">Contact Us</h5>
            <form method="post" action="" name="contactForm">
              <div className="form-inner-wrap grid grid-cols-2 gap-4">
                <input
                  type="text"
                  className="form-input rounded"
                  name="contact-name"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="form-input rounded"
                  name="contact-email"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="form-input rounded"
                  name="contact-business"
                  placeholder="Business Name"
                />
                <input
                  type="tel"
                  className="form-input rounded"
                  name="contact-phone"
                  placeholder="Phone Number"
                />
                <textarea
                  name="message"
                  className="form-textarea col-span-2 rounded"
                  placeholder="Message"
                />
                <div className="form-actions col-span-2 mx-auto">
                  <button
                    className="btn-primary round-full bg-brand-primary inline-flex items-center rounded-full p-2 px-4 text-center uppercase text-white"
                    type="submit"
                  >
                    SUbMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
