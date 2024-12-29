import { Trans, useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full lg:h-[320px] p-4">
      <div className="w-[96%] max-w-[1200px] h-full mx-auto md:flex lg:flex-nowrap flex-wrap justify-between items-center lg:mt-0 mt-[100px]">
        {/* DISCLAIMER */}
        <div className="lg:w-[25%] md:w-[38%] w-[90%] h-full flex justify-center items-center">
          <div className="lg:mb-[30px] md:mb-[10px] mb-[20px]">
            <h1 className="text-customWhite lg:text-2xl text-xl">
              {t("footer.disclaimer.title")}
            </h1>
            <p className="text-shadowGrey mt-[2px] lg:text-wrap lg:w-full w-[90%]">
              {t("footer.disclaimer.desc")}
            </p>
          </div>
        </div>
        {/* PRODUCTS */}
        <div className="w-[25%] h-full flex lg:justify-center items-center">
          <div className="md:mb-[42px] mb-[20px] lg:mr-10">
            <h1 className="text-customWhite lg:text-2xl text-xl text-start">
              {t("footer.products.title")}
            </h1>
            <ul className="text-shadowGrey300 lg:text-lg text-start">
              {t("footer.products.tickets")}
              <li>{t("footer.products.merch")}</li>
              <li>{t("footer.products.nft")}</li>
              <li>{t("footer.products.gifts")}</li>
            </ul>
          </div>
        </div>
        {/* CONTACTS */}
        <div className="lg:w-[15%] w-[25%] h-full flex justify-start items-center">
          <div className="md:mb-[42px]">
            <h1 className="text-customWhite lg:text-2xl text-xl text-start">
              {t("footer.contacts.title")}
            </h1>
            <ul className="text-shadowGrey300 lg:text-lg text-start">
              <li>
                <a
                  href="https://www.linkedin.com/in/jakub-roman-4b1664338/"
                  target="_blank"
                >
                  Linked In
                </a>
              </li>
              <li>
                <a href="mailto:jakub.z.roman@gmail.com" target="_blank">
                  Email
                </a>
              </li>
              <li>
                <a href="https://github.com/Kubanec01" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="tel:+421903871518" target="_blank">
                  Phone
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* GMAIL */}
        <div className="lg:w-[35%] md:w-[50%] w-[96%] lg:mt-0 mt-[20px] h-full flex justify-start items-center">
          <div className="w-full mb-[60px]">
            <h1 className="text-customWhite md:text-xl text-lg">
              <Trans i18nKey={"footer.email.title"} />
            </h1>
            <form className="flex w-full h-[50px] mt-3">
              <button
                style={{
                  borderRadius: "10px 0 0 10px",
                }}
                className="xl:w-[34%] md:w-[44%] w-[64%] bg-[#f6562e] text-lg font-medium font-sans"
              >
                {t("footer.email.btnText")}
              </button>
              <input
                style={{
                  outline: "none",
                  borderRadius: "0 10px 10px 0",
                }}
                className="w-full bg-[#303030] text-shadowGrey300 px-2"
                type="email"
                placeholder={t("footer.email.textHolder")}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
