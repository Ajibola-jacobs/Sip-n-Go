import Image from "next/image";
import Link from "next/link";
import Cup from '../../public/coffee-cup.png'
import Arrow from "../../public/icons/arrow-right-linear.svg"
import Accent from "../../public/icons/accent.png"
import Bean from "../../public/icons/coffee-bean.svg"
import darkBean from "../../public/icons/coffee-bean-dark.svg"
import Fast from "../../public/icons/fast.svg"
import Heart from "../../public/icons/heart.svg"
import Logo from "../../public/icons/coffee-cup.svg"
import Quote from "../../public/icons/quote.svg"
import Pin from "../../public/icons/pin.svg"
import Mail from "../../public/icons/mail.svg"
import Phone from "../../public/icons/phone.svg"
import X from "../../public/icons/x.svg"
import Insta from "../../public/icons/insta.svg"
import Face from "../../public/icons/face.svg"
import Youtube from "../../public/icons/youtube.svg"
import { items } from "./items";


export default function Home() {
  return (
    <div className="">

      {/* Hero Section */}
      <section className="h-175 bg-[url('/bg.png')] bg-cover bg-center w-svw flex items-center justify-between">

        {/* Text */}
        <div className="flex flex-col justify-between px-6 md:px-16 lg:px-24 xl:px-40 pt-20">

          <div>
            <h1 className="relative text-[6rem]/24 font-bold mb-5">
              Great Coffee, <br /> On the Go.
            </h1>

            <Image
              src={Accent}
              alt="Accent"
              width={120}
              height={120}
              className="absolute top-53 left-19"
            />
          </div>

          <h3 className="text-3xl font-medium mb-5">Fresh. Affordable. Near You.</h3>

          {/* Button */}
          <div className="bg-brand p-4 rounded-full flex gap-2 cursor-pointer w-40">
            <Link href="/contact" className="order-button font-semibold text-white">Order Now</Link>

            <Image
              src={Arrow}
              alt="arrow"
              width={24}
              height={24}
            />

          </div>
        </div>

        {/* Image */}
        <div className="flex justify-between px-6 md:px-16 lg:px-24 xl:px-40 pt-20">
          <Image src={Cup} alt="Coffee Cup" width={660} height={660} />
        </div>

      </section>


      {/* Features Section */}
      <section className="py-13">

        {/* Coffee Bean Line */}
        <div className="flex justify-center items-center gap-6">
          <hr className="h-0.5 w-45 bg-brand border-0" />

          <Image
            src={Bean}
            alt="Bean"
            width={35}
            height={35}
          />

          <hr className="h-0.5 w-45 bg-brand border-0" />
        </div>

        {/* Heading */}
        <div className="flex flex-col justify-center items-center">

          <h1 className="mt-5 text-5xl font-bold">Our Features</h1>

          <p className="mt-3 text-[23px] text-center">More than just coffee, a better coffee experience</p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-4 justify-items-center items-center mt-7">

          <div className="flex flex-col justify-center items-center bg-card py-7 px-15 rounded-3xl">
            <Image
              src={darkBean}
              alt="Bean"
              width={60}
              height={60}
              className="mb-3"
            />
            <h1 className="mb-3 text-3xl font-semibold">Premium Quality</h1>
            <p className="text-center text-lg max-w-75">Rich, smooth coffee made from the best beans.</p>
          </div>

          <div className="flex flex-col justify-center items-center bg-card py-7 px-14 rounded-3xl">
            <Image
              src={Fast}
              alt="Bean"
              width={60}
              height={60}
              className="mb-3"
            />
            <h1 className="mb-3 text-3xl font-semibold">Fast Service</h1>
            <p className="text-center text-lg max-w-75">Get your coffee quickly, wherever you are.</p>
          </div>

          <div className="flex flex-col justify-center items-center bg-card py-7 px-14 rounded-3xl">
            <Image
              src={Logo}
              alt="Bean"
              width={60}
              height={60}
              className="mb-3"
            />
            <h1 className="mb-3 text-3xl font-semibold">Great Taste</h1>
            <p className="text-center text-lg max-w-75">A perfect blend of flavour in every sip you take.</p>
          </div>

          <div className="flex flex-col justify-center items-center bg-card py-7 px-14 rounded-3xl">
            <Image
              src={Heart}
              alt="Bean"
              width={60}
              height={60}
              className="mb-3"
            />
            <h1 className="mb-3 text-3xl font-semibold">Affordable Prices</h1>
            <p className="text-center text-lg max-w-75">Great coffee that fits your budget across the menu.</p>
          </div>
        </div>


      </section>

      {/* Testimonials & Menu */}
      <section className="py-13 grid grid-cols-2 gap-6 justify-items-center items-center">

        {/* Testimonials */}
        <div>

          {/* Coffe line */}
          <div className="flex justify-center items-center gap-6">
            <hr className="h-0.5 w-72 bg-brand border-0" />

            <Image
              src={Bean}
              alt="Bean"
              width={35}
              height={35}
            />

            <hr className="h-0.5 w-72 bg-brand border-0" />
          </div>

          {/* Heading */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="mt-5 text-4xl font-bold">What Our Customers Say</h1>
          </div>

        {/* Scroll  Container*/}
          <div className="py-10 flex gap-6 w-full max-w-3xl mx-auto overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-none">

            {items.map((item) => (
              <div key={item.id} className="flex-none flex gap-7 items-center snap-center">
                  <Image
              src={item.image}
              alt="Profile"
              width={270}
              height={270}
              className="rounded-full"
            />

            {/* Scroll Container */}
            <div className="bg-card p-8 rounded-3xl space-y-2 w-full">

              <Image
                src={Quote}
                alt="Quote"
                width={50}
                height={50}
              />

              <p className="text-lg font-semibold max-w-100">{item.comment}</p>

              <p className="text-lg font-semibold">- {item.name}</p>
            </div>


              </div>
            ))}

          </div>

          <div className="flex justify-center items-center mt-5">
            <p className="text-[20px] text-zinc-500">-------- Scroll Horizontal --------&gt;</p>
          </div>
        </div>

      

        {/* Menu */}
        <div>

           {/* Heading */}
          <div className="flex justify-center items-center gap-6">
            <hr className="h-0.5 w-52 bg-brand border-0" />

              <h1 className="text-4xl font-bold">Our Menu & Prices</h1>

            <hr className="h-0.5 w-52 bg-brand border-0" />
          </div>

          {/* Menu Cards */}
          <div className="py-15 flex gap-3">

              <div className="bg-card p-10 flex flex-col justify-items-center items-center space-y-2 rounded-3xl">
                <h3 className="text-2xl font-semibold">Small Cup</h3>
                <h1 className="text-4xl font-semibold">&#8358;1,000</h1>
                <p className="text-lg">Perfect for a quick boost</p>
                
              <div className="bg-brand py-3 rounded-xl flex gap-2 cursor-pointer w-40 justify-center">
                <Link href="/contact" className="order-button font-semibold text-white text-[16px]">Order Now</Link>
              </div>

              </div>

              <div className="relative bg-card border-[3px] border-brand p-10 flex flex-col justify-items-center items-center space-y-2 rounded-3xl">
                <h3 className="text-2xl font-semibold">Medium Cup</h3>
                <h1 className="text-4xl font-semibold">&#8358;1,500</h1>
                <p className="text-lg">A happy size you'll enjoy</p>
                
              <div className="bg-brand py-3 rounded-xl flex gap-2 cursor-pointer w-40 justify-center">
                <Link href="/contact" className="order-button font-semibold text-white text-[16px]">Order Now</Link>
              </div>

              <div className="absolute -top-6 p-2 bg-brand rounded-xl">
                    <h1 className="text-white">Most Popular</h1>
              </div>
              </div>

              <div className="bg-card p-10 flex flex-col justify-items-center items-center space-y-2 rounded-3xl">
                <h3 className="text-2xl font-semibold">Large Cup</h3>
                <h1 className="text-4xl font-semibold">&#8358;2,000</h1>
                <p className="text-lg">For the real coffee lovers</p>
                
              <div className="bg-brand py-3 rounded-xl flex gap-2 cursor-pointer w-40 justify-center">
                <Link href="/contact" className="order-button font-semibold text-white text-[16px]">Order Now</Link>
              </div>

              </div>

          </div>


        </div>
      </section>

      {/* Contact */}
      <section className="h-125 bg-[url('/footer-bg.png')] bg-cover bg-center w-svw border-2">
              <div className="flex flex-col justify-center items-center h-full">

                <h1 className="text-4xl font-semibold mb-2">Get In Touch</h1>
                <p className="text-lg">Have a question or feedback? Send us a message!</p>

                  {/* Contact Info */}
                  <div className="flex gap-6 mt-3">

                    {/* Address */}
                      <div className="flex gap-3 justify-center items-center">
                      <div className="bg-brand p-2 rounded-full">
                           <Image
                              src={Pin}
                              alt="Bean"
                              width={24}
                              height={24}
                            />
                      </div>

                      <h2 className="text-[22px]">123 Coffee Street, Lagos, Ng</h2>
                  </div>

                  <div className="h-16 w-0.5 bg-brand"></div>

                  {/* Email */}
                  <div className="flex gap-3 justify-center items-center">
                      <div className="bg-brand p-2 rounded-full">
                           <Image
                              src={Mail}
                              alt="Mail"
                              width={24}
                              height={24}
                            />
                      </div>

                      <h2 className="text-[22px]">sipngo@email.com</h2>
                  </div>

                  <div className="h-16 w-0.5 bg-brand"></div>

                  {/* Phone */}
                  <div className="flex gap-3 justify-center items-center">
                      <div className="bg-brand p-2 rounded-full">
                           <Image
                              src={Phone}
                              alt="Phone"
                              width={24}
                              height={24}
                            />
                      </div>

                      <h2 className="text-[22px]">+234 801 234 5678</h2>
                  </div>

                  </div>

                {/* Socials */}
                <div className="flex gap-8 mt-5">

                    {/* Address */}
                      <div className="flex gap-3 justify-center items-center">
                      <Link href="/" className="bg-text p-2 rounded-full">
                           <Image
                              src={X}
                              alt="Twitter"
                              width={24}
                              height={24}
                            />
                      </Link>

                      <Link href="/" className="bg-text p-2 rounded-full">
                           <Image
                              src={Insta}
                              alt="Instagram"
                              width={24}
                              height={24}
                            />
                      </Link>

                      <Link href="/" className="bg-text p-2 rounded-full">
                           <Image
                              src={Face}
                              alt="Facebook"
                              width={24}
                              height={24}
                            />
                      </Link>

                      <Link href="/" className="bg-text p-2 rounded-full">
                           <Image
                              src={Youtube}
                              alt="Youtube"
                              width={24}
                              height={24}
                            />
                      </Link>
                  </div>


                </div>
              </div>


            
      </section>

        <section className="h-15 bg-[#462a1a] flex justify-center items-center">
                <p className="text-card text-lg">&copy; 2026 Sip n' Go. All rights reserved.</p>
        </section>
    </div>
  );
}
