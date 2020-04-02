import {http} from './index'

const fetchData = async () => {

    let data = [];

    await axios.get()
        .then(response => {
            // debugger
            data = response.data;
            console.log(response.data)
        })
        .catch(errors => {
            throw new Error(errors);
        });


    // debugger
    return data

};

export {fetchData};
