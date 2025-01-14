/**
 * Types
 */
import type { IButtonProps } from "../../resources/types/home/buttons";

export default function Button(props: IButtonProps) {
  const { dark, Icon, title, description, onClick, no50, calibrate } = props;

  return (
    <div
      className={`h-[5.5rem] w-[20.5rem] m-[1rem] ${
        dark
          ? "bg-gray-800 hover:bg-gray-900 text-slate-200"
          : "bg-gray-100 hover:bg-gray-200 text-slate-700"
      } rounded-xl hover:shadow-xl flex p-3`}
      style={{
        cursor: "pointer",
        transition: "all 125ms linear",
      }}
      onClick={() => onClick()}
    >
      <div className="my-auto ml-3">
        {typeof Icon === "string" ? (
          <img
            alt="Logo"
            width={"48px"}
            height={"48px"}
            style={no50 ? {} : { borderRadius: "50%" }}
            className="shadow-2xl"
            draggable={false}
            src={Icon}
          ></img>
        ) : (
          <Icon size="3em" />
        )}
      </div>
      <div className="flex flex-col ml-3">
        <h1 className="text-3xl">{title}</h1>
        <h2 className={calibrate ? `ml-[${calibrate}px]` : ""}>
          {description}
        </h2>
      </div>
    </div>
  );
}
