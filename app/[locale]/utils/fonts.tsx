import { Montserrat, Merriweather, Noto_Serif, Inter, Oswald } from "next/font/google";

export const fontBase = Montserrat({
    subsets: ["vietnamese"], display: 'swap', adjustFontFallback: false
});

export const blogFont = Merriweather({
    subsets: ["vietnamese"], display: 'swap', adjustFontFallback: false,
    weight: "400"
});

export const blogTitleFont = Noto_Serif({
    subsets: ["vietnamese"], display: 'swap', adjustFontFallback: false,
    weight: "400"
})

export const blogDescriptionFont = Inter({
    subsets: ["vietnamese"], display: 'swap', adjustFontFallback: false
})

export const systemStructure = Oswald({
    subsets: ["vietnamese"], display: 'swap', adjustFontFallback: false
})