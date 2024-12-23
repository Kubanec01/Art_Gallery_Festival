import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      navbar: {
        artStyles: "Art Styles",
        buyTickets: "Buy Tickets",
        artPreview: "Art Preview",
      },
      footer: {
        disclaimer: {
          title: "Disclaimer",
          desc: "This website is created for project purposes only. It does not sell tickets or provide access to any events. All content is for demonstration and design purposes.",
        },
        products: {
          title: "Products:",
          tickets: "Tickets",
          merch: "Merch",
          nft: "NFT",
          gifts: "Gift's",
        },
        contacts: {
          title: "Contacts:",
        },
        email: {
          title: "Do you have something in mind? <br /> Share it with us!",
          btnText: "Contact Us",
          textHolder: "Hi, My name is...",
        },
      },
      hero: {
        desc: " Step into a world where the timeless beauty of the Renaissance meet the bold innovation of modern art. The 4th edition of our gallery exhibition invites you to experience masterpieces that transcend eras—blending classical techniques with contemporary vision. Discover the harmony between the old and the new, and immerse yourself in a curated collection that celebrates the enduring legacy of Renaissance artistry, reimagined for today’s world.",
        btnTitle1: "Grab your free ticket",
        btnTitle2: "Or find out more about the event",
      },
      artGenres: {
        title: "Expected Art Genres",
        desc: "From classic to contemporary, discover <br /> art that resonates with very soul.",
      },
      festivalDesc: {
        ticketsSection: {
          title: "Enter the Realm <br /> of Creativity",
          desc: "Exclusive early-bird tickets go live on 14th November 2024, offering special prices for a limited time. Secure yours before they're gone!",
          btnText: "Buy Now",
        },
        infoSection: {
          title: "Unveiling the 4th <br /> Edition: News & <br /> Updates",
          desc: "Stay informed with the latest announcements, exclusive insights, and key updates about the 4th edition of the festival.",
          btnText: "Read More",
        },
      },
      festivalInfo: {
        activitiesInfo: {
          title:
            ",,Two Days of <br /> Unforgettable Art and <br /> Activities Await”",
          desc: "Prepare for a vibrant festival experience! Alongside the art gallery, you'll find exciting games, engaging competitions with awards, thrilling rides for children, sports events, and live performances by talented bands. Enjoy a variety of delicious food from local vendors, showcasing everything from gourmet treats to classic fair favorites. Explore interactive workshops where you can unleash your creativity, whether through painting, crafting, or even learning a few dance moves.",
        },
        bandsInfo: {
          title:
            ",,A Symphony of <br /> 12 Bands: Live Music <br /> Across the Festival”",
          desc: "Immerse yourself in a captivating musical journey as 12 exceptional bands grace the stage, each offering their unique sound and energy. From vibrant rhythms to soulful melodies, the festival will come alive with music that resonates across every corner, drawing everyone into its enchanting embrace. Whether you're swaying to the beats under the open sky or discovering new favorite artists, every performance promises to leave a lasting impression.",
        },
      },
      artShowCase: {
        title: "Renowned Artists and <br /> Their Masterpieces",
        desc: "The festival will showcase monumental works by some of the most celebrated names in the art world. Experience the grandeur of iconic masterpieces, each telling its own powerful story and reflecting the brilliance of renowned artists.",
      },
    },
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    detection: {
      order: ["navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
