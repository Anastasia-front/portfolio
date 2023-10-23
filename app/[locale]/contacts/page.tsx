"use client";

import { LottiePlayer } from "@/components";
import { useTranslations } from "next-intl";

export default function ContactsPage() {
  const t = useTranslations("contacts");

  return (
    <section id="contact" className="contact container">
      <form className="contact__form">
        <div className="contact__inputs">
          <input
            className="contact__input"
            placeholder="Email"
            data-email-contact
          />
          <input
            className="contact__input"
            placeholder="Subject"
            data-subject-contact
          />
        </div>
        <textarea
          className="contact__textfield"
          data-body-contact
          placeholder="Message"
        ></textarea>
        <button type="submit" className="contact__submit" data-send-btn>
          Send Email
        </button>
      </form>
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
