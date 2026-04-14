import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Review = {
  name: string;
  role: string;
  text: string;
  rating: number;
  likes: number;
};

const defaultReviews: Review[] = [
 {
  name: "Carla R.",
  role: "Estudiante",
  text: "Mi laptop estaba bastante lenta para las clases y después de revisarla y hacerle unos ajustes quedó mucho más rápida",
  rating: 4,
  likes: 12,
},
{
  name: "María L.",
  role: "Emprendedora",
  text: "Necesitaba hacer respaldo de información y pasar todo a la nube y me ayudó en el proceso dejando todo bien organizado",
  rating: 4.5,
  likes: 8,
},
{
  name: "Jorge P.",
  role: "Usuario",
  text: "No sabía bien qué componentes elegir y me orientó sin hacerme gastar de más dejando todo funcionando bien",
  rating: 4.5,
  likes: 15,
},
{
  name: "Luis M.",
  role: "Marketing",
  text: "Instaló y configuró los equipos del área y se notó la mejora en el rendimiento desde el primer día",
  rating: 4,
  likes: 10,
},
{
  name: "Andrea C.",
  role: "Administradora",
  text: "Me ayudó con respaldos y a mejorar el rendimiento del equipo dejando todo funcionando mejor y sin perder información",
  rating: 4,
  likes: 14,
},
{
  name: "Pedro G.",
  role: "Emprendedor",
  text: "Tenía problemas con la red y algunos equipos y lo revisó dejando todo funcionando de forma más estable",
  rating: 4.5,
  likes: 11,
},
{
  name: "Carlos T.",
  role: "Contador",
  text: "El sistema contable estaba lento y me hacía perder tiempo pero después del soporte el equipo respondió mucho mejor",
  rating: 4.5,
  likes: 18,
},
{
  name: "Daniela V.",
  role: "Diseñadora",
  text: "Tenía problemas con algunos programas y ya llevaba tiempo así pero lo revisó y quedaron funcionando sin errores",
  rating: 4,
  likes: 9,
},
{
  name: "Lucía P.",
  role: "Emprendedora",
  text: "Me ayudó a elegir y configurar los equipos para mi trabajo y todo quedó funcionando sin problemas",
  rating: 4.5,
  likes: 12,
},
{
  name: "Patricia M.",
  role: "Usuario",
  text: "Los equipos estaban lentos y después de la optimización mejoraron bastante en el uso diario",
  rating: 4,
  likes: 11,
},
{
  name: "Andrea F.",
  role: "Marketing Digital",
  text: "Después de la optimización los programas cargan mucho más rápido y se notó bastante la diferencia",
  rating: 4,
  likes: 9,
},
{
  name: "Luis A.",
  role: "Arquitecto",
  text: "Me ayudó a mejorar el rendimiento de mi equipo para trabajar con programas pesados y ahora corre mucho mejor",
  rating: 4.5,
  likes: 13,
},
{
  name: "Marcos D.",
  role: "Contador",
  text: "Me orientó con la configuración del entorno de trabajo y ahora todo funciona de forma más fluida",
  rating: 5,
  likes: 17,
},
{
  name: "Sofía C.",
  role: "Administrador",
  text: "Resolvió varios problemas técnicos en poco tiempo dejando todo funcionando correctamente",
  rating: 4,
  likes: 10,
},
{
  name: "Javier L.",
  role: "Empresario",
  text: "Teníamos problemas con la red en la oficina y ya estaba afectando el trabajo pero lo revisó y lo dejó funcionando mucho más estable",
  rating: 4.5,
  likes: 19,
},
{
  name: "Valeria H.",
  role: "Estudiante",
  text: "Me ayudó a recuperar archivos importantes de la universidad y además dejó la laptop funcionando mejor",
  rating: 4,
  likes: 7,
},
{
  name: "Miguel E.",
  role: "Logística",
  text: "Nos ayudó con la configuración de varios equipos en el área de logística y después de eso todo quedó funcionando bien",
  rating: 4.5,
  likes: 15,
},
  {
  name: "Ricardo N.",
  role: "Abogado",
  text: "Tenía problemas con mi equipo de trabajo y después de la revisión quedó funcionando mucho mejor",
  rating: 4.5,
  likes: 9,
},
{
  name: "Diana M.",
  role: "Docente",
  text: "Mi laptop estaba fallando en clases y después del soporte volvió a funcionar sin problemas",
  rating: 4,
  likes: 6,
},
{
  name: "Oscar V.",
  role: "Administrador",
  text: "El equipo tenía errores constantes y después de revisarlo todo quedó más estable",
  rating: 4.5,
  likes: 12,
},
{
  name: "Natalia R.",
  role: "Emprendedora",
  text: "Me ayudó a organizar mis equipos de trabajo y ahora todo funciona mejor",
  rating: 4,
  likes: 8,
},
{
  name: "Kevin S.",
  role: "Estudiante",
  text: "Tenía problemas con mi laptop y después del soporte quedó funcionando bien",
  rating: 4.5,
  likes: 11,
},
{
  name: "Paola C.",
  role: "Administradora",
  text: "Los equipos de la oficina estaban lentos y después de la optimización mejoraron bastante",
  rating: 4,
  likes: 7,
},
{
  name: "Luis R.",
  role: "Contador",
  text: "El sistema iba lento y después de la revisión respondió mucho mejor",
  rating: 4.5,
  likes: 10,
},
{
  name: "Sandra G.",
  role: "Atención al cliente",
  text: "Me ayudó con la configuración de los equipos y todo quedó funcionando correctamente",
  rating: 4,
  likes: 6,
},
{
  name: "Pedro L.",
  role: "Logística",
  text: "Había errores en varios equipos y después de revisarlos todo quedó estable",
  rating: 4.5,
  likes: 9,
},
{
  name: "Camila F.",
  role: "Diseñadora",
  text: "Mi laptop no soportaba programas pesados y ahora funciona mucho mejor",
  rating: 4.5,
  likes: 13,
},
{
  name: "Javier R.",
  role: "Dueño de negocio",
  text: "Teníamos problemas con la red y después del soporte quedó mucho más estable",
  rating: 4.5,
  likes: 14,
},
{
  name: "Andrea V.",
  role: "Estudiante",
  text: "La laptop estaba muy lenta y después del ajuste mejoró bastante",
  rating: 4,
  likes: 5,
},
{
  name: "Marco P.",
  role: "Emprendedor",
  text: "Me ayudó a optimizar mi equipo y ahora funciona mejor para el trabajo diario",
  rating: 4.5,
  likes: 10,
},
{
  name: "Luciana S.",
  role: "Emprendedora",
  text: "Me ayudó con la instalación y configuración y todo quedó funcionando bien",
  rating: 4,
  likes: 7,
},
{
  name: "Renzo H.",
  role: "Usuario",
  text: "Tenía errores difíciles de detectar y después del soporte todo quedó resuelto",
  rating: 4.5,
  likes: 11,
},
{
  name: "Gabriela T.",
  role: "Docente",
  text: "Necesitaba que mi equipo funcione mejor para clases y ahora va mucho más fluido",
  rating: 4,
  likes: 6,
},
{
  name: "Fernando L.",
  role: "Administrador",
  text: "Los equipos estaban lentos y después del ajuste mejoraron bastante",
  rating: 4.5,
  likes: 9,
},
{
  name: "Claudia B.",
  role: "Contadora",
  text: "Me ayudó con la configuración del sistema y ahora funciona correctamente",
  rating: 4,
  likes: 8,
},
{
  name: "Diego A.",
  role: "Usuario",
  text: "Había fallos en el sistema y después de revisarlo todo quedó estable",
  rating: 4.5,
  likes: 12,
},
{
  name: "Rosa M.",
  role: "Emprendedora",
  text: "No sabía cómo configurar mis equipos de trabajo y me ayudó dejándolo todo listo",
  rating: 4,
  likes: 7,
},
{
  name: "Alberto F.",
  role: "Logística",
  text: "Los equipos presentaban errores y después del soporte quedaron funcionando bien",
  rating: 4.5,
  likes: 10,
},
{
  name: "Valeria N.",
  role: "Estudiante",
  text: "Mi laptop tenía problemas y después de revisarla quedó mucho mejor",
  rating: 4,
  likes: 6,
},
{
  name: "Carlos M.",
  role: "Dueño de negocio",
  text: "Teníamos fallos en la red y después de la revisión quedó más estable",
  rating: 4.5,
  likes: 13,
},
{
  name: "Daniel R.",
  role: "Usuario",
  text: "Me ayudó con errores en mi equipo y ahora funciona sin problemas",
  rating: 4.5,
  likes: 11,
},
{
  name: "Patricia V.",
  role: "Administradora",
  text: "Los equipos estaban lentos y después del ajuste mejoraron bastante",
  rating: 4,
  likes: 7,
},
{
  name: "Miguel T.",
  role: "Marketing",
  text: "Me ayudó con la configuración y ahora todo funciona correctamente",
  rating: 4,
  likes: 6,
},
{
  name: "Luis F.",
  role: "Contador",
  text: "El sistema fallaba y después del soporte quedó mucho más estable",
  rating: 4.5,
  likes: 9,
},
{
  name: "Andrea P.",
  role: "Diseñadora",
  text: "Mi laptop estaba lenta y ahora funciona mucho mejor para trabajar",
  rating: 4.5,
  likes: 12,
},
{
  name: "Jorge L.",
  role: "Usuario",
  text: "Había errores constantes y después del soporte quedaron resueltos",
  rating: 4.5,
  likes: 11,
},
{
  name: "Sofía R.",
  role: "Estudiante",
  text: "Tenía problemas con mi laptop y después de revisarla quedó funcionando bien",
  rating: 4,
  likes: 5,
},
{
  name: "Marco V.",
  role: "Dueño de negocio",
  text: "La red fallaba y después del soporte quedó mucho más estable",
  rating: 4.5,
  likes: 13,
},
{
  name: "Lucía G.",
  role: "Docente",
  text: "Mi equipo no funcionaba bien y después de revisarlo quedó mucho mejor con el nuevo disco duro que mejoro la estabilidad",
  rating: 4,
  likes: 6,
},
{
  name: "Pedro R.",
  role: "Logística",
  text: "Los equipos tenían errores y después del soporte quedaron funcionando correctamente",
  rating: 4.5,
  likes: 10,
},
{
  name: "Camila N.",
  role: "Emprendedora",
  text: "Me ayudó con la configuración de mi laptop y ahora todo funciona sin problemas",
  rating: 4,
  likes: 7,
},
{
  name: "Diego M.",
  role: "Usuario",
  text: "Tenía problemas técnicos y después del soporte quedaron resueltos",
  rating: 4.5,
  likes: 12,
},
{
  name: "Ana F.",
  role: "Administradora",
  text: "Los equipos estaban lentos y después de la optimización mejoraron bastante",
  rating: 4,
  likes: 6,
},
{
  name: "Luis P.",
  role: "Contador",
  text: "El sistema fallaba y después del soporte quedó funcionando mejor",
  rating: 4.5,
  likes: 9,
},
{
  name: "Alexia M.",
  role: "Estudiante",
  text: "Mi laptop estaba lenta y ahora funciona mucho mejor",
  rating: 4,
  likes: 5,
},
{
  name: "Javier S.",
  role: "Dueño de negocio",
  text: "Había problemas con la red y después del soporte quedó estable",
  rating: 4.5,
  likes: 12,
},
{
  name: "Paola R.",
  role: "Diseñadora",
  text: "Mi equipo tenía problemas y después del soporte quedó funcionando bien",
  rating: 4.5,
  likes: 11,
},
{
  name: "Marco A.",
  role: "Usuario",
  text: "Había errores constantes y después de revisarlo todo quedó estable",
  rating: 4.5,
  likes: 10,
},
{
  name: "Sofía T.",
  role: "Docente",
  text: "Mi laptop no funcionaba bien y después del soporte mejoró bastante",
  rating: 4,
  likes: 6,
},
  {
    name: "Aldahir B.",
    role: "Enfermero",
    text: "El servicio fue excelente, desde el inicio de compra hasta la instalación de los programas y todo quedó funcionando sin problemas.",
    rating: 5,
    likes: 12,
  },
];

const Testimonials: React.FC = () => {
  const [reviews, setReviews] = React.useState<Review[]>([]);
  const [startIndex, setStartIndex] = React.useState(0);

  const itemsPerPage = 3;

  React.useEffect(() => {
  if (typeof window !== "undefined") {
    setReviews(defaultReviews);
    localStorage.setItem("reviews", JSON.stringify(defaultReviews));
  }
}, []);

  React.useEffect(() => {
    if (reviews.length > 0 && typeof window !== "undefined") {
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  const nextReviews = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage >= reviews.length ? 0 : prev + itemsPerPage
    );
  };

  const prevReviews = () => {
    setStartIndex((prev) => {
      if (prev === 0) {
        return Math.floor((reviews.length - 1) / itemsPerPage) * itemsPerPage;
      }
      return prev - itemsPerPage;
    });
  };

  const visibleReviews = reviews.slice(startIndex, startIndex + itemsPerPage);

  const handleLike = (reviewName: string) => {
    if (typeof window === "undefined") return;

    const liked = JSON.parse(localStorage.getItem("liked") || "[]");

    if (liked.includes(reviewName)) return;

    const updated = reviews.map((review) =>
      review.name === reviewName
        ? { ...review, likes: review.likes + 1 }
        : review
    );

    setReviews(updated);
    localStorage.setItem("liked", JSON.stringify([...liked, reviewName]));
  };

  return (
    <section id="testimonios" className="py-24 bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-4xl font-black">Lo que dicen mis clientes</h2>
            <p className="text-dark-text max-w-2xl text-lg">
              Compromiso con la calidad y soluciones técnicas efectivas.
            </p>
          </div>

          <div className="relative">
            <button
              onClick={prevReviews}
              className="hidden md:flex absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full border border-dark-border bg-dark-card text-white hover:border-primary-500 hover:text-primary-500 transition"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>

            <button
              onClick={nextReviews}
              className="hidden md:flex absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full border border-dark-border bg-dark-card text-white hover:border-primary-500 hover:text-primary-500 transition"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={startIndex}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {visibleReviews.map((rev, idx) => (
                  <motion.div
                    key={`${rev.name}-${idx}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative p-8 rounded-3xl bg-dark-card border border-dark-border flex flex-col gap-6 group overflow-hidden"
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 font-bold text-lg border border-primary-500/30">
                        {rev.name.substring(0, 2)}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{rev.name}</h4>
                        <p className="text-dark-text text-sm">{rev.role}</p>
                      </div>
                    </div>

                    <div className="flex gap-1 text-primary-500">
                      {[...Array(5)].map((_, i) => {
                        const isFull = i < Math.floor(rev.rating);
                        const isHalf =
                          i === Math.floor(rev.rating) && rev.rating % 1 !== 0;

                        return (
                          <span
                            key={i}
                            className={`material-symbols-outlined text-[20px] ${
                              isFull || isHalf ? "filled-icon" : ""
                            }`}
                          >
                            {isHalf ? "star_half" : "star"}
                          </span>
                        );
                      })}
                    </div>

                    <p className="text-dark-text leading-relaxed italic relative z-10 flex-1">
                      "{rev.text}"
                    </p>

                    <div className="pt-6 border-t border-dark-border flex justify-between items-center relative z-10">
                      <div
                        className="flex items-center gap-2 text-dark-text hover:text-white cursor-pointer transition-colors"
                        onClick={() => handleLike(rev.name)}
                      >
                        <span className="material-symbols-outlined text-lg">
                          thumb_up
                        </span>
                        <span className="text-xs font-bold">{rev.likes}</span>
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Verificado
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-6 md:hidden">
              <button
                onClick={prevReviews}
                className="w-11 h-11 rounded-full border border-dark-border bg-dark-card text-white hover:border-primary-500 hover:text-primary-500 transition"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>

              <button
                onClick={nextReviews}
                className="w-11 h-11 rounded-full border border-dark-border bg-dark-card text-white hover:border-primary-500 hover:text-primary-500 transition"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
