interface FormData {
  subject: string;
  email: string;
  message: string;
}

export const generateText = (data: FormData) => {
  const formattedText = Object.entries(data)
    .map(([key, value]) => `${key} - ${value}`)
    .join("\n");

  return formattedText;
};
