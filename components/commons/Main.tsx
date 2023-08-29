import Image from "next/image";

function ExtraMarkUp() {
  return (
    <div>
      <p>Sample pure function inside tsx</p>
    </div>
  );
}

export default function Main() {
  return (
    <>
      <section className="main-hero relative"></section>
      <section className="introduce mb-4 text-center md:mb-8">
        <div className="container">
          <h1 className="md:text-3xl">
            WE ARE A DIGITAL AGENCY SPECIALIZING IN ONLINE COMMERCE SOLUTIONS
          </h1>
          <p>Our Focus Is Improving Customer Engagement, and Increase Sales.</p>
        </div>
      </section>
      <section className="main-services mb-4 sm:text-center md:mb-8">
        <div className="container">
          <div className="services-wrap xs:flex-col my-5 flex sm:flex-col md:flex-row">
            <div className="magento2-development xs:w-full bg-custom-brown text-white sm:p-2 md:w-1/3 md:p-6">
              <Image
                className="logo-brand mx-auto mb-4"
                src="/images/magento2.png"
                width="80"
                height="80"
                alt="service-develop"
              />
              <p className="service-title pb-4 uppercase md:text-2xl">
                Magento 2 Development
              </p>
              <div>
                <p className="mb-4 line-clamp-3">
                  Using modern tools and technologies, Magento 2 is more
                  flexible, open and more compatible than any other eCommerce
                  platforms.
                </p>
                <a className="mt-auto uppercase" href="#">
                  Learn More!
                </a>
              </div>
            </div>
            <div className="nextjs-development xs:w-full bg-main-orange text-white sm:p-2 md:w-1/3 md:p-6">
              <div className="mx-auto mb-4 flex justify-center gap-2 text-center">
                <Image
                  className="logo-brand"
                  src="/images/react.svg"
                  width="120"
                  height="120"
                  alt="service-develop"
                />
                <Image
                  className="logo-brand"
                  src="/images/next-js.svg"
                  width="120"
                  height="120"
                  alt="service-develop"
                />
              </div>
              <p className="service-title pb-4 uppercase md:text-2xl">
                Nextjs Development
              </p>
              <div>
                <p className="mb-4 line-clamp-3">
                  Using modern tools and technologies, Nextjs is more flexible
                  also capability with React ecosystem, open and more compatible
                  than any other eCommerce platforms. We use modern frontend
                  stack to delivery your site faster. Reduce time-to-market
                  times
                </p>
                <a className="mt-auto uppercase" href="#">
                  Learn More!
                </a>
              </div>
            </div>
            <div className="consults-audit xs:w-full bg-custom-brown text-white sm:p-2 md:w-1/3 md:p-6">
              <Image
                className="logo-brand mx-auto mb-4"
                src="/images/audit.svg"
                width="80"
                height="80"
                alt="service-develop"
              />
              <p className="service-title pb-4 uppercase md:text-2xl">
                Consulting
              </p>
              <div>
                <p className="mb-4 line-clamp-3">
                  We also provide consulting and audit projects or sites to give
                  best advices. Help you improve website for fastest possible
                  following google and standards. Make sure all green CVW.
                  Guarrantee get best results
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
                  className="btn-primary round-full inline-flex items-center rounded-full bg-main-primary p-2 px-4 text-center uppercase text-white"
                  type="submit"
                >
                  SUbMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
