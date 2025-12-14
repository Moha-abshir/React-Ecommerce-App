import axios from "axios";

const getData = async function(){
    const res = await axios.post('https://api.escuelajs.co/api/v1/users/is-available', {
        "email": "john@mail.com"
    });
    //const data = (res.data);
    console.log(res.data);
    
}
getData()
