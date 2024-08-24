import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";


export default function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-100 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-black sm:text-center font-semibold">
            © 2024 <a href="https:googler.com" className="hover:underline ">It's Me™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center  text-sm font-medium sm:mt-0 pl-7">
            <li>
              <a href="www.twitter.com" className="hover:underline mr-4 md:mr-6 text-2xl text-black pl-3"><FaSquareXTwitter/></a>
            </li>
            <li>
              <a href="www.instagram.com" className="hover:underline mr-4 md:mr-6 text-2xl text-black  pl-3"><IoLogoInstagram/></a>
            </li>
            <li>
              <a href="www.facebook.com" className="hover:underline mr-4 md:mr-6 text-2xl text-black pl-3"><FaFacebook/></a>
            </li>
            <li>
            <a href="www.email.com" className="hover:underline mr-4 md:mr-6 text-2xl text-black pl-3"><MdMarkEmailUnread/></a>            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
