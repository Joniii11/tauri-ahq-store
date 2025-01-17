//React
import { useEffect, useRef, useState } from "react";
import { RiApps2Line } from "react-icons/ri";
import { BsGear } from "react-icons/bs";
import { AiFillExperiment } from "react-icons/ai";
import { IoLibraryOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

//image
import AHQStore from "./index.png";

//components
import Button from "./components/Button";
import base from "../server";

//API
import { didGreet, greeted } from "../resources/utilities/greet";
import { fetch } from "@tauri-apps/api/http";
import { getData, setData } from "../resources/utilities/database";
import { getAppVersion } from "../resources/api/version";
import getWindows from "../resources/api/os";

/**
 * Types
 */
import type { IHomePropsIndex } from "../resources/types/home";

function darkMode(classes: Array<string>, dark: boolean) {
  let newClasses: string[] = [];

  classes.forEach((c) => {
    newClasses.push(c);
    if (dark) {
      newClasses.push(c + "-dark");
    }
  });

  return newClasses.join(" ");
}

export default function Home(props: IHomePropsIndex) {
  const [userIcon, setUserIcon] = useState<string>(
    (getData("x-icon") as string) || "",
  );

  const { dark, setPage, auth } = props;

  fetch<string>(`${base}`, {
    headers: {
      uid: auth.currentUser?.uid as string,
    },
    method: "GET",
  })
    .then(({ data }) => {
      if (!data.includes("<!DOCTYPE html>")) {
        setData("x-icon", data);
        setUserIcon(data);
      }
    })
    .catch(console.log);

  const [greet, setGreet] = useState(didGreet());
  const version = getAppVersion();
  const [first] = useState(!didGreet());
  const textBox = useRef<HTMLHeadingElement>("");

  useEffect(() => {
    if (!greet) {
      greeted();
      setTimeout(() => {
        setGreet(true);
        const greetText = "What would you like to do today!";
        for (let i = 0; i < greetText.length; i++) {
          const h1 = textBox.current as HTMLHeadElement;
          try {
            if (i === 0) {
              h1.innerHTML = "";
            }
            setTimeout(() => {
              try {
                h1.innerHTML += greetText[i];
              } catch (_) {}
            }, 50 * i);
          } catch (_) {}
        }
      }, 1750);
    }
  }, [greet]);

  return (
    <div
      className={`${darkMode(
        ["menu"],
        props.dark,
      )} flex flex-col justify-center`}
    >
      <div className="flex justify-center items-center mb-auto mt-3">
        <img src={AHQStore} alt="Logo" width={"125px"} draggable={false} />
        <h1
          className={`block ml-2 style-h1 ${props.dark ? "style-h1-d" : ""}`}
          style={{
            fontSize: "100px",
            color: props.dark ? "white" : "rgb(185,28,28)",
          }}
        >
          AHQ Store
        </h1>
        <span
          className={`block mt-auto ${
            props.dark ? "text-red-600" : "text-black"
          } ml-2`}
          style={{ fontSize: "40px", fontWeight: "10px" }}
        >
          v{version}
        </span>
      </div>
      <h1
        ref={textBox}
        className={`text-3xl ${
          dark ? "text-slate-300" : "text-slate-600"
        } mb-2`}
        style={{ transition: "all 125ms fade-in" }}
      >
        {!first && greet ? "What would you like to do today!" : "Welcome!"}
      </h1>
      <div className="flex flex-col mb-auto">
        <div className="flex flex-row">
          <Button
            dark={dark}
            Icon={RiApps2Line}
            title={"Apps"}
            description="Explore Apps"
            onClick={() => setPage("apps")}
          />
          <Button
            dark={dark}
            Icon={IoLibraryOutline}
            title="Library"
            calibrate="1.5"
            description="Check for app updates"
            onClick={() => setPage("library")}
          />
        </div>
        <div className="flex flex-row">
          <Button
            dark={dark}
            Icon={userIcon === "" ? MdAccountCircle : userIcon}
            title="Account"
            description="Customise your account"
            onClick={() => setPage("user")}
          />
          <Button
            dark={dark}
            Icon={Math.random() > 0.01 ? BsGear : getWindows()}
            no50
            title="Settings"
            calibrate="1"
            description="Set your preferences"
            onClick={() => {
              document.getElementById("settings")?.click();
            }}
          />
        </div>
        {props.dev ? (
          <div className="flex justify-center items-center mb-auto mt-3">
            <Button
              dark={dark}
              Icon={AiFillExperiment}
              no50
              calibrate="1.5"
              title="Developer"
              description="Hola! Hello!"
              onClick={() => setPage("developer")}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
