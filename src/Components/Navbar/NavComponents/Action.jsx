import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Action({
  name,
  icon,
  isSelecatable = false,
  onClickHandler,
}) {
  const selectableClass =
    "flex flex-row items-center p-2 gap-2 group hover:bg-gray-100";
  const nonSelectableClass = "flex flex-row items-center p-2 gap-2 group";

  return (
    <div className={isSelecatable ? selectableClass : nonSelectableClass}>
      <FontAwesomeIcon
        icon={icon}
        color="#000"
        className="group-hover:text-[#1C3F3F]"
      ></FontAwesomeIcon>
      <button
        className="text-lg text-color-black group-hover:text-[#1C3F3F]"
        onClick={onClickHandler}
      >
        {name}
      </button>
    </div>
  );
}
