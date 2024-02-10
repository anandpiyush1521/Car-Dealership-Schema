import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    user_email:{
        type: String,
        required: true,
        unique: true
    },
    user_id:{
        type: String,
        required: true,
        default: () => Math.random().toString(36).substring(7)
    },
    user_loaction:{
        type: String,
        required: true
    },
    user_info:{
        type: mongoose.Schema.Types.Mixed
    },
    password:{
        type: String,
        required: true
    },
    vehical_info:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SolidVehicle"
        }
    ],
}, {timestamps: true})

//HASH the password before saving it
userSchema.pre('save', async function(next){
    try {
        if(!this.isModified('password')){
            return next()
        }
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch (error) {
        //console.log(error);
        return next(error);
    }
})

export const User = mongoose.model('User', userSchema);

