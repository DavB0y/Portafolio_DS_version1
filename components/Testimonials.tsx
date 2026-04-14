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
    role: "Usuaria particular",
    text: "Excelente servicio. Diagnosticó el problema rápidamente y la laptop quedó mucho más rápida después del upgrade.",
    rating: 5,
    likes: 12,
  },
  {
    name: "María L.",
    role: "Emprendedora ",
    text: "Muy buena asesoría para el respaldo y la migración a la nube. El proceso fue seguro, claro y bien organizado.",
    rating: 4.5,
    likes: 8,
  },
  {
    name: "Jorge P.",
    role: "Usuario Particular",
    text: "Me ayudó a elegir los componentes adecuados sin gastar de más. Brinda confianza y explica cada paso con claridad.",
    rating: 4.5,
    likes: 15,
  },
  {
    name: "Luis M.",
    role: "Marketing",
    text: "La instalación y configuración fue rápida. Mejoró bastante el rendimiento del equipo de trabajo.",
    rating: 5,
    likes: 10,
  },
  {
    name: "Andrea C.",
    role: "Administradora",
    text: "Muy profesional. Me ayudó con respaldo de archivos y optimización del sistema sin perder información.",
    rating: 5,
    likes: 14,
  },
  {
    name: "Pedro G.",
    role: "Emprendedor",
    text: "Buena atención y seguimiento. Resolví problemas de red y configuración en poco tiempo.",
    rating: 4.5,
    likes: 11,
  },
  {
    name: "Aldahir B.",
    role: "Enfermero",
    text: "El servicio fue excelente, desde la compra hasta la instalación de los programas. Brindó una atención clara, profesional y de confianza en todo momento.",
    rating: 4,
    likes: 22,
  },
];

const Testimonials: React.FC = () => {
  const [reviews, setReviews] = React.useState<Review[]>([]);
  const [startIndex, setStartIndex] = React.useState(0);

  const itemsPerPage = 3;

  React.useEffect(() => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("reviews");

    if (saved) {
      const parsed = JSON.parse(saved);

      if (parsed.length < defaultReviews.length) {
        localStorage.setItem("reviews", JSON.stringify(defaultReviews));
        setReviews(defaultReviews);
      } else {
        setReviews(parsed);
      }
    } else {
      localStorage.setItem("reviews", JSON.stringify(defaultReviews));
      setReviews(defaultReviews);
    }
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

          {/* Botones */}
          <div className="flex justify-end gap-3">
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
