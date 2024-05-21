export const sendEmail = () => {
  const mailtoLink =
    "mailto:solewebio@gmail.com?subject=Yasrib Web - Get a Quote&body=Hey Yasrib,%0A%0AWe are trying to contact you for <your message content>.%0A%0ARegards,%0A<Your Beautiful Name>";
  window.location.href = mailtoLink;
};
