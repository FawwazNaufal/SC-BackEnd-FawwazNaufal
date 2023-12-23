const models = require('../models');
const { Produk, Produsen } = models;

module.exports = {
    // Mendapatkan semua produk beserta produsennya
    produkA: async (req, res) => {
        const data = await Produk.findAll({ include: Produsen });
        res.status(200).json({
            message: "success",
            data: data
        });
    },

    // Mendapatkan produk tertentu berdasarkan ID
    produkB: async (req, res) => {
        try {
            const id = req.params.id;
            const data = await Produk.findOne({
                where: {
                    id: id,
                }
            });
            res.status(200).json({
                message: "success",
                data: data
            });
        } catch (error) {
            // Menangani kesalahan
            res.status(500).json({
                message: error.message
            });
        }
    },

    // Menambahkan produk baru
    produkC: async (req, res) => {
        try {
            const { name, stok } = req.body;
            const add = await Produk.create({ name, stok });
            res.status(200).json({
                message: "success",
                data: add
            });
        } catch (error) {
            // Menangani error
            res.status(500).json({
                message: error.message
            });
        }
    },

    // Menghapus produk berdasarkan ID
    produkD: async (req, res) => {
        try {
            const id = req.params.id;
            await Produk.destroy({
                where: { id }
            });
            res.status(200).json({
                message: "success",
            });
        } catch (error) {
            // Menangani error
            res.status(500).json({
                message: error.message
            });
        }
    },

    // Memperbarui produk berdasarkan ID
    produkE: async (req, res) => {
        try {
            const id = req.params.id;
            const { name, stok } = req.body;

            // Temukan produk yang sudah ada
            const produk = await Produk.findOne({
                where: {
                    id: id,
                },
            });

            // Perbarui produk
            const data = await Produk.update({ name, stok }, {
                where: {
                    id: produk.id
                }
            });

            res.status(200).json({
                message: "success",
            });
        } catch (error) {
            // Menangani error
            res.status(500).json({
                message: error.message
            });
        }
    }
}
