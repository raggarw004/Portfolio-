// Shared by React and the standalone preview. No network dependencies.
export function mountImmersiveEffects(root = document) {
 const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
 const canvas = document.createElement('canvas');
 canvas.className = 'ambient-universe';canvas.setAttribute('aria-hidden','true');
 document.body.appendChild(canvas);
 const ctx = canvas.getContext('2d');
 if (!ctx) {canvas.remove();return ()=>{}}
 const hero = root.querySelector('.hero-scene');
 const orb = document.createElement('canvas');orb.className='neural-orbit-canvas';orb.setAttribute('aria-hidden','true');
 if(hero) hero.appendChild(orb);
 const oc=orb.getContext('2d');
 let width=0,height=0,ow=0,oh=0,px=0,py=0,frame=0,last=0,active=true;
 const stars=Array.from({length:75},(_,i)=>({x:((i*673+19)%997)/997,y:((i*317+73)%991)/991,z:.25+(i%7)/9}));
 const resize=()=>{const d=Math.min(devicePixelRatio||1,1.5);width=innerWidth;height=innerHeight;canvas.width=width*d;canvas.height=height*d;ctx.setTransform(d,0,0,d,0,0);if(hero&&oc){ow=hero.clientWidth;oh=hero.clientHeight;orb.width=ow*d;orb.height=oh*d;oc.setTransform(d,0,0,d,0,0)}};
 const onMove=e=>{px=(e.clientX/innerWidth-.5)*2;py=(e.clientY/innerHeight-.5)*2};
 const visibility=()=>{if(!document.hidden&&!reduced&&!frame)frame=requestAnimationFrame(draw)};
 const heroObserver=new IntersectionObserver(([entry])=>active=entry.isIntersecting);
 if(hero)heroObserver.observe(hero);
 const ro=new ResizeObserver(resize);ro.observe(document.documentElement);if(hero)ro.observe(hero);
 function draw(now){frame=0;if(document.hidden)return;if(now-last<32&&!reduced){frame=requestAnimationFrame(draw);return}last=now;const t=reduced?0:now*.00017;
 ctx.clearRect(0,0,width,height);
 for(let i=0;i<stars.length;i++){const s=stars[i],x=(s.x*width+Math.sin(t+s.y*8)*20+px*s.z*12+width)%width,y=(s.y*height-t*s.z*35+py*s.z*10+height*100)%height;const a=.25+.35*(.5+.5*Math.sin(t*3+i));ctx.fillStyle=`rgba(173,191,255,${a})`;ctx.beginPath();ctx.arc(x,y,s.z*1.5,0,Math.PI*2);ctx.fill();if(i%9===0){ctx.strokeStyle='rgba(133,158,255,.12)';ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+40*Math.sin(t+i),y+60);ctx.stroke()}}
 if(active&&oc&&ow&&oh){oc.clearRect(0,0,ow,oh);const cx=ow*.53,cy=oh*.5,size=Math.min(ow,oh)*.33;const glow=oc.createRadialGradient(cx,cy,0,cx,cy,size*1.6);glow.addColorStop(0,'rgba(131,102,255,.2)');glow.addColorStop(.55,'rgba(52,97,255,.1)');glow.addColorStop(1,'rgba(20,30,100,0)');oc.fillStyle=glow;oc.fillRect(0,0,ow,oh);
 const rotate=(x,y,z)=>{const a=t+px*.3,b=.6+py*.2;const xx=x*Math.cos(a)-z*Math.sin(a),zz=x*Math.sin(a)+z*Math.cos(a);const yy=y*Math.cos(b)-zz*Math.sin(b),zz2=y*Math.sin(b)+zz*Math.cos(b);const d=3.8/(3.8-zz2);return [cx+xx*size*d,cy+yy*size*d,zz2,d]};
 for(let ring=0;ring<3;ring++){oc.beginPath();for(let j=0;j<=160;j++){const a=j/160*Math.PI*2;let x=Math.cos(a)*1.22,y=Math.sin(a)*1.22,z=0;if(ring===1){z=y*.85;y*=.4}else if(ring===2){z=x*.9;x*=.35}const p=rotate(x,y,z);j?oc.lineTo(p[0],p[1]):oc.moveTo(p[0],p[1])}oc.strokeStyle=['rgba(149,173,255,.7)','rgba(189,137,255,.55)','rgba(201,219,255,.5)'][ring];oc.lineWidth=1.2;oc.shadowColor='#738bff';oc.shadowBlur=8;oc.stroke()}
 oc.shadowBlur=0;const points=[];for(let row=0;row<25;row++){const theta=row/25*Math.PI;for(let col=0;col<45;col++){const phi=col/45*Math.PI*2;const r=.82+.07*Math.sin(theta*5+phi*3+t*5);const p=rotate(r*Math.sin(theta)*Math.cos(phi),r*Math.cos(theta),r*Math.sin(theta)*Math.sin(phi));points.push(p)}}points.sort((a,b)=>a[2]-b[2]);for(const p of points){const a=.18+(p[2]+1)*.35;oc.fillStyle=`rgba(${170+Math.round(p[2]*30)},${185+Math.round(p[2]*20)},255,${a})`;oc.beginPath();oc.arc(p[0],p[1],Math.max(.7,p[3]*1.3),0,Math.PI*2);oc.fill()}
 for(let i=0;i<5;i++){const a=t*(1+i*.1)+i*1.3,p=rotate(Math.cos(a)*1.22,Math.sin(a)*1.22,0);oc.fillStyle='#e8efff';oc.shadowColor='#8f8bff';oc.shadowBlur=20;oc.beginPath();oc.arc(p[0],p[1],3,0,Math.PI*2);oc.fill()}oc.shadowBlur=0;
 }
 if(!reduced)frame=requestAnimationFrame(draw);
 }
 resize();frame=requestAnimationFrame(draw);document.addEventListener('pointermove',onMove,{passive:true});document.addEventListener('visibilitychange',visibility);
 return ()=>{cancelAnimationFrame(frame);ro.disconnect();heroObserver.disconnect();document.removeEventListener('pointermove',onMove);document.removeEventListener('visibilitychange',visibility);canvas.remove();orb.remove()};
}
