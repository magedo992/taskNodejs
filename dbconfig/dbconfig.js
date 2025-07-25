const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // console.log(process.env.URI, 'URI');
        const conn = await mongoose.connect(process.env.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); 
    }
};

module.exports = connectDB;