import axios from 'axios';

const API_URL = 'http://localhost:3000';

class AuthService {

  login(user) {
    console.log('hey')
    return axios
      .post(API_URL + '/login', {
        email: user.email,
        password: user.password
      }, 
     {  headers :{
        Accept : 'application/json'
      }
     })
      .then(response => {console.log("res")
        if (response.data.accessToken) {
          localStorage.setItem('users', JSON.stringify(response.data));
          console.log('hey1')
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('users');
  }

  register(user) {
    return axios.post(API_URL + '/register', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();
