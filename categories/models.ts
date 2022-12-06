import mongoose from "mongoose";

const CategoriesSchema = new mongoose.Schema({
    id: String,
    categoria: String,
    name: String,
    description: String,
    Horario: Number
});

export const Category = mongoose.model('Category', CategoriesSchema);