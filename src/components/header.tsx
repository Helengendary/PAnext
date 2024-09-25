import Image from "next/image";
import Logo from "../../public/imgs/logo.png";

export default function Header() {
    const style = {
        in: " rounded-full p-5 ",
        logo: "w-80"
      }
    
      return (
        <header className="bg-[url('../../public/imgs/hoteis-pousadas.jpg')] bg-no-repeat flex flex-col items-center justify-center">
    
            <Image src={Logo} className={style.logo} alt="Logo" />
            <input className={style.in} type="text" placeholder="Where can we take you?"/>
    
            <div className="mt-72 text-white text-4xl mx-5">
                <p className="font-bold">Disconvery yout next luxury escape</p>
            </div>
            <nav className="text-white flex justify-around text-2xl bg-orange-400 mt-5 w-full">
                <a href="">a</a>
                <a href="">a</a>
                <a href="">a</a>
            </nav>
        </header>
    
    
    
      );
}