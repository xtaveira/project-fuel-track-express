import { vehicleSchema, vehicleType } from "../model/Vehicle";

class VehicleService {
  findVehicles = async () => {
    try {
      return await vehicleSchema.find();
    } catch (error) {
      console.log("vehicles not found, error: " + error);
    }
  };

  createVehicle = async (vehicle: vehicleType) => {
    try {
      return await vehicleSchema.create(vehicle);
    } catch (error) {
      console.log("vehicle not created, error: " + error);
    }
  };

  findVehicleById = async (id: string) => {
    try {
      return await vehicleSchema.findById(id);
    } catch (error) {
      console.log("vehicle not found, error: " + error);
    }
  };

  updateVehicle = async (id: string, vehicle: vehicleType) => {
    try {
      return await vehicleSchema.findByIdAndUpdate(id, vehicle, { new: true });
    } catch (error) {
      console.log("vehicle for update not found, error: " + error);
    }
  };

  deleteVehicleById = async (id: string) => {
    try {
      return await vehicleSchema.findByIdAndDelete(id);
    } catch (error) {
      console.log("vehicle for delete not found, error: " + error);
    }
  };
}

export default new VehicleService();
