import mongoose from 'mongoose';

const SolidVehicleSchema = new mongoose.Schema({
    vehicle_id:{
        type: String,
        default: () => Math.random().toString(36).substring(7),
        unique: true,
    },
    car_id:{
        type: String,
    },
    vehicle_info:{
        type: mongoose.Schema.Types.Mixed
    }
}, {timestamps: true})

export const SolidVehicle = mongoose.model('SolidVehicle', SolidVehicleSchema);
