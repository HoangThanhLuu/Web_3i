const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "40px",
  textHeading = "text-black dark:text-white",
  textParams = "text-black dark:text-white",
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
        className={`wow fadeInUp w-full x ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className={`text-[38px]  lg:mb-14 font-semibold !text-[#002968] ${textHeading}`}>{title}</h2>

        <p
          className={`text-base !leading-relaxed text-body-color ${textParams}`}
        >
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
