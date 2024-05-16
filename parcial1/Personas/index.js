import { sequelize } from "./db.js";
import { GestorPersonas } from "./personas.service.js";
import express from "express";
import cors from "cors";

async function main() {
  const app = express();
  await sequelize.sync();
  app.use(cors());
  const gestor = new GestorPersonas();

  app.get("/personas", async (request, response) => {
    const todas = await gestor.obtener_todas();
    response.send(todas);
  });

  app.listen(8000);
}

main();
