const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const mongoURI =
            process.env.MONGO_URI ||
            "mongodb://127.0.0.1:27017/advanced_admin_dashboard";

        await mongoose.connect(mongoURI);

        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Database Connection Failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;