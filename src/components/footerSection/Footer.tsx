export const Footer = () => {
  return (
    <div className="w-full h-[320px] p-4">
      <div className="max-w-[1200px] h-full mx-auto flex justify-between items-center">
        {/* DISCLAIMER */}
        <div className="w-[25%] h-full flex justify-center items-center">
          <div className="mb-[30px]">
            <h1 className="text-customWhite text-2xl">Disclaimer:</h1>
            <p className="text-shadowGrey mt-[2px]">
              This website is created for project purposes only. It does not
              sell tickets or provide access to any events. All content is for
              demonstration and design purposes.
            </p>
          </div>
        </div>
        {/* PRODUCTS */}
        <div className="w-[25%] h-full flex justify-center items-center">
          <div className="mb-[42px] mr-10">
            <h1 className="text-customWhite text-2xl text-start">Products:</h1>
            <ul className="text-shadowGrey300 text-lg text-start">
              <li>Tickets</li>
              <li>Merch</li>
              <li>NFT</li>
              <li>Gift's</li>
            </ul>
          </div>
        </div>
        {/* CONTACTS */}
        <div className="w-[15%] h-full flex justify-start items-center">
          <div className="mb-[42px]">
            <h1 className="text-customWhite text-2xl text-start">Contacts:</h1>
            <ul className="text-shadowGrey300 text-lg text-start">
              <li>Linked In</li>
              <li>GitHub</li>
              <li>Email</li>
              <li>Phone</li>
            </ul>
          </div>
        </div>
        {/* GMAIL */}
        <div className="w-[35%] h-full flex justify-start items-center">
          <div className="w-full mb-[60px]">
            <h1 className="text-customWhite text-xl">
              Do you have something in mind? <br />
              Share it with us!
            </h1>
            <form className="flex w-full h-[50px] mt-3">
              <button
                style={{
                  borderRadius: "10px 0 0 10px",
                }}
                className="w-[34%] bg-[#f6562e] text-lg font-medium font-sans"
              >
                Contact Us
              </button>
              <input
                style={{
                  outline: "none",
                  borderRadius: "0 10px 10px 0",
                }}
                className="w-full bg-[#303030] text-shadowGrey300 px-2"
                type="email"
                placeholder="Hi, My name is..."
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// ! treba dorobit a doladit vzdialenosti
