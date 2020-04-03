import {http} from './index'
import axios from 'axios';

const fetchData = async () => {

    let resultArray = [];

    debugger
    await http.get()
        .then(response => {
            debugger
            for (let key in response.data){
                resultArray.push(response.data[key]);
            }
            console.log(resultArray)
        })
        .catch(errors => {
            throw new Error(errors);
        });


    // debugger
    return resultArray

};


const handleSubmitData = async (payload) => {

    let result =false;
    debugger
    await axios.post("https://http-app-c6bfd.firebaseio.com/data.json", payload)
        .then(response => {
             debugger
            if (response.status ===200) result = true;
        })
        .catch(errors => {
            result = false
            throw new Error(errors);
        });


    // debugger
    return result

};


export {fetchData, handleSubmitData};
