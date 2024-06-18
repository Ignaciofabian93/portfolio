import Image from "next/image";
import left_arrow from "@/assets/icons/caret-left.png";
import right_arrow from "@/assets/icons/caret-right.png";

type ArrowProps = {
  onClick: () => void;
};

export const LeftArrow = ({ onClick }: ArrowProps) => {
  return (
    <>
      <div className="w-[5%] h-[5%] cursor-pointer" onClick={onClick}>
        <Image src={left_arrow} alt="left" />
      </div>
    </>
  );
};

export const RightArrow = ({ onClick }: ArrowProps) => {
  return (
    <>
      <div className="w-[5%] h-[5%] cursor-pointer" onClick={onClick}>
        <Image src={right_arrow} alt="right" />
      </div>
    </>
  );
};
