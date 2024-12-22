import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  
  password: {
    type: String,
    required: true,
    validate: {
        validator: function (value) {
            const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            return regex.test(value);
        },
        message:
            'Password must be at least 8 characters long, contain one letter, one digit, and one special character.',
    },
},
});

export default mongoose.model('User', UserSchema);
