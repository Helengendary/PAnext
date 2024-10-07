"use client"
import { useState } from "react";

export const Media = () => {

    const [notaum, setnotaum] = useState<string>("");
    const [notadois, setnotadois] = useState<string>("");
    const [notatres, setnotatres] = useState<string>("");
    const [notaquatro, setnotaquatro] = useState<string>("");
    const [notacinco, setnotacinco] = useState<string>("");
    const [media, setmedia] = useState<number|undefined>(0);
    const msgerror = "Digite um número válido";

    const style = {
        in: "w-72 border border-amareloQueimado p-2 rounded-xl m-4",
    }

    const calcular = () => {


        if(!isNaN(parseFloat(notadois)) && !isNaN(parseFloat(notaum)) && !isNaN(parseFloat(notatres)) && !isNaN(parseFloat(notaquatro)) && !isNaN(parseFloat(notacinco))){
            setmedia((parseFloat(notadois)+parseFloat(notaquatro)+parseFloat(notacinco)+parseFloat(notatres)+parseFloat(notaum))/5);
        } else {
            setmedia(undefined);
        }
    }

    return (
        <>
        <div className="bg-azul p-12 flex flex-col items-center w-screen flex items-center justify-center mt-12 md:mt-2 h-screen">
            <div className="flex flex-col">
                <input className={style.in} type="number" placeholder="Nota 1" onChange={(e)=>setnotacinco(e.target.value)}/>
                <input className={style.in} type="number" placeholder="Nota 2" onChange={(e)=>setnotadois(e.target.value)}/>
                <input className={style.in} type="number" placeholder="Nota 3" onChange={(e)=>setnotaquatro(e.target.value)}/>
                <input className={style.in} type="number" placeholder="Nota 4" onChange={(e)=>setnotatres(e.target.value)}/>
                <input className={style.in} type="number" placeholder="Nota 5" onChange={(e)=>setnotaum(e.target.value)}/>             
            </div>
            <div className="flex flex-col md:flex-row">
                <button className="border-2 p-2 rounded-xl border-amareloQueimado bg-amareloClaro hover:bg-amareloQueimado hover:border-amareloClaro hover:text-branco h-12" onClick={calcular}>Calcular média</button>
                <p className="text-branco font-bold text-[24px] md:ml-12">Média das notas: {!isNaN(media ?? NaN) ? media?.toFixed(2) : msgerror}</p>
            </div>
        </div>
        </>
    )
}

export default Media