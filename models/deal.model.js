import mongoose from "mongoose";

const dealSchema = new mongoose.Schema({
    deal_id:{
        type: String,
        default: () => Math.random().toString(36).substring(7),
        unique: true,
    },
    car_id:{
        type: String,
    },
    deal_info:{
        type: mongoose.Schema.Types.Mixed
    }
}, {timestamps: true})

export const Deal = mongoose.model('Deal', dealSchema);