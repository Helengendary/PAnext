import {ROUTES} from "@/constants/route";
import { link } from "fs";
import Link from "next/link";

export const Menu = ({op1, op2, op3} : {op1:string, op2:string, op3:string}) => {
    const style = {
        link: " bg-amareloMeio w-52 self-center p-2 rounded-xl hover:bg-amareloQueimado m-4 "
    }

    return (
        <>
            <div className="bg-amareloClaro w-full flex flex-wrap justify-evenly text-center fixed top-0">
                <Link className={style.link} href={ROUTES.home}>{op1}</Link>
                <Link className={style.link} href={ROUTES.imc}>{op2}</Link>
                <Link className={style.link} href={ROUTES.media}>{op3}</Link>
            </div>
        </>
    )
}

export default Menu