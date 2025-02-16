import express from "express";
import path from "path";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import router from "./Routes/principal.js"; // ES Modules exige a extensão do arquivo
import { Request, Response } from "express";
dotenv.config();
const app = express();
const PORT = 3000;

app.set("view engine", "ejs"); // Define o EJS como motor de visualização
app.set("views", path.join(process.cwd(), "../views")); // Pasta onde estão os arquivos .ejs


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

app.get("/", (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, '../frontend/login.html'));
});
// Usar as rotas definidas
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
