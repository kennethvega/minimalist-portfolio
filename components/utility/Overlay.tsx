import React from "react";
type OutlineProps = {
  handleClose?: (e: React.MouseEvent<HTMLElement>) => void;
};

const Overlay = ({ handleClose }: OutlineProps) => {
  return (
    <div
      onClick={handleClose}
      className="opacity-60 fixed inset-0 z-10 bg-black top-0 left-0  w-[100vw] h-[100vh]"
    ></div>
  );
};

export default Overlay;