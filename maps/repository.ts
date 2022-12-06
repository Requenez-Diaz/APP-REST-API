import { ulid } from 'ulid';
import { MapsCollection } from './models';
import { MapsCollect as IMapsCollect } from './interface';


const list = async () => {
    return await MapsCollection.find();
}
const store = async (data: IMapsCollect) => {
    const id = ulid();

    const models = new MapsCollection({name: data.name, description: data.description, latitude: data.latitude, longitude: data.longitude, id });
    await models.save();
    return models;
}
const getOne = async (id: string) => {
    return await MapsCollection.findOne({ id });
}
const deleteItem = async (id: string) => {
    return await MapsCollection.deleteOne({ id })
}

const update = async (id: string, data: IMapsCollect) => {
    const model = await MapsCollection.findOneAndUpdate({ id }, data, {new: true})
    return model;
}



export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update

}