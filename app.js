const express = require('express');
const app = express();
const fs = require('fs')

const tours =JSON.parse( fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))


app.use(express.json())


const getAllTours = (req,res)=>{
    res.status(200).json({
        results:tours.length,
        status:'Success',
        data:{
            tours
        }
    })
}

const getTour = (req,res)=>{
    const id = req.params.id *1;

   
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
}

const createTour = (req,res)=>{
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
    
}

const updateTour = (req,res)=>{
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
}

const deleteTour = (req,res)=>{
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
}

// app.get('/api/v1/tours', getAllTours);

// app.get('/api/v1/tours/:id',getTour)

// app.post('/api/v1/tours',createTour)
// app.patch('/api/v1/tours/:id',updateTour)

// app.delete('/api/v1/tours/:id',deleteTour)

app.route('/api/v1/tours').get(getAllTours).post(createTour);
app.route('/api/v1/tours/id').get(getTour).patch(updateTour).delete(deleteTour);



const port = process.env.PORT | 3000;

app.listen(port,console.log(`App is running on port number ${port}`))