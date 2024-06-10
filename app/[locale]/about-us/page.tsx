import AboutSectionOne from "../../[locale]/components/About/AboutSectionOne";
import AboutSectionTwo from "../../[locale]/components/About/AboutSectionTwo";
import Breadcrumb from "../../[locale]/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Bảng giá"
        description="
        Theo gói ứng dụng"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
