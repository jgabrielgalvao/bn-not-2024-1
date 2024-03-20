import Cliente from '../models/Cliente';

const controller = {};

controller.create = async function(req, res){
    try{
        await Cliente.create(req.body);
        res.status(201).end();
    }
    catch(error){
        console.error(error);
        res.status(500).end();
    }
}