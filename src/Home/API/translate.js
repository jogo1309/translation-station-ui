import api from "./api";

export default async function translate(engText, model) {
  return await api("/translate/" + model + "/" + engText, {
    method: "GET",
  });
}
