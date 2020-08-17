import express = require('express');
import tasksRoute from './api/tasks/tasks.route'
import userRoutes from './api/users/user.route'


const bodyParser = require('body-parser')
const cors = require('cors')
const port: Number | String = process.env.PORT || 8080;

const app: express.Application = express();

app.use(bodyParser.json());
app.use(express.static( 'public' ));



if (process.env.NODE_ENV !== 'production') {
    const corsOptions = {
        origin: 'http://localhost:3000',
        credentials: true
    };
    app.use(cors(corsOptions));
}


app.use(tasksRoute)
app.use(userRoutes)


app.listen(port, () => {
    console.log("server running on port", port)
})