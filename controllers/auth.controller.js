export const register = (req, res) => {
  console.log(req.body); //para poder leer las solicitudes en JSON, necesitamos poner en index.js: app.use(express.json()).

  res.json({ ok: "register" });
};

export const login = (req, res) => {
  res.json({ ok: "login" });
};
