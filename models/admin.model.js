import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const adminSchema = new mongoose.Schema({
    admin_id:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
}, {timestamps: true})

adminSchema.pre('save', async function(next){
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

export const Admin = mongoose.model('Admin', adminSchema);