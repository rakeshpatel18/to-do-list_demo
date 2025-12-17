import express from "express";
import cors from 'cors'
import AllRoutes from './routes/AllRoutes.js'
import { PORT } from "./config/config.js";
import Path from 'path'

let app = express();
const root = Path.join(Path.resolve()+"/dist")
app.use(express.static(root))


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

app.use(AllRoutes);
app.get("/{*splat}",(req ,res)=>{
  res.sendFile("index.html", {root});  
})

app.listen(PORT,()=>{
    console.log("server running with port",PORT)
})