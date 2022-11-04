import repository from './repository';

const list =async () => {
    return await repository.list();
}

export default {
    list

}