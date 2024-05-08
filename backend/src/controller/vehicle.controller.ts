import { Request, Response } from "express";
import { vehicleType } from "../model/Vehicle";
import vehicleService from "../service/vehicle.service";

class VehicleController {
  getVehicles = async (req: Request, res: Response) => {
    try {
      const vehicles = await vehicleService.findVehicles();

      return res.status(201).send(vehicles);
    } catch (error) {
      return res.status(404).send({ error: error });
    }
  };

  newVehicle = async (req: Request, res: Response) => {
    try {
      const vehicle: vehicleType = {
        name: req.body.name,
        km: parseFloat(req.body.km),
        kmPerLiter: 0,
      };

      const newVehicle = await vehicleService.createVehicle(vehicle);
      return res.status(201).send(newVehicle);
    } catch (error) {
      return res.status(404).send({ error: error });
    }
  };
}

export default new VehicleController();
