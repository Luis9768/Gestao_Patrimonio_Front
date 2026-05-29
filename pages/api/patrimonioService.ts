import { UUID } from "crypto";
import { api } from "./api";

interface PatrimonioListagem {
  patrimonioID: UUID;
  denominacao: string;
  numeroPatrimonio: number;
  valor: number;
  localizacaoID: UUID;
  statusPatrimonioID: UUID;
}



export async function listarPatrimoniosPorId(id: UUID) {
    try{
        const response = await api.get("Patrimonio/"+id);
        const patrimonio = response.data;
        return patrimonio;
    }catch (error: any) {
        throw new Error(error.response.data)
    }
}
export async function listarPatrimonios(){
    try{
        const response = await api.get("Patrimonio/")
        const patrimonio = response.data;
        console.log(patrimonio)
        return patrimonio
    }catch (error: any) {
        throw new Error(error.response.data);
    }
}

