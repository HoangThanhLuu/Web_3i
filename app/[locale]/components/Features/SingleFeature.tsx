import { Feature } from "@/types/feature";
import { join } from "path";
import { json } from "stream/consumers";
import Image from "next/image";
import Link from "next/link";

const SingleFeature = ({ feature }: any) => {
  return (
    <Link href={`/services/${feature.id}`}>
      <div className="group h-full w-full transform rounded-md p-8 shadow-shadow-chat transition duration-300 md:border-b-4 md:border-transparent md:hover:-translate-y-2 md:hover:border-b-green-500 md:hover:shadow-lg">
        <div className="wow fadeInUp" data-wow-delay=".1s">
          <div className="mb-10 flex w-full justify-center rounded-md bg-opacity-10 object-cover text-primary">
            <Image
              alt=""
              src={`${process.env.BACKEND_URL}${feature.gallery}`}
              className="block aspect-square h-[100px] w-[100px] transition-transform duration-300 ease-in-out group-hover:scale-110 md:w-72 xl:w-48"
              width={2000}
              height={0}
            />
          </div>
          <h3 className="d-flex mb-4 text-[#002968] text-center text-lg font-semibold">
            {feature?.title}
          </h3>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-[#002968] duration-200 ease-linear md:group-hover:text-white">
            {/* {feature?.short_content} */}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleFeature;
