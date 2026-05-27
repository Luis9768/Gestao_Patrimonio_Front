import { api } from "./api";

export async function cadastrarArea(nome: string){
    try{
        await api.post("Area",{nome});
    }catch(error: any){
        throw new Error(error.response.data);
    }
}

export async function listarArea(){
    try{
        const response = await api.get("Categoria");
        return response;
    }catch(error: any){
                throw new Error(error.response.data);
        }
}