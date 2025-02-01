import Logo from "../../icons/Logo";
import { Link } from "react-router-dom";
import BookTableButton from "./BookTableButton";

function Hero() {
  return (
    <div className="flex flex-col gap-8 items-center lg:items-start justify-center h-full lg:w-[507px]">
      <div className="text-[#fff] flex flex-col items-center lg:items-start text-center lg:text-start gap-8 md:gap-4 mt-28 lg:mt-0 ">
        <Link to="/" className="block lg:hidden">
          <Logo className={"w-[82px] h-[32px]"} />
        </Link>
        <h1 className="max-w-[350px] lg:max-w-full">
          Exquisite dining since 1989
        </h1>
        <p className="max-w-[327px] md:max-w-[570px] lg:max-w-full smallBody-text md:body-text">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
      </div>
      <BookTableButton>Book a table</BookTableButton>
    </div>
  );
}

export default Hero;
