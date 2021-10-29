var E=Object.defineProperty,P=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var M=(a,n,t)=>n in a?E(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t,f=(a,n)=>{for(var t in n||(n={}))F.call(n,t)&&M(a,t,n[t]);if(R)for(var t of R(n))U.call(n,t)&&M(a,t,n[t]);return a},S=(a,n)=>P(a,H(n));import{s as o,L as C,P as u,j as s,a as e,F as A,f as K,b as O,r as h,d as V,c as W,S as $,e as x,g as j,U as v,u as y,h as z,W as Y,R as w,i as Z,k as q,l as N,m as J,B as Q}from"./vendor.2571711b.js";const X=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}};X();const B=({mode:a,switchMode:n})=>s(ee,{children:[e("h1",{children:e(_,{to:"/",children:"Where in the World?"})}),s(ae,{onClick:()=>{n()},children:[e(A,{icon:a==="light"?K:O,className:"icon"}),e("div",{children:"Dark Mode"})]})]}),_=o(C)`
  color: var(--text);
  font-size: 1.5rem;
`,ee=o.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem calc(5%);
  background-color: var(--element);
  box-shadow: 0 2px 5px var(--boxShadow);
`,ae=o.div`
  cursor: pointer;
  color: var(--text);
  font-weight: 600;
  display: flex;
  gap: 0.5rem;
  line-height: 1;

  &:hover {
    .icon {
      transform: scale(1.2);
      color: var(--text);
    }
  }
`;B.propTypes={mode:u.string.isRequired,switchMode:u.func.isRequired};const b=h.exports.createContext({searchValue:"",region:[],inputSearch:a=>{},selectRegion:a=>{}}),ne=()=>{const{inputSearch:a}=h.exports.useContext(b),n=r=>{a(r.target.value)},t=r=>{r.key!=="enter"},i=V(n,500);return s(te,{children:[e(re,{type:"text",placeholder:"Search for a country...",onChange:i,onKeyDown:t}),e(A,{icon:W,className:"icon"})]})},te=o.section`
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  position: relative;
  .icon {
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-30%);
    color: var(--text);
  }

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`,re=o.input`
  font-weight: 600;
  width: 100%;
  padding: 0.75rem;
  padding-left: 4rem;
  background-color: var(--input);
  color: var(--text);

  border: none;
  border-radius: var(--borderRadius);
  box-shadow: 0 0 7px var(--boxShadow);
  &::placeholder {
    font-family: var(--fontStack);
    color: var(--text);
    opacity: 0.5;
  }
`,ie=[{value:"Africa",label:"Africa"},{value:"Americas",label:"America"},{value:"Asia",label:"Asia"},{value:"Europe",label:"Europe"},{value:"Oceania",label:"Oceania"}],oe={option:(a,n)=>S(f({},a),{color:(n.isSelected,"var(--text)"),backgroundColor:(n.isSelected,"var(--input)")}),control:(a,n)=>S(f({},a),{background:"var(--input)"}),placeholder:(a,n)=>S(f({},a),{color:"var(--text)"}),menuList:(a,n)=>S(f({},a),{background:"var(--input)"})},se=()=>{const{selectRegion:a}=h.exports.useContext(b);return e(le,{children:e($,{options:ie,placeholder:"Filter by Region",styles:oe,className:"select",onChange:t=>{a(t.map(i=>i.value))},isMulti:!0})})},le=o.div`
  width: 250px;
`,ce=()=>s(de,{children:[e(ne,{}),e(se,{})]}),de=o.section`
  margin: 0 auto;
  width: 90%;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
`,L=({name:a,region:n,population:t,capital:i="-",flag:r,onClick:l,code:c})=>e(x,{children:s(ue,{onClick:()=>{l(c)},children:[e(he,{children:e("img",{src:r,alt:a})}),s(pe,{children:[e("h3",{children:a}),s("p",{children:["Population:",e("span",{children:t.toLocaleString()})]}),s("p",{children:["Region:",e("span",{children:n})]}),s("p",{children:["Capital:",e("span",{children:i})]})]})]})}),ue=o.li`
  cursor: pointer;
  color: var(--text);
  background: var(--element);
  border-radius: var(--borderRadius);
  box-shadow: 0 3px 5px var(--boxShadow);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
`,he=o.div`
  height: 150px;
  width: 100%;
  box-shadow: 0 2px 5px var(--boxShadow);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,pe=o.div`
  align-self: flex-start;
  padding: 1.5rem;

  h3 {
    margin-bottom: 1rem;
  }
  p {
    font-weight: 600;
    line-height: 1.5;
  }
  span {
    font-weight: 300;
    margin-left: 1ch;
  }
`;L.propTypes={name:u.string.isRequired,population:u.number.isRequired,capital:u.any,flag:u.string.isRequired,region:u.string.isRequired,onClick:u.func.isRequired,code:u.string.isRequired};const T=(a,n,t="")=>{const[i,r]=h.exports.useState(!0),[l,c]=h.exports.useState(n);return h.exports.useEffect(()=>{const g=async()=>{const d=(await j.get(`https://restcountries.com/v2/${a}`)).data;c(d),r(!1)};try{g()}catch(p){console.log(p)}},[t]),[i,l]},me=v`
    0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`,I=v`
   0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
`,ge=v`
 0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
`,k=()=>s(Se,{children:[e("h2",{children:"Loading..."}),s(fe,{children:[e("div",{}),e("div",{}),e("div",{}),e("div",{})]})]}),fe=o.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: var(--text);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & div:nth-child(1) {
    left: 8px;
    animation: ${me} 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 8px;
    animation: ${I} 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 32px;
    animation: ${I} 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 56px;
    animation: ${ge} 0.6s infinite;
  }
`,Se=o.div`
  color: var(--text);

  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,be=()=>{const{searchValue:a,region:n}=h.exports.useContext(b),[t,i]=T("all",[]);let r=y();const l=d=>{r.push(`/${d}`)},c=new RegExp(`${a}`,"gi"),g=n.length===0?i:i.filter(d=>n.some(D=>D===d.region)),p=a===""?g:g.filter(d=>c.test(d.name));return t?e(k,{}):p.length===0?e(xe,{children:"No Countries Found"}):e(x,{children:e(ve,{children:e("ul",{children:p.map(d=>e(L,{id:d.name,code:d.alpha3Code,name:d.name,capital:d.capital,flag:d.flags.svg,region:d.region,population:d.population,onClick:l},d.name))})})})},xe=o.h2`
  color: var(--text);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,ve=o.main`
  width: 90%;
  margin: 0 auto;
  padding-block: 1.5rem;
  ul {
    margin: 0 auto;
    width: 100%;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-auto-flow: dense;
    justify-items: center;
    align-items: center;
    justify-content: space-around;
  }
`,m=({value:a,data:n})=>s(Re,{children:[a,":",e("span",{children:n})]}),Re=o.p`
  font-weight: 600;
  color: var(--text);
  span {
    font-weight: 300;
    margin-left: 1ch;
  }
`;m.propTypes={value:u.string.isRequired,data:u.oneOfType([u.string,u.number])};const Me={AFG:"Afghanistan",ALA:"\xC5land Islands",ALB:"Albania",DZA:"Algeria",ASM:"American Samoa",AND:"Andorra",AGO:"Angola",AIA:"Anguilla",ATA:"Antarctica",ATG:"Antigua and Barbuda",ARG:"Argentina",ARM:"Armenia",ABW:"Aruba",AUS:"Australia",AUT:"Austria",AZE:"Azerbaijan",BHS:"Bahamas",BHR:"Bahrain",BGD:"Bangladesh",BRB:"Barbados",BLR:"Belarus",BEL:"Belgium",BLZ:"Belize",BEN:"Benin",BMU:"Bermuda",BTN:"Bhutan",BOL:"Bolivia (Plurinational State of)",BES:"Bonaire, Sint Eustatius and Saba",BIH:"Bosnia and Herzegovina",BWA:"Botswana",BVT:"Bouvet Island",BRA:"Brazil",IOT:"British Indian Ocean Territory",UMI:"United States Minor Outlying Islands",VGB:"Virgin Islands (British)",VIR:"Virgin Islands (U.S.)",BRN:"Brunei Darussalam",BGR:"Bulgaria",BFA:"Burkina Faso",BDI:"Burundi",KHM:"Cambodia",CMR:"Cameroon",CAN:"Canada",CPV:"Cabo Verde",CYM:"Cayman Islands",CAF:"Central African Republic",TCD:"Chad",CHL:"Chile",CHN:"China",CXR:"Christmas Island",CCK:"Cocos (Keeling) Islands",COL:"Colombia",COM:"Comoros",COG:"Congo",COD:"Congo (Democratic Republic of the)",COK:"Cook Islands",CRI:"Costa Rica",HRV:"Croatia",CUB:"Cuba",CUW:"Cura\xE7ao",CYP:"Cyprus",CZE:"Czech Republic",DNK:"Denmark",DJI:"Djibouti",DMA:"Dominica",DOM:"Dominican Republic",ECU:"Ecuador",EGY:"Egypt",SLV:"El Salvador",GNQ:"Equatorial Guinea",ERI:"Eritrea",EST:"Estonia",ETH:"Ethiopia",FLK:"Falkland Islands (Malvinas)",FRO:"Faroe Islands",FJI:"Fiji",FIN:"Finland",FRA:"France",GUF:"French Guiana",PYF:"French Polynesia",ATF:"French Southern Territories",GAB:"Gabon",GMB:"Gambia",GEO:"Georgia",DEU:"Germany",GHA:"Ghana",GIB:"Gibraltar",GRC:"Greece",GRL:"Greenland",GRD:"Grenada",GLP:"Guadeloupe",GUM:"Guam",GTM:"Guatemala",GGY:"Guernsey",GIN:"Guinea",GNB:"Guinea-Bissau",GUY:"Guyana",HTI:"Haiti",HMD:"Heard Island and McDonald Islands",VAT:"Vatican City",HND:"Honduras",HUN:"Hungary",HKG:"Hong Kong",ISL:"Iceland",IND:"India",IDN:"Indonesia",CIV:"Ivory Coast",IRN:"Iran (Islamic Republic of)",IRQ:"Iraq",IRL:"Ireland",IMN:"Isle of Man",ISR:"Israel",ITA:"Italy",JAM:"Jamaica",JPN:"Japan",JEY:"Jersey",JOR:"Jordan",KAZ:"Kazakhstan",KEN:"Kenya",KIR:"Kiribati",KWT:"Kuwait",KGZ:"Kyrgyzstan",LAO:"Lao People's Democratic Republic",LVA:"Latvia",LBN:"Lebanon",LSO:"Lesotho",LBR:"Liberia",LBY:"Libya",LIE:"Liechtenstein",LTU:"Lithuania",LUX:"Luxembourg",MAC:"Macao",MKD:"North Macedonia",MDG:"Madagascar",MWI:"Malawi",MYS:"Malaysia",MDV:"Maldives",MLI:"Mali",MLT:"Malta",MHL:"Marshall Islands",MTQ:"Martinique",MRT:"Mauritania",MUS:"Mauritius",MYT:"Mayotte",MEX:"Mexico",FSM:"Micronesia (Federated States of)",MDA:"Moldova (Republic of)",MCO:"Monaco",MNG:"Mongolia",MNE:"Montenegro",MSR:"Montserrat",MAR:"Morocco",MOZ:"Mozambique",MMR:"Myanmar",NAM:"Namibia",NRU:"Nauru",NPL:"Nepal",NLD:"Netherlands",NCL:"New Caledonia",NZL:"New Zealand",NIC:"Nicaragua",NER:"Niger",NGA:"Nigeria",NIU:"Niue",NFK:"Norfolk Island",PRK:"Korea (Democratic People's Republic of)",MNP:"Northern Mariana Islands",NOR:"Norway",OMN:"Oman",PAK:"Pakistan",PLW:"Palau",PSE:"Palestine, State of",PAN:"Panama",PNG:"Papua New Guinea",PRY:"Paraguay",PER:"Peru",PHL:"Philippines",PCN:"Pitcairn",POL:"Poland",PRT:"Portugal",PRI:"Puerto Rico",QAT:"Qatar",UNK:"Republic of Kosovo",REU:"R\xE9union",ROU:"Romania",RUS:"Russian Federation",RWA:"Rwanda",BLM:"Saint Barth\xE9lemy",SHN:"Saint Helena, Ascension and Tristan da Cunha",KNA:"Saint Kitts and Nevis",LCA:"Saint Lucia",MAF:"Saint Martin (French part)",SPM:"Saint Pierre and Miquelon",VCT:"Saint Vincent and the Grenadines",WSM:"Samoa",SMR:"San Marino",STP:"Sao Tome and Principe",SAU:"Saudi Arabia",SEN:"Senegal",SRB:"Serbia",SYC:"Seychelles",SLE:"Sierra Leone",SGP:"Singapore",SXM:"Sint Maarten (Dutch part)",SVK:"Slovakia",SVN:"Slovenia",SLB:"Solomon Islands",SOM:"Somalia",ZAF:"South Africa",SGS:"South Georgia and the South Sandwich Islands",KOR:"Korea (Republic of)",ESP:"Spain",LKA:"Sri Lanka",SDN:"Sudan",SSD:"South Sudan",SUR:"Suriname",SJM:"Svalbard and Jan Mayen",SWZ:"Swaziland",SWE:"Sweden",CHE:"Switzerland",SYR:"Syrian Arab Republic",TWN:"Taiwan",TJK:"Tajikistan",TZA:"Tanzania, United Republic of",THA:"Thailand",TLS:"Timor-Leste",TGO:"Togo",TKL:"Tokelau",TON:"Tonga",TTO:"Trinidad and Tobago",TUN:"Tunisia",TUR:"Turkey",TKM:"Turkmenistan",TCA:"Turks and Caicos Islands",TUV:"Tuvalu",UGA:"Uganda",UKR:"Ukraine",ARE:"United Arab Emirates",GBR:"United Kingdom of Great Britain and Northern Ireland",USA:"United States of America",URY:"Uruguay",UZB:"Uzbekistan",VUT:"Vanuatu",VEN:"Venezuela (Bolivarian Republic of)",VNM:"Vietnam",WLF:"Wallis and Futuna",ESH:"Western Sahara",YEM:"Yemen",ZMB:"Zambia",ZWE:"Zimbabwe"},Ce=()=>{var l;let{code:a}=z(),n=y();const[t,i]=T(`alpha/${a.toLowerCase()}`,{},a);return t?e(k,{}):s(Ae,{children:[e(we,{onClick:()=>{n.goBack()},children:"\u2190 Back"}),s("section",{children:[e(Ne,{children:e("img",{src:i.flags.svg,alt:i.name})}),s(ye,{children:[e("h2",{children:i.name}),s(Be,{children:[s(Le,{children:[e(m,{value:"Native Name",data:i.nativeName}),e(m,{value:"Population",data:i.population.toLocaleString()}),e(m,{value:"Region",data:i.region}),e(m,{value:"Sub Region",data:i.subRegion||"-"}),e(m,{value:"Capital",data:i.capital||"-"})]}),s(Te,{children:[e(m,{value:"Top Level Domain",data:i.topLevelDomain[0]}),e(m,{value:"Currencies",data:i.currencies.map(c=>c.name).join(", ")}),e(m,{value:"Languages",data:i.languages.map(c=>c.name).join(", ")})]})]}),s(Ie,{children:[e("h3",{children:"Border Countries:"}),e("ul",{children:(l=i.borders)==null?void 0:l.map(c=>e("li",{children:e(ke,{to:`/${c}`,children:Me[c]})},c))})]})]})]})]})},Ae=o.section`
  padding-block: 2.5rem;
  width: 90%;
  margin: 0 auto;

  > section {
    @media screen and (min-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      gap: 5rem;
    }
  }
`,ye=o.div`
  flex-basis: 60%;
  color: var(--text);
`,we=o.div`
  font-weight: 600;
  background-color: var(--input);
  color: var(--text);

  display: inline-block;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 0 10px var(--boxShadow);
  margin-bottom: 3rem;
  border: 1px solid transparent;
  border-radius: var(--borderRadius);
  &:hover {
    cursor: pointer;
    border: 1px solid var(--text);
  }
`,Ne=o.div`
  flex-basis: 40%;
  max-width: 450px;
  margin: 0 auto;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px var(--boxShadow);
  img {
    height: 100%;
    object-fit: cover;
    margin: 0 auto;
  }
`,Be=o.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  line-height: 2;
  margin-bottom: 2rem;

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    gap: 5rem;
  }
`,Le=o.div``,Te=o.div``,Ie=o.div`
  color: var(--text);

  h3 {
    margin-bottom: 0.5rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`,ke=o(C)`
  background: var(--input);
  color: var(--text);
  display: inline-block;
  padding: 0.25rem 0.5rem;
  box-shadow: 0 0 10px var(--element);
  border-radius: var(--borderRadius);

  border: 1px solid transparent;
  &:hover {
    border: 1px solid var(--text);
  }
`,Ge={light:{text:"hsl(200, 15%, 8%)",background:"hsl(0, 0%, 98%)",input:"white",element:"white"},dark:{text:"white",background:"hsl(207, 26%, 17%)",input:"hsl(209, 23%, 22%)",element:"hsl(209, 23%, 22%)"}},De=Y`
    :root{
        --fontStack : 'Nunito Sans', sans-serif;
        --fontSizeHome : 18px;
        --fontSizeDetail : 14px;

        --boxShadow : rgba(0, 0, 0, 0.3);
        --borderRadius : 5px;
        --background : ${({theme:a})=>a.background};
        --text : ${({theme:a})=>a.text};
        --input : ${({theme:a})=>a.input};
        --element : ${({theme:a})=>a.element};
        
      }

    * {
    margin: 0;
    padding: 0;
  }
  
  *,
  *:before, 
  *:after {
    box-sizing: border-box;
  }
  
  body {
    font-family: var(--fontStack);
    background : var(--background);
    transition: all .2s linear;
  }
  
  
  img {
    max-width: 100%;
    display: block;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }  
input{
  font-family: var(---fontStack);
}

button {
  font-family: var(---fontStack);
    border : none;
    &:hover{
        cursor: pointer;
    }
}

`,Ee=()=>{const[a,n]=h.exports.useState("light"),t=r=>{localStorage.setItem("theme",r),n(r)},i=()=>{a==="light"&&t("dark"),a==="dark"&&t("light")};return h.exports.useEffect(()=>{const r=localStorage.getItem("theme");window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&!r?t("dark"):r?n(r):t("light")},[]),[a,i]};class Pe extends w.Component{constructor(n){super(n);this.state={hasError:!1}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,t){logErrorToMyService(n,t)}render(){return this.state.hasError?e("h1",{children:"Something went wrong."}):this.props.children}}function He(){const[a,n]=Ee(),t=()=>{n()};return e(x,{children:s(Z,{theme:Ge[a],children:[e(De,{}),s(Pe,{children:[e(B,{mode:a,switchMode:t}),s(q,{children:[s(N,{exact:!0,path:"/",children:[e(ce,{}),e(be,{})]}),e(N,{exact:!0,path:"/:code",children:e(Ce,{})})]})]})]})})}const G=({children:a})=>{const[n,t]=h.exports.useState(""),[i,r]=h.exports.useState([]),g={searchValue:n,region:i,inputSearch:p=>{t(p)},selectRegion:p=>{r(p)}};return e(b.Provider,{value:g,children:a})};G.propTypes={children:u.element.isRequired};J.render(e(w.StrictMode,{children:e(Q,{children:e(G,{children:e(He,{})})})}),document.getElementById("root"));
