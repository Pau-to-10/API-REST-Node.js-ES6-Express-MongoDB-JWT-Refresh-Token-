import { validationResult } from "express-validator";

export const register = (req, res) => {
  const errors = validationResult(req);
  console.log(req.body); //para poder leer las solicitudes en JSON, necesitamos poner en index.js: app.use(express.json()).

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  console.log(req.body);
  res.json({ ok: "register" });
};

export const login = (req, res) => {
  res.json({ ok: "login" });
};
