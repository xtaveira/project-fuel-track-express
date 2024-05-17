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
        plate: req.body.plate,
        km: parseFloat(req.body.km),
        kmPerLiter: 0,
      };

      const newVehicle = await vehicleService.createVehicle(vehicle);
      return res.status(201).send(newVehicle);
    } catch (error) {
      return res.status(404).send({ error: error });
    }
  };

  findVehicle = async (req: Request, res: Response) => {
    try {
      const foundVehicle = await vehicleService.findVehicleById(req.params.id);
      return res.status(201).send(foundVehicle);
    } catch (error) {
      return res.status(404).send({ error: error });
    }
  };

  refulingVehicle = async (req: Request, res: Response) => {
    try {
      const vehicle: vehicleType = req.body.vehicle;
      const id: string = req.body.id;
      const refulingVehicle = await vehicleService.updateVehicle(id, vehicle);
      return res.status(200).send(refulingVehicle);
    } catch (error) {
      return res.status(404).send({ error: error });
    }
  };

  deleteVehicle = async (req: Request, res: Response) => {
    try {
      const deletedVehicle = await vehicleService.deleteVehicleById(
        req.params.id
      );
      return res.status(201).send(deletedVehicle);
    } catch (error) {
      return res.status(404).send({ error: error });
    }
  };
}

export default new VehicleController();
