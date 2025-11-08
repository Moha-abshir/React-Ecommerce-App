import axios from "axios";

const getData = async function(){
    const res = await axios.get('https://api.escuelajs.co/api/v1/categories')
    const data = (res.data);
    console.log(data);
    
}
getData()
