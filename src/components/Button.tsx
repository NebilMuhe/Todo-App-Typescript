import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { Buttons } from "./interface/interface";

const Button = ({ page, pageSize, end, setPage, length }: Buttons) => {
  const handleNext = () => {
    const next = page + 1;
    setPage(next);
  };

  const handlePrevious = () => {
    const previous = page - 1;
    setPage(previous);
  };

  return (
    <section className="flex justify-center items-end mb-8">
      <button
        className={`w-6 h-6 bg-green-500 rounded-full flex justify-center items-center ${
          page === 1 && "cursor-not-allowed opacity-50"
        } `}
        onClick={handlePrevious}
      >
        <FaChevronCircleLeft className="fill-black" />
      </button>
      <button
        className={`w-6 h-6 bg-green-500 flex justify-center items-center rounded-full ml-1 ${
          (length <= pageSize || end + 1 > length) &&
          "cursor-not-allowed opacity-50"
        }`}
        onClick={handleNext}
      >
        <FaChevronCircleRight className="fill-black" />
      </button>
    </section>
  );
};

export default Button;
