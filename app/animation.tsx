'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useTransform, useReducedMotion, useSpring, MotionValue } from 'motion/react';

function Letter({letter,index,progress}:{letter:string;index:number;progress:MotionValue<number>}){
 const y=useTransform(progress,[0,1],[0,index%2?-90:-150]);
 const rotate=useTransform(progress,[0,1],[0,index%2?7:-7]);
 const reduce=useReducedMotion();
 return <motion.span className="name-letter" style={reduce?{}:{y,rotate}}><motion.span initial={reduce?false:{y:'110%',rotate:5}} animate={{y:0,rotate:0}} transition={{duration:1,delay:index*.045,ease:[.16,1,.3,1]}}>{letter}</motion.span></motion.span>;
}
export function HeroName(){
 const reduce=useReducedMotion();
 const ref=useRef<HTMLDivElement>(null);
 const {scrollYProgress}=useScroll({target:ref,offset:['start start','end start']});
 const progress=useSpring(scrollYProgress,{stiffness:90,damping:25});
 return <div className="kinetic-name" ref={ref}><h1 className="hero-name" id="hero-name" aria-label="Likhith Ramesha"><span aria-hidden="true" className="name-letter-row">{'LIKHITH'.split('').map((letter,index)=><Letter key={index} letter={letter} index={index} progress={progress}/>)}<motion.span className="name-period" initial={reduce?false:{scale:0}} animate={{scale:1}} transition={reduce?{duration:0}:{delay:.6,type:'spring',stiffness:220,damping:12}}>.</motion.span></span></h1></div>;
}
export function SceneMotion(){
 useEffect(()=>{
  const mq=matchMedia('(prefers-reduced-motion: reduce)');if(mq.matches)return;
  const hero=document.querySelector<HTMLElement>('.hero');const portrait=document.querySelector<HTMLElement>('.portrait-area');const about=document.querySelector<HTMLElement>('.about-main h2');const recall=document.querySelector<HTMLElement>('.memory-demo');const proof=document.querySelector<HTMLElement>('.proof-section');let raf=0;
  const update=()=>{raf=0;const vh=innerHeight;const hr=hero?.getBoundingClientRect();const ar=about?.getBoundingClientRect();const rr=recall?.getBoundingClientRect();const pr=proof?.getBoundingClientRect();if(portrait&&hr){const p=Math.max(0,Math.min(1,-hr.top/hr.height));portrait.style.setProperty('--portrait-scroll',`${p*-65}px`);portrait.style.setProperty('--portrait-turn',`${p*9}deg`);}if(about&&ar){const p=Math.max(-1,Math.min(1,(ar.top-vh*.35)/vh));about.style.setProperty('--about-drift',`${p*28}px`);about.closest<HTMLElement>('.about-section')?.style.setProperty('--about-turn',`${p*18}deg`);}if(recall&&rr){const p=Math.max(0,Math.min(1,(vh-rr.top)/(vh*.75)));recall.style.setProperty('--stage-turn',`${(1-p)*7}deg`);recall.style.setProperty('--stage-scale',`${.96+p*.04}`);}if(proof&&pr){const p=Math.max(-1,Math.min(1,(pr.top-vh*.5)/vh));proof.style.setProperty('--field-shift',`${p*110}px`);}};
  const onScroll=()=>{if(!raf)raf=requestAnimationFrame(update);};window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll);update();return()=>{window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);cancelAnimationFrame(raf);};
 },[]);return null;
}

const initialChapter=['00','HELLO'];
export function InteractionLayer(){
 const {scrollYProgress}=useScroll();
 const progress=useSpring(scrollYProgress,{stiffness:110,damping:28,mass:.35});
 const pointerX=useMotionValue(-400),pointerY=useMotionValue(-400);
 const auraX=useSpring(pointerX,{stiffness:75,damping:22,mass:.45}),auraY=useSpring(pointerY,{stiffness:75,damping:22,mass:.45});
 const [chapter,setChapter]=useState(initialChapter);
 useEffect(()=>{
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse=matchMedia('(pointer: coarse)').matches;
  const sections=Array.from(document.querySelectorAll<HTMLElement>('[data-chapter]'));
  const surfaces=Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'));
  let frame=0;
  const move=(e:PointerEvent)=>{if(!coarse&&!reduce){pointerX.set(e.clientX-130);pointerY.set(e.clientY-130);}};
  const read=()=>{frame=0;let active=sections[0];for(const section of sections){if(section.getBoundingClientRect().top<=innerHeight*.42)active=section;}if(active){const bits=(active.dataset.chapter||'00|HELLO').split('|');setChapter(previous=>previous[0]===bits[0]&&previous[1]===bits[1]?previous:[bits[0],bits[1]]);}};
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(read);};
  const listeners=surfaces.map(surface=>{const onMove=(e:PointerEvent)=>{if(reduce||e.pointerType==='touch')return;const r=surface.getBoundingClientRect();const x=(e.clientX-r.left)/r.width;const y=(e.clientY-r.top)/r.height;surface.style.setProperty('--spot-x',`${x*100}%`);surface.style.setProperty('--spot-y',`${y*100}%`);surface.style.setProperty('--tilt-x',`${(0.5-y)*4}deg`);surface.style.setProperty('--tilt-y',`${(x-0.5)*5}deg`);};const leave=()=>{surface.style.setProperty('--tilt-x','0deg');surface.style.setProperty('--tilt-y','0deg');};surface.addEventListener('pointermove',onMove);surface.addEventListener('pointerleave',leave);return()=>{surface.removeEventListener('pointermove',onMove);surface.removeEventListener('pointerleave',leave);};});
  window.addEventListener('pointermove',move,{passive:true});window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);read();
  return()=>{window.removeEventListener('pointermove',move);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);cancelAnimationFrame(frame);listeners.forEach(clean=>clean());};
 },[pointerX,pointerY]);
 return <><div className="pointer-aura-window" aria-hidden="true"><motion.div className="pointer-aura" style={{x:auraX,y:auraY}}/></div><div className="scroll-hud" aria-hidden="true"><span>{chapter[0]}</span><div className="scroll-track"><motion.i style={{scaleY:progress}}/></div><b>{chapter[1]}</b></div></>;
}
export function MotionPreference(){
 useEffect(()=>{const mq=matchMedia('(prefers-reduced-motion: reduce)');const set=()=>document.documentElement.classList.toggle('reduce-motion',mq.matches);set();mq.addEventListener('change',set);return()=>mq.removeEventListener('change',set);},[]);return null;
}
