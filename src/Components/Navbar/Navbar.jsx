import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./LogoComponant/Logo";
import Action from "./NavComponents/Action";
import PopUpMenu from "./PopupViewMenu/PopupMenu";
import {
  faThLarge,
  faNewspaper,
  faIdBadge,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function MainNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-wrap items-center py-2 px-10 justify-between shadow-lg max-md:px-2">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className="flex flex-row p-2 flex-wrap gap-2 max-md:hidden">
        <Action name={"Products"} icon={faThLarge} onClickHandler={() => {}} />
        <Action
          name={"Reviews & News"}
          icon={faNewspaper}
          onClickHandler={() => {}}
        />
        <Action
          name={"Register/Login"}
          icon={faIdBadge}
          onClickHandler={() => {}}
        />
      </div>
      <div className="md:hidden">
        <Action
          icon={faBars}
          name={"Menu"}
          onClickHandler={() => setIsOpen(!isOpen)}
        />
        <PopUpMenu isOpen={isOpen} />
      </div>
    </div>
  );
}
