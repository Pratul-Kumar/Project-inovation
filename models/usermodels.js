const mongoose = require("mongoose");
const validator = require("validator");

const { model } = mongoose; // Destructuring to extract 'model' from mongoose

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Invalid email format'],
    },
    password: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        default: 'India',
        enum: ['India', 'USA', 'UK', 'Canada'], // Example countries
    },
}, { timestamps: true });

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export default model('User', userSchema);
