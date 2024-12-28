import { useTranslation } from "react-i18next";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import style from "./navbar.module.scss";

export const Navbar = () => {

  const {t} = useTranslation()

  // STYLES
  const link = "lg:text-2xl md:text-xl text-lg font-medium tracking-tight text-nowrap";

  const isAtTop = useScrollPosition();
  const navbarBg = isAtTop ? style.transparent : style.dark;

  return (
    <div
      className={`${navbarBg} z-[10000] fixed w-full md:h-[92px] h-[72px] flex justify-center items-center`}
    >
      {/* BODY */}
      <div
        style={{
          borderBottom: "2px solid rgba(255, 255, 255, 0.6)",
        }}
        className="w-[92%] h-full flex justify-between items-center"
      >
        {/* LEFT */}
        <div className="h-full w-[20%] sm:flex hidden justify-start items-center text-white">
          <h1 className="lg:text-3xl text-2xl font-medium tracking-tight ml-1">
            Renaissurge
          </h1>
        </div>
        {/* RIGHT */}
        <div className="h-full mr-1 flex sm:justify-start sm:w-auto w-full justify-center items-center">
          <ul className="flex justify-center items-center flex-row lg:gap-20 md:gap-12 gap-8 text-white">
            <li className={link}>
              <a href="#art-styles">{t('navbar.artStyles')}</a>
            </li>
            <li className={link}>
              <a href="#festival-info">{t('navbar.buyTickets')}</a>
            </li>
            <li className={link}>
              <a href="#art-preview">{t('navbar.artPreview')}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
