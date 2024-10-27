import { API_URL, TOKEN_NAME } from "@/constants";
import { Employee } from "@/entities";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import axios from "axios";
import { cookies } from "next/headers";
export default async function EmployeesLocation({ store }: { store: string }) {
    const token = cookies().get(TOKEN_NAME)?.value;
    const { data } = await axios.get<Employee[]>(`${API_URL}/employees/${store}`,
        {
            headers: {
                Authorization: `Bearer${token}`
            }
        })


    return data.map((employee) => {
        const fullName = employee.employeeName + " " + employee.employeeLastName
        return <Card>
            <CardHeader>
                <p>Nombre: <b>{fullName}</b></p>
                <p>Email: <b>{employee.employeeEmail}</b></p>
                <p>Numero de telefono: <b>{employee.employeePhoneNumber}</b></p>
            </CardHeader>
            <CardBody></CardBody>
            </Card>


    });

}