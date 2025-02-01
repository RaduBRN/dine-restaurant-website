const Section = ({
  children,
  bgUrl,
  bgUrlTablet,
  patternUrl,
  patternClassname,
  wrapperClassname = "h-screen relative",
}) => {
  return (
    bgUrl,
    (
      <div className={wrapperClassname}>
        <div className="px-6 md:px-20 lg:px-0 relative max-w-[375px] md:max-w-[768px] lg:max-w-[1111px] mx-auto z-50 h-full">
          {children}
        </div>
        {bgUrl && (
          <picture>
            <source media="(min-width:1000px)" srcSet={bgUrl}></source>
            <source media="(min-width:650px)" srcSet={bgUrlTablet}></source>
            <source media="(min-width:365px)" srcSet={bgUrlTablet}></source>
            <img
              src={bgUrl}
              className="absolute inset-0 w-full h-full z-[-99] object-cover"
            />
          </picture>
        )}
        {patternUrl && (
          <img
            src={patternUrl}
            className={`absolute hidden md:block ${
              patternClassname ||
              " -left-1/2 lg:left-0 top-40 lg:top-[calc(50vh-160px)]"
            }`}
          />
        )}
      </div>
    )
  );
};

export default Section;
