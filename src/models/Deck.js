import mongoose, { Schema, models } from "mongoose";

const deckSchema = new Schema(
    {
       name: {
        type: String,
        required: true,
       },
       deckOwner: {
        type: String,
        required: true
       },
       colour: {
        type: String,
        required: true
       },
       favourite: {
        type: Boolean,
        required: true
       },
       cards: {
        type: Array,
        required: false
       }

    },
    {timestamps: true}
)

const Deck = models.Deck || mongoose.model('Deck', deckSchema)
export default Deck