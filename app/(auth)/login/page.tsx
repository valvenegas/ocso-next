import { Button, Input, Link } from "@nextui-org/react";
import { colgroup, form } from "framer-motion/client";
import { API_URL } from "@/constants";
import axios from "axios";


export default function LoginPage() {
    const handleSubmit= async (e : React.FormEvent) =>{
        e.preventDefault()
        console.log(e);
        const formData= new FormData();
        let authData: any = {}
        authData.userEmail = formData.get("userEmail");
        authData.userPassword = formData.get("userPassword")
        const {data}= await axios.post(`${API_URL}/auth/login`, ...authData);
        console.log(data);
        return;
    }
    return (
        <form className="bg-orange-500 px-10 py-2 rounded-md">
            <p className="text-2xl my-4 text-white"> Iniciar sesión:)</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" name="userEmail" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" name="userPassword" type="password" isRequired={true} size="sm" />
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button color="primary">Iniciar sesión</Button>
                <p className="text-white">¿No tienes una cuenta? <Link href="/signup">Registrate</Link></p>
            </div>

        </form>
    )
}