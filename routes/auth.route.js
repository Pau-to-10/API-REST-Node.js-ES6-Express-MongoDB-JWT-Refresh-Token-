import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { body } from "express-validator";

const router = express.Router(); //es un middleware para poder gestionar mejor nuestras rutas en nuestro sitio web.
//todo lo que es autenticación estará en este router.

router.post(
  "/register",
  [
    body("email", "Formato email incorrecto").trim().isEmail().normalizeEmail(),
    body("password", "Formato de pasword incorrecto")
      .trim() //siempre hacer la limpieza primero.
      .isLength({ min: 6 })
      .custom((value, { req }) => {
        if (value !== req.body.repassword) {
          throw new Error("No coinciden las contraseñas");
        }
        return value;
      }),
  ],
  register
);

router.post("/login", login);

export default router; //con el default podemos nombrar el archivo como queramos.
