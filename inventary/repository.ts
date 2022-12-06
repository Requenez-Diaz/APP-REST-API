import { ulid } from 'ulid';
import { Inventary } from './models';
import { Inventary as IInventary } from './interface';


const list = async () => {
    return await Inventary.find();
}

const store = async (data: IInventary) => {
    const id = ulid();

    const models = new Inventary({
        nameStore: data.nameStore, service: data.service, description: data.description, horario: data.horario, inventary: data.inventary,
        sales: data.sales, price: data.price, disponible: data.disponible, id
    });
    await models.save();
    return models;
}

const getOne = async (id: string) => {
    return await Inventary.findOne({ id });
}
const deleteItem = async (id: string) => {
    return await Inventary.deleteOne({ id })
}

const update = async (id: string, data: IInventary) => {
    const model = await Inventary.findOneAndUpdate({ id }, data, { new: true })
    return model;
}


export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update

}