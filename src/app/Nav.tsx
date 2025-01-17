import { BsGear, BsFillGearFill, BsThreeDotsVertical } from "react-icons/bs";
import { MdAccountCircle, MdOutlineAccountCircle } from "react-icons/md";
import {
  AiFillExperiment,
  AiFillHome,
  AiOutlineExperiment,
  AiOutlineHome,
} from "react-icons/ai";
import { RiApps2Fill, RiApps2Line } from "react-icons/ri";
import { IoLibraryOutline, IoLibrarySharp } from "react-icons/io5";

import { getCurrent } from "@tauri-apps/api/window";

import drag from "./drag";
import { useEffect } from "react";

/**
 * Types
 */
import type { IProp } from "./resources/types/app";

export default function Nav(props: IProp) {
  let { active, home: changePage, dev, horizontal: P_H } = props;

  const horizontal = "n-item-h ";

  useEffect(() => {
    if (P_H) {
      drag(document.getElementById("sidebar"));
    }
  }, [P_H]);

  let a = P_H ? horizontal : "",
    b = P_H ? horizontal : "",
    c = P_H ? horizontal : "",
    d = P_H ? horizontal : "",
    e = P_H ? horizontal : "",
    f = P_H ? horizontal : "";
  switch (active) {
    case "home":
      a = "active";
      break;
    case "apps":
      b = "active";
      break;
    case "settings":
      c = "active";
      break;
    case "developer":
      e = "active";
      break;
    case "library":
      f = "active";
      break;
    default:
      d = "active";
      break;
  }

  getCurrent().setTitle(
    `${active.replace("user", "account")[0].toUpperCase()}${active
      .replace("user", "ccount")
      .replace(active[0], "")
      .toLowerCase()} - AHQ Store`,
  );

  return (
    <div
      className={`${P_H ? "absolute w-[98vh]" : "w-[80px]"} ${
        P_H ? "h-[15vh] px-[1rem]" : "h-[98vh]"
      } my-auto ${P_H ? "mt-2" : "ml-2"} rounded-lg flex ${
        P_H ? "flex-row" : "flex-col"
      } items-center nav bg-blue-super ${P_H ? "nav-h" : ""}`}
      id={"sidebar"}
    >
      {P_H ? (
        <span id="sidebarheader" className="text-white hover:cursor-move">
          <BsThreeDotsVertical size={"2.5em"} />
        </span>
      ) : (
        <></>
      )}
      <button className={`n-item ${a}`} onClick={() => changePage("home")}>
        {a === "active" ? (
          <AiFillHome size={"2.5em"}></AiFillHome>
        ) : (
          <AiOutlineHome size={"2.5em"} />
        )}
      </button>

      <button className={`n-item ${b}`} onClick={() => changePage("apps")}>
        {b === "active" ? (
          <RiApps2Fill size={"2.5em"} />
        ) : (
          <RiApps2Line size={"2.5em"} />
        )}
      </button>

      <div className={P_H ? "mx-auto" : "mt-auto mb-auto"}></div>

      {dev ? (
        <button
          className={`n-item ${e}`}
          onClick={() => changePage("developer")}
        >
          {e === "active" ? (
            <AiFillExperiment size={"2.5em"} />
          ) : (
            <AiOutlineExperiment size={"2.5em"} />
          )}
        </button>
      ) : (
        <></>
      )}

      <button className={`n-item ${f}`} onClick={() => changePage("library")}>
        {f === "active" ? (
          <IoLibrarySharp size="2.5em" />
        ) : (
          <IoLibraryOutline size="2.5em" />
        )}
      </button>

      <button className={`n-item ${d}`} onClick={() => changePage("user")}>
        {d === "active" ? (
          <MdAccountCircle size={"2.8em"} />
        ) : (
          <MdOutlineAccountCircle size={"2.8em"} />
        )}
      </button>

      <button
        className={`n-item n-item-settings ${
          c === "active" ? `active active-settings` : ""
        }`}
        id="settings"
        onClick={() => changePage("settings")}
      >
        {c === "active" ? (
          <BsFillGearFill size={"2.5em"} />
        ) : (
          <BsGear size={"2.5em"} />
        )}
      </button>

      <div className="mb-[8px]"></div>
    </div>
  );
}
