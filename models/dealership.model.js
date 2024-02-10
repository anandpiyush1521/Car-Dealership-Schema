import mongoose from "mongoose";
import bcrypt from "bcrypt";

const dealershipSchema = new mongoose.Schema({
    dealership_id:{
        type: String,
        required: true,
        default: () => Math.random().toString(36).substring(7)
    }, 
    dealership_name:{
        type: String,
        required: true
    },
    delaership_loaction:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    dealership_info:{
        type: mongoose.Schema.Types.Mixed
    },
    cars:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cars"
        }
    ],
    deals:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Deal"
        }
    ],
    solid_vehicles:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SolidVehicle"
        }
    ]
}, {timestamps: true})

dealershipSchema.pre('save', async function(next){
    try {
        if(!this.isModified('password')){
            return next()
        }
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch (error) {
        return next(error);      
    }
})

export const Dealership = mongoose.model('Dealership', dealershipSchema);