const Admin = require('../models/admin');
const { StatusAdmin } = require('./constants');

const emailExists = async( email = '' ) => {

    const existsEmail = await Admin.findOne({ email });
    if ( existsEmail ) {
        throw new Error(`The email: ${ email }, is already registered`);
    }
}

const statusPending = async( id = '' ) => {

    const admin = await Admin.findOne({ id });
    if ( admin.status != StatusAdmin.PENDING.value ) {
        throw new Error(`The status not is pending`);
    }
}

const validateEmail = async( email ) => {

    const admin = await Admin.findOne({ email });
    if ( admin ) {
        return false;
    }
    return true;
}

const validateStatus = async( id, status ) => {

    const admin = await Admin.find({ id });
    if ( admin.status ==  status) {
        return false;
    }
    
    return true;
}

module.exports = {
    emailExists,
    validateStatus,
    validateEmail,
    statusPending
}
