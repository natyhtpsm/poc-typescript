//delete, update, post, get
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routers/routers";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(router);

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
});
