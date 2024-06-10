const SectionTitleFull = ({
  title,
  paragraph,
  center,
  mb = "50px",
  textHeading = "text-black dark:text-white",
  textParams = "text-black dark:text-white"
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  textHeading?: string;
  textParams?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
      >
        <h2 className={`mb-4 text-lg md:text-3xl font-bold mt-8 text-green !leading-tight text-justify ${textHeading}`}>
          {title}
        </h2>
        <p className={`text-sm md:text-xl !leading-relaxed text-body-color text-justify ${textParams}`}>
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitleFull;
