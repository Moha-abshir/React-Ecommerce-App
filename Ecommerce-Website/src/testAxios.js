import axios from "axios";

const getData = async function(){
    const res = await axios.post('https://api.escuelajs.co/api/v1/users/')
    const data = (res.data);
    console.log(data);
    
}
getData()
