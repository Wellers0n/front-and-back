import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  nome: {
    type: String,
    required: 'nome do user',
  },

  email: {
    type: String,
    required: 'email do user'
  },

  senha: {
    type: Number,
    required: 'senha necessaria',
  },
})

export default mongoose.model('users', usersSchema )
