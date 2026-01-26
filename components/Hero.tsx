
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

// Fix: Define local component aliases for Three.js intrinsic elements to avoid JSX type errors
const AmbientLight = 'ambientLight' as any;
const DirectionalLight = 'directionalLight' as any;

const BackgroundVisual = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas>
        {/* Fix: Using component aliases instead of lowercase intrinsic strings to resolve 'JSX.IntrinsicElements' errors */}
        <AmbientLight intensity={1} />
        <DirectionalLight position={[10, 10, 5]} intensity={2} />
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere args={[1.5, 64, 64]} position={[2.5, 0, 0]}>
              <MeshDistortMaterial
                color="#136dec"
                speed={4}
                distort={0.4}
              />
            </Sphere>
          </Float>
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(19,109,236,0.1)_0%,transparent_50%)]">
      <BackgroundVisual />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-center z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-primary-300 uppercase tracking-widest">Disponible para trabajar</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
              Davide Contreras <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-600">Huerta</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold text-primary-200">
              Soporte Técnico · Backups & Migración · Consultoría Tecnológica
            </h2>
            
            <p className="text-dark-text text-lg max-w-xl leading-relaxed">
              Soluciones técnicas confiables para optimizar equipos, proteger datos y tomar mejores decisiones de compra.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="https://drive.google.com/drive/folders/1R6oFeoR-65Gh0DsZZB69O790z0MLYSKw?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 h-14 px-8 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold transition-all shadow-xl shadow-primary-500/25"
            >
              <span className="material-symbols-outlined">download</span>
              Descargar CV
            </a>
            <a 
              href="https://drive.google.com/drive/folders/1ODvyg_dmiox4ET34e0BhgAX6dvd0UiBJ?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 h-14 px-8 rounded-xl border border-dark-border bg-dark-card/50 hover:bg-dark-card text-white font-bold transition-all"
            >
              <span className="material-symbols-outlined">verified</span>
              Ver Certificaciones
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-8 border-t border-dark-border">
            <div className="flex items-center gap-2 py-2 px-4 rounded-lg bg-dark-card border border-dark-border">
              <span className="material-symbols-outlined text-primary-500">workspace_premium</span>
              <span className="text-sm font-bold uppercase tracking-tight">Tercio Superior</span>
            </div>
            <div className="flex items-center gap-2 py-2 px-4 rounded-lg bg-dark-card border border-dark-border">
              <span className="material-symbols-outlined text-primary-500">verified_user</span>
              <span className="text-sm font-bold uppercase tracking-tight">Certificaciones Cisco</span>
            </div>
            <div className="flex items-center gap-2 py-2 px-4 rounded-lg bg-dark-card border border-dark-border">
              <span className="material-symbols-outlined text-primary-500">troubleshoot</span>
              <span className="text-sm font-bold uppercase tracking-tight">Diagnóstico & Optimización</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:flex justify-end relative"
        >
          <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden bg-dark-card border border-dark-border shadow-2xl flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent opacity-40"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGzg3gGC27wzbWMo-ratSD8I53rhcmFz-esDRRDtDWyDdpUNck403rsMpy7vEBOpayw1XvNEe3UGePeEUpnf1LjoUn_iLsAUOZRSC5esrJmsuFFhmGqxTFWmIRFUCVe7qZZ53tZ5cOux8Rmym50vJp1mNKunDY_y6M67q9NzKMUxujVxONwPX8zrp-ew7j2Z95-QG-b3ByDIuE6i6wUB0VTzVd5EEm07e4Rf9sby6DZxMXhrDe3uSKABj6yjJpnevj9InsQoSAPIE" 
              alt="Visual abstracto tecnológico"
              className="w-full h-full object-contain drop-shadow-2xl animate-pulse"
              style={{ animationDuration: '4s' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
