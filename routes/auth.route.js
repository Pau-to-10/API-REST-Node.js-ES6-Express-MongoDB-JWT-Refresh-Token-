import express from "express";
import { login, register } from "../controllers/auth.controller.js";
const router = express.Router(); //es un middleware para poder gestionar mejor nuestras rutas en nuestro sitio web.
//todo lo que es autenticación estará en este router.

router.post("/login", login);

router.post("/register", register);

export default router; //con el default podemos nombrar el archivo como queramos.
