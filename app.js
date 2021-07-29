const express = require('express');
const app = express();
const fs = require('fs')

const tours =JSON.parse( fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))


app.use(express.json())


app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json({
        results:tours.length,
        status:'Success',
        data:{
            tours
        }
    })
})

app.get('/api/v1/tours/:id',(req,res)=>{
    const id = req.params.id *1;

    // if(id > tours.length){
    //     return res.status(404).json({
    //         Success:"Fail",
    //         Message:"Invalid ID"
    //     })
    // }
    const tour = tours.find(el=>el.id ===id)
    if(!tour){
        return res.status(404).json({
            Success:"Fail",
            Message:"Invalid ID"
        })
    }
   
    res.status(200).json({
        status:'Success',
        data:{
            tour
        }
    })
})


app.patch('/api/v1/tours/:id',(req,res)=>{
    const id = req.params.id *1;

    if(id > tours.length){
        return res.status(404).json({
            Success:"Fail",
            Message:"Invalid ID"
        })
    }
   
    res.status(200).json({
        status:'Success',
        data:{
            tour:"<Upadted The Toours...>"
        }
    })
})

app.delete('/api/v1/tours/:id',(req,res)=>{
    const id = req.params.id *1;

    if(id > tours.length){
        return res.status(404).json({
            Success:"Fail",
            Message:"Invalid ID"
        })
    }
   
    res.status(200).json({
        status:'Success',
        data:null
    })
})

app.post('/api/v1/tours',(req,res)=>{
    const newId = tours[tours.length-1].id +1;
    const newTour = Object.assign({id:newId},req.body)
    tours.push(newTour)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
        res.status(201).json({
            status:'Success',
            data:{
                newTour
            }
        })
    })
    
})

const port = process.env.PORT | 3000;

app.listen(port,console.log(`App is running on port number ${port}`))