import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BrandName } from "../../atoms/BrandName/BrandName";
import { ParaText } from "../../atoms/ParaText/ParaText";
import { ContactDetails } from "../ContactDetails/ContactDetails";

export function Footer() {
  return (
    <footer className="flex flex-col w-full h-full md:max-h-36 py-5 px-8 gap-4 md:flex-row md:px-12 ">
      <div className="flex flex-col w-full h-full gap-3">
        <div className="w-full flex justify-center md:justify-start">
          <BrandName />
        </div>
        <ParaText>Open Auto @ all rights reserved</ParaText>
      </div>
      <div className="flex flex-col w-full gap-5">
        <ContactDetails />
        <div className="flex w-full justify-evenly text-white md:ml-auto md:justify-end md:gap-5">
          <AiFillFacebook />
          <AiOutlineTwitter />
          <AiFillYoutube />
          <AiFillLinkedin />
          <AiOutlineInstagram />
        </div>
      </div>
    </footer>
  );
}
