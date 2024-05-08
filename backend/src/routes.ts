import express from "express";
import VehicleController from "./controller/vehicle.controller";

const router = express.Router();

router.get("/", VehicleController.getVehicles);
router.post("/newVehicle", VehicleController.newVehicle);

export default router;
