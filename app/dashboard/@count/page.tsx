import axios from "axios";

const CountPage = async () =>{
    const countLocations = await axios.get("localhost:4000/")
    return "hay tantas locations: " + countLocations?.data?.lenght;
}

export default CountPage;