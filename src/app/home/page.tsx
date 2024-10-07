import Link from "next/link";
import Image from "next/image";
import React from "@/imgs/react.png";
import JQ from "@/imgs/jquery.png";
import Next from "@/imgs/next.avif";
import Tail from "@/imgs/tail.jpg";


export const Principal = () => {
    
    const style = {
        card: " w-72 flex flex-col items-center border border-inherit pb-[20px] m-3.5 max-h-96 min-h-36 ",
        principal: " w-full p-12 text-4xl text-center font-bold text-branco bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  ",
        textis: " p-6 ",
        button: " scroll-smooth text-branco bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-[20px] py-2 px-14 transition hover:-translate-y-1 hover:scale-110 ",
        imagem: " w-96 ",
    }

    const dados: {titulo: string, textoCorpo: string, imagem: string | any, descricao: string} [] = [
        {
            titulo: "React",
            textoCorpo: "Conjunto das palavras escritas, em livro, folheto, documento etc. (p.opos. a comentários, aditamentos, sumário etc.); redação original de qualquer obra escrita.",
            imagem: React,
            descricao: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. ",
        },
        {
            titulo: "Tailwind",
            textoCorpo: "Conjunto das palavras escritas, em livro, folheto, documento etc. (p.opos. a comentários, aditamentos, sumário etc.); redação original de qualquer obra escrita.",
            imagem: Tail,
            descricao: "Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como o Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.",
        },
        {
            titulo: "Next",
            textoCorpo: "Conjunto das palavras escritas, em livro, folheto, documento etc. (p.opos. a comentários, aditamentos, sumário etc.); redação original de qualquer obra escrita.",
            imagem: Next,
            descricao: "Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como o Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.",
        },
        {
            titulo: "JQuery",
            textoCorpo: "Conjunto das palavras escritas, em livro, folheto, documento etc. (p.opos. a comentários, aditamentos, sumário etc.); redação original de qualquer obra escrita.",
            imagem: JQ,
            descricao: "jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário.",
        }
    ]
    
    return (
        <>

        <div className="items-center justify-center flex flex-wrap mt-24">

            {dados.map((item, index) => (
                <div key={index} className={style.card}>
                    <h1 className={style.principal}>{item.titulo}</h1>
                    <p className={style.textis}>{item.textoCorpo}</p>
                    <Link className={style.button} href={`#${item.titulo}`}>Read More</Link>
                </div>
            ))}
            {dados.map((item, index) => (
                <section key={index} className="border-2 border-azul m-4 flex flex-col items-center text-center mt-10 sm:w-3/4" id={item.titulo}>
                    <Image className={style.imagem} src={item.imagem} alt="imagem"></Image>
                    <p className="text-[20px] p-4">{item.descricao}</p>
                </section>
            ))}

        </div>
        </>
    )
}

export default Principal