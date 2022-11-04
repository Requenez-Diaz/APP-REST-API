import mongoose from "mongoose";

const CategoriesSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    Slog: String
});

export const Categorie = mongoose.model('Categorie', CategoriesSchema);