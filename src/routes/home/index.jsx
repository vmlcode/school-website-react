import { Link } from "react-router-dom";
import CardItem from "../../components/cardItem";
import { db } from "../../db/db";

// cambiar a componente
const exams = db.filter(typeFilter)
let today = new Date()
function typeFilter(obj) {
  return obj.type === "exam"
}
function sortExamsByDate() {
  const sortedByDate = exams.sort((a, b) => {
    return new Date(a.date).getTime() - 
        new Date(b.date).getTime()
  })
  return sortedByDate
}
let sorted = sortExamsByDate()
let futureDates = sorted.filter(obj => new Date(obj.date) >= today)
const showDates = futureDates.slice(0, 1)

//cambiar a componente
const homeworks = db.filter(typeFilterHomework)
function typeFilterHomework(obj) {
  return obj.type === "homework"
}

console.log(homeworks);

function sortHomeworksByDate() {
  const sortedByDate = exams.sort((a, b) => {
    return new Date(a.date).getTime() - 
        new Date(b.date).getTime()
  })
  return sortedByDate
}
let sortedHomeworks = sortHomeworksByDate()
let futureHomeworksDates = sortedHomeworks.filter(obj => new Date(obj.date) >= today)
const showHomeworkdates = futureHomeworksDates.slice(0, 2)

export default function Home() {
  return (
    <main className="text-subtitle font-fcode sm:flex sm:flex-row sm:p-10 p-5 gap-10 transition-all sm:m-0">
      <section className="sm:flex  sm:flex-col">
      <div className="bg-darkbg h-[15rem] w-[25rem] p-6 hover:p-7 text-sm rounded-xl flex-col grow-0 mt-3 transition-all hidden sm:flex">
        <p className="mb-4">Pagina web CRv1</p>
        <p>Version 1.0.0 VER</p>
        <p>Changelog:</p>
        <p className="ml-5">Add navbar</p>
        <p className="bottom-9">PD: JuanP es el responsable de la web</p>
      </div>
      <section className="h-[10rem] w-[25rem] hidden sm:flex flex-col">
      <div className="p-3 hover:p-7 text-sm rounded-xl flex-col grow-0 mt-3 transition-all hover:text-secondary">
        <p>Proximas tarea</p>
      </div>
      <div className="mx-3 text-sm ">
        {/* <Link><p>suma de polinomios a la 3 jp es un niño ardilla</p></Link> */}
        {showHomeworkdates.map((obj => <Link to={'homework/' + obj.id} key={obj.id} className="hover:text-secondary m-4"><p>{obj.name}</p></Link>))}
        </div>
        </section>
      </section>
      <div className="flex-col">
        <h1 className="text-2xl mb-2">Proximo Examen</h1>
        {showDates.map((obj) => {
          return <CardItem key={obj.id} {...obj} listDescription='true'/>;
        })}
        <div>
          <p>Horario de clases</p>
          <section className="flex gap-12 text-xs">
            <div className="p-5 hover:text-secondary hover:p-6 transition-all hover:bg-darkbg rounded-2xl">
            <p className="mb-5 text-base">lunes</p>
            <p className="m-5">Ingles</p>
            <p className="m-5">Quimica</p>
            <p className="ml-5">Soberania</p>
            <p className="m-5">Castellano</p>
            </div>
            <div className="p-5  hover:text-secondary hover:p-6 transition-all hover:bg-darkbg rounded-2xl">
            <p className="mb-5 text-base">martes</p>
            <div className="m-5">
            <p className="border-b-[0.5px] border-subtitle hover:border-secondary">Fisica G1</p>
            <p>Quimica G2</p>
            </div>
            <div className="m-5">
            <p className="border-b-[0.5px] border-subtitle hover:border-secondary">Fisica G1</p>
            <p>Quimica G2</p>
            </div>
            <div className="m-5">
            <p className="border-b-[0.5px] border-subtitle hover:border-secondary">Logica G1</p>
            <p>M.E G2</p>
            </div>
            <p className="m-5">Geografia</p>
            </div>
            <div className="p-5 hover:text-secondary hover:p-6 transition-all hover:bg-darkbg rounded-2xl">
            <p className="mb-5 text-base">miercoles</p>
            <div className="m-5">
            <p className="border-b-[0.5px] border-subtitle hover:border-secondary">Biologia G1</p>
            <p>E. fisica G2</p>
            </div>
            <div className="m-5">
            <p className="border-b-[0.5px] border-subtitle hover:border-secondary">Biologia G1</p>
            <p>E. fisica G2</p>
            </div>
            <div className="m-5">
            <p className="border-b-[0.5px] border-subtitle">Logica G1</p>
            <p>M.E G2</p>
            </div>
            <p className="ml-5">Castellano</p>
            <p className="ml-5">Soberania</p>
            </div>
            <div className="p-5  hover:text-secondary hover:p-6 transition-all hover:bg-darkbg rounded-2xl">
            <p className="mb-5 text-base">jueves</p>
            <p className="m-5">Geografia</p>
            <p className="m-5">Matematica</p>
            <p className="m-5">Orientación</p>
            <p className="m-5">Fisica</p>
            </div>
            <div className="p-5  hover:text-secondary hover:p-6 transition-all hover:bg-darkbg rounded-2xl">
            <p className="mb-5 text-base">viernes</p>
            <p className="m-5">Biologia</p>
            <p className="m-5">Matematica</p>
            <div className="m-5">
            <p className="border-b-[0.5px] border-subtitle hover:border-secondary">Religion</p>
            <p>I.Emocional</p>
            </div>
            <p className="m-5">Ingles</p>
            </div>
          </section>
        </div>
      </div>
      
      <div className="h-[10rem] w-[25rem] p-3 hover:p-7 text-sm rounded-xl flex-col grow-0 mt-3 transition-all flex sm:hidden">
        <p className="text-2xl">Proxima tarea</p>
        <div className="mx-3 text-sm ">
        {/* <Link><p>suma de polinomios a la 3 jp es un niño ardilla</p></Link> */}
        {showHomeworkdates.map((obj => <Link to={'homework/' + obj.id} key={obj.id} className="hover:text-secondary m-4"><p>{obj.name}</p></Link>))}
        </div>
      </div>
    </main>
  );
}

