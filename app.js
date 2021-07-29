const express = require('express');
const fs = require('fs')
const morgan = require('morgan')

const app = express();

const tourRouter = express.Router();
const userRouter = express.Router();

const tours =JSON.parse( fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))


app.use(express.json())
app.use(morgan('dev'))


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


const getAllUsers = (req,res)=>{
    res.status(200).json({
        results:tours.length,
        status:'Success',
        data:{
            User:"<Getiing The All User...>"
        }
    })
}

const getUser = (req,res)=>{
    
  
    res.status(200).json({
        status:'Success',
        data:{
            User:`<Getiing The User ${req.params.id}`
        }
    })
}

const createUser = (req,res)=>{
   
        res.status(201).json({
            status:'Success',
            data:{
                User:"<Created The User...>"
            }
        })
}
    


const updateUser = (req,res)=>{
   
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
            User:"<Upadted The User...>"
        }
    })
}

const deleteUser = (req,res)=>{
   
    
    res.status(200).json({
        status:'Success',
        data:{
            User:"<Deleted The User...>"
        }
    })
}

tourRouter.route('/api/v1/tours').get(getAllTours).post(createTour);
tourRouter.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour);

userRouter.route('/api/v1/users').get(getAllUsers).post(createUser);
userRouter.route('/api/v1/users/:id').get(getUser).patch(updateUser).delete(deleteUser);



const port = process.env.PORT | 3000;

app.listen(port,console.log(`App is running on port number ${port}`))