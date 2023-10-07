import React from "react";
import CtaButton from "../common/CtaButton";

interface AlsoLikeProps {
  props: any;
}

const AlsoLike: React.FC<AlsoLikeProps> = ({ props }) => {
  return (
    <section className="my-16 text-center">
      <p>You may also like</p>
      {props.map(() => {
        <img src="" alt="" />;
        <p>{}</p>;
      })}
      <CtaButton bgColor="bg-[--dark-orange]" textColor="text-white" />
    </section>
  );
};

export default AlsoLike;
