const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            `mongodb+srv://${process.env.Mongo_name}:${process.env.Mongo_password}@${process.env.Mongo_cluster}.xpfdemn.mongodb.net/`,
            {
                useNewUrlParser: true,
            }
        );
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error("error is", error);
    }
};

module.exports = connectDB;
