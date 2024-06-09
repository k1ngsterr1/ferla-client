"use client";
import { IData } from "@widgets/HomePage/PC/SubmitForm";
import { useForm } from "react-hook-form";
import { useFormPopup } from "../context/PopupContext";

import emailjs from "@emailjs/browser";

export function useSendEmail() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm<IData>({
    mode: "onChange",
    criteriaMode: "all",
  });
  const { toggleFormPopup } = useFormPopup();

  const onSubmit = async (data: IData, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();

    // Prepare the data for the webhook
    const webhookUrl =
      "https://hook.us1.make.com/p2o8bopvwaz7968bejo8khyelyv27ke1";
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const formData = data as unknown as Record<string, unknown>;

    // NEXT ENV
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      .then(() => {
        toggleFormPopup();
      });
    // .catch((error) => {
    //   console.error("Failed to send email", error.text);
    // });

    const webhookResponse = await fetch(webhookUrl, postData);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,

    isSubmitting,
    isValid,
    control,
    setValue,
  };
}
