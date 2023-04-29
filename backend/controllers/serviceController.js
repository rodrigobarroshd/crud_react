const {Service: ServiceModel} = require("../models/Service");

const serviceController = {

    create: async(req, res) => {
        try {

            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            };
            const responde = await ServiceModel.create(service);

            res.status(201).json({responde, msg: "Servico criado com sucesso! "})

        } catch (error) {
            console.log(error);

        }

    },
    get: async(req, res) => {
        try {
            const id = req.params.id
            const serice = await ServiceModel.findById(id)

            if(!service){
                res.status(404).json({ msg: "ID nao encontrado"})
                return;
            }

            res.json(service);            
            }
            catch (error) {               
                console.log(error)
        }
    }

};


module.exports = serviceController