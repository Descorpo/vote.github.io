const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
   username: {
       type: String,
       required: true,
       unique: true
   },
   password: {
       type: String,
       required: true
   },
    created: {
      type: Date,
      default: Date.now
    },
    polls: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Poll'
        }
    ]
});
//@Использование bcrypt
userSchema.pre('save', async function (next) {
    try {
        if(!this.isModified('password')) {
            return next();
        }
        this.password = await bcrypt.hash(this.password, 10);
        return next();
    } catch (err) {
        return next(err);
    }
});

userSchema.methods.comparePassword = async function (attempt, next) {
    try {
        return await bcrypt.compare(attempt, this.password);
    } catch (err) {
        next(err);
    }
};

module.exports = mongoose.model('User', userSchema);