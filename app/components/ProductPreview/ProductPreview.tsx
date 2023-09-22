import React from "react";
import HeadphoneOne from "../../../public/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import HeadphoneTwo from "../../../public/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import HeadphoneThree from "../../../public/assets/product-xx59-headphones/mobile/image-product.jpg";

interface ProductPreviewProps {
  title: string;
  description: string;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({
  title,
  description,
}) => {
  return (
    <section>
      <img />
      <p>New Product</p>
      {title}
      {description}
    </section>
  );
};

const Headphones = [
  {
    img: HeadphoneOne,
    title: "XX99 Mark II Headphones",
    desription:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  },
  {
    img: HeadphoneTwo,
    title: "XX99 Mark I Headphones",
    desription:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
  },
  {
    img: HeadphoneThree,
    title: "XX59 Headphones",
    desription:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move. ",
  },
];

export default ProductPreview;
