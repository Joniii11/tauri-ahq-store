//Arrow
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { GiPartyPopper } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import fetchApps from "../../resources/api/fetchApps";
import Toast from "../../resources/api/toast";
import listAllApps from "../../resources/utilities/listAllApps";
import App from "./App";

/**
 * types
 */
import type { IAppDataApi } from "../../resources/types/resources/api";
import type { IPropsList } from "../../resources/types/library/components";

export default function AppsList(props: IPropsList) {
  const { dark, change } = props;

  const [apps, setApps] = useState<IAppDataApi[]>([]);
  const [rawApps, setRawApps] = useState(0);

  async function parseAppsData() {
    const apps = await listAllApps();
    if (Object.keys(apps).length === 0) {
      setRawApps(1);
    }
    const resolvedApps = await fetchApps(Object.keys(apps));
    setApps(resolvedApps as IAppDataApi[]);
  }

  useEffect(() => {
    parseAppsData();
  }, []);

  return (
    <div className="flex flex-col w-[100%] h-[100%]">
      <div className={`flex text-base-content`}>
        <button className="dui-btn dui-btn-square" onClick={() => change()}>
          <BiArrowBack
            width="2em"
            height="2em"
            color={dark ? "white" : "black"}
            style={{
              minWidth: "2em",
              minHeight: "2em",
            }}
          />
        </button>
      </div>
      <div
        className="min-h-[auto] h-[100%] min-w-[100%] pb-[1rem] text-center"
        style={{ overflowY: "scroll" }}
      >
        {rawApps === 1 ? (
          <h1
            className={`my-2 w-[100%] flex flex-row text-center items-center justify-center ${
              dark ? "text-slate-400" : "text-slate-700"
            }`}
          >
            Install some apps to get the fun started{" "}
            <GiPartyPopper size="1.5em" />
          </h1>
        ) : apps.length === 0 ? (
          <h1 className={`my-2 ${dark ? "text-slate-400" : "text-slate-700"}`}>
            Loading...
          </h1>
        ) : (
          <></>
        )}

        {apps.map((data) => {
          return (
            <App
              key={data.id}
              appInfo={data}
              dark={dark}
              reload={parseAppsData}
              toast={Toast}
            />
          );
        })}
      </div>
      <div
        className={`flex py-auto ${
          dark ? "text-yellow-500" : "text-yellow-900"
        }`}
      >
        <div className="my-auto">
          <IoIosNotifications />
        </div>
        <span>means that an update is available</span>
      </div>
    </div>
  );
}
