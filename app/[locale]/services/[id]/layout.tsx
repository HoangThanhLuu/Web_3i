import { getImg } from "../../utils/util";

import type { Metadata, ResolvingMetadata } from "next";
import { GetItemService } from "../../apis/GetDataHome";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

type Props = {
  params: { id: string };
  // searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  const result = await GetItemService(Number(params?.id));
  const service = result.data;
  console.log(service);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: service.title,
    description: service.title,
    openGraph: {
      images: [
        {
          url: getImg(service.gallery),
          width: 1200,
          height: 630,
        },
        ...previousImages,
      ],
      type: "article",
      title: service.title,
    },
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
