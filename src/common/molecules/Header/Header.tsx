import { BrandName } from "../../atoms/BrandName/BrandName";
import { ContactDetails } from "../../organims/ContactDetails/ContactDetails";

export function Header() {
  return (
    <div className="flex w-full px-8 md:px-12 py-5">
      <BrandName />
      <div className="ml-auto h-full hidden md:block">
        <ContactDetails />
      </div>
    </div>
  );
}
