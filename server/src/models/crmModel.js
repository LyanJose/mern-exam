import mongoose from 'mongoose'

const Schema = mongoose.Schema //init schema

export const ContactSchema = new Schema({
    firstName: { type: String, required: 'Entrer un prenom' },
    lastName: { type: String, required: 'Entrer un nom de famille' },
    email: { type: String },
    company: { type: String },
    phone: { type: Number },
    created_data: { type: Date, default: Date.now }
})