import express from 'express';
import { AdminRoute, VandorRoute } from './routes';

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded());

app.use('/admin', AdminRoute);
app.use('/vandor', VandorRoute);


app.listen(3000, () => {
    console.log(`server running on port ${PORT}`)
})