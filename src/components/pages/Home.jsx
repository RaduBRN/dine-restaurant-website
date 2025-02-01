import Section from "../layouts/Section.jsx";
import HeroBGDesktop from "../../assets/images/homepage/hero-bg-desktop.jpg";
import HeroBGTablet from "../../assets/images/homepage/hero-bg-tablet.jpg";
import EnjoyablePlaceDesktop from "../../assets/images/homepage/enjoyable-place-desktop.jpg";
import LocallySourcedDesktop from "../../assets/images/homepage/locally-sourced-desktop.jpg";
import FamilyGathering from "../../assets/images/homepage/family-gathering-desktop.jpg";
import SpecialEvents from "../../assets/images/homepage/special-events-desktop.jpg";
import SocialEvents from "../../assets/images/homepage/social-events-desktop.jpg";
import PatternCurveTopRight from "../../assets/images/patterns/pattern-curve-top-right.svg";
import PatternCurveTopLeft from "../../assets/images/patterns/pattern-curve-top-left.svg";
import PatternLines from "../../assets/images/patterns/pattern-lines.svg";
import Hero from "../atoms/Hero.jsx";
import ExtraDetails from "../atoms/ExtraDetails.jsx";
import MenuHighlights from "../atoms/MenuHighlights.jsx";

const eventsData = [
  {
    title: "Family Gathering",
    description:
      "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.",
    src: FamilyGathering,
  },
  {
    title: "Special Events",
    description:
      "Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal.",
    src: SpecialEvents,
  },
  {
    title: "Social Events",
    description:
      "Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.",
    src: SocialEvents,
  },
];

function Home() {
  return (
    <div>
      <Section bgUrl={HeroBGDesktop} bgUrlTablet={HeroBGTablet}>
        <Hero />
      </Section>
      <Section patternUrl={PatternCurveTopRight}>
        <ExtraDetails
          image={EnjoyablePlaceDesktop}
          imageClassname={`-mt-10 md:-mt-20`}
          title={`Enjoyable place for all the family`}
          description={`Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.`}
        />
      </Section>
      <Section
        patternUrl={PatternCurveTopLeft}
        patternClassname={`-right-1/2 lg:left-[calc(50vw-100px)] top-[calc(100vh-274px)] lg:top-[calc(100vh-314px)] -mt-20`}
        wrapperClassname="mb-0 md:-mb-20 h-screen relative overflow-hidden lg:overflow-visible"
      >
        <ExtraDetails
          image={LocallySourcedDesktop}
          imageClassname={`-mt-10 md:-mt-20 lg:mt-0`}
          order="order-last"
          title={`The most locally sourced food`}
          description={`All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.`}
        />
        <div className="hidden md:absolute right-6 lg:-right-24 top-[20%] lg:top-[45%] z-50">
          <img src={PatternLines} />
        </div>
      </Section>
      <MenuHighlights />
      <Section
        patternUrl={PatternCurveTopRight}
        patternClassname={`right-1/2 lg:-left-[28%] top-0`}
        wrapperClassname="pt-10 md:pt-28 md:h-[calc(100vh+192px)] relative"
      >
        <ExtraDetails image={eventsData} imageClassname={`lg:py-32`} />
        <div className="hidden md:block absolute left-6 lg:-left-12 -top-9 lg:top-20 z-50">
          <img src={PatternLines} />
        </div>
      </Section>
    </div>
  );
}

export default Home;
