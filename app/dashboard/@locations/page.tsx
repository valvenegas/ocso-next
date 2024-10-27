import { TOKEN_NAME } from "@/constants";
import axios from "axios";
import { cookies } from "next/headers";
import { Location } from "@/entities"
import SelectLocation from "./_components/SelectLocation";

const CountPage = async () => {
    const userCookies = cookies();
    const token = userCookies.get(TOKEN_NAME)?.value;

    let counter = 0;
    const { data } = await axios.get<Location[]>("http://localhost:4000", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return (<div className="w-2/12">
        <div className="w-full">
            <SelectLocation locations={data}/>

        </div>
    </div>)
}

export default CountPage;
