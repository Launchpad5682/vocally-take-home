/**A custom hook for wrapping the user detail form states and
 * logic to save on the database
 */

import { addDoc, collection } from "firebase/firestore";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { firestoreDB } from "../../../firebase";

export const useUserDetails = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;
    if (id === "name-input") {
      setFormData((prev) => ({ ...prev, name: value }));
    } else if (id === "email-input") {
      setFormData((prev) => ({ ...prev, email: value }));
    }
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email } = formData;
    try {
      await addDoc(collection(firestoreDB, "user-details"), {
        name,
        email,
      });
      setFormData({ name: "", email: "" });
      toast("Successfully Submitted your Response", {
        icon: "✅",
        style: {
          borderRadius: "10px",
          background: "#111827",
          color: "#fff",
        },
      });
    } catch (error) {
      console.log(error);
      toast("Something went wrong, Try Again", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#111827",
          color: "#fff",
        },
      });
    }
  };

  return { formData, changeHandler, submitHandler };
};
