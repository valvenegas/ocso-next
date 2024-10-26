import axios from "axios";

const CountPage = async () => {

    let counter = 0;

    try {
        const response = await axios.get("http://localhost:4000");

        counter = response.data.lenght;
    } catch(ex) {
        console.log(ex);
    }
    // const countLocations = await axios.get("http://localhost:4000");

    return "hay tantas locations: " + counter;
}

export default CountPage;