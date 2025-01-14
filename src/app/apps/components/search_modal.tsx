//Worker
import { BiArrowBack } from "react-icons/bi";

/**
 * Types
 */
import type { IAppDataPropsSearchModal } from "../../resources/types/apps/search_modal";

export default function SearchModal(props: IAppDataPropsSearchModal) {
  const { shown, dark, change, searchText, search } = props;
  return (
    <>
      {shown ? (
        <div className="flex flex-col w-[100%] h-[auto] mt-3 p-2 pb-4 px-4">
          <div className={`flex ${dark ? "text-slate-300" : "text-slate-800"}`}>
            <button
              onClick={() => {
                change();
              }}
              style={{
                color: "white",
                backgroundColor: "rgb(96,70,255)",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
                transition: "all 250ms linear",
              }}
              className={`rounded-md p-2`}
            >
              <BiArrowBack size="1.5em" />
            </button>
            <input
              className={`search-input search-input-m-modified search-input-modified ${
                dark ? "style-input-d search-input-m-modified-d" : ""
              } mx-auto`}
              placeholder={`Search the whole of AHQ Store`}
              value={search}
              onChange={(e) => {
                searchText(e.target.value);
              }}
              style={{
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
              }}
              autoComplete={"off"}
              id="special-modal"
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
