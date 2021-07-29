const fs = require('fs')

const tours = JSON.parse( fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

exports.getAllTours = (req,res)=>{
    res.status(200).json({
        results:tours.length,
        status:'Success',
        data:{
            tours
        }
    })
}

exports.getTour = (req,res)=>{
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

exports.createTour = (req,res)=>{
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

exports.updateTour = (req,res)=>{
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

exports.deleteTour = (req,res)=>{
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
