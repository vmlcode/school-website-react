
export const Calendar = () => {
  return (
    <>
        <section className="hidden sm:flex">
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
        </section>
        <section className="sm:hidden">
        <div>
          <p>Horario de clases</p>
          <section className="gap-12 text-xs mb-20">
            <div className="p-5 my-3 hover:text-secondary hover:p-6 transition-all bg-darkbg rounded-2xl">
            <p className="mb-5 text-base">lunes</p>
            <p className="m-5">Ingles</p>
            <p className="m-5">Quimica</p>
            <p className="ml-5">Soberania</p>
            <p className="m-5">Castellano</p>
            </div>
            <div className="p-5 my-3 hover:text-secondary hover:p-6 transition-all bg-darkbg rounded-2xl">
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
            <div className="p-5 my-3 hover:text-secondary hover:p-6 transition-all bg-darkbg rounded-2xl">
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
            <div className="p-5 my-3 hover:text-secondary hover:p-6 transition-all bg-darkbg rounded-2xl">
            <p className="mb-5 text-base">jueves</p>
            <p className="m-5">Geografia</p>
            <p className="m-5">Matematica</p>
            <p className="m-5">Orientación</p>
            <p className="m-5">Fisica</p>
            </div>
            <div className="p-5 my-3 hover:text-secondary hover:p-6 transition-all bg-darkbg rounded-2xl">
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
        </section>
        </>
  )
}