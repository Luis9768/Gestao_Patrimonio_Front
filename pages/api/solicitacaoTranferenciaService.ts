import { api } from "./api";


export async function listarJustificativa(){
     try{
        const response = await api.get("SolicitacaoTransferencia/");
        const patrimonio = response.data;
        return patrimonio;
    }catch (error: any) {
        throw new Error(error.response.data)
    }
}