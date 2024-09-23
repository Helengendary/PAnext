import Link from "next/link";
import style from "./Footer.module.css"

interface IFooter {
    op1: string;
    op2: string;
}

export const Footer: React.FC<IFooter> = ({op1, op2}) => {
    return(

        <footer className={style.footer}>
          <p>{op1}</p>
          <p>{op2}</p>
        </footer>
    );
}