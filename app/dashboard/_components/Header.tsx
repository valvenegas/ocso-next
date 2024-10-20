import Image from "next/image";
export default function Header(){
    return(
        <div className="w-screen h-[10vh] bg-orange-200">
            <Image src="/oxxo.png" width={100} height={0} alt="ocso logo" draggable={false}/>
        </div>
    )
}