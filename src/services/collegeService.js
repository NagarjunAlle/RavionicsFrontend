// import axios from 'axios';


// const API_URL = "http://localhost:8080/api/colleges/details";

// const getAllColleges = () => {
//     return axios.get(API_URL);
// };

// const getCollegeById = (id) => {
//     return axios.get(`${API_URL}/${id}`);
// };

// export { getAllColleges, getCollegeById };

import axios from 'axios';

export const getAllColleges = () => {
    return axios.get('http://localhost:8080/api/colleges/details');
};