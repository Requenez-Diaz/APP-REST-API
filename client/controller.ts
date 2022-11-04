
import repository from "./repository";

const list =async () => {
    return await repository.list();
}
const clientes =async (data: any) => {
    if(!data.name) throw new Error ("Property name is missing")
    const clientes = await repository.clientes(data.name);
    return clientes;
}
const getOne =async (id:string) => {
    const client = await repository.getOne(id);
    if(!client) throw new Error("Client not found")
    return client;
    
}

const deleteOne = async (data: any) => {
    const client = await repository.deleteOne(data.id);
    if(!client) throw new Error("Client not found")
    return client;
}

const updateOne = async (data: any) => {
    const client = await repository.updateOne(data.id,);
    if(!client) throw new Error("Client not found")
    return client;
 }
export default{
    list,
    clientes,
    getOne,
    deleteOne,
    updateOne
}

//https://www.youtube.com/watch?v=CjOMThGjiMo