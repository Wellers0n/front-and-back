import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    idGaveLiked: {
        type: String,
        required: 'id gave liked on user',
    },
    idReceivedLiked:{
        type: String,
        required: 'id Received liked on user',
    },
    liked:{
        type: Boolean,
        required: 'Like: true; deslike: false'
    }
});

export default mongoose.model('matchs', matchSchema)
