import Image from "next/image";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Helenis",
  description: "Primeira aula de código",
};

export default function Home() {
  const style =
  {
    in: " bg-gray-200 my-5 hover:border-t-red-300 ",
    meio: " flex flex-col justify-center items-center "
  }

  return (
   <>
    <section className={style.meio} >
      <form className={style.meio + "bg-red-300 w-96 mt-30"}>
        <h1>LOGIN</h1>

        <div className="flex flex-col align-center w-80">
          <label>Nome:</label>
          <input className={style.in}  type="text" />

          <label>Senha:</label>
          <input className={style.in} type="text" />
        </div>
      </form>
    </section>
   </>
  );
}
