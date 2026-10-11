const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>60),{passive:true});
const ham=document.getElementById('ham'),mob=document.getElementById('mobMenu');
function closeMenu(){ham.classList.remove('open');mob.classList.remove('open');ham.setAttribute('aria-expanded','false');document.body.style.overflow='';}
ham.addEventListener('click',()=>{const o=!mob.classList.contains('open');ham.classList.toggle('open',o);mob.classList.toggle('open',o);ham.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':'';});
let cur=0,total=4,timer;
const slides=document.querySelectorAll('.hero-slide'),dots=document.querySelectorAll('.hdot');
function heroGo(n){slides[cur].classList.remove('active');dots[cur].classList.remove('active');cur=(n+total)%total;slides[cur].classList.add('active');dots[cur].classList.add('active');clearInterval(timer);timer=setInterval(()=>heroNav(1),5500);}
function heroNav(d){heroGo(cur+d);}
timer=setInterval(()=>heroNav(1),5500);
let hTx=0;
document.getElementById('hero').addEventListener('touchstart',e=>hTx=e.touches[0].clientX,{passive:true});
document.getElementById('hero').addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-hTx;if(Math.abs(dx)>40)heroNav(dx>0?-1:1);});
const amenSrcs=["assets/image-16.jpg","assets/image-17.jpg","assets/image-18.jpg","assets/image-19.jpg","assets/image-12.jpg","assets/image-13.jpg","assets/image-14.jpg","assets/image-15.jpg"];
let aIdx=0;
function openLb(i){aIdx=i;document.getElementById('lbImg').src=amenSrcs[i];document.getElementById('lb').classList.add('on');document.body.style.overflow='hidden';}
function lbClose(){document.getElementById('lb').classList.remove('on');document.body.style.overflow='';}
function lbNav(d){aIdx=(aIdx+d+amenSrcs.length)%amenSrcs.length;document.getElementById('lbImg').src=amenSrcs[aIdx];}
document.getElementById('lb').addEventListener('click',e=>{if(e.target===document.getElementById('lb'))lbClose();});
document.addEventListener('keydown',e=>{if(!document.getElementById('lb').classList.contains('on'))return;if(e.key==='Escape')lbClose();if(e.key==='ArrowLeft')lbNav(-1);if(e.key==='ArrowRight')lbNav(1);});
let lbTx=0;
document.getElementById('lb').addEventListener('touchstart',e=>lbTx=e.touches[0].clientX,{passive:true});
document.getElementById('lb').addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-lbTx;if(Math.abs(dx)>40)lbNav(dx>0?-1:1);});
const gate=document.getElementById('brochureGate');
function openGate(){gate.classList.add('on');document.body.style.overflow='hidden';}
function closeGate(){gate.classList.remove('on');document.body.style.overflow='';}
document.getElementById('btnBrochure').addEventListener('click',openGate);
document.getElementById('btnBrochure2').addEventListener('click',openGate);
document.getElementById('gateX').addEventListener('click',closeGate);
gate.addEventListener('click',e=>{if(e.target===gate)closeGate();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&gate.classList.contains('on'))closeGate();});
function validateForm(f){let ok=true;f.querySelectorAll('[required]').forEach(el=>{const inv=el.type==='checkbox'?!el.checked:!el.value.trim();if(el.type!=='checkbox')el.style.borderBottomColor=inv?'#b63528':'';if(inv)ok=false;});return ok;}
document.getElementById('enquiryForm').addEventListener('submit',e=>{e.preventDefault();if(!validateForm(e.target))return;document.getElementById('enqOk').style.display='block';e.target.reset();});
document.getElementById('brochureForm').addEventListener('submit',e=>{e.preventDefault();if(!validateForm(e.target))return;document.getElementById('broOk').style.display='block';setTimeout(()=>{closeGate();document.getElementById('broOk').style.display='none';e.target.reset();},3000);});
new Swiper('.amenitySwiper',{grabCursor:true,centeredSlides:true,slidesPerView:'auto',loop:true,effect:'coverflow',coverflowEffect:{rotate:0,stretch:0,depth:120,modifier:1,slideShadows:false},pagination:{el:'.swiper-pagination',clickable:true},autoplay:{delay:3200,disableOnInteraction:false,pauseOnMouseEnter:true},breakpoints:{320:{slidesPerView:1},600:{slidesPerView:2},1024:{slidesPerView:3}}});
if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}},{threshold:.1,rootMargin:'0px 0px -40px 0px'}));document.querySelectorAll('.reveal').forEach(el=>io.observe(el));}
