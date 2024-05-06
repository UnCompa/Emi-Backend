import express from "express";
import cors from "cors";
import "./connection.js";
import imagesUpload from "./router/imageUploadRouter.js"
/* import ImagesRouter from './router/imagesRouter.js'
import NotasRouter from './router/notasRouter.js'
import musicUpload from "./router/UploadMusicRouter.js";
import videoRouter from "./router/UploadVideoRouter.js"; */
const app = express();
app.use(cors());
app.use(express.json());
app.use(imagesUpload)
app.get("/",(req,res)=>{
  res.send("Bienvenido a la Emi-Api")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
