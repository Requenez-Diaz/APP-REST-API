import mongoose from "mongoose";

const mapsCollectionScheema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    latitude: Number,
    longitude: Number
});

export const MapsCollection = mongoose.model('MapsCollection', mapsCollectionScheema);