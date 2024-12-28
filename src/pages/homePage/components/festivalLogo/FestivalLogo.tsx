import style from "./festivalLogo.module.scss";

export const FestivalLogo = () => {
  const title = "RENAISSURGE.";

  return (
    <div
    style={{
      borderLeft: "none",
      borderRight: "none",
    }}
    className="${style.body} w-full md:border-[3px] border-[2px] lg:mt-[64px] md:mt-[100px] mt-[140px] text-customWhite">
      <ul className={`${style.list} md:text-5xl text-4xl font-medium`}>
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
