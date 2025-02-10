import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import router from "./Routes/principal.js"; // ES Modules exige a extensão do arquivo

dotenv.config();
const app = express();
const PORT = 3000;

// Corrigir __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar bodyParser para dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Suporte para PUT/DELETE via query string (se necessário)
app.use(methodOverride("_method"));

// Arquivos estáticos (CSS, JS, imagens, etc.)
app.use(express.static(path.join(__dirname, "../frontend")));
app.use(express.static(path.join(__dirname, "")))

// Usar as rotas definidas
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
