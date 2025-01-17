import type { ISearchPropsToRender } from "../../resources/types/apps/search_result";

export default function Load(props: ISearchPropsToRender) {
  const { icon, displayName, description, show, set, id, dark } = props;

  return (
    <div
      className="flex w-[100%] h-[3rem] shoadow-2xl rounded-xl pl-3"
      style={{ cursor: "pointer" }}
      onClick={() => {
        set(id);
        show();
      }}
    >
      <img src={icon} alt="Logo" />
      <div className="ml-2">
        <h1 className={dark ? "text-white" : "text-black"}>{displayName}</h1>
        <h2>
          {description.length > 30
            ? `${description.substring(0, 30)}...`
            : description}
        </h2>
      </div>
    </div>
  );
}
