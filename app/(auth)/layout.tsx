import Image from "next/image"

export default function AuthLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return <div className= "bg-orange-300 w-screen h-screen overflow-hidden grid place-items-center">
    <div className="flex flex-col items-center text-center gap-4">
        <Image src= "/oxxo.png" alt="Logo de Ocso" width={200} className="place-self-center self-center justify-self-center" height={0}/>
        {children}</div>
    </div>
    
}