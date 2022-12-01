import Image from 'next/image'

export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="flex space-between w-full items-center">
                        <Image 
                            className="main-logo"
                            src="https://via.placeholder.com/150"
                            width={150} height={70} alt="Logo" />

                        <div className="navs-links | ml-auto">
                            <ul className="flex sm:flex-col md:flex-row sm:flex-wrap gap-2">
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