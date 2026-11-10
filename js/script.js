(function(){
var L='pt',roles={pt:['Desenvolvedor Full Stack','Designer UI / UX','Marketing Visual'],en:['Full Stack Developer','UI / UX Designer','Visual Marketing']},i=0,els=[].slice.call(document.querySelectorAll('[data-en]'));
els.forEach(function(e){e.setAttribute('data-pt',e.innerHTML)});
function role(){document.getElementById('role').textContent='> '+roles[L][i%3]}
function set(l){L=l;els.forEach(function(e){e.innerHTML=e.getAttribute('data-'+l)});document.documentElement.lang=l==='pt'?'pt-BR':'en';document.getElementById('lang').textContent=l==='pt'?'EN':'PT';role();try{localStorage.setItem('lang',l)}catch(x){}}
document.getElementById('lang').onclick=function(){set(L==='pt'?'en':'pt')};
setInterval(function(){i++;role()},2400);
var s=null;try{s=localStorage.getItem('lang')}catch(x){}
set(s||((navigator.language||'').toLowerCase().indexOf('pt')===0?'pt':'en'));
[].forEach.call(document.querySelectorAll('.tab'),function(b){b.onclick=function(){[].forEach.call(document.querySelectorAll('.tab'),function(x){x.classList.toggle('on',x===b)});[].forEach.call(document.querySelectorAll('.panel'),function(p){p.classList.toggle('on',p.id===b.dataset.p)})}});
})();

(function(){
var links=[].slice.call(document.querySelectorAll('nav a[data-spy]')),ids=['home','servicos','contato'];
var nav=document.getElementById('menu'),burger=document.getElementById('burger');
var overlay=document.getElementById('overlay');
function closeMenu(){nav.classList.remove('open');burger.classList.remove('open');overlay.classList.remove('open');burger.setAttribute('aria-expanded','false')}
burger.onclick=function(){var o=nav.classList.toggle('open');burger.classList.toggle('open',o);overlay.classList.toggle('open',o);burger.setAttribute('aria-expanded',o?'true':'false')};
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu()});
[].forEach.call(nav.querySelectorAll('a'),function(a){a.addEventListener('click',closeMenu)});
document.addEventListener('click',function(e){if(!nav.contains(e.target)&&!burger.contains(e.target))closeMenu()});
window.addEventListener('resize',function(){if(window.innerWidth>820)closeMenu()});
function spy(){
var y=window.innerHeight*0.4,cur='home';
ids.forEach(function(id){var e=document.getElementById(id);if(e&&e.getBoundingClientRect().top<=y)cur=id});
if(window.scrollY<20)cur='home';else if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4)cur='contato';
links.forEach(function(a){a.classList.toggle('on',a.getAttribute('data-spy')===cur)});
}
window.addEventListener('scroll',spy,{passive:true});spy();
})();
