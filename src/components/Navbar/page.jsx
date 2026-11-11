import Image from "next/image"
import Logo from "../../../public/icons/coffee-cup.svg"
import Arrow from "../../../public/icons/arrow-right-linear.svg"
import Link from "next/link"

export default function Navbar() {
      return (
            <nav className="absolute top-0 inset-x-20 z-50 bg-transparent px-13 py-3 mt-4 flex justify-between">
                  
                  {/* Logo */}
                  <div className="flex gap-4 items-center">
                  <Image 
                        src={Logo} 
                        alt="Logo" 
                        width={50} 
                        height={50} 
                   />
                  
                  <h1 className="text-4xl font-bold">Sip n' Go</h1>
                  </div>

                  {/* Links */}
                  <div className="flex items-center">
                        <ul className="flex gap-10 text-xl">
                              <li className="hover:text-brand font-semibold relative inline-block">
                                    <Link href="/">Home</Link>
                              </li>
                               <li className="hover:text-brand">
                                    <Link href="/about">About</Link>
                              </li>
                               <li className="hover:text-brand">
                                    <Link href="/blog">Blog</Link>
                              </li>
                               <li className="hover:text-brand">
                                    <Link href="/pricing">Pricing</Link>
                              </li>
                               <li className="hover:text-brand">
                                    <Link href="/contact">Contact</Link>
                              </li>
                        </ul>
                  </div>

                  {/* Button */}
                  <div className="bg-brand p-4 rounded-full flex gap-2 cursor-pointer w-40">
                        <Link href="/contact" className="order-button font-semibold text-white">Order Now</Link>

                        <Image 
                        src= {Arrow} 
                        alt="arrow" 
                        width={24} 
                        height={24} 
                   />
                       
                  </div>

            </nav>
      )
}
