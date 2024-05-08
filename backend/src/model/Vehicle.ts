import mongoose from "mongoose";

type vehicleType = {
  name: string;
  km: number;
  kmPerLiter: number;
};

const Schema = new mongoose.Schema(
  {
    name: String,
    km: Number,
    kmPerLiter: Number,
  },
  {
    timestamps: true,
  }
);

const vehicleSchema = mongoose.model("vehicle", Schema, "vehicles");

export { vehicleSchema, vehicleType };
