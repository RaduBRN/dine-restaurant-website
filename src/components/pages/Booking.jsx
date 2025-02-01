import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import HeroBookingBg from "../../assets/images/booking/hero-bg-desktop.jpg";
import PatternCurveBottomRight from "../../assets/images/patterns/pattern-curve-bottom-right.svg";
import PatternLines from "../../assets/images/patterns/pattern-lines.svg";
import ReservationForm from "../atoms/ReservationForm";
import Logo from "../../icons/Logo";
import BookTableButton from "../atoms/BookTableButton";

function Booking() {
  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  const reservationFormRef = useRef(undefined);

  const scrollToForm = () => {
    const position = reservationFormRef.current.getBoundingClientRect().y;
    window?.scrollTo(0, position - 20);
  };

  return (
    <>
      <div
        className="bg-center h-[600px] flex flex-col items-center md:block md:items-start"
        style={{ backgroundImage: `url(${HeroBookingBg})` }}
      >
        <div className="absolute top-14 block lg:hidden px-10">
          <Link to="/">
            <Logo className={`w-[82px] h-[32px]`} />
          </Link>
        </div>
        <div className="max-w-[375px] md:max-w-[768px] lg:max-w-[1111px] mx-auto text-[#fff] flex flex-col justify-center h-full">
          <div className="flex flex-col items-center lg:items-start lg:flex-row px-6 md:px-24 lg:px-0 gap-20 md:gap-10 lg:gap-32 mt-[620px] md:mt-[450px]">
            <div className="flex flex-col gap-4 lg:gap-6 items-center md:items-start text-center lg:text-start">
              <h1>Reservations</h1>
              <p className="smallBody-text md:body-text">
                We can't wait to host you. If you have any special requirements
                please feel free to call on the phone number below. We'll be
                happy to accommodate you.
              </p>
              <div className="md:hidden">
                <BookTableButton clickFunction={scrollToForm}>
                  Reserve Place
                </BookTableButton>
              </div>
            </div>
            <div className="z-10" ref={reservationFormRef}>
              <ReservationForm />
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden bg-[#fff] h-[560px] md:h-[400px]" />
      <div className="hidden lg:flex relative">
        <img src={PatternCurveBottomRight} />
        <img
          src={PatternLines}
          className="absolute right-[42%] top-[50%] h-fit"
        />
      </div>
    </>
  );
}

export default Booking;
