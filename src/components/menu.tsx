import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string;
    op3: boolean;
    op4: number;
}

export const Menu: React.FC<IMenu> = ({op1, op2, op3, op4}) => {
    return(
 
        <nav className="text-azul text-grande font-robFont flex flex-row justify-evenly align-center p-10 bg-orange-300">
          <p>{op1}</p>
          <p>{op2}</p>
          <p className="text-vermelho">{op3 ? "Helena" : "Juliana"}</p>
          <p>{op4}</p>
        </nav>
    );
}