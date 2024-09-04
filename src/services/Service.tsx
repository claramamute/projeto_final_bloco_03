import axios from "axios";

const api = axios.create({
    baseURL: "https://farmacia-nest.onrender.com"
})

export const buscar = async (url: string, setDados: Function) =>{
    const res = await api.get(url)
    setDados(res.data)
}

export const atualizar = async(url: string, dados: Object, setDados: Function) =>{
    const res = await api.put(url, dados)
    setDados(res.data)
}

export const cadastrar = async(url: string, dados: Object, setDados: Function) =>{
    const res = await api.post(url, dados)
    setDados(res.data)
}

export const deletar = async(url: string ) =>{
    await api.delete(url)
   
}