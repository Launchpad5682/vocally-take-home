import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IconLink } from "../../atoms/IconLink/IconLink";

export function ContactDetails() {
  return (
    <div className="flex w-fit justify-center md:ml-auto md:justify-end gap-5">
      <IconLink>
        <AiOutlinePhone /> +7695864558
      </IconLink>
      <IconLink>
        <AiOutlineMail /> service@openauto.ca
      </IconLink>
    </div>
  );
}
