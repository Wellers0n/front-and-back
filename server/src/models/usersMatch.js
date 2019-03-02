import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usersMatch = Schema({
    idGaveLiked: {
        type: String,
        required: 'id gave liked on user',
    },
    liked:{
        type: Boolean,
        required: 'Like: true; deslike: false'
    }
});

export default mongoose.model('usersMatch', usersMatch)
