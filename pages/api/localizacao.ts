import { api } from "./api";



export async function listarLocalizacao() {
    try {
    const response = await api.get("Localizacao");
    console.log(response.data)
    return response;
  } catch (error: any) {
    throw new Error(error.response.data);
}
}