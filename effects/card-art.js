// Decorative artwork only: no personal claims or extra visible copy.
export function mountCardArtwork(root = document) {
 const drawings={
 skyline:'<path d="M15 130H205M30 130V70H60V130M70 130V40H100V130M80 40V20M115 130V65H145V130M160 130V85H190V130"/><path class="art-signal" d="M37 85H52M37 100H52M78 60H92M78 80H92M78 100H92M123 80H137M123 100H137M168 100H182"/>',
 book:'<g class="art-float"><path d="M110 130Q65 105 25 120V35Q65 20 110 45Q155 20 195 35V120Q155 105 110 130Z"/><path d="M110 45V130M40 50Q70 42 95 57M40 68Q70 60 95 75M40 86Q70 78 95 93M125 57Q155 42 180 50M125 75Q155 60 180 68M125 93Q155 78 180 86"/></g>',
 matcha:'<path d="M57 67H157L146 125Q108 146 69 125Z"/><path d="M157 78H174Q197 102 152 112M45 145H171"/><path class="art-steam" d="M80 54Q65 40 80 25T80 5M108 52Q93 38 108 23T108 3M136 54Q121 40 136 25T136 5"/><ellipse cx="107" cy="67" rx="50" ry="10"/>',
 swim:'<circle cx="133" cy="54" r="12"/><path class="art-swimmer" d="M52 85L94 61L119 83L155 99M75 77L54 40L20 30"/><g class="art-water"><path d="M0 112Q18 96 36 112T72 112T108 112T144 112T180 112T216 112M0 137Q18 121 36 137T72 137T108 137T144 137T180 137T216 137"/></g>',
 shuttle:'<g class="art-shuttle"><path d="M87 105L45 27L74 18L103 12L133 18L162 27L120 105ZM87 105L74 18M103 105V12M120 105L133 18M62 55Q103 35 145 55M76 80Q103 65 131 80"/><path d="M87 105Q79 134 102 140Q129 133 120 105Z"/></g>',
 community:'<g class="art-community"><circle cx="110" cy="42" r="16"/><circle cx="48" cy="68" r="12"/><circle cx="172" cy="68" r="12"/><path d="M77 122V95Q110 63 143 95V122M25 134V108Q48 83 70 108V134M150 134V108Q172 83 195 108V134"/><circle class="art-orbit-ring" cx="110" cy="84" r="70"/></g>',
 heart:'<g class="art-heart"><path d="M110 140L36 71C1 22 76 4 110 49C144 4 219 22 184 71Z"/></g><path class="art-pulse-line" d="M18 87H70L85 61L102 113L122 77L135 87H202"/>',
 network:'<path class="art-network-lines" d="M32 45L110 25L188 45L110 80L32 45L32 125L110 80L110 155L188 125L188 45M32 125L110 155M110 25V80L188 125"/><g class="art-nodes"><circle cx="32" cy="45" r="7"/><circle cx="110" cy="25" r="7"/><circle cx="188" cy="45" r="7"/><circle cx="110" cy="80" r="12"/><circle cx="32" cy="125" r="7"/><circle cx="110" cy="155" r="7"/><circle cx="188" cy="125" r="7"/></g>',
 servers:'<g class="art-server-stack"><path d="M35 34L110 10L185 34L110 60ZM35 34V60L110 86L185 60V34M35 83L110 109L185 83M35 83V109L110 135L185 109V83M35 132L110 158L185 132"/><path class="art-server-lights" d="M52 52L73 59M52 101L73 108M146 60L162 54M146 109L162 103"/></g>',
 code:'<g class="art-code-orbit"><ellipse cx="110" cy="86" rx="95" ry="50"/><ellipse cx="110" cy="86" rx="50" ry="75" transform="rotate(35 110 86)"/></g><path class="art-code" d="M78 62L52 85L78 108M142 62L168 85L142 108M123 52L97 118"/>'
 };
 const groups=[['.detail-panel',['skyline','book','matcha','swim','shuttle']],['.campus-card',['community','heart','matcha','book']],['.toolbox-card',['network','network','code']]];
 const created=[];
 for(const [selector,kinds] of groups){root.querySelectorAll(selector).forEach((card,i)=>{if(card.querySelector('.feature-art'))return;const art=document.createElement('div');art.className='feature-art feature-'+kinds[i%kinds.length];art.setAttribute('aria-hidden','true');art.innerHTML='<div class="feature-halo"></div><div class="feature-floor"></div><svg viewBox="0 0 220 175">'+drawings[kinds[i%kinds.length]]+'</svg><i class="feature-spark spark-a"></i><i class="feature-spark spark-b"></i>';card.prepend(art);created.push(art)})}
 const move=e=>{const card=e.target.closest('.detail-panel,.campus-card,.toolbox-card');if(!card)return;const r=card.getBoundingClientRect();card.style.setProperty('--card-x',((e.clientX-r.left)/r.width*100)+'%');card.style.setProperty('--card-y',((e.clientY-r.top)/r.height*100)+'%')};
 root.addEventListener('pointermove',move,{passive:true});
 return ()=>{created.forEach(el=>el.remove());root.removeEventListener('pointermove',move)};
}
