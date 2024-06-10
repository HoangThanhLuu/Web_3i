
import { Products } from "@/types/products";
;


const Introduction = ({
    dataContent,
    dataProduct,
    pageName,
    description,
    showLink = true,
    intoLink = "#",
    quoteLink = "/Contact",
    metaImage = "",
    fontFamily = "",
    fontTitle = "",
    fontDescription = ""
}: {
    dataContent: string,
    dataProduct: Products,
    pageName: string;
    description?: string;
    renderHTML?: string;
    imageWidth?: string;
    showLink?: boolean;
    intoLink?: string;
    quoteLink?: string;
    metaImage?: string;
    fontFamily?: string,
    fontTitle?: string;
    fontDescription?: string;
}) => {
    return (
        <>
            <section id="introduction" className={` relative z-10 rounded-xl overflow-hidden py-10 mt-28 md:mx-8 lg:mt-[72px]  dark:bg-none ${fontFamily}`}>
                <div className="flex items-center container max-w-full sm:max-w-screen-xl p-4">
                    <div className="mx-auto w-full">
                        <div className=" flex gap-8 flex-wrap md:flex-nowrap flex-col lg:flex-row justify-between items-start">
                            <div className=" flex gap-3 flex-col h-full lg:w-fit w-full ">
                                <div dangerouslySetInnerHTML={{ __html: dataContent }} />
                            </div>
                        </div>
                    </div>
                    {/*  họa tiết hình nền   */}
                    <div>
                        <span className="absolute top-0 left-0 z-[-1]">
                            <svg
                                width="287"
                                height="254"
                                viewBox="0 0 287 254"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.1"
                                    d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                                    fill="url(#paint0_linear_111:578)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_111:578"
                                        x1="-40.5"
                                        y1="117"
                                        x2="301.926"
                                        y2="-97.1485"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#4A6CF7" />
                                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <span className="absolute right-0 top-0 z-[-1]">
                            <svg
                                width="628"
                                height="258"
                                viewBox="0 0 628 258"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.1"
                                    d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                                    fill="url(#paint0_linear_0:1)"
                                />
                                <path
                                    opacity="0.1"
                                    d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                                    fill="url(#paint1_linear_0:1)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_0:1"
                                        x1="644"
                                        y1="221"
                                        x2="429.946"
                                        y2="37.0429"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#4A6CF7" />
                                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear_0:1"
                                        x1="18.3648"
                                        y1="166.016"
                                        x2="105.377"
                                        y2="32.3398"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#4A6CF7" />
                                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Introduction;
