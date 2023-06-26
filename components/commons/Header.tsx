import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="bg-main-orange md:mb-8">
        <div className="container">
          <div className="flex space-between w-full items-center py-4">
            <div className="logo-main">
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
            </div>

            <div className="navs-links | ml-auto">
              <nav className="main-nav md:inline-flex items-center">
                <button
                  className="menu-toggle"
                  aria-expanded="false"
                  aira-controls="primary-navigation"
                >
                  <span className="sr-only">Menu</span>
                  <span className="hamburger-icon"></span>
                </button>
                <ul
                  data-state="closed"
                  className="primary-navigation flex items-center sm:flex-col md:flex-row sm:flex-wrap gap-4"
                >
                  <li>
                    <Link href="#">Magento Support</Link>
                  </li>
                  <li>
                    <Link href="#">Integrate Themes</Link>
                  </li>
                  <li>
                    <Link href="#" className="design">
                      Website Design
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="about-us">
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
