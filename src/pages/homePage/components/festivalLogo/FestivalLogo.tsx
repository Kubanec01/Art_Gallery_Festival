import style from "./festivalLogo.module.scss";

export const FestivalLogo = () => {
  const title = "RENAISSURGE.";

  return (
    <div className="${style.body} w-full border-[3px] mt-[64px] text-customWhite">
      <ul className={`${style.list} text-5xl font-medium`}>
        <li>{title}</li>
        <li>{title}</li>
        <li>{title}</li>
        <li>{title}</li>
        <li>{title}</li>
        <li>{title}</li>
        <li>{title}</li>
        <li>{title}</li>
        <li>{title}</li>
        {/* Duplicated list */}
        <li>{title}</li>
        <li>{title}</li>
        <li>{title}</li>
        <li>{title}</li>
        <li>{title}</li>
        <li>{title}</li>
        <li>{title}</li>
        <li>{title}</li>
        <li>{title}</li>
      </ul>
    </div>
  );
};
