import mongoose from "mongoose"
import {config} from 'dotenv'
config()
const url = process.env.MONGO_URL
mongoose.connect(url, {}).then(()=>{
    console.log("Base conectada");
}).catch((e)=> {
    console.log(e);
})