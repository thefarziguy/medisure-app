import React, { useState } from "react";
import Action from "../NavComponents/Action";
import {
  faThLarge,
  faNewspaper,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";

export default function PopUpMenu({ isOpen }) {
  return (
    <div
      className={
        isOpen
          ? "opacity-100 scale-y-100 transform transition-all duration-300 ease-out origin-top"
          : "opacity-0 scale-y-0 transform transition-all duration-300 ease-out origin-top"
      }
    >
      <div
        className="absolute right-0 z-10 mt-[10px] w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div role="none" className="py-1 divide-y divide-solid">
          <Action
            name={"Products"}
            icon={faThLarge}
            isSelecatable={true}
            onClickHandler={() => {}}
          />

          <Action
            name={"Reviews & News"}
            icon={faNewspaper}
            isSelecatable={true}
            onClickHandler={() => {}}
          ></Action>
          <Action
            name={"Register/Login"}
            icon={faIdBadge}
            isSelecatable={true}
            onClickHandler={() => {}}
          ></Action>
        </div>
      </div>
    </div>
  );
}
