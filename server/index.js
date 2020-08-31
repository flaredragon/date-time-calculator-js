import dateClass from './date.js';
import {operations} from './constants.js';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
        
app.get("/operations", (req, res) => {
    res.send({operations});
})

app.post("/operations", (req, res) => {
    console.log(req.body);
    const calculator = new dateClass(req.body.date);
    console.log(calculator);
    const result = calculator.operations(req.body.operation, req.body.val);
    return res.send({result:result.toDateString()});
})

app.listen(process.env.PORT || 3000, () => {
    console.log("server is listening")
})