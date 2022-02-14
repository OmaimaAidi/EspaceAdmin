import axios from 'axios';

const API_URL = 'https://multifaced-surfaces.000webhostapp.com';

class AuthService {

  login(user) {
    console.log('hey')
    return axios
      .post(API_URL + '/api/admin/login', {
        email: user.email,
        password: user.password
      }, 
     { headers :{
        Accept : 'application/json'
      }
     })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
          console.log('hey1')
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();
