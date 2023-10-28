import axios from "axios";

export async function sendEmail(formData: string) {
  const data = axios.post("/api/form", formData);
  return data;
}
