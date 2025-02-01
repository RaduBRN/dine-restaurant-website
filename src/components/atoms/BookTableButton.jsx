import { useNavigate } from "react-router-dom";

function BookTableButton({ clickFunction, secondary, children }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/booking");
  }

  return (
    <button
      onClick={clickFunction ? () => clickFunction() : () => handleClick()}
      className={`w-[245px] h-16 ${
        secondary ? "bg-darkBlack" : "bg-transparent"
      } border ${
        secondary ? "border-darkBlack" : "border-[#fff]"
      } text-[#fff] uppercase font-semibold text-[17px] tracking-[2.5px] leading-[16px] hover:bg-[#fff] hover:text-darkBlack`}
    >
      {children}
    </button>
  );
}

export default BookTableButton;
