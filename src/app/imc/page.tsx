"use client"
import { useState } from "react"

const imc: React.FC = () => {

    const style = {
        in: "w-72 border border-amareloQueimado p-2 rounded-xl m-4",
    }

    const [peso, setpeso] = useState<string>("");
    const [altura, setaltura] = useState<string>("");
    const [imc, setimc] = useState<number | undefined>(0);
    const msgerror = "Digite um número válido";

    const calcular = () => {
        const n1 = parseFloat(peso);
        const n2 = parseFloat(altura);
        if(!isNaN(n1) && !isNaN(n2)){
            setimc(n1 / (n2*n2));
        } else {
            setimc(undefined);
        }
    }

    return (
        <>
        <div className="bg-azul p-12 flex flex-col items-center h-screen w-screen flex items-center justify-center">
            <div className="flex flex-col ">
                <input className={style.in} type="number" placeholder="peso (kg)" value={peso} onChange={(e) => setpeso(e.target.value)}/>
                <input className={style.in} type="number" placeholder="altura (m)" value={altura} onChange={(e) => setaltura(e.target.value)}/>
            </div>

            <div className="flex flex-col md:flex-row">
                <button className="border-2 p-2 rounded-xl border-amareloQueimado bg-amareloClaro hover:bg-amareloQueimado hover:border-amareloClaro hover:text-branco h-12" onClick={calcular}>Calcular</button>
                <p className="text-branco font-bold text-[24px] md:ml-12">Resultado: {!isNaN(imc ?? NaN) ? imc?.toFixed(2) : msgerror} </p>
            </div>
        </div>
        </>
    )
}

export default imc