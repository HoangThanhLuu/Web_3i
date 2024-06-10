import { Inter } from "next/font/google";
import { getImg } from "../../utils/util";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false,
});

import type { Metadata, ResolvingMetadata } from "next";
import { GetItem } from "../../apis/GetDataHome";

type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id;

    const result = await GetItem(Number(params?.id));
    const product = result.data;
    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: product.title,
        description: product.short_content,
        openGraph: {
            images: [
                {
                    url: getImg(product.gallery),
                    width: 1200,
                    height: 630,
                },
                ...previousImages,
            ],
            type: "article",
            title: product.title,
        },
    };
}

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
