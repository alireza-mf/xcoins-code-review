import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema(
  {
    profile_id: Schema.Types.ObjectId,
    date_recorded: Date,
    cryptocurrency: String,
    euros: Number,
    price: Number,
    quantity: Number,
  },
  {
    timestamps: true,
  },
);

export const Simulator = mongoose.model("Simulator", schema);
