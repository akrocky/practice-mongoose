import express, { Application ,Request,Response,NextFunction} from 'express';
import cors from "cors";
import { Schema, model, connect } from 'mongoose';
const app:Application = express();
//use cors
app.use(cors())
//parse data
app.use(express.json());
app.use(express.urlencoded({extended:true}))
import userRoute from "./app/modules/user/user.route"
app.use('/api/v1/user', userRoute)



  export default app;