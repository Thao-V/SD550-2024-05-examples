import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000";

export async function login(email: string){
  try {
    const res = await axios.post('/users/login', {email});
    if(res.status === 200 && res.data.success){
      return res.data.data;
    }
  } catch (error) {
    
  }
  return null;
}

export async function getAllProducts(token: string){
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.get('/products');
    if(res.status === 200 && res.data.success){
      return res.data.data;
    }
  } catch (error) {
    
  }
  return [];
}