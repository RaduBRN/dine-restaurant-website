import { useLocation } from "react-router-dom";

import Logo from "../../icons/Logo";
import ReadyBgDesktop from "../../assets/images/homepage/ready-bg-desktop.jpg";
import BookTableButton from "../atoms/BookTableButton";

function Footer() {
  const location = useLocation();
  const isBookingPage = location.pathname === "/booking";

  return (
    <footer className="flex flex-col">
      {!isBookingPage && (
        <div className="relative py-20">
          <div className="flex flex-col gap-6 md:gap-10 lg:gap-0 lg:flex-row items-center text-center md:text-start justify-between max-w-[375px] md:max-w-[768px] lg:max-w-[1111px] mx-auto px-16 md:px-0 text-white">
            <h2>Ready to make a reservation?</h2>
            <BookTableButton>Book a table</BookTableButton>
          </div>
          <img
            className="absolute inset-0 object-cover h-full w-full -z-50"
            src={ReadyBgDesktop}
          />
        </div>
      )}
      <div className="bg-darkBlack">
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-start gap-12 md:gap-32 lg:gap-48 py-20 md:py-14 text-white text-[14px] leading-[28px] tracking-[2px] uppercase max-w-[375px] md:max-w-[768px] lg:max-w-[1111px] mx-auto w-full px-10 lg:px-0">
          <div>
            <Logo />
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-48">
            <div className="flex flex-col">
              <p>Marthwaite, Sedbergh</p>
              <p>Cumbria</p>
              <p>+00 44 123 4567</p>
            </div>
            <div className="flex flex-col">
              <p>Open Times</p>
              <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
              <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
