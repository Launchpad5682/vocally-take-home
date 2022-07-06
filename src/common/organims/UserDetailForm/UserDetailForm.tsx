import { InputField } from "../../atoms/InputField/InputField";
import { Button } from "../../atoms/Button/Button";
import { useUserDetails } from "./useUserDetails";

export function UserDetailForm() {
  const {formData, changeHandler, submitHandler} = useUserDetails();

  return (
    <form className="flex flex-col gap-5 py-5" onSubmit={submitHandler}>
      <InputField
        value={formData.name}
        id="name-input"
        type="text"
        placeholder="Enter Your Name"
        required={true}
        key="name-input"
        changeHandler={changeHandler}
      />
      <InputField
        id="email-input"
        value={formData.email}
        type="email"
        placeholder="Enter Your Email"
        required={true}
        key="email-input"
        changeHandler={changeHandler}
      />
      <Button
        displayText="Submit"
        hover={true}
        key="user-detail-submit-button"
      />
    </form>
  );
}
