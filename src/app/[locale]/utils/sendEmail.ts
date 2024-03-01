interface FormData {
  subject: string;
  email: string;
  message: string;
}

export async function sendEmail(data: FormData) {
  fetch(`/api`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    console.log(res);
    return res.status;
  });
}
