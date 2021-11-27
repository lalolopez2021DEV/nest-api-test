const { response, request } = require('express');
const { StatusAdmin, NotificationType } = require('../helpers/constants');
const { validateStatus, validateEmail } = require('../helpers/db-validators');

const Admin = require('../models/admin');
const Notitication = require('../models/notification');

const adminsGet = async(req = request, res = response) => {

    const admins = await Promise.all([
        Admin.find().or([{ status: StatusAdmin.PENDING  }, { status: StatusAdmin.ACTIVE.value  }])
    ]);

    res.json(admins);
}

const adminsPost = async(req, res = response) => {
    
    const { name, lastName, email, role } = req.body;
    const admin = new Admin({ name, lastName, email, role, status: StatusAdmin.PENDING.value });

    const { id } = await admin.save();

    const notificaion = new Notitication();
    notificaion.send(id, NotificationType.SEND.value);

    res.json({
        admin
    });
}

const adminsPatch = async(req, res = response) => {
    const { id } = req.params;
    const { email, status, ...resto } = req.body;

    const statusPending = await validateStatus(id, StatusAdmin.PENDING.value);
    const emailExits = await validateEmail(email);
    let newAdmin;
    
    if(email && emailExits && statusPending) {        
        newAdmin = {
            email,
            ...resto
        }
    }
    else{
        newAdmin = {
            ...resto
        }
    }
    
    const responde = await Admin.findByIdAndUpdate( id, newAdmin);

    if(status && responde && statusPending)
    {
        const notificaion = new Notitication();

        switch( status ) {
            case StatusAdmin.ACTIVE.value:
                notificaion.send(id, NotificationType.CONFIRM.value);
                break;
            case StatusAdmin.DISABLED.value:
                notificaion.send(id, NotificationType.REJECT.value);
                break;
        }
    }

    res.json(responde);
}

const adminsDelete = async(req, res = response) => {

    const { id } = req.params;
    const admin = await Admin.findByIdAndUpdate( id, { status: StatusAdmin.DELETED } );
    
    res.json(admin);
}



module.exports = {
    adminsGet,
    adminsPost,
    adminsPatch,
    adminsDelete
}