import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
    car_id:{
        type: String,
        default: () => Math.random().toString(36).substring(7),
        unique: true,
    },
    type:{
        type: String,
        required: true
    },
    name:{
        type: String,
    },
    model:{
        type: String,
    },
    car_info:{
        type: mongoose.Schema.Types.Mixed
    },
}, {timestamps: true})

export const Car = mongoose.model('Car', carSchema);