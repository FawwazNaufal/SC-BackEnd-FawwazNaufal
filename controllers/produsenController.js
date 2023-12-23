const models = require('../models');
const { Produsen, Produk }= models

module.exports = {
    produsenA: async (req, res) => {
        const data = await Produsen.findAll({include: Produk})
        res.status(200).json({
            message: "success",
            data: data
        })
    },
    produsenB: async (req, res) =>{
        try {
            const id = req.params.id
            const data = await Produsen.findOne({
                where: {
                  id: id,
                }
            })
            res.status(200).json({
                message: "success",
                data: data
            })
        } catch (error) {
            
        }
    },
    produsenC: async (req, res) => {
        try {
            const {brandName, kategori} = req.body
            const add = await Produsen.create({brandName, kategori})
            res.status(200).json({
                message: "success",
                data: add
            })  
        } catch (error) {
            res.status(500).json({
                message: error.message
            })  
        }
        
    },
    produsenD: async (req, res)=>{
        try {
            const id = req.params.id
            await Produsen.destroy({
                where: {id}
              });
            res.status(200).json({
                message: "success",
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    },
    produsenE: async (req, res) => {
        try {
            const id = req.params.id
            const {brandName, kategori} = req.body
            const produsen = await Produsen.findOne({
                where: {
                  id: id,
                },
            })
            await Produsen.update({ brandName, kategori}, {
                where: {
                  id: produsen.id
                }
            });
            res.status(200).json({
                message: "success",
            })
        } catch (error) {
            res.status(500).json({
                message:error.message
            })
        }
    }
}