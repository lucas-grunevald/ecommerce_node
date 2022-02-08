import { Router } from "express";
import OrderController from "../controllers/OrderController";

const routes = Router();

routes.post("/", OrderController.create);
routes.get("/:id", OrderController.findById)
routes.get("/cliente/:id", OrderController.findByClientId);
routes.get("/", OrderController.find);


export default routes;
