import CardItem from "../../components/cardItem";
import { db } from "../../db/db";

export const Exams = () => {
  const exams = db.filter(typeFilter);
  let today = new Date();
  function typeFilter(obj) {
    return obj.type === "exam";
  }
  function sortExamsByDate() {
    const sortedByDate = exams.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    return sortedByDate;
  }
  let sorted = sortExamsByDate();
  let futureDates = sorted.filter((obj) => new Date(obj.date) >= today);
  const showDates = futureDates;
  return (
    <main className="text-subtitle font-fcode sm:flex sm:flex-row sm:p-10 p-5 gap-10 transition-all sm:m-0">
      <div className="flex-col">
        <h1 className="text-2xl mb-2">Proximas Pruebas</h1>
        {showDates.map((obj) => {
          return <CardItem key={obj.id} {...obj} listDescription="true" />;
        })}
      </div>
    </main>
  );
};
