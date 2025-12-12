"use client";

import { FormEvent, ReactElement } from "react";
import { FormInput } from "@/components/FormInput";
import { PageTitle } from "@/components/PageTitle";
import { observable, ObservablePrimitive } from "@legendapp/state";
import { UserData } from "../api/send-email/route";
import isEmail from "validator/lib/isEmail";
import { observer } from "@legendapp/state/react";

const isFormSubmitted: ObservablePrimitive<boolean> = observable(false);
const isFormError: ObservablePrimitive<boolean> = observable(false);

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const data: UserData = {
    name: formData.get("name") as string,
    surname: formData.get("surname") as string,
    mail: formData.get("mail") as string,
    message: formData.get("message") as string,
  };

  const isDataValid: boolean =
    data.name && data.surname && data.message && isEmail(data.mail)
      ? true
      : false;

  if (!isDataValid) {
    isFormError.set(true);
    console.warn("validation error");
    return;
  }

  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    if (res.success) {
      isFormSubmitted.set(true);
    } else {
      isFormSubmitted.set(false);
      isFormError.set(true);
    }
  } catch {
    isFormError.set(true);
  }
};

const Contact = observer((): ReactElement => {
  return (
    <div>
      <PageTitle title="Contact us!" />

      {process.env.smtpEmail}

      {!isFormSubmitted.get() ? (
        <section className="bg-blue-800 p-[2vw]">
          <h2 className="pb-[2vw] font-extrabold">Compile the form, please!</h2>

          <form
            encType="multipart/form-data"
            className="flex flex-col pl-[2vw]"
            onSubmit={handleSubmit}
            autoComplete="on"
          >
            <FormInput id="name" type="text" required />
            <FormInput id="surname" type="text" required />
            <FormInput id="mail" type="mail" required />
            <FormInput id="message" textArea required />

            <input className="bg-amber-600" type="submit" />
          </form>

          {isFormError.get() && (
            <p className="text-red-300">Something is wrong!</p>
          )}
        </section>
      ) : (
        <p className="text-green-600">Thanks, form is submitted!</p>
      )}
    </div>
  );
});

export default Contact;
