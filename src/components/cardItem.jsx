import moment from "moment";

// eslint-disable-next-line react/prop-types
export default function CardItem({type, name, description, date}, listDescription) {
  return (
    <div className="bg-darkbg mb-7 p-6 h-auto sm:w-[60rem] w-50 rounded-xl hover:p-8 hover:text-secondary transition-all sm:max-lg:w-[20rem]">
     {type === "exam" && <h1 className="text-sm">Examen</h1>}
     {type === "homework" && <h1>Tarea</h1>}
      <p>{name}</p>
     {listDescription === 'true' && <p>{description}</p> }
     <p>{moment(date).startOf('hour').fromNow()} ({moment(date).format('ll')}) </p>
    </div>
  )
}