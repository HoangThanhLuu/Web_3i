import { StaticImageData } from "next/image"

interface MyObjectType  {
  title: string;
  benefit:string[],
  price:string,
  current:boolean
};
// { key: "product1", src: Product1, alt: "product1", fill: true },

interface Image {
  src:StaticImageData,
  alt: string;
}

export type Products = {
  id: number;
  image: Image[];
  title: string;
  benafit:string[];
  package: MyObjectType[];
};
