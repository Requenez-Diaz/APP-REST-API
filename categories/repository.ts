import { ulid } from 'ulid';
import { Categorie } from './models';
import { Categories as ICategorie } from './interface';


const list = async () => {
    return await Categorie.find();
}

const store = async (data: ICategorie) => {
    const id = ulid();

    const categorie = new Categorie({ name: data.name, description: data.description, id });

    await categorie.save();

    return categorie;
}
const getOne = async (id: string) => {
    return await Categorie.findOne({ where: { id } });
}


const updateOne= async (id: string, data: ICategorie) => {
    return await Categorie.update( { id } );
 }
 const deleteItem = async (id: string) => {
    return await Categorie.deleteOne({ where: { id } });
  }


export default {
    list,
    store,
    getOne,
    updateOne,
    deleteItem
}