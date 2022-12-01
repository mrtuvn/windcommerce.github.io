import Image from 'next/image'
import SVGLOGO from '../../public/images/wind.svg';

export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="flex space-between w-full items-center py-4">
                        <div className="logo-main">
                          <svg width="150" height="20" viewBox="0 0 150 20" className="text-slate-900 dark:text-white w-auto h-6">
                              <path fill="#38bdf8" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                              <text x="20" y="15">Wind</text><text x="58" y="15" fill="#38bdf8">Commerce</text>
                          </svg>
                        </div>

                        <div className="navs-links | ml-auto">
                            <ul className="flex sm:flex-col md:flex-row sm:flex-wrap gap-4">
                                <li>Magento Support</li>
                                <li>Integrate Themes</li>
                                <li className="design">Website Design</li>
                                <li className="blog">Blog</li>
                                <li className="about-us">About</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}