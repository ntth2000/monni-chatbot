import Image from "next/image";
import Logo from "./logo.png";

export default function TopBar() {
  return (
    <nav className="bg-white dark:bg-gray-900 h-18 fixed w-full z-20 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl h-full flex flex-wrap items-center justify-between m-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={Logo} className="h-8" width={40} alt="Monni Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary-600 dark:text-white">
            MonniChatbot
          </span>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
