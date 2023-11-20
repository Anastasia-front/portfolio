interface FormData {
  subject: string;
  email: string;
  message: string;
}

export function sendEmail(data: FormData) {
  console.log(data);
}
