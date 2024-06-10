import { url } from "inspector";
import Image from "next/image";
const AboutSectionTwo = () => {
  return (
    <section >
      <div className="container max-w-full sm:max-w-screen-xl ">
        <div className="-mx-4 flex flex-wrap items-center mt-10">
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Ghi chú
                </h3>
                <p className="flex font-medium leading-relaxed text-body-color  sm:text-lg sm:leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-base w-6 h-6 text-[green]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span className="ml-5 ">Bảng giá chưa bao gồm VAT</span>
                </p>
                <p className="flex font-medium leading-relaxed text-body-color  sm:text-lg sm:leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-base w-6 h-6 text-[green]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span className="ml-5 ">Mua tối thiểu 10 User</span>
                </p>
                <p className="flex font-medium leading-relaxed text-body-color  sm:text-lg sm:leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-base w-6 h-6 text-[green]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span className="ml-5 ">Miễn phí dung lượng lưu trữ 1GB/User</span>
                </p>
                <p className="flex font-medium leading-relaxed text-body-color  sm:text-lg sm:leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-base w-6 h-6 text-[green]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span className="ml-5 ">Miễn phí cập nhật tính năng mới</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0" data-wow-delay=".15s"
            >
              <Image
                src="/images/about/ctamobile.jpg"
                alt="about image"
                fill
                className="rounded-md"
              />
            </div>
          </div>

        </div>
      </div>
    </section >
  );
};

export default AboutSectionTwo;
