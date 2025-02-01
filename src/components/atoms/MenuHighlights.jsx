import PatternDivide from "../../assets/images/patterns/pattern-divide.svg";

import salmonImage from "../../assets/images/homepage/salmon-desktop-tablet.jpg";
import salmonImageLarge from "../../assets/images/homepage/salmon-mobile.jpg";
import beefImage from "../../assets/images/homepage/beef-desktop-tablet.jpg";
import beefImageLarge from "../../assets/images/homepage/beef-mobile.jpg";
import chocolateImage from "../../assets/images/homepage/chocolate-desktop-tablet.jpg";
import chocolateImageLarge from "../../assets/images/homepage/chocolate-mobile.jpg";

const menuItems = [
  {
    name: "Seared Salmon Fillet",
    description:
      "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
    smallImage: salmonImage,
    largeImage: salmonImageLarge,
  },
  {
    name: "Rosemary Filet Mignon",
    description:
      "Our prime beef served to your taste with a delicious choice of seasonal sides.",
    smallImage: beefImage,
    largeImage: beefImageLarge,
  },
  {
    name: "Summer Fruit Chocolate Mousse",
    description:
      "Creamy mousse combined with summer fruits and dark chocolate shavings.",
    smallImage: chocolateImage,
    largeImage: chocolateImageLarge,
  },
];

function MenuHighlights() {
  return (
    <section className="bg-darkBlack py-20 md:py-4 lg:py-0">
      <div className="max-w-[375px] md:max-w-[768px] lg:max-w-[1111px] mx-auto md:h-screen flex flex-col items-center lg:items-start justify-center gap-10 lg:gap-16 px-6 md:px-28 lg:px-0">
        <div>
          <img src={PatternDivide} />
        </div>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 text-[#fff]">
          <div className="flex flex-col gap-6 text-center lg:text-start md:px-10 lg:px-0">
            <h2>A few highlights from our menu</h2>
            <p className="smallBody-text md:body-text">
              We cater for all dietary requirements, but here's a glimpse at
              some of our diner's favourites. Our menu is revamped every season.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 text-center md:text-start"
              >
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="relative flex">
                    <picture className="z-10">
                      <source
                        media="(min-width:1000px)"
                        srcSet={item.smallImage}
                      ></source>
                      <source
                        media="(min-width:650px)"
                        srcSet={item.smallImage}
                      ></source>
                      <source
                        media="(min-width:365px)"
                        srcSet={item.largeImage}
                      ></source>
                      <img
                        src={item.smallImage}
                        className="w-full object-cover"
                      />
                    </picture>
                    <img
                      src={PatternDivide}
                      className="hidden md:block object-contain absolute left-12 top-2"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3>{item.name}</h3>
                    <p className="smallBody-text">{item.description}</p>
                  </div>
                </div>
                {index < menuItems.length - 1 && (
                  <div className="border-t border-white/15 w-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuHighlights;
