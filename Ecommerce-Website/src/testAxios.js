import axios from "axios";

const getData = async function(){
    const res = await axios.get('https://api.escuelajs.co/api/v1/products??title=Trendy&price_min=20&price_max=100&categorySlug=miscellaneous')
    const data = (res.data);
    console.log(data);
    
}
getData()
