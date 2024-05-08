import { vehicleSchema, vehicleType } from "../model/Vehicle";

class VehicleService {
  findVehicles = async () => {
    return await vehicleSchema.find();
  };

  createVehicle = async (vehicle: vehicleType) => {
    return await vehicleSchema.create(vehicle);
  };
}

export default new VehicleService();
