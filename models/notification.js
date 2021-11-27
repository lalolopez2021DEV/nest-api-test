const axios = require('axios');

class Notitication {

    async send( id, type) {

        const instance = axios.create({
            baseURL: process.env.NOTI_URL,
            headers: {
                'Content-Type': 'aaplication/json',
                'Accept': '*/*',
            }
        });

        const body = {
            "type": type,
            "id": id
        }

        try {
            await instance.post(`${instance.defaults.baseURL}/api/notifications/v1/actions`, body);            
        } catch (error) {
            throw error;
        }
    }

}

module.exports = Notitication;