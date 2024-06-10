"use client";
import NextTopLoader from "nextjs-toploader";
// import NextNProgress from "nextjs-progressbar";

const NextNProgressClient = () => {
  return (
    <NextTopLoader
      color="#00a455"
      initialPosition={0.08}
      crawlSpeed={500}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={500}
      // shadow="0 0 10px #2299DD,0 0 5px #2299DD"
    />
  );
};

export default NextNProgressClient;
