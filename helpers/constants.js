var Enum = require('enum');

var StatusAdmin = new Enum({
    'PENDING': 'pending', 
    'ACTIVE': 'active', 
    'DISABLED': 'disabled',
    'DELETED': 'delete'
});

var NotificationType = new Enum({
    'SEND': 'send', 
    'CONFIRM': 'confirm', 
    'REJECT': 'reject'
});

module.exports  = {
    StatusAdmin,
    NotificationType
}