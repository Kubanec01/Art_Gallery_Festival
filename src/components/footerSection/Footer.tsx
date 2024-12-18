export const Footer = () => {
  return (
    <div className="w-full h-[320px] p-4">
      <div className="border max-w-[1200px] h-full mx-auto flex justify-between items-center">
        {/* DISCLAIMER */}
        <div className="w-[25%] border h-full flex flex-col justify-center">
          <h1 className="text-customWhite text-2xl">Disclaimer:</h1>
          <p className="text-shadowGrey  mt-[2px] mb-[30px]">
            This website is created for project purposes only. It does not sell
            tickets or provide access to any events. All content is for
            demonstration and design purposes.
          </p>
        </div>
        {/* PRODUCTS */}
        <div className="w-[25%] border h-full flex flex-col justify-center items-center">
          <h1 className="text-customWhite text-2xl text-start">Products:</h1>
          <ul className="text-shadowGrey300 text-lg mb-[42px] w-[100px] text-start">
            <li>Tickets</li>
            <li>Merch</li>
            <li>NFT</li>
            <li>Gift's</li>
          </ul>
        </div>
        {/* CONTACTS */}
        <div className="w-[25%] border h-full flex flex-col justify-center items-center">
          <h1 className="text-customWhite text-2xl text-start">Contacts:</h1>
          <ul className="text-shadowGrey300 text-lg mb-[42px] w-[100px] text-start">
            <li>Linked In</li>
            <li>GitHub</li>
            <li>Email</li>
            <li>Phone</li>
          </ul>
        </div>
        {/* GMAIL */}
        <div className="w-[25%] border h-full">
            {/* tu bude kontakty mail */}
        </div>
      </div>
    </div>
  );
};

