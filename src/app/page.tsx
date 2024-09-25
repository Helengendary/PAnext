export default function Home() {

  const style = {
    card:"flex justify-between px-5 m-5 border-2 border-inherit items-center rounded-xl"
  }

  return (
    <div className={style.card}>
      <span className="material-symbols-outlined text-orange-500 text-6xl">credit_card</span>
      <p className="text-start">Credit Card</p>
    </div>
  );
}
