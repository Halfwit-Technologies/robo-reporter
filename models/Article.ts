import { Model, Mongoose, Schema } from "mongoose";
import ConstructorMapping from "../types/types";

const articleSchema = new Schema({
    _id: {
        type: String,
        required: true
    }
})

export default Model<typeof articleSchema>
