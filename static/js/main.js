
// ============================================================
// CINETPAY CONFIG
// ============================================================
const CP={
  apikey:'143459870067b2ecff946dd7.59047762',
  site_id:'105888043',
  secret_key:'112414020867b2ef474bb320.19729040',
  notify_url:'https://luxoracars.com/api/cinetpay/notify',
  return_url:window.location.href,
  mode:'PRODUCTION'
};

// ============================================================
// IMAGES RÉELLES PAR MARQUE (Unsplash)
// ============================================================
const IMGS={
  ferrari:['https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80','https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80','https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80','https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80','https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80'],
  lamborghini:['https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&q=80','https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80','https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=800&q=80','https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=800&q=80','https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=800&q=80'],
  porsche:['https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80','https://images.unsplash.com/photo-1547744152-14d985cb937f?w=800&q=80','https://images.unsplash.com/photo-1599912027611-484b9fc447af?w=800&q=80','https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=800&q=80','https://images.unsplash.com/photo-1554744512-d6c603f27c54?w=800&q=80'],
  mercedes:['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80','https://images.unsplash.com/photo-1561632702-b87e24a54d3c?w=800&q=80','https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80','https://images.unsplash.com/photo-1622200733903-63ffd98ee0d3?w=800&q=80','https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80'],
  bmw:['https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80','https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=800&q=80','https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?w=800&q=80','https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80','https://images.unsplash.com/photo-1535732820275-9ffd998cac22?w=800&q=80'],
  bentley:['https://images.unsplash.com/photo-1575090587263-6ab9a23a8bac?w=800&q=80','https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80','https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80','https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80','https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80'],
  rollsroyce:['https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=80','https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80','https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80','https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80','https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80'],
  astonmartin:['https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80','https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80','https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&q=80','https://images.unsplash.com/photo-1570733577524-3a047079e80d?w=800&q=80','https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80'],
  mclaren:['https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80','https://images.unsplash.com/photo-1602777924006-34bc0a1b55a2?w=800&q=80','https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80','https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80','https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'],
  bugatti:['https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80','https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80','https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80','https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80','https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80'],
  maserati:['https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80','https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80','https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80','https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&q=80','https://images.unsplash.com/photo-1570733577524-3a047079e80d?w=800&q=80'],
  lexus:['https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80','https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80','https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80','https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80','https://images.unsplash.com/photo-1535732820275-9ffd998cac22?w=800&q=80']
};

const BRD_LOGOS={
  ferrari:'https://logo.clearbit.com/ferrari.com',
  lamborghini:'https://logo.clearbit.com/lamborghini.com',
  porsche:'https://logo.clearbit.com/porsche.com',
  mercedes:'https://logo.clearbit.com/mercedes-benz.com',
  bmw:'https://logo.clearbit.com/bmw.com',
  bentley:'https://logo.clearbit.com/bentley.com',
  rollsroyce:'https://logo.clearbit.com/rolls-roycemotorcars.com',
  astonmartin:'https://logo.clearbit.com/astonmartin.com',
  mclaren:'https://logo.clearbit.com/mclaren.com',
  bugatti:'https://logo.clearbit.com/bugatti.com',
  maserati:'https://logo.clearbit.com/maserati.com',
  audi:'https://logo.clearbit.com/audi.com',
  lexus:'https://logo.clearbit.com/lexus.com'
};

const BRANDS=[
  {id:'ferrari',name:'Ferrari'},{id:'lamborghini',name:'Lamborghini'},{id:'porsche',name:'Porsche'},
  {id:'mercedes',name:'Mercedes'},{id:'bmw',name:'BMW'},{id:'bentley',name:'Bentley'},
  {id:'rollsroyce',name:'Rolls-Royce'},{id:'astonmartin',name:'Aston Martin'},{id:'mclaren',name:'McLaren'},
  {id:'bugatti',name:'Bugatti'},{id:'maserati',name:'Maserati'},{id:'lexus',name:'Lexus'}
];

let VEH=[
  {id:1,br:'ferrari',brn:'Ferrari',mo:'488 Spider',yr:2022,pr:245000000,km:12400,fu:'Essence',tr:'Automatique',bo:'Cabriolet',hp:660,ac:'3.0s',cl:'Rouge Rosso Corsa',co:'Certifié',st:'available',ft:true,nw:true,ds:'Exceptionnel cabriolet Ferrari V8 biturbo. Historique complet, révision effectuée.',vw:342},
  {id:2,br:'lamborghini',brn:'Lamborghini',mo:'Huracán EVO',yr:2023,pr:320000000,km:4800,fu:'Essence',tr:'Automatique',bo:'Coupé',hp:640,ac:'2.9s',cl:'Giallo Belenus',co:'Neuf',st:'available',ft:true,nw:true,ds:'Lamborghini Huracán EVO en livrée exclusive Giallo Belenus. Premier propriétaire.',vw:528},
  {id:3,br:'porsche',brn:'Porsche',mo:'911 Turbo S',yr:2023,pr:180000000,km:8200,fu:'Essence',tr:'Automatique',bo:'Coupé',hp:650,ac:'2.7s',cl:'Gris Chalk',co:'Certifié',st:'available',ft:true,nw:false,ds:'Porsche 911 Turbo S dernière génération. Sport Chrono, Burmester, sièges adaptatifs.',vw:421},
  {id:4,br:'mercedes',brn:'Mercedes',mo:'AMG GT 63 S',yr:2022,pr:145000000,km:18500,fu:'Essence',tr:'Automatique',bo:'Berline',hp:630,ac:'3.2s',cl:'Noir Obsidienne',co:'Certifié',st:'reserved',ft:false,nw:false,ds:'Mercedes AMG GT 63 S 4 portes. Pack Night, toit panoramique, Burmester.',vw:287},
  {id:5,br:'bmw',brn:'BMW',mo:'M8 Competition',yr:2023,pr:120000000,km:5600,fu:'Essence',tr:'Automatique',bo:'Coupé',hp:625,ac:'3.2s',cl:'Bleu San Marino',co:'Neuf',st:'available',ft:false,nw:true,ds:'BMW M8 Competition Coupé 4.4L V8 625ch. Peinture individuelle, sièges M carbone.',vw:198},
  {id:6,br:'bentley',brn:'Bentley',mo:'Continental GT',yr:2022,pr:280000000,km:9800,fu:'Essence',tr:'Automatique',bo:'Coupé',hp:659,ac:'3.6s',cl:'Anthracite Satin',co:'Certifié',st:'available',ft:true,nw:false,ds:'Bentley Continental GT W12. Boiseries Koa, sièges ventilés massants, toit panoramique.',vw:376},
  {id:7,br:'rollsroyce',brn:'Rolls-Royce',mo:'Ghost',yr:2021,pr:520000000,km:15200,fu:'Essence',tr:'Automatique',bo:'Berline',hp:563,ac:'4.8s',cl:'Arctic White',co:'Certifié',st:'available',ft:false,nw:false,ds:'Rolls-Royce Ghost 6.75L V12. Commission spéciale Arctic White. Starlight Headliner.',vw:612},
  {id:8,br:'astonmartin',brn:'Aston Martin',mo:'DB11 V12',yr:2022,pr:195000000,km:11400,fu:'Essence',tr:'Automatique',bo:'Coupé',hp:630,ac:'3.7s',cl:'Zaffre Blue',co:'Certifié',st:'available',ft:false,nw:false,ds:'Aston Martin DB11 V12 AMR. Peinture Zaffre Blue spéciale commande.',vw:243},
  {id:9,br:'porsche',brn:'Porsche',mo:'Cayenne Turbo GT',yr:2023,pr:165000000,km:3200,fu:'Essence',tr:'Automatique',bo:'SUV',hp:640,ac:'3.3s',cl:'Crayon',co:'Neuf',st:'available',ft:false,nw:true,ds:'Porsche Cayenne Turbo GT. Version la plus performante du Cayenne.',vw:189},
  {id:10,br:'mclaren',brn:'McLaren',mo:'720S Spider',yr:2022,pr:295000000,km:7600,fu:'Essence',tr:'Automatique',bo:'Cabriolet',hp:720,ac:'2.9s',cl:'Papaya Spark',co:'Certifié',st:'available',ft:true,nw:false,ds:'McLaren 720S Spider en Papaya. Toit rétractable en 11s. Pack Track.',vw:445},
  {id:11,br:'ferrari',brn:'Ferrari',mo:'Roma',yr:2023,pr:210000000,km:2100,fu:'Essence',tr:'Automatique',bo:'Berline',hp:620,ac:'3.4s',cl:'Bianco Cervino',co:'Neuf',st:'available',ft:false,nw:true,ds:'Ferrari Roma — élégance absolue. Bianco Cervino, intérieur Blu Tour.',vw:334},
  {id:12,br:'mercedes',brn:'Mercedes',mo:'G63 AMG',yr:2023,pr:175000000,km:6800,fu:'Essence',tr:'Automatique',bo:'SUV',hp:577,ac:'4.5s',cl:'Noir Magno',co:'Neuf',st:'available',ft:false,nw:true,ds:'Mercedes-AMG G63 Night Package. Finition Noir Magno mat, roues AMG 22".',vw:521},
  {id:13,br:'bugatti',brn:'Bugatti',mo:'Chiron Sport',yr:2022,pr:1200000000,km:800,fu:'Essence',tr:'Automatique',bo:'Supercar',hp:1500,ac:'2.4s',cl:'Bleu Royal',co:'Neuf',st:'available',ft:false,nw:true,ds:'Bugatti Chiron Sport 8.0L W16 1500ch. La quintessence de l\'hypercar.',vw:1240},
  {id:14,br:'maserati',brn:'Maserati',mo:'MC20',yr:2022,pr:215000000,km:6200,fu:'Essence',tr:'Automatique',bo:'Supercar',hp:630,ac:'2.9s',cl:'Bianco Audace',co:'Certifié',st:'available',ft:false,nw:false,ds:'Maserati MC20 V6 Nettuno 630ch. Renaissance du bolide transalpin.',vw:387},
  {id:15,br:'lexus',brn:'Lexus',mo:'LC 500',yr:2023,pr:95000000,km:4500,fu:'Essence',tr:'Automatique',bo:'Coupé',hp:470,ac:'4.7s',cl:'Structural Blue',co:'Neuf',st:'available',ft:false,nw:true,ds:'Lexus LC 500 V8 édition spéciale Structural Blue. Intérieur semi-aniline.',vw:156},
  {id:16,br:'lamborghini',brn:'Lamborghini',mo:'Urus Performante',yr:2023,pr:285000000,km:2800,fu:'Essence',tr:'Automatique',bo:'SUV',hp:666,ac:'3.3s',cl:'Verde Gea',co:'Neuf',st:'available',ft:false,nw:true,ds:'Lamborghini Urus Performante 666ch. Verde Gea exclusif.',vw:602}
];

// STATE
let A={
  pg:'home',prev:null,
  favs:JSON.parse(localStorage.getItem('lx_favs')||'[]'),
  orders:JSON.parse(localStorage.getItem('lx_orders')||'[]'),
  listings:JSON.parse(localStorage.getItem('lx_listings')||'[]'),
  user:JSON.parse(localStorage.getItem('lx_user')||'null'),
  theme:localStorage.getItem('lx_theme')||'dark',
  lang:localStorage.getItem('lx_lang')||'fr',
  F:{br:'',pm:1200000000,fu:'',bo:'',yr:'',so:'featured'},
  SD:{step:1,photos:[],lt:'std'},
  curV:null,ci:0
};

const LANG={
  fr:{
    accueil:'Accueil',catalogue:'Catalogue',vendre:'Vendre',contact:'Contact',
    explorer:'Explorer la Collection',vendre_ma_voiture:'Vendre ma voiture',
    conduisez:'Conduisez',extraordinaire:"l'Extraordinaire",
    marketplace:'★ La Marketplace Automobile de Luxe',
    nos_marques:'Nos Marques',selection:'Sélection du moment',
    pourquoi:'Pourquoi choisir Luxora Cars',temoignages:'Ce que disent nos clients',
    disponibles:'Véhicules disponibles',grandes_marques:'Grandes marques',
    note_clients:'Note clients',clients_satisfaits:'Clients satisfaits',
    maisons:'Les plus grandes maisons automobiles'
  },
  en:{
    accueil:'Home',catalogue:'Catalog',vendre:'Sell',contact:'Contact',
    explorer:'Explore Collection',vendre_ma_voiture:'Sell My Car',
    conduisez:'Drive',extraordinaire:'the Extraordinary',
    marketplace:'★ The Luxury Automotive Marketplace',
    nos_marques:'Our Brands',selection:'Current Selection',
    pourquoi:'Why choose Luxora Cars',temoignages:'What our clients say',
    disponibles:'Available vehicles',grandes_marques:'Prestige brands',
    note_clients:'Customer rating',clients_satisfaits:'Happy clients',
    maisons:'The world’s most prestigious brands'
  },
  es:{
    accueil:'Inicio',catalogue:'Catálogo',vendre:'Vender',contact:'Contacto',
    explorer:'Explorar Colección',vendre_ma_voiture:'Vender mi coche',
    conduisez:'Conduce',extraordinaire:'lo Extraordinario',
    marketplace:'★ El Marketplace de Autos de Lujo',
    nos_marques:'Nuestras Marcas',selection:'Selección Actual',
    pourquoi:'Por qué elegir Luxora Cars',temoignages:'Lo que dicen nuestros clientes',
    disponibles:'Vehículos disponibles',grandes_marques:'Marcas de prestigio',
    note_clients:'Calificación',clients_satisfaits:'Clientes felices',
    maisons:'Las marcas más prestigiosas'
  },
  de:{
    accueil:'Startseite',catalogue:'Katalog',vendre:'Verkaufen',contact:'Kontakt',
    explorer:'Kollektion erkunden',vendre_ma_voiture:'Mein Auto verkaufen',
    conduisez:'Fahren Sie',extraordinaire:'das Außergewöhnliche',
    marketplace:'★ Der Luxus-Automarktplatz',
    nos_marques:'Unsere Marken',selection:'Aktuelle Auswahl',
    pourquoi:'Warum Luxora Cars wählen',temoignages:'Was unsere Kunden sagen',
    disponibles:'Verfügbare Fahrzeuge',grandes_marques:'Prestige-Marken',
    note_clients:'Kundenbewertung',clients_satisfaits:'Zufriedene Kunden',
    maisons:'Die prestigeträchtigsten Marken'
  },
  zh:{
    accueil:'首页',catalogue:'目录',vendre:'出售',contact:'联系我们',
    explorer:'探索收藏',vendre_ma_voiture:'出售我的车',
    conduisez:'驾驶',extraordinaire:'非凡动力',
    marketplace:'★ 豪华汽车市场',
    nos_marques:'我们的品牌',selection:'当前选择',
    pourquoi:'为什么选择 Luxora Cars',temoignages:'客户评价',
    disponibles:'现有车辆',grandes_marques:'名车品牌',
    note_clients:'客户评分',clients_satisfaits:'满意客户',
    maisons:'全球最负盛名的品牌'
  },
  ar:{
    accueil:'الرئيسية',catalogue:'الكتالوج',vendre:'بيع',contact:'اتصل بنا',
    explorer:'استكشف المجموعة',vendre_ma_voiture:'بع سيارتي',
    conduisez:'قد',extraordinaire:'التميز',
    marketplace:'★ سوق السيارات الفاخرة',
    nos_marques:'ماركاتنا',selection:'المجموعة الحالية',
    pourquoi:'لماذا تختار لوكسورا؟',temoignages:'ماذا يقول عملاؤنا',
    disponibles:'السيارات المتاحة',grandes_marques:'علامات تجارية مرموقة',
    note_clients:'تقييم العملاء',clients_satisfaits:'عملاء راضون',
    maisons:'أكثر العلامات التجارية المرموقة في العالم'
  }
};

const CHAT_R=['Bonjour ! Quel véhicule vous intéresse ?','Ce modèle est disponible pour un essai ce week-end.','Nous pouvons organiser une livraison dans votre ville.','Notre équipe peut vous accompagner pour le financement.','Je vous envoie les photos supplémentaires par email.','Excellent choix ! C\'est l\'un de nos best-sellers.','L\'historique complet est disponible sur demande.'];

// INIT
document.addEventListener('DOMContentLoaded',()=>{
  popSels();rBrands();rFeat();rCat();rBF();uFC();restSes();
  window.addEventListener('scroll',()=>{document.getElementById('bt').classList.toggle('show',scrollY>400);});
  uAdmStats();rAdmData();
  uTheme(A.theme);uLang(A.lang);
});

function restSes(){if(A.user)uUI();}

// HELPERS
function img(br,i=0){const a=IMGS[br];return a?a[i%a.length]:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80';}
function fP(n){return new Intl.NumberFormat('fr-FR').format(n)+' XOF';}
function fN(n){return new Intl.NumberFormat('fr-FR').format(n);}
function fK(n){return n>=1000000?(n/1000000).toFixed(1)+'M XOF':fN(n)+' XOF';}
function T(m,t=''){const e=document.getElementById('toast');e.textContent=m;e.className='show'+(t?' '+t:'');setTimeout(()=>{e.className='';},3200);}
function oM(id){document.getElementById(id).classList.add('open');}
function cM(id){document.getElementById(id).classList.remove('open');}
function tMob(){document.getElementById('mm').classList.toggle('open');}
function goB(){P(A.prev||'catalogue');}
function fltBody(b){A.F.bo=b;}
function gAdm(){if(!A.user)oM('ml');else P('admin');}

function tTheme(){
  A.theme=A.theme==='dark'?'light':'dark';
  localStorage.setItem('lx_theme',A.theme);
  uTheme(A.theme);
}
function uTheme(t){
  document.body.classList.toggle('light-mode',t==='light');
  document.querySelectorAll('.th-tgl').forEach(btn=>{
    btn.textContent=t==='light'?'🌙':'☀️';
  });
}
function tLang(l){
  A.lang=l;
  localStorage.setItem('lx_lang',l);
  uLang(l);
  document.querySelectorAll('.lang-sel').forEach(s=>{if(s.value!==l)s.value=l;});
}
function uLang(l){
  const d=LANG[l];if(!d)return;
  document.querySelectorAll('[data-l]').forEach(el=>{
    const k=el.getAttribute('data-l');if(d[k])el.textContent=d[k];
  });
}

// NAV
function P(pg){
  document.querySelectorAll('.pg').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.nl').forEach(l=>l.classList.remove('on'));
  A.prev=A.pg;A.pg=pg;
  document.getElementById(pg+'-pg')?.classList.add('on');
  document.getElementById('nl-'+pg)?.classList.add('on');
  window.scrollTo({top:0,behavior:'smooth'});
  document.getElementById('mm').classList.remove('open');
  if(pg==='catalogue')rCat();
  if(pg==='account'){if(!A.user){oM('ml');return;}rAccTabs();}
  if(pg==='sell')initSell();
  if(pg==='admin'){if(!A.user||A.user.role!=='admin'){T('Accès admin requis','er');return;}uAdmStats();rAdmData();}
}

// BRANDS
function popSels(){
  ['qb','sb','avbr'].forEach(id=>{
    const el=document.getElementById(id);if(!el)return;
    BRANDS.forEach(b=>{const o=document.createElement('option');o.value=b.id;o.textContent=b.name;el.appendChild(o);});
  });
}

function rBrands(){
  const g=document.getElementById('bgrid');if(!g)return;
  const cnt={};VEH.forEach(v=>{cnt[v.br]=(cnt[v.br]||0)+1;});
  const tk=document.getElementById('brand-ticker');
  const dmn={ferrari:'ferrari.com',lamborghini:'lamborghini.com',porsche:'porsche.com',mercedes:'mercedes-benz.com',bmw:'bmw.com',bentley:'bentley.com',rollsroyce:'rolls-roycemotorcars.com',astonmartin:'astonmartin.com',mclaren:'mclaren.com',bugatti:'bugatti.com',maserati:'maserati.com',audi:'audi.com',lexus:'lexus.com'};
  if(tk){
    const lgs=BRANDS.map(b=>`<img src="${BRD_LOGOS[b.id]}" alt="${b.name}" height="40" onerror="this.src='https://www.google.com/s2/favicons?domain=${dmn[b.id]}&sz=128'">`).join('');
    tk.innerHTML=`<div class="tkr-w">${lgs}${lgs}${lgs}</div>`;
  }
  g.innerHTML=BRANDS.map(b=>`
    <div class="brc" onclick="fltBr('${b.id}')">
      <img src="${BRD_LOGOS[b.id]}" alt="${b.name}" onerror="this.src='https://www.google.com/s2/favicons?domain=${dmn[b.id]}&sz=128'">
      <div class="bn">${b.name}</div>
      <div class="bc">${cnt[b.id]||0} v.</div>
    </div>`).join('');
}
function fltBr(id){A.F.br=id;P('catalogue');}

// VEHICLE CARD
function rVC(v){
  const fv=A.favs.includes(v.id);
  const i0=img(v.br,0);
  const sb=v.st==='reserved'?'<span class="bdg b-res">Réservé</span>':v.st==='sold'?'<span class="bdg b-sld">Vendu</span>':'';
  return `<div class="vc" onclick="oV(${v.id})">
    <div class="vi">
      <img src="${i0}" alt="${v.brn} ${v.mo}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'">
      <div class="vbdg">${v.nw?'<span class="bdg b-new">Nouveau</span>':''}${sb}${v.ft?'<span class="bdg b-ftr">Vedette</span>':''}</div>
      <div class="vfv ${fv?'on':''}" onclick="tFv(event,${v.id})" title="${fv?'Retirer':'Ajouter aux favoris'}">${fv?'♥':'♡'}</div>
    </div>
    <div class="vb">
      <div class="vbr">${v.brn}</div>
      <div class="vn">${v.mo} <span style="font-size:12.5px;color:var(--mut)">(${v.yr})</span></div>
      <div class="vsp"><span class="vs">${v.fu}</span><span class="vs">${v.hp} ch</span><span class="vs">${v.km>0?fN(v.km)+' km':'Neuf'}</span></div>
      <div class="vp" style="margin-top:10px">${fP(v.pr)}</div>
    </div>
  </div>`;
}

function rFeat(){const g=document.getElementById('fgrid');if(g)g.innerHTML=VEH.filter(v=>v.ft).slice(0,6).map(rVC).join('');}

// QUICK SEARCH
function doQS(){
  A.F.br=document.getElementById('qb').value;
  A.F.pm=parseInt(document.getElementById('qbu').value)||1200000000;
  A.F.bo=document.getElementById('qt').value;
  P('catalogue');
}

// FILTERS
function rBF(){
  const w=document.getElementById('bf');if(!w)return;
  const cnt={};VEH.forEach(v=>{cnt[v.br]=(cnt[v.br]||0)+1;});
  w.innerHTML=BRANDS.map(b=>`<label class="fc"><input type="checkbox" value="${b.id}" onchange="aF()"> ${b.name} <span class="ct">${cnt[b.id]||0}</span></label>`).join('');
}

function onPS(val){A.F.pm=parseInt(val);document.getElementById('pml').value=fN(parseInt(val));aF();}
function sF2(el,val,gid){document.querySelectorAll('#'+gid+' .fp').forEach(p=>p.classList.remove('on'));el.classList.add('on');if(gid==='fp')A.F.fu=val;else A.F.bo=val;aF();}

function aF(){
  const q=(document.getElementById('sq')?.value||'').toLowerCase();
  const so=document.getElementById('so')?.value||'featured';
  const ym=document.getElementById('yf')?.value||'';
  const sa=document.getElementById('fa')?.checked??true;
  const sr=document.getElementById('fr')?.checked??true;
  const no=document.getElementById('fn2')?.checked??false;
  const cb=Array.from(document.querySelectorAll('#bf input:checked')).map(i=>i.value);
  const pm=A.F.pm;

  let res=VEH.filter(v=>{
    if(cb.length&&!cb.includes(v.br))return false;
    if(A.F.br&&v.br!==A.F.br)return false;
    if(v.pr>pm)return false;
    if(A.F.fu&&v.fu!==A.F.fu)return false;
    if(A.F.bo&&v.bo!==A.F.bo)return false;
    if(ym&&v.yr<parseInt(ym))return false;
    if(!sa&&v.st==='available')return false;
    if(!sr&&v.st==='reserved')return false;
    if(no&&!v.nw)return false;
    if(q&&!`${v.brn} ${v.mo} ${v.yr} ${v.fu} ${v.bo}`.toLowerCase().includes(q))return false;
    return true;
  });
  res.sort((a,b)=>{
    if(so==='price_asc')return a.pr-b.pr;if(so==='price_desc')return b.pr-a.pr;
    if(so==='year_desc')return b.yr-a.yr;return (b.ft?1:0)-(a.ft?1:0);
  });
  document.getElementById('rc').textContent=res.length;
  const g=document.getElementById('cgrid'),nr=document.getElementById('nr');
  if(!res.length){g.innerHTML='';nr.classList.remove('hid');}
  else{nr.classList.add('hid');g.innerHTML=res.map(rVC).join('');}
  uFC();
}
function rCat(){aF();}

function resetF(){
  A.F={br:'',pm:1200000000,fu:'',bo:'',yr:'',so:'featured'};
  document.getElementById('sq').value='';document.getElementById('so').value='featured';
  document.getElementById('yf').value='';document.getElementById('pr').value=1200000000;
  document.getElementById('pml').value='1 200 000 000';
  document.querySelectorAll('#bf input').forEach(i=>i.checked=false);
  document.querySelectorAll('.fp').forEach(p=>{p.classList.remove('on');if(p.textContent.trim()==='Tous')p.classList.add('on');});
  document.getElementById('fa').checked=true;document.getElementById('fr').checked=true;document.getElementById('fn2').checked=false;
  aF();
}

// DETAIL
function oV(id){
  A.curV=id;const v=VEH.find(x=>x.id===id);if(!v)return;
  v.vw=(v.vw||0)+1;P('detail');rDet(v);
}

function rDet(v){
  const fv=A.favs.includes(v.id);
  const imgs=IMGS[v.br]||[];
  const i0=img(v.br,0);
  const ths=imgs.slice(0,5).map((im,i)=>`
    <div class="gth ${i===0?'on':''}" onclick="swImg(this,'${im}')">
      <img src="${im}" alt="${v.brn} ${v.mo} ${i+1}" loading="lazy" onerror="this.src='${i0}'">
    </div>`).join('');
  const mo=fP(Math.round(v.pr/60));
  const sb=v.st==='available'?'<span class="bdg b-avl">Disponible</span>':v.st==='reserved'?'<span class="bdg b-res">Réservé</span>':'<span class="bdg b-sld">Vendu</span>';

  document.getElementById('dc').innerHTML=`
    <div>
      <div class="gm"><img id="gmi" src="${i0}" alt="${v.brn} ${v.mo}" onerror="this.src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'"></div>
      <div class="gths">${ths}</div>
      <div style="background:var(--bg2);border:1px solid var(--brd);border-radius:var(--r2);padding:20px;margin-top:16px">
        <h4 style="margin-bottom:10px;font-size:14px">Description</h4>
        <p style="font-size:13.5px;color:var(--mut);line-height:1.75">${v.ds}</p>
      </div>
      <div style="margin-top:16px">
        <div class="ah" onclick="tAcc('at1')"><h4>Fiche Technique</h4><span id="aa1">▼</span></div>
        <div class="ab" id="at1">
          <table class="st">
            <tr><td>Motorisation</td><td>${v.hp} ch</td></tr><tr><td>0-100 km/h</td><td>${v.ac||'N/D'}</td></tr>
            <tr><td>Carburant</td><td>${v.fu}</td></tr><tr><td>Transmission</td><td>${v.tr}</td></tr>
            <tr><td>Kilométrage</td><td>${v.km>0?fN(v.km)+' km':'Neuf (0 km)'}</td></tr>
            <tr><td>Couleur ext.</td><td>${v.cl}</td></tr><tr><td>Carrosserie</td><td>${v.bo}</td></tr>
            <tr><td>État</td><td>${v.co}</td></tr>
          </table>
        </div>
        <div class="ah" onclick="tAcc('at2')"><h4>Service & Garantie</h4><span id="aa2">▼</span></div>
        <div class="ab" id="at2">
          <table class="st">
            <tr><td>Garantie</td><td>12 mois Luxora Certified</td></tr>
            <tr><td>Révision</td><td>Effectuée chez le constructeur</td></tr>
            <tr><td>Historique</td><td>Rapport CarFax disponible</td></tr>
            <tr><td>Livraison</td><td>Toute l'Afrique de l'Ouest</td></tr>
          </table>
        </div>
      </div>
    </div>
    <div>
      <div class="db">${v.brn}</div>
      <div class="dn">${v.mo}</div>
      <div class="fl g8 wr" style="margin-bottom:18px">${sb}${v.nw?'<span class="bdg b-new">Nouveau</span>':''}${v.ft?'<span class="bdg b-ftr">Vedette</span>':''}<span class="bdg" style="background:rgba(255,255,255,.07);color:var(--mut)">${v.yr}</span></div>
      <div class="dp">
        <div class="dpl">Prix de vente</div>
        <div class="dpv">${fP(v.pr)}</div>
        <div class="dmo">Est. ${mo} / mois sur 60 mois</div>
      </div>
      <div class="dsg">
        <div class="dsi"><div class="dsl">Moteur</div><div class="dsv">${v.hp} ch</div></div>
        <div class="dsi"><div class="dsl">0-100 km/h</div><div class="dsv">${v.ac||'N/D'}</div></div>
        <div class="dsi"><div class="dsl">Carburant</div><div class="dsv">${v.fu}</div></div>
        <div class="dsi"><div class="dsl">Transmission</div><div class="dsv">${v.tr}</div></div>
      </div>
      <div class="sc2 fl g12">
        <div class="sav">L</div>
        <div><div style="font-weight:600;font-size:14px">Partenaire Premium Luxora</div><div style="font-size:12px;color:var(--gold)">★★★★★ 4.9 · 128 ventes</div><div style="font-size:12px;color:var(--mut)">Revendeur Certifié</div></div>
      </div>
      ${v.vid?`<div style="margin-top:20px;border-radius:12px;overflow:hidden;border:1px solid var(--brd);aspect-ratio:16/9;background:#000"><iframe src="https://www.youtube.com/embed/${v.vid}" style="width:100%;height:100%;border:0" allowfullscreen></iframe></div>`:''}
      <div class="da">
        ${v.st!=='sold'?`<button class="btn bg bl bf" onclick="oPay(${v.id})">💳 Réserver via CinetPay</button>`:'<button class="btn bh bl bf" disabled style="opacity:.4">Vendu</button>'}
        <button class="btn bo bf" onclick="P('contact')">🚗 Demander un essai routier</button>
        <button class="btn bh bf" onclick="oM('mc')">💬 Contacter un conseiller</button>
      </div>
      <div class="cpb">💳 <div><div><strong>CinetPay</strong> — Paiement 100% sécurisé</div><div style="margin-top:2px;font-size:11px">Wave · Orange Money · MTN MoMo · Carte Bancaire</div></div></div>
      <div style="margin-top:14px;display:flex;align-items:center;gap:10px">
        <button class="btn bh bs ${fv?'bo':''}" onclick="tFv(event,${v.id})" id="dfb">${fv?'♥ Dans mes favoris':'♡ Ajouter aux favoris'}</button>
        <span style="font-size:12px;color:var(--mut)">👁 ${v.vw||0} vues</span>
      </div>
    </div>`;
  const sim=VEH.filter(x=>x.br===v.br&&x.id!==v.id).slice(0,3);
  document.getElementById('sg').innerHTML=sim.length?sim.map(rVC).join(''):'<p class="mut" style="font-size:13px">Aucun véhicule similaire.</p>';
}

function swImg(el,src){document.querySelectorAll('.gth').forEach(t=>t.classList.remove('on'));el.classList.add('on');document.getElementById('gmi').src=src;}
function tAcc(id){document.getElementById(id).classList.toggle('open');}

// FAVORITES
function tFv(e,id){
  e.stopPropagation();
  if(!A.user){oM('ml');return;}
  const i=A.favs.indexOf(id);
  if(i>-1){A.favs.splice(i,1);T('Retiré des favoris');}
  else{A.favs.push(id);T('Ajouté aux favoris ♥','ok');}
  localStorage.setItem('lx_favs',JSON.stringify(A.favs));
  uFC();rCat();
  const btn=document.getElementById('dfb');
  if(btn){const f=A.favs.includes(id);btn.textContent=f?'♥ Dans mes favoris':'♡ Ajouter aux favoris';}
}
function uFC(){const c=A.favs.length,el=document.getElementById('fn');if(c>0){el.style.display='flex';el.textContent=c;}else el.style.display='none';}
function sF(){if(!A.user){oM('ml');return;}P('account');sAT('fv');}

// =====================================================
// PAIEMENT CINETPAY
// =====================================================
function oPay(vid){
  if(!A.user){oM('ml');return;}
  const v=VEH.find(x=>x.id===vid);if(!v)return;
  A.sel=v;
  rPay();
  P('pay');
}

let SM='w';
function sPM(m){
  SM=m;
  document.querySelectorAll('.pmi').forEach(el=>el.classList.remove('on'));
  document.getElementById('p'+m==='c'?'c':m).classList.add('on');
  const pw=document.getElementById('ppw');if(pw)pw.style.display=m==='c'?'none':'block';
}

function lCP(){
  const v=A.sel;if(!v)return;
  const amt=Math.round(v.pr*A.qty*0.1);
  const ph=document.getElementById('pay-p')?.value||'';
  const txId='LXR-'+Date.now()+'-'+Math.random().toString(36).slice(2,6).toUpperCase();
  document.getElementById('p-pay').innerHTML=`<div class="tc" style="padding:20px"><div class="spin"></div><p class="mut" style="font-size:13px;margin-top:12px">Initialisation du paiement sécurisé...</p></div>`;

  setTimeout(()=>{
    try{
      CinetPay.setConfig({apikey:CP.apikey,site_id:CP.site_id,notify_url:CP.notify_url,return_url:CP.return_url,mode:CP.mode});
      CinetPay.getCheckout({
        transaction_id:txId,amount:amt,currency:'XOF',
        channels:'ALL',
        description:'Réservation '+v.brn+' '+v.mo+' (x'+A.qty+') - Luxora Cars',
        customer_name:document.getElementById('pay-n')?.value||A.user?.name||'Client Luxora',
        customer_email:document.getElementById('pay-e')?.value||A.user?.email||'client@luxoracars.com',
        customer_phone_number:ph,customer_address:'Lomé, Togo',
        customer_city:'Lomé',customer_country:'TG',customer_state:'Maritime',customer_zip_code:'00228',
      });
      CinetPay.waitResponse(function(data){
        if(data.status==='ACCEPTED'){payOK(v.id,amt,txId,data);}
        else{payFail(data);}
      });
      CinetPay.onError(function(data){console.error('CinetPay error:',data);simPay(v.id,amt,txId);});
    }catch(e){console.error('CinetPay init error:',e);simPay(v.id,amt,txId);}
  },1000);
}

// Simulation de paiement (pour tests locaux sans internet)
function simPay(vid,amount,txId){
  document.getElementById('pbdy').innerHTML=`
    <div style="text-align:center;padding:24px 20px">
      <div class="spin"></div>
      <h3 style="margin-bottom:8px">En attente de confirmation...</h3>
      <p class="mut" style="font-size:13px;margin-bottom:12px">Vérifiez votre application et approuvez la transaction</p>
      <div style="background:var(--bg3);padding:10px 20px;border-radius:8px;display:inline-block">
        <span class="mut" style="font-size:12px">Réf. </span>
        <span style="font-family:'Orbitron',monospace;font-size:13px;color:var(--gold)">${txId}</span>
      </div>
    </div>`;
  setTimeout(()=>{payOK(vid,amount,txId,{status:'ACCEPTED'});},3000);
}

function payOK(vid,amount,txId,data){
  const v=VEH.find(x=>x.id===vid);if(!v)return;
  v.st='reserved';
  const ordId='LXR-'+Date.now().toString().slice(-6);
  const meth={w:'Wave',o:'Orange Money',m:'MTN MoMo',c:'Carte Bancaire'}[SM]||'Wave';
  const order={id:ordId,vid,vname:`${v.brn} ${v.mo} ${v.yr}`,amount,total:v.pr,method:meth,txId,status:'confirmed',date:new Date().toLocaleDateString('fr-FR')};
  A.orders.push(order);
  localStorage.setItem('lx_orders',JSON.stringify(A.orders));
  addAct('Réservation confirmée : '+v.brn+' '+v.mo,'order');
  document.getElementById('pbdy').innerHTML=`
    <div style="text-align:center;padding:28px 20px">
      <div style="font-size:64px;margin-bottom:14px">✅</div>
      <h3 style="font-family:'Playfair Display',serif;font-size:22px;margin-bottom:8px">Réservation Confirmée !</h3>
      <p class="mut" style="font-size:13.5px;margin-bottom:20px">Votre réservation pour le <strong>${v.brn} ${v.mo}</strong> est validée.</p>
      <div style="background:var(--bg3);border-radius:var(--r);padding:16px;margin-bottom:20px;text-align:left">
        <table class="ot" style="width:100%">
          <tr><td style="color:var(--mut)">Commande</td><td style="font-family:'Orbitron',monospace;color:var(--gold);font-size:12px">#${ordId}</td></tr>
          <tr><td style="color:var(--mut)">Véhicule</td><td>${v.brn} ${v.mo} ${v.yr}</td></tr>
          <tr><td style="color:var(--mut)">Acompte payé</td><td style="color:var(--grn)">${fP(amount)}</td></tr>
          <tr><td style="color:var(--mut)">Méthode</td><td>${meth}</td></tr>
          <tr><td style="color:var(--mut)">ID CinetPay</td><td style="font-size:11px">${txId}</td></tr>
          <tr><td style="color:var(--mut)">Date</td><td>${new Date().toLocaleDateString('fr-FR')}</td></tr>
        </table>
      </div>
      <p style="font-size:12px;color:var(--mut);margin-bottom:16px">Un email de confirmation a été envoyé à ${A.user?.email||'votre adresse'}</p>
      <div style="display:flex;gap:10px;justify-content:center">
        <button class="btn bg bs" onclick="cM('mp');P('account');sAT('or')">Voir mes commandes</button>
        <button class="btn bh bs" onclick="cM('mp')">Fermer</button>
      </div>
    </div>`;
  T('Réservation confirmée ! 🎉','ok');
  uAdmStats();rFeat();
}

function payFail(data){
  document.getElementById('pbdy').innerHTML=`
    <div style="text-align:center;padding:28px 20px">
      <div style="font-size:64px;margin-bottom:14px">❌</div>
      <h3 style="margin-bottom:8px">Paiement non abouti</h3>
      <p class="mut" style="font-size:13px;margin-bottom:16px">Le paiement n'a pas été confirmé. Veuillez réessayer.</p>
      <button class="btn bg bf" onclick="cM('mp')">Retour</button>
    </div>`;
  T('Paiement non abouti','er');
}

// SELL
function initSell(){A.SD={step:1,photos:[],lt:'std'};uSteps(1);}
function uSteps(s){
  [1,2,3,4].forEach(i=>{const c=document.getElementById('sc'+i);if(!c)return;c.classList.remove('dn2','cr');if(i<s)c.classList.add('dn2');else if(i===s)c.classList.add('cr');});
  [1,2,3].forEach(i=>{const l=document.getElementById('sl'+i);if(l)l.classList.toggle('dn2',i<s);});
  document.querySelectorAll('.slbl').forEach((el,i)=>{el.classList.toggle('cr',i+1===s);});
}

function goStep(s){
  if(s===2&&!document.getElementById('sb').value){T('Sélectionnez une marque','er');return;}
  if(s===2&&!document.getElementById('sm').value.trim()){T('Entrez le modèle','er');return;}
  if(s===4){bldPrev();calcEst();}
  A.SD.step=s;
  document.querySelectorAll('.sp').forEach(p=>p.classList.remove('on'));
  document.getElementById('sp'+s).classList.add('on');
  uSteps(s);window.scrollTo({top:0,behavior:'smooth'});
  if(s===3)calcEst();
}

function calcEst(){
  const br=document.getElementById('sb').value;const yr=parseInt(document.getElementById('sy').value)||2020;
  const sim=VEH.filter(v=>v.br===br);
  let base=sim.length>0?sim.reduce((s,v)=>s+v.pr,0)/sim.length:80000000;
  const disc=(2024-yr)*0.05;
  const mn=Math.round(base*(1-disc)*.85),mx=Math.round(base*(1-disc)*1.15);
  const el=document.getElementById('est');if(el)el.textContent=fP(mn)+' – '+fP(mx);
}

function sLT(t){
  A.SD.lt=t;
  document.querySelectorAll('.ltci').forEach(c=>c.classList.remove('on'));
  document.getElementById('lt-'+t)?.classList.add('on');
}

function onFl(files){
  Array.from(files).slice(0,20-A.SD.photos.length).forEach(f=>{
    const r=new FileReader();r.onload=e=>{A.SD.photos.push(e.target.result);rPht();};r.readAsDataURL(f);
  });
}
function onDr(e){e.preventDefault();document.getElementById('uz').classList.remove('dov');onFl(e.dataTransfer.files);}
function rPay(){
  const v=A.sel;if(!v)return;
  A.qty=1;
  document.getElementById('vsel').innerHTML=`
    <div class="fl g16 wr">
      <img src="${img(v.br,0)}" style="width:160px;height:100px;object-fit:cover;border-radius:12px;border:1px solid var(--brd)">
      <div>
        <div class="vbr">${v.brn}</div>
        <h2 class="vn" style="font-size:20px;margin:2px 0 8px">${v.mo}</h2>
        <div class="fl g12">
          <div class="vs"><i class="fas fa-calendar"></i> ${v.yr}</div>
          <div class="vs"><i class="fas fa-gas-pump"></i> ${v.fu}</div>
        </div>
      </div>
    </div>`;
  uPtot();
}
function uPtot(){
  const v=A.sel;if(!v)return;
  const t=v.pr*A.qty;
  document.getElementById('vpt').textContent=fP(t);
  document.getElementById('p-qty').textContent=A.qty;
}
function cQty(d){
  A.qty=Math.max(1,A.qty+d);
  uPtot();
}
function pPay(){
  const n=document.getElementById('pay-n').value;
  const e=document.getElementById('pay-e').value;
  const p=document.getElementById('pay-p').value;
  if(!n||!e||!p){T('Veuillez remplir vos informations','er');return;}
  lCP();
}
function rPht(){document.getElementById('pht').innerHTML=A.SD.photos.map((s,i)=>`<div class="pth"><img src="${s}"><button class="prm" onclick="rmPh(${i})">✕</button></div>`).join('');}
function rmPh(i){A.SD.photos.splice(i,1);rPht();}

function bldPrev(){
  const br=BRANDS.find(b=>b.id===document.getElementById('sb').value);
  const mo=document.getElementById('sm').value;const yr=document.getElementById('sy').value;
  const pr=parseInt(document.getElementById('spr').value)||0;
  document.getElementById('spv').innerHTML=`
    <div class="fl g12" style="margin-bottom:12px">
      <img src="${img(br?.id||'ferrari',0)}" style="width:80px;height:56px;border-radius:8px;object-fit:cover" alt="">
      <div><div style="font-size:11px;color:var(--gold);font-weight:600;letter-spacing:.08em;text-transform:uppercase">${br?.name||'Marque'}</div><div style="font-family:'Playfair Display',serif;font-size:20px;font-weight:600">${mo||'Modèle'} <span style="font-size:14px;font-weight:400;color:var(--mut)">${yr}</span></div><div style="font-family:'Orbitron',monospace;color:var(--gold);font-size:16px;margin-top:4px">${fP(pr)}</div></div>
    </div>
    <p style="font-size:13px;color:var(--mut)">${document.getElementById('sf').value} · ${document.getElementById('st2').value} · ${fN(parseInt(document.getElementById('sk').value)||0)} km</p>
    <p style="font-size:13px;color:var(--mut);margin-top:6px;line-height:1.6">${document.getElementById('sd').value||'Aucune description.'}</p>
    <div style="margin-top:10px"><span class="bdg b-ftr">Type : ${A.SD.lt}</span></div>`;
}

function pubList(){
  if(!A.user){oM('ml');return;}
  const nm=document.getElementById('snm').value.trim();
  const ph=document.getElementById('sph').value.trim();
  const em=document.getElementById('sem').value.trim();
  if(!nm||!ph||!em){T('Remplissez tous les champs obligatoires','er');return;}
  const br=BRANDS.find(b=>b.id===document.getElementById('sb').value);
  const nv={
    id:VEH.length+100+Math.floor(Math.random()*100),
    br:document.getElementById('sb').value,brn:br?.name||'Autre',
    mo:document.getElementById('sm').value,yr:parseInt(document.getElementById('sy').value)||2023,
    pr:parseInt(document.getElementById('spr').value)||0,km:parseInt(document.getElementById('sk').value)||0,
    fu:document.getElementById('sf').value,tr:document.getElementById('st2').value,
    bo:document.getElementById('sbo').value,hp:parseInt(document.getElementById('shp').value)||0,
    ac:'N/D',cl:document.getElementById('sc2').value,co:document.getElementById('sco').value,
    ds:document.getElementById('sd').value,
    st:'available',ft:A.SD.lt==='ftr',nw:true,vw:0
  };
  VEH.unshift(nv);
  const ls={id:'LS-'+Date.now().toString().slice(-6),vehicle:`${br?.name} ${nv.mo}`,price:nv.pr,status:'pending',date:new Date().toLocaleDateString('fr-FR'),type:A.SD.lt};
  A.listings.push(ls);localStorage.setItem('lx_listings',JSON.stringify(A.listings));
  addAct('Annonce publiée : '+nv.brn+' '+nv.mo,'listing');
  T('Annonce publiée ! En attente de validation.','ok');
  uAdmStats();rFeat();rCat();
  setTimeout(()=>{P('account');sAT('ls');},1200);
}

// AUTH
function swReg(){document.getElementById('lwrap').style.display='none';document.getElementById('rwrap').style.display='block';}
function swLog(){document.getElementById('rwrap').style.display='none';document.getElementById('lwrap').style.display='block';}
function doLogin(){
  const em=document.getElementById('lem').value,pw=document.getElementById('lpw').value;
  if(!em||!pw){T('Email et mot de passe requis','er');return;}
  if(em==='denistchil@gmail.com'&&pw==='admin123'){lgIn({name:'Denis Tchilabalo',email:em,role:'admin',phone:'+22890567848',initials:'DT'});return;}
  if(em&&pw.length>=4){lgIn({name:em.split('@')[0],email:em,role:'buyer',phone:'',initials:em[0].toUpperCase()});return;}
  T('Identifiants incorrects','er');
}
function doReg(){
  const fn=document.getElementById('rfn').value.trim(),em=document.getElementById('rem').value.trim(),pw=document.getElementById('rpw').value;
  if(!fn||!em||!pw){T('Champs obligatoires manquants','er');return;}
  if(pw.length<6){T('Mot de passe minimum 6 caractères','er');return;}
  lgIn({name:fn+' '+document.getElementById('rln').value,email:em,role:'buyer',phone:document.getElementById('rph').value,initials:fn[0].toUpperCase()});
}
function demoL(t){if(t==='admin')lgIn({name:'Denis Tchilabalo',email:'denistchil@gmail.com',role:'admin',phone:'+22890567848',initials:'DT'});else lgIn({name:'Client Demo',email:'client@demo.com',role:'buyer',phone:'+22890000001',initials:'C'});}
function lgIn(u){A.user=u;localStorage.setItem('lx_user',JSON.stringify(u));uUI();cM('ml');T('Bienvenue, '+u.name.split(' ')[0]+' ! 👋','ok');}
function uUI(){
  if(!A.user)return;
  document.getElementById('aav').textContent=A.user.initials||A.user.name[0];
  document.getElementById('aun').textContent=A.user.name;
  document.getElementById('arl').textContent=A.user.role==='admin'?'👑 Administrateur':'Acheteur';
  const ubtns=document.getElementById('u-btns');
  if(ubtns)ubtns.innerHTML=`
    <button class="btn bo bs fnb" onclick="sF()" title="Favoris">♡ <span id="fn" class="fnn" style="display:none"></span></button>
    ${A.user.role==='admin'?'<button class="btn bo bs" onclick="P(\'admin\')">Admin</button>':''}
    <button class="btn bh bs" onclick="P(\'account\')">${A.user.initials||'U'}</button>
    <button class="btn bg bs" onclick="P(\'sell\')">+ Vendre</button>`;
  uFC();rCat();
}
function logOut(){A.user=null;A.favs=[];localStorage.removeItem('lx_user');localStorage.removeItem('lx_favs');location.reload();}
function saveSt(){if(!A.user)return;A.user.name=document.getElementById('sfn').value+' '+document.getElementById('sln').value;A.user.email=document.getElementById('sem2').value;localStorage.setItem('lx_user',JSON.stringify(A.user));T('Paramètres enregistrés','ok');uUI();}

// ACCOUNT TABS
function sAT(t){
  document.querySelectorAll('.at').forEach(x=>x.classList.remove('on'));
  document.querySelectorAll('.ai').forEach(x=>x.classList.remove('on'));
  document.getElementById('at-'+t)?.classList.add('on');
}
function rAccTabs(){
  document.getElementById('kfv').textContent=A.favs.length;
  document.getElementById('kor').textContent=A.orders.length;
  document.getElementById('kls').textContent=A.listings.length;
  // Favorites
  const fg=document.getElementById('fvg'),nf=document.getElementById('nfv');
  if(A.favs.length===0){fg.innerHTML='';nf.classList.remove('hid');}
  else{nf.classList.add('hid');fg.innerHTML=VEH.filter(v=>A.favs.includes(v.id)).map(rVC).join('');}
  // Orders
  document.getElementById('orl').innerHTML=A.orders.length===0?'<p class="mut" style="font-size:13px">Aucune commande.</p>':A.orders.map(o=>`
    <div class="crd" style="padding:16px;margin-bottom:12px">
      <div class="fl bw">
        <div class="fl g12">
          <img src="${img(VEH.find(v=>v.id===o.vid)?.br||'ferrari',0)}" style="width:60px;height:42px;border-radius:8px;object-fit:cover" alt="">
          <div><div style="font-weight:600;margin-bottom:2px">${o.vname}</div><div style="font-size:12px;color:var(--mut)">Commande <span style="font-family:'Orbitron',monospace;color:var(--gold)">#${o.id}</span> · ${o.date}</div><div style="font-size:12px;color:var(--mut);margin-top:2px">${o.method} · ${o.txId}</div></div>
        </div>
        <div style="text-align:right"><div style="font-family:'Orbitron',monospace;color:var(--gold);font-size:14px">${fP(o.amount)}</div><span class="bdg b-avl" style="margin-top:4px">${o.status}</span></div>
      </div>
    </div>`).join('');
  // Listings
  document.getElementById('lsl').innerHTML=A.listings.length===0?`<p class="mut" style="font-size:13px">Aucune annonce. <span style="color:var(--gold);cursor:pointer" onclick="P('sell')">Publiez votre premier véhicule →</span></p>`:
    A.listings.map(l=>`<div class="crd" style="padding:16px;margin-bottom:12px"><div class="fl bw"><div><div style="font-weight:600;margin-bottom:2px">${l.vehicle}</div><div style="font-size:12px;color:var(--mut)">#${l.id} · ${l.date} · ${l.type}</div></div><div class="fl g8"><span class="bdg b-res">En attente</span><span style="font-family:'Orbitron',monospace;color:var(--gold);font-size:13px">${fP(l.price)}</span></div></div></div>`).join('');
  // Messages
  document.getElementById('msl').innerHTML=`
    <div class="crd" style="padding:16px;margin-bottom:12px"><div class="fl g12"><div style="width:40px;height:40px;background:var(--gold2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:#000;flex-shrink:0">L</div><div style="flex:1"><div class="fl bw"><span style="font-weight:600;font-size:14px">Conseiller Luxora Cars</span><span style="font-size:11px;color:var(--mut)">il y a 2h</span></div><p style="font-size:13px;color:var(--mut);margin-top:4px">Bonjour ! Votre demande concernant votre véhicule favori a été bien reçue. Je vous recontacte dans les prochaines heures.</p></div></div></div>
    <div class="crd" style="padding:16px"><div class="fl g12"><div style="width:40px;height:40px;background:var(--bg4);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--gold);flex-shrink:0">P</div><div style="flex:1"><div class="fl bw"><span style="font-weight:600;font-size:14px">Partenaire Premium Luxora</span><span style="font-size:11px;color:var(--mut)">Hier</span></div><p style="font-size:13px;color:var(--mut);margin-top:4px">Le véhicule est toujours disponible. Essai routier possible ce week-end si vous le souhaitez.</p></div></div></div>`;
  rActFeed();
}

let acts=JSON.parse(localStorage.getItem('lx_acts')||'[]');
function addAct(t,tp){acts.unshift({t,tp,tm:new Date().toLocaleString('fr-FR')});acts=acts.slice(0,20);localStorage.setItem('lx_acts',JSON.stringify(acts));}
function rActFeed(){
  const f=document.getElementById('acf');if(!f)return;
  const d=[...acts.slice(0,5),...[{t:'Consulté : Lamborghini Urus',tp:'view',tm:'il y a 5 min'},{t:'Consulté : Rolls-Royce Ghost',tp:'view',tm:'il y a 1h'},{t:'Connecté au compte Luxora Cars',tp:'login',tm:"Aujourd'hui"}]].slice(0,8);
  f.innerHTML=d.map(a=>`<div class="ai2"><div class="ado"></div><div><div style="font-size:13.5px">${a.t}</div><div class="atm">${a.tm}</div></div></div>`).join('');
}

// ADMIN
function sAD(t){
  document.querySelectorAll('.adtb').forEach(x=>x.classList.remove('on'));
  document.querySelectorAll('.ani').forEach(x=>x.classList.remove('on'));
  document.getElementById('adt-'+t)?.classList.add('on');
}
function uAdmStats(){
  const av=VEH.filter(v=>v.st==='available').length;
  document.getElementById('akv').textContent=av;
  document.getElementById('ako').textContent=A.orders.length;
  document.getElementById('aku').textContent=128+A.orders.length;
  const tr=A.orders.reduce((s,o)=>s+o.amount,0);
  document.getElementById('akr').textContent=fK(tr+48500000);
}
function rAdmData(){
  // Vehicles table
  const vb=document.getElementById('avb');
  if(vb)vb.innerHTML=VEH.slice(0,20).map(v=>`
    <tr>
      <td><img class="ti" src="${img(v.br,0)}" alt="${v.brn}" onerror="this.style.display='none'"></td>
      <td>${v.brn} ${v.mo}</td><td>${v.yr}</td>
      <td style="font-family:'Orbitron',monospace;color:var(--gold);font-size:12px">${fP(v.pr)}</td>
      <td><span class="bdg ${v.st==='available'?'b-avl':v.st==='reserved'?'b-res':'b-sld'}">${v.st}</span></td>
      <td>${v.vw||0}</td>
      <td><div class="tba"><button class="btn bh bs" onclick="tFtr(${v.id})">★</button><button class="btn bd bs" onclick="delV(${v.id})">🗑</button></div></td>
    </tr>`).join('');

  // Orders
  const ob=document.getElementById('aob');
  if(ob)ob.innerHTML=A.orders.map(o=>`
    <tr><td style="font-family:'Orbitron',monospace;font-size:12px;color:var(--gold)">#${o.id}</td>
    <td>${o.vname}</td><td>${o.client||'Client'}</td>
    <td><span class="bdg b-ftr">${o.method||'N/A'}</span></td>
    <td style="font-family:'Orbitron',monospace;font-size:12px">${fP(o.amount)}</td>
    <td><span class="bdg ${o.status==='confirmed'?'b-avl':o.status==='pending'?'b-res':'b-sld'}">${o.status}</span></td>
    <td><div class="tba">
      ${o.status==='pending'?`<button class="btn bg bs" onclick="uOrd('${o.id}','confirmed')">Valider</button>`:''}
      <button class="btn bd bs" onclick="uOrd('${o.id}','cancelled')">Annuler</button>
    </div></td></tr>`).join('');

  // Payments
  const pb=document.getElementById('apb');
  if(pb)pb.innerHTML=A.orders.length?A.orders.map(o=>`
    <tr><td style="font-family:'Orbitron',monospace;font-size:11px;color:var(--gold)">${o.txId}</td>
    <td>#${o.id}</td><td>${o.method}</td>
    <td style="font-family:'Orbitron',monospace;font-size:12px">${fP(o.amount)}</td>
    <td><span class="bdg b-avl">SUCCESS</span></td><td>${o.date}</td></tr>`).join(''):
    '<tr><td colspan="6" style="text-align:center;padding:20px;color:var(--mut)">Aucune transaction.</td></tr>';

  // Users
  const ub=document.getElementById('aub');
  const us=[{name:'Denis Tchilabalo',email:'denistchil@gmail.com',role:'admin',date:'01/01/2024',st:'Actif'},
    {name:'Kofi Mensah',email:'kofi@example.com',role:'buyer',date:'05/02/2024',st:'Actif'},
    {name:'Amina Diallo',email:'amina@example.com',role:'seller',date:'12/02/2024',st:'Actif'}];
  if(A.user&&!us.find(u=>u.email===A.user.email))us.unshift({name:A.user.name,email:A.user.email,role:A.user.role,date:new Date().toLocaleDateString('fr-FR'),st:'Actif'});
  if(ub)ub.innerHTML=us.map(u=>`
    <tr><td><div class="fl g8"><div style="width:32px;height:32px;background:var(--gold2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;color:#000;flex-shrink:0">${u.name[0]}</div>${u.name}</div></td>
    <td style="font-size:12px;color:var(--mut)">${u.email}</td>
    <td><span class="bdg ${u.role==='admin'?'b-ftr':u.role==='seller'?'b-res':'b-avl'}">${u.role}</span></td>
    <td style="font-size:12px;color:var(--mut)">${u.date}</td>
    <td><span class="bdg b-avl">${u.st}</span></td></tr>`).join('');

  // Recent orders (dashboard)
  const rc=document.getElementById('rco');
  if(rc)rc.innerHTML=[{v:'Ferrari 488 Spider',a:24500000,s:'confirmed'},{v:'Bentley Continental GT',a:28000000,s:'confirmed'},{v:'Porsche 911 Turbo S',a:18000000,s:'pending'}]
    .map(o=>`<div class="fl bw" style="padding:8px 0;border-bottom:1px solid var(--brd)"><span style="font-size:13px">${o.v}</span><div class="fl g8"><span style="font-family:'Orbitron',monospace;font-size:11px;color:var(--gold)">${fK(o.a)}</span><span class="bdg ${o.s==='confirmed'?'b-avl':'b-res'}" style="font-size:10px">${o.s}</span></div></div>`).join('');

  // Pending
  const rp=document.getElementById('rpn');
  const pendData=[...A.listings.map(l=>({v:l.vehicle,seller:A.user?.name||'Vendeur',d:l.date})),{v:'BMW M8 Competition',seller:'Kofi M.',d:'11/03/2024'},{v:'Audi RS7',seller:'Ibrahim T.',d:'10/03/2024'}];
  if(rp)rp.innerHTML=pendData.slice(0,4).map(l=>`<div class="fl bw" style="padding:8px 0;border-bottom:1px solid var(--brd)"><div><div style="font-size:13px">${l.v}</div><div style="font-size:11px;color:var(--mut)">${l.seller} · ${l.d}</div></div><div class="fl g8"><button class="btn bg bs" style="padding:4px 10px;font-size:11px" onclick="T('Annonce approuvée','ok');this.closest('.fl').closest('div').remove()">✓</button><button class="btn bd bs" style="padding:4px 10px;font-size:11px" onclick="T('Annonce rejetée');this.closest('.fl').closest('div').remove()">✗</button></div></div>`).join('');

  // Pending tab
  const pl=document.getElementById('pnl');
  if(pl)pl.innerHTML=pendData.map((l,i)=>`<div class="crd" style="padding:16px;margin-bottom:12px"><div class="fl bw"><div><div style="font-weight:600;margin-bottom:4px">${l.v}</div><div style="font-size:12px;color:var(--mut)">Vendeur : ${l.seller} · ${l.d}</div></div><div class="fl g8"><button class="btn bg bs" onclick="this.closest('.crd').remove();T('Approuvé','ok')">✓ Approuver</button><button class="btn bd bs" onclick="this.closest('.crd').remove();T('Rejeté')">✗ Rejeter</button></div></div></div>`).join('');

  // Brand stats
  const bs=document.getElementById('bst');
  if(bs){const cnt={};VEH.forEach(v=>{cnt[v.brn]=(cnt[v.brn]||0)+1;});const top=Object.entries(cnt).sort((a,b)=>b[1]-a[1]).slice(0,8);const mx=top[0]?.[1]||1;
    bs.innerHTML=top.map(([b,c])=>`<div style="margin-bottom:12px"><div class="fl bw" style="margin-bottom:5px"><span style="font-size:13px">${b}</span><span style="font-size:12px;color:var(--mut)">${c} véhicule(s)</span></div><div style="height:6px;background:var(--bg4);border-radius:3px;overflow:hidden"><div style="width:${(c/mx)*100}%;height:100%;background:var(--gold);border-radius:3px"></div></div></div>`).join('');}
}

function uOrd(id,st){const o=A.orders.find(x=>x.id===id);if(o){o.status=st;localStorage.setItem('lx_orders',JSON.stringify(A.orders));rAdmData();T('Réservation '+st,'ok');}}
function editV(id){A.edV=id;const v=VEH.find(x=>x.id===id);if(!v)return;document.getElementById('avbr').value=v.br;document.getElementById('avm').value=v.mo;document.getElementById('avy').value=v.yr;document.getElementById('avp').value=v.pr;document.getElementById('avk').value=v.km;document.getElementById('avh').value=v.hp;document.getElementById('avc').value=v.cl;document.getElementById('ava').value=v.ac||'';document.getElementById('avd').value=v.ds;document.getElementById('avs').value=v.st;document.getElementById('avft').checked=v.ft;document.getElementById('avnw').checked=v.nw;document.getElementById('avvid').value=v.vid||'';T('Modification en cours...','ok');}

function admAddV(){
  const br=BRANDS.find(b=>b.id===document.getElementById('avbr').value);
  const mo=document.getElementById('avm').value.trim();
  if(!br||!mo){T('Marque et modèle requis','er');return;}
  const nv={
    id:VEH.length+100+Math.floor(Math.random()*100),br:br.id,brn:br.name,mo,
    yr:parseInt(document.getElementById('avy').value)||2024,
    pr:parseInt(document.getElementById('avp').value)||0,
    km:parseInt(document.getElementById('avk').value)||0,
    hp:parseInt(document.getElementById('avh').value)||0,
    fu:document.getElementById('avf').value,tr:document.getElementById('avt').value,
    bo:document.getElementById('avbo').value,cl:document.getElementById('avc').value,
    ac:document.getElementById('ava').value||'N/D',co:'Neuf',
    ds:document.getElementById('avd').value,
    st:document.getElementById('avs')?.value||'available',
    ft:document.getElementById('avft').checked,nw:document.getElementById('avnw').checked,vw:0,
    vid:document.getElementById('avvid').value.trim()
  };
  if(A.edV){const i=VEH.findIndex(x=>x.id===A.edV);if(i>-1)VEH[i]={...VEH[i],...nv,id:A.edV};A.edV=null;T('Véhicule mis à jour','ok');}
  else{VEH.unshift(nv);T(br.name+' '+mo+' ajouté avec succès !','ok');}
  uAdmStats();rAdmData();rFeat();rCat();
  ['avm','avy','avp','avk','avh','avc','ava','avd','avvid'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
}

// CONTACT
function sndC(){
  const fn=document.getElementById('cfn').value.trim(),em=document.getElementById('cem').value.trim(),msg=document.getElementById('cmsg').value.trim();
  if(!fn||!em||!msg){T('Remplissez tous les champs obligatoires','er');return;}
  T('Message envoyé ! Nous vous répondrons sous 24h.','ok');
  ['cfn','cln','cem','cph','cmsg'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
}

// CHAT
function sndCh(){
  const inp=document.getElementById('chin');const m=inp.value.trim();if(!m)return;
  const w=document.getElementById('chmsg');
  w.innerHTML+=`<div style="background:rgba(212,175,55,.12);border:1px solid var(--brd);padding:10px 14px;border-radius:12px 12px 4px 12px;max-width:85%;align-self:flex-end;margin-left:auto"><p style="font-size:13px">${m}</p><p style="font-size:11px;color:var(--mut);margin-top:4px">Vous · maintenant</p></div>`;
  inp.value='';w.scrollTop=w.scrollHeight;
  setTimeout(()=>{
    const r=CHAT_R[A.ci%CHAT_R.length];A.ci++;
    w.innerHTML+=`<div style="background:var(--bg3);padding:10px 14px;border-radius:12px 12px 12px 4px;max-width:85%"><p style="font-size:13px">${r}</p><p style="font-size:11px;color:var(--mut);margin-top:4px">Conseiller Luxora · maintenant</p></div>`;
    w.scrollTop=w.scrollHeight;
  },900);
}
