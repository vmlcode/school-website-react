import CardItem from "../../components/cardItem";
import { db } from "../../db/db";

export const HomeWorks = () => {
  let today = new Date()
  const homeworks = db.filter(typeFilterHomework)
  function typeFilterHomework(obj) {
    return obj.type === "homework"
  }
  function sortHomeworksByDate() {
    const sortedByDate = homeworks.sort((a, b) => {
      return new Date(a.date).getTime() - 
          new Date(b.date).getTime()
    })
    return sortedByDate
  }
  let sortedHomeworks = sortHomeworksByDate()
  const futureHomeworksDates = sortedHomeworks.filter(obj => new Date(obj.date) >= today)
  const showHomeworkdates = futureHomeworksDates
  
  return (
    <main className="text-subtitle font-fcode sm:flex sm:flex-row sm:p-10 p-5 gap-10 transition-all sm:m-0">
      <div className="flex-col">
        <h1 className="text-2xl mb-2">Proximas Tareas</h1>
        {showHomeworkdates.map((obj) => {
          return <CardItem key={obj.id} {...obj} listDescription="true" />;
        })}
      </div>
    </main>
  );
};
