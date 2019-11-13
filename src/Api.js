
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

class Api {
    static registration(data) {
        console.log(data);
        return axios.post('/adminlogin/admin-sing-up', data);
    }

    static getServices() {
        return axios.get("/admin/set-service")
    }

    static getHotels(price, services, start_day, end_day, page = 1, guests = 1) {
        const query = {
            services, // 5,15,18
            price,
            start_day,
            end_day,
            page,
            guests
        };
        return axios.post(`/hotels/search-room`, query)
    }

    static setRooms(){
        return axios.get('/bring-out')
    }
}

export default Api;