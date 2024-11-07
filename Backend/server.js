import { Title } from 'chart.js';
import express from 'express';

const app = express();
app.use(express.static('dist'));

//app.get('/', (req,res)=>{
    //res.send('server is ready');
//});

// Get a list of 5 jokes

app.get('/api/jokes', (req,res)=>{
    const jokes =[

       {
        id:1,
        Title: 'A Joke',
        content:'This is a joke'},
       {
        id:2,
        Title: 'A Joke',
        content:'This is a joke'},
       {
        id:3,
        Title: 'A Joke',
        content:'This is a joke'},
       {
        id:4,
        Title: 'A Joke',
        content:'This is a joke'},
       {
        id:5,
        Title: 'A Joke',
        content:'This is a joke'}
    ];
    res.send(jokes);

})

const port = process.env.PORT || 3001;


app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
   }
);
