import Logo from "../../icons/Logo";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="hidden lg:block absolute top-14 left-0 right-0 max-w-[375px] md:max-w-[768px] lg:max-w-[1111px] mx-auto w-full">
      <Link to="/">
        <Logo />
      </Link>
    </header>
  );
}

export default Navbar;
