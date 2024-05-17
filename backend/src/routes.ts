import express from "express";
import VehicleController from "./controller/vehicle.controller";

const router = express.Router();

router.get("/", VehicleController.getVehicles);
router.get("/findVehicle/:id", VehicleController.findVehicle);
router.get("/refulingVehicle", VehicleController.refulingVehicle);
router.get("/deleteVehicle/:id", VehicleController.deleteVehicle);
router.post("/newVehicle", VehicleController.newVehicle);

export default router;
