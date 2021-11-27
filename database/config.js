const mongoose = require('mongoose');



const dbConnection = async() => {

    try {

        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, err => {
            if(err) throw err;
        });
    
        console.log('Database is now online');

    } catch (error) {
        console.log(error);
        throw new Error('Error trying to start the database');
    }


}



module.exports = {
    dbConnection
}
