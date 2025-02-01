import { useState, useEffect } from "react";
import PatternDivide from "../../assets/images/patterns/pattern-divide.svg";
import BookTableButton from "./BookTableButton";

const GalleryMenu = ({
  wrapperClassname = "hidden lg:flex md:flex-col gap-2",
  image,
  selectedIndex,
  setSelectedIndex,
}) => {
  return (
    <div className={wrapperClassname}>
      {image?.map((item, index) => (
        <button
          key={index}
          className={`w-fit relative
            ${
              selectedIndex === index
                ? "text-[#4c4c4c]"
                : "text-[#4c4c4c]/50 hover:text-[#4c4c4c]"
            }`}
          onClick={() => setSelectedIndex(index)}
        >
          {selectedIndex === index && (
            <div className="absolute w-12 lg:w-32 h-[1px] lg:right-[120%] left-[calc(50%-24px)] lg:left-auto right-0 -bottom-1 lg:bottom-1/2 bg-lightBrown -z-50" />
          )}
          <h4 className="uppercase">{item?.title}</h4>
        </button>
      ))}
    </div>
  );
};

function ExtraDetails({ image, imageClassname, title, description, order }) {
  const [isGallery, setIsGallery] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (typeof image === "object") {
      setIsGallery(true);
    }
  }, []);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-start lg:gap-36 items-center h-full">
      <div className="relative w-full h-96 lg:h-full">
        <img
          src={isGallery ? image[selectedIndex]?.src : image}
          className={`absolute inset-0 h-full w-full object-cover ${imageClassname} shadow-2xl md:shadow-none`}
        />
      </div>
      {isGallery && (
        <GalleryMenu
          wrapperClassname="flex flex-col md:flex-row lg:hidden gap-5 md:gap-20 mt-10 -mx-20 items-center md:items-start"
          image={image}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      )}
      <div
        className={`flex flex-col gap-10 lg:gap-16 ${
          order === "order-last" ? "lg:order-first" : ""
        }`}
      >
        {!isGallery ? (
          <>
            <div className="flex justify-center lg:justify-start lg:mt-0">
              <img src={PatternDivide} />
            </div>
            <div className="flex flex-col items-center lg:items-start gap-8">
              <h2 className="font-bold max-w-[380px] lg:max-w-auto">
                {isGallery ? image[selectedIndex]?.title : title}
              </h2>
              <div className="smallBody-text md:body-text max-w-[450px] lg:max-w-auto">
                {isGallery ? image[selectedIndex]?.description : description}
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center lg:items-start gap-8 mt-10 md:mt-20">
            <h2 className="font-bold max-w-[380px] lg:max-w-auto">
              {isGallery ? image[selectedIndex]?.title : title}
            </h2>
            <div className="body-text max-w-[500px] lg:max-w-auto">
              {isGallery ? image[selectedIndex]?.description : description}
            </div>
          </div>
        )}
        {isGallery && (
          <div className="flex flex-col">
            <div className="pb-10 lg:-mt-8">
              <BookTableButton secondary={true}>Book a table</BookTableButton>
            </div>
            <GalleryMenu
              image={image}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ExtraDetails;
