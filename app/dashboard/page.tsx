import EmployeesLocation from "./@locations/_components/EmployeesLocation"



export default function DashboardPage({searchParams}: { searchParams:{[key: string]: string| string[] | undefined}}){
    return (
        <>
        <div className="h-full w-4/12">
        <div className="h-[90vh]">
        <EmployeesLocation store = {searchParams?.store}/> 
        </div>
        </div>
        
        </>
    )
}