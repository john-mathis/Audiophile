import React from "react";
import CtaButton from "../common/CtaButton";

interface ProductPreviewProps {
  props: any;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ props }) => {
  return (
    <section>
      {props.map((info: any) => {
        return (
          <div>
            <p>{info.title}</p>
            <p className="text-center">New Product</p>
            <CtaButton bgColor="bg-red-500" textColor="white" />
            <p></p>
          </div>
        );
      })}
    </section>
  );
};

export default ProductPreview;
