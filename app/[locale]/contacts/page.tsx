"use client";

import { useTranslations } from "next-intl";

import { Form, LottiePlayer } from "@/components";

export default function ContactsPage() {
  const t = useTranslations("contacts");

  return (
    <section id="contact" className="contact container">
      <Form />
      <LottiePlayer
        src="https://assets10.lottiefiles.com/packages/lf20_lstnp9p3.json"
        background="transparent"
        speed={1}
        className="contact__animation"
        loop
        autoplay
      />
    </section>
  );
}
