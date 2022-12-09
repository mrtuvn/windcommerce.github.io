export default function Footer() {
  const email = "tuna9x.it@gmail.com";
  const phone = "+84936536599";

  const dates = {
    now: new Date().getFullYear(),
  };

  const currentYear = dates.now;

  return (
    <>
      <footer>
        <div className="footer-inner container mt-5">
          <div className="mx-auto grid gap-4 grid-cols-2 md:grid-cols-7 xl:grid-cols-12">
            <div className="logo-area col-span-1 md:col-span-4">
              <p className="text-uppercase">
                <svg
                  width="150"
                  height="20"
                  viewBox="0 0 150 20"
                  className="text-slate-900 dark:text-white w-auto h-6"
                >
                  <path
                    fill="#38bdf8"
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  />
                  <text x="20" y="15">
                    Wind
                  </text>
                  <text x="58" y="15" fill="#38bdf8">
                    Commerce
                  </text>
                </svg>
              </p>
              Windcommerce is based in Hanoi, Vietnam. We believe in delivering
              total solutions to our clients from design to support.
              <ul>
                <li>FB</li>
              </ul>
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
                <li className="telephone">
                  <a href="tel:${phone}">{phone}</a>
                </li>
                <li className="email-for-work">
                  <a href="mailto:${email}">{email}</a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copyright | text-center my-4">
          2021 - {currentYear} © WINDCOMMERCE
        </p>
      </footer>
    </>
  );
}
