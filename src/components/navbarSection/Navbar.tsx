import { useScrollPosition } from "../../hooks/useScrollPosition";
import style from "./navbar.module.scss";

export const Navbar = () => {
  // STYLES
  const link = "text-2xl font-medium tracking-tight";

  const isAtTop = useScrollPosition();
  const navbarBg = isAtTop ? style.transparent : style.dark;

  return (
    <div
      className={`${navbarBg} z-[10000] fixed w-full h-[92px] flex justify-center items-center`}
    >
      {/* BODY */}
      <div
        style={{
          borderBottom: "2px solid rgba(255, 255, 255, 0.6)",
        }}
        className="w-[92%] h-full flex justify-between items-center"
      >
        {/* LEFT */}
        <div className="h-full w-[20%] flex justify-start items-center text-white">
          <h1 className="text-3xl font-medium tracking-tight ml-1">
            Renaissurge
          </h1>
        </div>
        {/* RIGHT */}
        <div className="h-full w-[28.6%] flex justify-start items-center">
          <ul className="flex justify-center items-center flex-row gap-20 text-white">
            <li className={link}>
              <a href="#">Art Styles</a>
            </li>
            <li className={link}>
              <a href="#">Buy Tickets</a>
            </li>
            <li className={link}>
              <a href="#">Art Preview</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
