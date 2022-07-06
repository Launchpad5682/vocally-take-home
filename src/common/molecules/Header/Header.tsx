import { BrandName } from "../../atoms/BrandName/BrandName";
import { Button } from "../../atoms/Button/Button";
import { ContactDetails } from "../../organisms/ContactDetails/ContactDetails";

export function Header() {
  return (
    <div className="flex justify-center items-center w-full px-8 md:px-12 py-5">
      <BrandName />
      <div className=" h-full w-full hidden md:flex gap-5 text-white">
        <ContactDetails />
        <Button displayText="Download the mobile app" />
      </div>
    </div>
  );
}
