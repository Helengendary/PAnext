import '../app/globalicons.css';

export default function Menu() {

    const style = {
        area:'flex flex-col items-center'
    }

    return(

        <footer className='fixed bottom-0 flex justify-around bg-white w-full py-2'>
            <div className={style.area}>
                <span className="material-symbols-outlined">home</span>
                <p>Home</p>
            </div>
            <div className={style.area}>
                <span className="material-symbols-outlined">calendar_today</span>
                <p>Calender</p>
            </div>
            <div className={style.area}>
                <span className="material-symbols-outlined">work</span>
                <p>Trabalho</p>
            </div>
            <div className={style.area}>
                <span className="material-symbols-outlined">favorite</span>
                <p>Favoritos</p>
            </div>
            <div className={style.area}>
                <span className="material-symbols-outlined">person</span>
                <p>Profile</p>
            </div>
        </footer>
    );
  }