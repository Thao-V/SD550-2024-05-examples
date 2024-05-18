import axios from "axios";
import ICourse from "./components/ICourse";

axios.defaults.baseURL = "http://localhost:5000";

export async function getCourses(){
  try {
    const res = await axios.get('/courses');
    if(res.status === 200){
      return res.data;
    }
  } catch (error) {
    
  }
  return [];
}

export async function updateCourse(id: string, course: ICourse){
  try {
    const res = await axios.put(`/courses/${id}`, course);
    if(res.status === 200){
      return res.data;
    }
  } catch (error) {
  
  }
  return null;
}

export async function createCourse(course: ICourse){
  try {
    const res = await axios.post(`/courses`, course);
    if(res.status === 201){
      return res.data;
    }
  } catch (error) {
  
  }
  return null;
}

export async function deleteCourse(id: string){
  try {
    const res = await axios.delete(`/courses/${id}`);
    if(res.status === 200){
      return true
    }
  } catch (error) {
  
  }
  return false;
}

export async function isEligibleUser(email: string){
  try {
    const res = await axios.get(`/users?email=${email}`);
    if(res.status === 200 && res.data.length > 0){
      return true;
    }
  } catch (error) {
    
  }
  return false;
}