/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  ExternalLink, 
  Globe, 
  ShoppingBag, 
  Dog, 
  Utensils, 
  Pizza, 
  Code2, 
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Menu,
  X,
  Sparkles,
  Layers,
  Zap,
  ShieldCheck,
  MousePointer2
} from 'lucide-react';

const projects = [
  {
    title: "PetAmigo",
    description: "Plataforma de agendamento e cuidados pet com interface intuitiva.",
    url: "https://petshop-seven-xi.vercel.app/",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
    icon: <Dog className="w-5 h-5" />,
    size: "large" // Bento size
  },
  {
    title: "LUMINA",
    description: "E-commerce de moda com foco em minimalismo e conversão.",
    url: "https://loja-lumina.vercel.app/",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800",
    icon: <ShoppingBag className="w-5 h-5" />,
    size: "small"
  },
  {
    title: "LUMIÈRE",
    description: "Experiência digital premium para salão de beleza e estética.",
    url: "https://lumiere-blue.vercel.app/",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    icon: <Sparkles className="w-5 h-5" />,
    size: "medium"
  },
  {
    title: "SMASH&CO.",
    description: "Sistema de pedidos e cardápio digital para gastronomia.",
    url: "https://hamburgueria-eight-rho.vercel.app/",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=800",
    icon: <Utensils className="w-5 h-5" />,
    size: "small"
  },
  {
    title: "VIBE.PIZZA",
    description: "Landing page otimizada para delivery e conversão rápida.",
    url: "https://paginapizza.vercel.app/",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    icon: <Pizza className="w-5 h-5" />,
    size: "medium"
  }
];

const services = [
  {
    title: "Web Design",
    description: "Interfaces que encantam e convertem.",
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: "Performance",
    description: "Velocidade máxima em cada carregamento.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Segurança",
    description: "Proteção total para seus dados e clientes.",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && dotRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
        dotRef.current.style.transform = `translate3d(${e.clientX - 2}px, ${e.clientY - 2}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden lg:block" />
      <div ref={dotRef} className="custom-cursor-dot hidden lg:block" />
    </>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left" style={{ scaleX }} />

      {/* Custom Noise Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[90] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" 
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`backdrop-blur-2xl border border-white/5 bg-black/20 rounded-3xl px-8 h-16 flex items-center justify-between transition-all duration-700 ${scrolled ? 'shadow-2xl shadow-black/50' : ''}`}>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center group-hover:rotate-[15deg] transition-transform duration-500">
                <Code2 className="text-black w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tighter text-white leading-none">CODEFLOW</span>
                <span className="text-[8px] uppercase tracking-[0.3em] text-blue-500 font-black">Dynamic Web</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              <a href="#home" className="hover:text-white transition-colors">Início</a>
              <a href="#projects" onClick={scrollToProjects} className="hover:text-white transition-colors">Projetos</a>
              <a 
                href="https://www.instagram.com/codeflow_2026_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-white text-black hover:bg-blue-600 hover:text-white transition-all font-black flex items-center justify-center"
              >
                CONTATO
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-12 md:hidden"
          >
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-5xl font-black text-white tracking-tighter uppercase">Início</a>
            <a href="#projects" onClick={scrollToProjects} className="text-5xl font-black text-white tracking-tighter uppercase">Projetos</a>
            <a 
              href="https://www.instagram.com/codeflow_2026_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-12 py-5 rounded-2xl bg-blue-600 text-white font-black text-xl uppercase tracking-widest"
            >
              Contato
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center pt-20 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-12">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                Estúdio de Design Digital
              </div>
              <h1 className="text-[12vw] md:text-[10vw] font-black text-white mb-8 tracking-tighter leading-[0.8] uppercase">
                FLUXO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500">DIGITAL.</span>
              </h1>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                <p className="text-xl md:text-3xl text-slate-400 max-w-2xl leading-[1.1] font-medium tracking-tight">
                  Criamos interfaces que respiram inovação. 
                  Transformamos complexidade em simplicidade visual e técnica para marcas que buscam o extraordinário.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToProjects}
                  className="group w-32 h-32 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 shrink-0"
                >
                  <ArrowUpRight className="w-10 h-10 group-hover:rotate-45 transition-transform duration-500" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 px-6 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid (Bento Style) */}
        <section id="projects" className="py-48 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-32">
              <h2 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                Trabalhos <br />
                <span className="font-serif italic text-blue-500 lowercase">selecionados</span>
              </h2>
              <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/5 
                    ${project.size === 'large' ? 'lg:col-span-8 lg:row-span-2 aspect-square lg:aspect-auto' : 
                      project.size === 'medium' ? 'lg:col-span-4 lg:row-span-2 aspect-square lg:aspect-auto' : 
                      'lg:col-span-4 aspect-square'}`}
                >
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative overflow-hidden"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                    
                    {/* Overlay Info */}
                    <div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white">
                          {project.icon}
                        </div>
                        <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                          <ArrowUpRight size={20} />
                        </div>
                      </div>
                      
                      <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter uppercase">
                          {project.title}
                        </h3>
                        <p className="text-slate-300 font-medium leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#080808] pt-48 pb-12 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-48">
            <div>
              <h2 className="text-6xl md:text-8xl font-black text-white mb-12 tracking-tighter uppercase leading-none">
                VAMOS <br />
                <span className="text-blue-500">CONVERSAR?</span>
              </h2>
              <a 
                href="https://www.instagram.com/codeflow_2026_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-blue-600 text-white font-black text-xl md:text-2xl uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 group"
              >
                Instagram <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-8">Navegação</h4>
                <ul className="space-y-4 text-slate-500 font-bold text-sm">
                  <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
                  <li><a href="#projects" onClick={scrollToProjects} className="hover:text-white transition-colors">Projetos</a></li>
                  <li><a href="https://www.instagram.com/codeflow_2026_/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contato</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-8">Social</h4>
                <ul className="space-y-4 text-slate-500 font-bold text-sm">
                  <li><a href="https://www.instagram.com/codeflow_2026_/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <Code2 className="text-black w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white tracking-tighter uppercase">CodeFlow</span>
            </div>
            <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
              &copy; {new Date().getFullYear()} CodeFlow Studio. Made with passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
