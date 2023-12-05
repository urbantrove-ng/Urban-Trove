const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const path = require('path');
const rootRoutes = require('./routes/index');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const compression = require('compression');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');
const {allowedOrigin} = require('./config');
const {rateLimit} = require('express-rate-limit');

const app = express();
const limiter = rateLimit({
    windowMs: 24*60*60*1000,
    limit:10,
    standardHeaders:'draft-7',
    legacyHeaders:false
})

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(compression())
app.use(helmet())
app.use(logger('dev'))
app.use(cors({
    origin:allowedOrigin,
    credentials:true,
    optionsSuccessStatus:200
}))
app.use(limiter)

app.use('/api/v1',rootRoutes);
app.use('/api/v1/auth',limiter,authRoutes);
app.use('/api/v1/user',userRoutes);

module.exports = app