import express from "express";
import projetocontroller from "../Controlers/ptojetoControler";
const route = express.Router();
route.post("/create", projetocontroler.Create);
export default route;