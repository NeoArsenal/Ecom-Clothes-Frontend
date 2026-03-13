import axios from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337";

export const makePaymentRequest = axios.create({
  // Strapi exposes content API under /api
  baseURL: `${backendUrl.replace(/\/$/,"")}/api`,
});