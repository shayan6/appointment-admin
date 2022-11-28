import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageLoader } from "../actions";

function PageLoader() {
  const { pageLoader, settings } = useSelector((state) => state.common);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setPageLoader(false));
    }, 2000);
  }, []);

  return (
    <>
      <div
        className="qodef-smooth-transition-loader qodef-mimic-ajax"
        style={{
          display: pageLoader ? "block" : "none",
          background:
            settings.theme === "dark"
              ? settings?.color?.colorBlack
              : settings?.color?.colorWhite,
        }}
      >
        <div className="qodef-st-loader">
          <div className="atom">
            <div className="ball ball-1"></div>
            <div className="ball ball-2"></div>
            <div className="ball ball-3"></div>
            <div className="ball ball-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageLoader;
