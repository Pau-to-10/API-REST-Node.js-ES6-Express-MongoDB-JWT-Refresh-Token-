import "dotenv/config";
import "./config/connectdb.js"; //hay que poner las extensiones en Node
import express from "express";
import authRouter from "./routes/auth.route.js";

const app = express();
app.use(express.json()); //para poder leer info en formato json
app.use("/api/v1/auth", authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log("🔥🔥🔥 Servidor corriendo en http://localhost:" + PORT)
);
