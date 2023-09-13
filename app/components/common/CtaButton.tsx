import React from "react";

interface ctaButtonProps {
  bgColor: string;
  textColor: string;
}

const CtaButton: React.FC<ctaButtonProps> = ({ bgColor, textColor }) => {
  return (
    <button
      className={`${bgColor} ${textColor} font-semibold flex mx-auto uppercase mt-6 px-12 py-4 `}
    >
      See product
    </button>
  );
};

export default CtaButton;
