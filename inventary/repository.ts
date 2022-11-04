import { ulid } from 'ulid';
import { Inventary } from './models';
import { Inventary as IInventary } from './interface';
const list = async () => {
    return await Inventary.find();
}

export default {
    list

}