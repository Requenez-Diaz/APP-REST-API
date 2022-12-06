import mongoose from "mongoose";

const inventaryScheema = new mongoose.Schema({
    id: String,
    nameStore: String,
    service: String,
    description: String,
    horario: Number,
    inventary: Number,
    sales: Number,
    price: Number,
    disponible: Number,
});

export const Inventary = mongoose.model('Inventary', inventaryScheema);