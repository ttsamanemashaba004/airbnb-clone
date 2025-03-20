import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import listingRouter from './routes/listingRoute.js'
import userRouter from './routes/userRoute.js'
import reservationRouter from './routes/reservationRoute.js'

//App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/listing',listingRouter)
app.use('/api/reservation',reservationRouter)

app.get('/', (req, res)=>{
		res.send('API Working')
})

app.listen(port, ()=>console.log('Server started on PORT : ' + port))