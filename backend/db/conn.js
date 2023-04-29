const mongoose = require("mongoose")

async function main() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://brodrigo87:12345@cluster0.jfgwxoi.mongodb.net/?retryWrites=true&w=majority"
        );

        console.log("Conectado ao banco");
    } catch (error) {
        console.log('Erro ')

    }
}

module.exports = main