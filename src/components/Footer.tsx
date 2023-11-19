import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed left-0 right-0 bottom-0 flex justify-center bg-gray-900">
      <span className="text-xl py-1 flex ">
        <p>Made by</p>
        <FaHeart className="mt-1 mx-2 fill-red-500" />
        <a
          href="https://nebilmuhidin.vercel.app/"
          target="__blank"
          className="underline decoration-1"
        >
          Nebil M.
        </a>
      </span>
    </div>
  );
};

export default Footer;
