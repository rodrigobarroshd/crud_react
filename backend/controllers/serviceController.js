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
    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();

            res.json(services);
        } catch (error) {
            console.log(error)
        }
    },






    get: async(req, res) => {
        try{
            const id = req.params.id;
            const service = await ServiceModel.findById(id);

            res.json(service);
        } catch (error) {
            console.log(error);
        }
       
    },



    delete: async(req, res) => {
        try{

            const id = req.params.id

            const service = await ServiceModel.findById(id)

            if(!service){
                res.status(404).json({ msg: "ID nao encontrado"})
                return;
            }

            const deletedService = await ServiceModel.findByIdAndDelete(id)

            res.status(200)
            .json({deletedService, msg: "Serviço excluido com sucesso"})
        } catch (error) {
            console.log(error)
        }

        
    },
    update: async (req, res) => {

        const id = req.params.id;

        const service = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        };

        const updatedService = await ServiceModel.findByIdAndUpdate(id, service)

        if(!updatedService){
            res.status(404).json({ msg: "ID nao encontrado"})
            return;
        }

        res.status(200).json({service, msg: "Servico atualizado com sucesso"});




    },
    

};


module.exports = serviceController