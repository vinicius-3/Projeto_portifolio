import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import projetoRoute from "./Routes/projetoRoute.js";
dotenv.config();
const api = express();
//troca de mensagens com frontend Json
api.use(express.json());
api.use(cors());
api.use("/api", projetoRoute);
const PORT = provess.env.PORT || 5000;
api.listen(PORT, () => {
    console.log('sServidor rodendo na porta 5(PORT');
))