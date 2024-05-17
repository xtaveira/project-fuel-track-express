import mongoose from "mongoose";

type vehicleType = {
  name: string;
  plate: string;
  km: number;
  kmPerLiter: number;
};

const Schema = new mongoose.Schema(
  {
    name: String,
    plate: String,
    km: Number,
    kmPerLiter: Number,
  },
  {
    timestamps: true,
  }
);

const vehicleSchema = mongoose.model("vehicle", Schema, "vehicles");

export { vehicleSchema, vehicleType };
