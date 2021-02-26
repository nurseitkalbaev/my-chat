import mongoose from 'mongoose';

const mychatSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
})

export default mongoose.model('messageContent',mychatSchema)