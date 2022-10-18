import{_ as A,r as x,H as V,F as P,a as B,l as I,o as i,c as n,d as h,n as f,e as a,b as e,m as d,v as u,w as k,T as C,f as g,g as w,h as p,p as D,j as H,k as c}from"./index.191bf118.js";const z="/image/luis_comic.png",M="/image/ninja_comic.png",L="/image/filter_logo.png",v="/image/back.png",W={props:{isburimg:Boolean},setup(m){const o=x(),_=x(),t=x(),j=x(!1),T=x(!0),b=x(!1),y=x(!0),r=x(!1);function l(){r.value=!0,document.body.classList.add("modal-open")}function O(){r.value=!1,document.body.classList.remove("modal-open")}function q(){t.value=!0,document.body.classList.add("modal-open")}function E(){_.value=!0,document.body.classList.add("modal-open")}function F(){o.value=!0,document.body.classList.add("modal-open")}function N(){t.value=!1,document.body.classList.remove("modal-open")}function R(){_.value=!1,document.body.classList.remove("modal-open")}function S(){o.value=!1,document.body.classList.remove("modal-open")}return{comic_01:o,comic_02:_,comic_03:t,isCol:j,isChapter:T,isbgheight:b,comicopen_03:q,comicopen_02:E,comicopen_01:F,comicclose_03:N,comicclose_02:R,comicclose_01:S,isMobileFilter:r,FilterOpen:l,FilterClose:O,isfiltericon:y}},components:{Header:V,Footer:P}},s=m=>(D("data-v-ca6ee18a"),m=m(),H(),m),G={class:"relative w-full h-full lg:h-screen bg-[#EFEFED] lg:overflow-hidden pb-[130px] lg:pb-0"},J=p('<div class="absolute flex justify-center items-center z-20 w-full" data-v-ca6ee18a><img src="'+z+'" class="w-[65%] sm:w-[50%] md::w-[35%]" data-v-ca6ee18a></div><div class="absolute pt-40 flex flex-col justify-center items-end w-full z-30" data-v-ca6ee18a><div class="flex flex-row justify-center items-end w-full space-x-2" data-v-ca6ee18a><span class="font-TTOctosquaresBold text-white text-[24px] leading-none" data-v-ca6ee18a>Artis</span><span class="font-AntonRegular text-white text-[96px] leading-[5.5rem]" data-v-ca6ee18a>Luis</span></div></div>',2),K=s(()=>e("p",{class:"text-white px-20 text-center py-2"},"MadManga is an international team, with Silicon Valley venture capitalists as consultants and team members.",-1)),Q=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-white"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"})],-1)),U=[Q],X={class:"absolute bottom-4 right-4 z-30"},Y=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5 fill-white"},[e("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"})],-1)),Z=[Y],$=s(()=>e("div",{class:"absolute top-0 w-full h-full rounded-b-[2rem] overflow-hidden z-20",style:{background:"linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #ff5500 100%)"}},null,-1)),ee=p('<div class="absolute flex justify-center items-center z-20 w-full" data-v-ca6ee18a><img src="'+M+'" class="w-[65%] sm:w-[50%] md::w-[35%]" data-v-ca6ee18a></div><div class="absolute pt-40 flex flex-col justify-center items-end w-full z-30" data-v-ca6ee18a><div class="flex flex-row justify-center items-end w-full space-x-2" data-v-ca6ee18a><span class="font-TTOctosquaresBold text-white text-[24px] leading-none" data-v-ca6ee18a>Artis</span><span class="font-AntonRegular text-white text-[96px] leading-[5.5rem]" data-v-ca6ee18a>???</span></div></div>',2),te={key:0,class:"text-white px-20 text-center py-2"},oe=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-white"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"})],-1)),se=[oe],le={class:"absolute bottom-4 right-4 z-30"},ie=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5 fill-white"},[e("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"})],-1)),ne=[ie],ce=s(()=>e("div",{class:"absolute top-0 w-full h-full rounded-b-[2rem] overflow-hidden z-20",style:{background:"linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #ff5500 100%)"}},null,-1)),ae={class:"max-w-[90%] w-full mx-auto flex flex-col lg:flex-row pb-12 pt-0 sm:py-12 lg:py-24"},re={class:"w-full xl:w-[50%] flex flex-row space-x-0 lg:space-x-6"},de={class:"hidden lg:flex w-1/5 flex-col"},fe={class:"space-y-4 pt-12 sticky top-8"},xe=s(()=>e("h5",{class:"text-[#ff5500]"},"Seasons",-1)),me={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-[#ff5500]"},he=s(()=>e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),_e=[he],ue={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-[#ff5500]"},ge=s(()=>e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),we=[ge],pe={key:0,class:"bg-white p-2 rounded-lg border border-gray-200"},ve={class:"text-[#ff5500] text-[12px] flex flex-col justify-center items-start space-y-1"},be=s(()=>e("h5",{class:"text-[#ff5500]"},"Order",-1)),ye={class:"flex flex-col space-y-1"},ke={class:"flex justify-start items-center"},Ce=s(()=>e("label",{for:"contactChoice1",class:"text-[#ff5500] text-[12px] ml-1"},"Frst episode",-1)),je={class:"flex justify-start items-center"},Te=s(()=>e("label",{for:"contactChoice1",class:"text-[#ff5500] text-[12px] ml-1"},"Last episode",-1)),Be={key:0,class:"w-full xl:w-4/5 flex flex-col"},ze={class:"relative flex flex-row items-center py-6 lg:py-0"},Me=s(()=>e("img",{src:L,class:"w-[25px]"},null,-1)),Le=[Me],Oe=s(()=>e("h5",{class:"font-TTOctosquaresBold text-[#ff5500] text-[32px] text-center lg:text-left w-full"},"Episode",-1)),qe={class:"w-full min-h-[200px] rounded-[1rem] border border-gray-200 shadow-sm bg-white p-2 overflow-hidden flex flex-row space-x-2"},Ee=s(()=>e("div",{class:"w-[50%] bg-cover bg-center rounded-lg",style:{"background-image":"url(/image/comic/comic_poster/luis_comic_03.png)"}},null,-1)),Fe={class:"w-[50%] flex flex-col justify-center items-start"},Ne=s(()=>e("div",{class:"flex flex-col pt-12"},[e("div",null,[e("span",{class:"font-TTOctosquaresBold text-[28px]"},"#03"),e("span",{class:"ml-2 font-TTOctosquaresBold text-[#ff5500] text-[12px]"},"New")]),e("h5",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),Re={class:"w-full h-full flex justify-end items-end"},Se=c("Read "),Ae=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),Ve=[Se,Ae],Pe={class:"w-full min-h-[200px] rounded-[1rem] border border-gray-200 shadow-sm bg-white p-2 overflow-hidden flex flex-row space-x-2"},Ie=s(()=>e("div",{class:"w-[50%] bg-cover bg-center rounded-lg",style:{"background-image":"url(/image/comic/comic_poster/luis_comic_02.png)"}},null,-1)),De={class:"w-[50%] flex flex-col justify-center items-start"},He=s(()=>e("div",{class:"flex flex-col pt-12"},[e("div",null,[e("span",{class:"font-TTOctosquaresBold text-[28px]"},"#02")]),e("h5",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),We={class:"w-full h-full flex justify-end items-end"},Ge=c("Read "),Je=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),Ke=[Ge,Je],Qe={class:"w-full min-h-[200px] rounded-[1rem] border border-gray-200 shadow-sm bg-white p-2 overflow-hidden flex flex-row space-x-2"},Ue=s(()=>e("div",{class:"w-[50%] bg-cover bg-center rounded-lg",style:{"background-image":"url(/image/comic/comic_poster/luis_comic_01.png)"}},null,-1)),Xe={class:"w-[50%] flex flex-col justify-center items-start"},Ye=s(()=>e("div",{class:"flex flex-col pt-12"},[e("div",null,[e("span",{class:"font-TTOctosquaresBold text-[28px]"},"#01")]),e("h5",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),Ze={class:"w-full h-full flex justify-end items-end"},$e=c("Read "),et=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),tt=[$e,et],ot={key:1,class:"w-full xl:w-4/5 flex flex-col"},st={class:"relative flex flex-row items-center py-6 lg:py-0"},lt=s(()=>e("img",{src:L,class:"w-[25px]"},null,-1)),it=[lt],nt=s(()=>e("h5",{class:"font-TTOctosquaresBold text-[#ff5500] text-[32px] text-center lg:text-left w-full"},"MM Chapter",-1)),ct={class:"w-full min-h-[200px] rounded-[1rem] border border-gray-200 shadow-sm bg-white p-2 overflow-hidden flex flex-row space-x-2"},at=s(()=>e("div",{class:"w-[50%] bg-cover bg-center rounded-lg",style:{"background-image":"url(/image/comic/comic_poster/luis_comic_03.png)"}},null,-1)),rt={class:"w-[50%] flex flex-col justify-center items-start"},dt=s(()=>e("div",{class:"flex flex-col pt-12"},[e("div",null,[e("span",{class:"font-TTOctosquaresBold text-[28px]"},"#03"),e("span",{class:"ml-2 font-TTOctosquaresBold text-[#ff5500] text-[12px]"},"New")]),e("h5",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),ft={class:"w-full h-full flex justify-end items-end"},xt=c("Read "),mt=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),ht=[xt,mt],_t={class:"w-full min-h-[200px] rounded-[1rem] border border-gray-200 shadow-sm bg-white p-2 overflow-hidden flex flex-row space-x-2"},ut=s(()=>e("div",{class:"w-[50%] bg-cover bg-center rounded-lg",style:{"background-image":"url(/image/comic/comic_poster/luis_comic_02.png)"}},null,-1)),gt={class:"w-[50%] flex flex-col justify-center items-start"},wt=s(()=>e("div",{class:"flex flex-col pt-12"},[e("div",null,[e("span",{class:"font-TTOctosquaresBold text-[28px]"},"#02")]),e("h5",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),pt={class:"w-full h-full flex justify-end items-end"},vt=c("Read "),bt=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),yt=[vt,bt],kt={class:"w-full min-h-[200px] rounded-[1rem] border border-gray-200 shadow-sm bg-white p-2 overflow-hidden flex flex-row space-x-2"},Ct=s(()=>e("div",{class:"w-[50%] bg-cover bg-center rounded-lg",style:{"background-image":"url(/image/comic/comic_poster/luis_comic_01.png)"}},null,-1)),jt={class:"w-[50%] flex flex-col justify-center items-start"},Tt=s(()=>e("div",{class:"flex flex-col pt-12"},[e("div",null,[e("span",{class:"font-TTOctosquaresBold text-[28px]"},"#01")]),e("h5",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),Bt={class:"w-full h-full flex justify-end items-end"},zt=c("Read "),Mt=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),Lt=[zt,Mt],Ot={key:0,class:"relative overflow-hidden w-full xl:w-1/2 hidden xl:flex flex-col justify-start items-center"},qt=p('<div class="fixed bottom-0 lg:right-0 2xl:right-20 flex flex-col justify-center items-center" data-v-ca6ee18a><div class="flex flex-col justify-center items-center" data-v-ca6ee18a><div class="flex flex-row items-end justify-center text-center space-x-2" data-v-ca6ee18a><span class="font-TTOctosquaresBold text-[#ff5500] text-[24px] leading-1" data-v-ca6ee18a>Artis</span><span class="font-AntonRegular text-[#ff5500] text-[96px] leading-none" data-v-ca6ee18a>Luis</span></div><p class="w-[360px] text-[12px] text-[#ff5500] py-4 text-center" data-v-ca6ee18a>MadManga is an international team, with Silicon Valley venture capitalists as consultants and team members.</p></div><img src="'+z+'" class="w-[55%] xl:w-[50%] 2xl:w-[90%]" data-v-ca6ee18a></div>',1),Et=[qt],Ft={key:1,class:"relative overflow-hidden w-full xl:w-1/2 hidden xl:flex flex-col justify-start items-center"},Nt=p('<div class="fixed bottom-0 lg:right-0 2xl:right-20 flex flex-col justify-center items-center" data-v-ca6ee18a><div class="flex flex-col justify-center items-center" data-v-ca6ee18a><div class="flex flex-row items-end justify-center text-center space-x-2" data-v-ca6ee18a><span class="font-TTOctosquaresBold text-[#ff5500] text-[24px] leading-1" data-v-ca6ee18a>Artis</span><span class="font-AntonRegular text-[#ff5500] text-[96px] leading-none" data-v-ca6ee18a>Ninja</span></div><p class="w-[360px] text-[12px] text-[#ff5500] py-4 text-center" data-v-ca6ee18a>MadManga is an international team, with Silicon Valley venture capitalists as consultants and team members.</p></div><img src="'+M+'" class="w-[55%] xl:w-[50%] 2xl:w-[90%]" data-v-ca6ee18a></div>',1),Rt=[Nt],St={key:0,class:"fixed top-0 left-0 w-full h-full md:h-screen bg-white md:bg-white/80 flex justify-center items-center z-[210]"},At={class:"hidden md:flex absolute top-4 right-4"},Vt=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-gray-900"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)),Pt=[Vt],It={class:"absolute md:hidden top-4 left-4 z-20"},Dt=s(()=>e("img",{src:v},null,-1)),Ht=[Dt],Wt={class:"relative max-w-5xl w-full hidden lg:flex flex-row justify-end items-end px-2"},Gt=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-1"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})],-1)),Jt=c(" Prev "),Kt=[Gt,Jt],Qt={class:"relative max-w-2xl w-full mx-auto flex flex-col justify-center items-center"},Ut=s(()=>e("div",{class:"pb-6"},[e("h5",{class:"font-TTOctosquaresBold text-center text-[36px]"},"#03"),e("p",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),Xt={class:"relative h-[450px] overflow-y-scroll flex flex-col space-y-1"},Yt=s(()=>e("div",{class:"pt-6"},[e("p",{class:"text-gray-700"},"@ Madmanga")],-1)),Zt=c("Next "),$t=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),eo=[Zt,$t],to={class:"relative max-w-2xl w-full h-full mx-auto flex lg:hidden flex-col justify-center items-center"},oo=s(()=>e("div",{class:"pb-6"},[e("h5",{class:"font-TTOctosquaresBold text-center text-[36px]"},"#03"),e("p",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),so={class:"relative h-[75vh] overflow-y-scroll flex flex-col space-y-1"},lo={class:"pt-6 flex flex-row w-full justify-between px-4"},io=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-1"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})],-1)),no=c(" Prev "),co=[io,no],ao=s(()=>e("p",{class:"text-gray-700"},"@ Madmanga",-1)),ro=c("Next "),fo=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),xo=[ro,fo],mo={key:0,class:"fixed top-0 w-full h-full md:h-screen bg-white md:bg-white/80 flex justify-center items-center z-[210]"},ho={class:"hidden md:flex absolute top-4 right-4"},_o=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-gray-900"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)),uo=[_o],go={class:"absolute md:hidden top-4 left-4 z-20"},wo=s(()=>e("img",{src:v},null,-1)),po=[wo],vo={class:"relative max-w-5xl w-full hidden lg:flex flex-row justify-end items-end px-2"},bo=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-1"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})],-1)),yo=c(" Prev "),ko=[bo,yo],Co={class:"relative max-w-2xl w-full mx-auto flex flex-col justify-center items-center"},jo=s(()=>e("div",{class:"pb-6"},[e("h5",{class:"font-TTOctosquaresBold text-center text-[36px]"},"#02"),e("p",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),To={class:"relative h-[450px] overflow-y-scroll flex flex-col space-y-1"},Bo=s(()=>e("div",{class:"pt-6"},[e("p",{class:"text-gray-700"},"@ Madmanga")],-1)),zo=c("Next "),Mo=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),Lo=[zo,Mo],Oo={class:"relative max-w-2xl w-full h-full mx-auto flex lg:hidden flex-col justify-center items-center"},qo=s(()=>e("div",{class:"pb-6"},[e("h5",{class:"font-TTOctosquaresBold text-center text-[36px]"},"#02"),e("p",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),Eo={class:"relative h-[75vh] overflow-y-scroll flex flex-col space-y-1"},Fo={class:"pt-6 flex flex-row w-full justify-between px-4"},No=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-1"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})],-1)),Ro=c(" Prev "),So=[No,Ro],Ao=s(()=>e("p",{class:"text-gray-700"},"@ Madmanga",-1)),Vo=c("Next "),Po=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),Io=[Vo,Po],Do={key:0,class:"fixed top-0 w-full h-full md:h-screen bg-white md:bg-white/80 flex justify-center items-center z-[210]"},Ho={class:"hidden md:flex absolute top-4 right-4"},Wo=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-gray-900"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)),Go=[Wo],Jo={class:"absolute md:hidden top-4 left-4 z-20"},Ko=s(()=>e("img",{src:v},null,-1)),Qo=[Ko],Uo={class:"relative max-w-5xl w-full hidden lg:flex flex-row justify-end items-end px-2"},Xo=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-1"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})],-1)),Yo=c(" Prev "),Zo=[Xo,Yo],$o={class:"relative max-w-2xl w-full mx-auto flex flex-col justify-center items-center"},es=s(()=>e("div",{class:"pb-6"},[e("h5",{class:"font-TTOctosquaresBold text-center text-[36px]"},"#01"),e("p",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),ts={class:"relative h-[450px] overflow-y-scroll flex flex-col space-y-1"},os=s(()=>e("div",{class:"pt-6"},[e("p",{class:"text-gray-700"},"@ Madmanga")],-1)),ss=c("Next "),ls=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),is=[ss,ls],ns={class:"relative max-w-2xl w-full h-full mx-auto flex lg:hidden flex-col justify-center items-center"},cs=s(()=>e("div",{class:"pb-6"},[e("h5",{class:"font-TTOctosquaresBold text-center text-[36px]"},"#01"),e("p",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),as={class:"relative h-[75vh] overflow-y-scroll flex flex-col space-y-1"},rs={class:"pt-6 flex flex-row w-full justify-between px-4"},ds=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-1"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})],-1)),fs=c(" Prev "),xs=[ds,fs],ms=s(()=>e("p",{class:"text-gray-700"},"@ Madmanga",-1)),hs=c("Next "),_s=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),us=[hs,_s],gs={key:0,class:"fixed top-0 w-full h-screen bg-white/80 flex justify-end items-center z-[210]"},ws={class:"flex absolute top-8 left-8 z-30"},ps=s(()=>e("img",{src:v,class:"w-[25px]"},null,-1)),vs=[ps],bs={class:"relative w-[200px] h-full bg-[#EFEFED] z-[110] flex flex-col justify-start px-6"},ys={class:"space-y-4 pt-12"},ks=s(()=>e("h5",{class:"text-[#ff5500]"},"Seasons",-1)),Cs={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-[#ff5500]"},js=s(()=>e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),Ts=[js],Bs={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-[#ff5500]"},zs=s(()=>e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),Ms=[zs],Ls={key:0,class:"bg-white p-2 rounded-lg border border-gray-200"},Os={class:"text-[#ff5500] text-[12px] flex flex-col justify-center items-start space-y-1"},qs=s(()=>e("h5",{class:"text-[#ff5500]"},"Order",-1)),Es={class:"flex flex-col space-y-2"},Fs={class:"flex justify-start items-center"},Ns=s(()=>e("label",{class:"text-[#ff5500] text-[12px] ml-2"},"Frst episode",-1)),Rs={class:"flex justify-start items-center"},Ss=s(()=>e("label",{class:"text-[#ff5500] text-[12px] ml-2"},"Last episode",-1));function As(m,o,_,t,j,T){const b=B("Header"),y=B("Footer"),r=I("lazy");return i(),n("div",G,[h(b,{burcolor:"text-white",isburimg:!1}),t.isChapter?(i(),n("div",{key:0,class:f(["relative flex xl:hidden w-full h-[340px] sm:h-[480px] bg-[#ff5500] rounded-b-[2rem] transition-all flex items-center overflow-hidden",{"h-[540px] xs:h-[560px]":t.isbgheight}])},[J,t.isbgheight?(i(),n("div",{key:0,class:f(["absolute bottom-8 flex flex-col w-full z-30 opacity-0",{"opacity-100":t.isbgheight}])},[K,t.isbgheight?(i(),n("button",{key:0,class:"flex justify-center items-center w-full",onClick:o[0]||(o[0]=l=>t.isbgheight=!t.isbgheight),type:"button"},U)):a("",!0)],2)):a("",!0),e("span",X,[e("button",{onClick:o[1]||(o[1]=l=>t.isbgheight=!t.isbgheight),type:"button"},Z)]),$],2)):a("",!0),t.isChapter?a("",!0):(i(),n("div",{key:1,class:f(["relative flex xl:hidden w-full h-[340px] sm:h-[480px] bg-[#ff5500] rounded-b-[2rem] transition-all flex items-center overflow-hidden",{"h-[540px] xs:h-[560px]":t.isbgheight}])},[ee,t.isbgheight?(i(),n("div",{key:0,class:f(["absolute bottom-8 flex flex-col w-full z-30 opacity-0",{"opacity-100":t.isbgheight}])},[t.isbgheight?(i(),n("p",te,"MadManga is an international team, with Silicon Valley venture capitalists as consultants and team members.")):a("",!0),t.isbgheight?(i(),n("button",{key:1,class:"flex justify-center items-center w-full",onClick:o[2]||(o[2]=l=>t.isbgheight=!t.isbgheight),type:"button"},se)):a("",!0)],2)):a("",!0),e("span",le,[e("button",{onClick:o[3]||(o[3]=l=>t.isbgheight=!t.isbgheight),type:"button"},ne)]),ce],2)),e("div",ae,[e("div",re,[e("div",de,[e("div",fe,[e("div",{onClick:o[4]||(o[4]=l=>t.isfiltericon=!t.isfiltericon),class:"flex flex-row items-center space-x-2 cursor-pointer"},[xe,d((i(),n("svg",me,_e,512)),[[u,t.isfiltericon]]),d((i(),n("svg",ue,we,512)),[[u,!t.isfiltericon]])]),h(C,{name:"modal"},{default:k(()=>[t.isfiltericon?(i(),n("div",pe,[e("ul",ve,[e("li",{class:f([{"bg-[#ff5500] rounded-lg text-white":t.isChapter},"px-2 py-1 cursor-pointer"]),onClick:o[5]||(o[5]=l=>t.isChapter=!0)},"MM chapter",2),e("li",{class:f([{"bg-[#ff5500] rounded-lg text-white":!t.isChapter},"px-2 py-1 cursor-pointer"]),onClick:o[6]||(o[6]=l=>t.isChapter=!1)},"Extra chapter",2)])])):a("",!0)]),_:1}),be,e("ul",ye,[e("li",ke,[e("input",{onClick:o[7]||(o[7]=l=>t.isCol=!0),type:"radio",id:"contactChoice1",name:"order",value:"frst",class:"w-4 h-4 rounded bg-white border border-gray-200 focus:border-transparent focus:bg-[#ff5500] text-[#ff5500] focus:ring-1 focus:ring-offset-2 focus:ring-[#ff5500]"}),Ce]),e("li",je,[e("input",{onClick:o[8]||(o[8]=l=>t.isCol=!1),type:"radio",id:"contactChoice1",name:"order",value:"last",class:"w-4 h-4 rounded bg-white border border-gray-200 focus:border-transparent focus:bg-[#ff5500] text-[#ff5500] focus:ring-1 focus:ring-offset-2 focus:ring-[#ff5500]",checked:""}),Te])])])]),t.isChapter?(i(),n("div",Be,[e("div",ze,[e("button",{type:"button",class:"flex lg:hidden",onClick:o[9]||(o[9]=(...l)=>t.FilterOpen&&t.FilterOpen(...l))},Le),Oe]),e("div",{class:f(["flex flex-col space-y-4 h-full lg:h-[80%] 2xl:h-[85%] lg:overflow-y-scroll lg:pr-4",{"flex-col-reverse space-y-reverse":t.isCol}])},[e("div",qe,[Ee,e("div",Fe,[Ne,e("div",Re,[e("button",{onClick:o[10]||(o[10]=(...l)=>t.comicopen_03&&t.comicopen_03(...l)),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center transition-all hover:bg-orange-700 z-30"},Ve)])])]),e("div",Pe,[Ie,e("div",De,[He,e("div",We,[e("button",{onClick:o[11]||(o[11]=(...l)=>t.comicopen_02&&t.comicopen_02(...l)),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center transition-all hover:bg-orange-700 z-30"},Ke)])])]),e("div",Qe,[Ue,e("div",Xe,[Ye,e("div",Ze,[e("button",{onClick:o[12]||(o[12]=(...l)=>t.comicopen_01&&t.comicopen_01(...l)),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center transition-all hover:bg-orange-700 z-30"},tt)])])])],2)])):a("",!0),t.isChapter?a("",!0):(i(),n("div",ot,[e("div",st,[e("button",{type:"button",class:"flex lg:hidden",onClick:o[13]||(o[13]=(...l)=>t.FilterOpen&&t.FilterOpen(...l))},it),nt]),e("div",{class:f(["flex flex-col space-y-4 h-full lg:h-[80%] 2xl:h-[85%] lg:overflow-y-scroll lg:pr-4",{"flex-col-reverse space-y-reverse":t.isCol}])},[e("div",ct,[at,e("div",rt,[dt,e("div",ft,[e("button",{onClick:o[14]||(o[14]=(...l)=>t.comicopen_03&&t.comicopen_03(...l)),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center transition-all hover:bg-orange-700 z-30"},ht)])])]),e("div",_t,[ut,e("div",gt,[wt,e("div",pt,[e("button",{onClick:o[15]||(o[15]=(...l)=>t.comicopen_02&&t.comicopen_02(...l)),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center transition-all hover:bg-orange-700 z-30"},yt)])])]),e("div",kt,[Ct,e("div",jt,[Tt,e("div",Bt,[e("button",{onClick:o[16]||(o[16]=(...l)=>t.comicopen_01&&t.comicopen_01(...l)),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center transition-all hover:bg-orange-700 z-30"},Lt)])])])],2)]))]),t.isChapter?(i(),n("div",Ot,Et)):a("",!0),t.isChapter?a("",!0):(i(),n("div",Ft,Rt))]),h(y,{title:"MM-Comic World",textcolor:"text-[#ff5500]",bgcolor:"",crcolor:"text-[#ff5500]",sicolor:"fill-[#ff5500]"}),(i(),g(w,{to:"body"},[t.comic_03?(i(),n("div",St,[e("div",At,[e("button",{type:"button",onClick:o[17]||(o[17]=(...l)=>t.comicclose_03&&t.comicclose_03(...l))},Pt)]),e("div",It,[e("button",{type:"button",onClick:o[18]||(o[18]=(...l)=>t.comicclose_03&&t.comicclose_03(...l))},Ht)]),e("div",Wt,[e("button",{onClick:o[19]||(o[19]=l=>{t.comic_03=!1,t.comic_02=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6"},Kt),e("div",Qt,[Ut,e("div",Xt,[d(e("img",null,null,512),[[r,{src:"/image/comic/comic_content/03/03.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]]),d(e("img",null,null,512),[[r,{src:"/image/comic/comic_content/03/04.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]])]),Yt]),e("button",{onClick:o[20]||(o[20]=l=>{t.comic_03=!1,t.comic_01=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6"},eo)]),e("div",to,[oo,e("div",so,[d(e("img",null,null,512),[[r,{src:"/image/comic/comic_content/03/03.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]]),d(e("img",null,null,512),[[r,{src:"/image/comic/comic_content/03/04.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]])]),e("div",lo,[e("button",{onClick:o[21]||(o[21]=l=>{t.comic_03=!1,t.comic_02=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6"},co),ao,e("button",{onClick:o[22]||(o[22]=l=>{t.comic_03=!1,t.comic_01=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6"},xo)])])])):a("",!0)])),(i(),g(w,{to:"body"},[t.comic_02?(i(),n("div",mo,[e("div",ho,[e("button",{type:"button",onClick:o[23]||(o[23]=(...l)=>t.comicclose_02&&t.comicclose_02(...l))},uo)]),e("div",go,[e("button",{type:"button",onClick:o[24]||(o[24]=(...l)=>t.comicclose_02&&t.comicclose_02(...l))},po)]),e("div",vo,[e("button",{onClick:o[25]||(o[25]=l=>{t.comic_02=!1,t.comic_01=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6"},ko),e("div",Co,[jo,e("div",To,[d(e("img",null,null,512),[[r,{src:"/image/comic/comic_content/02/01.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]]),d(e("img",null,null,512),[[r,{src:"/image/comic/comic_content/02/02.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]])]),Bo]),e("button",{onClick:o[26]||(o[26]=l=>{t.comic_02=!1,t.comic_03=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6"},Lo)]),e("div",Oo,[qo,e("div",Eo,[d(e("img",null,null,512),[[r,{src:"/image/comic/comic_content/02/01.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]]),d(e("img",null,null,512),[[r,{src:"/image/comic/comic_content/02/02.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]])]),e("div",Fo,[e("button",{onClick:o[27]||(o[27]=l=>{t.comic_02=!1,t.comic_01=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6"},So),Ao,e("button",{onClick:o[28]||(o[28]=l=>{t.comic_02=!1,t.comic_03=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6"},Io)])])])):a("",!0)])),(i(),g(w,{to:"body"},[t.comic_01?(i(),n("div",Do,[e("div",Ho,[e("button",{type:"button",onClick:o[29]||(o[29]=(...l)=>t.comicclose_01&&t.comicclose_01(...l))},Go)]),e("div",Jo,[e("button",{type:"button",onClick:o[30]||(o[30]=(...l)=>t.comicclose_01&&t.comicclose_01(...l))},Qo)]),e("div",Uo,[e("button",{onClick:o[31]||(o[31]=l=>{t.comic_01=!1,t.comic_03=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6"},Zo),e("div",$o,[es,e("div",ts,[d(e("img",null,null,512),[[r,{src:"/image/comic/comic_content/01/01.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]])]),os]),e("button",{onClick:o[32]||(o[32]=l=>{t.comic_01=!1,t.comic_02=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6"},is)]),e("div",ns,[cs,e("div",as,[d(e("img",null,null,512),[[r,{src:"/image/comic/comic_content/01/01.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]])]),e("div",rs,[e("button",{onClick:o[33]||(o[33]=l=>{t.comic_01=!1,t.comic_03=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6"},xs),ms,e("button",{onClick:o[34]||(o[34]=l=>{t.comic_01=!1,t.comic_02=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6"},us)])])])):a("",!0)])),(i(),g(w,{to:"body"},[h(C,{"enter-active-class":"animate__animated animate__fadeInRight","leave-active-class":"animate__animated animate__fadeOutRight"},{default:k(()=>[t.isMobileFilter?(i(),n("div",gs,[e("div",{onClick:o[35]||(o[35]=l=>t.isMobileFilter=!1),class:"absolute top-0 left-0 w-full h-screen bg-white/80 z-20"}),e("div",ws,[e("button",{type:"button",onClick:o[36]||(o[36]=(...l)=>t.FilterClose&&t.FilterClose(...l))},vs)]),e("div",bs,[e("div",ys,[e("div",{onClick:o[37]||(o[37]=l=>t.isfiltericon=!t.isfiltericon),class:"flex flex-row items-center space-x-2 cursor-pointer"},[ks,d((i(),n("svg",Cs,Ts,512)),[[u,t.isfiltericon]]),d((i(),n("svg",Bs,Ms,512)),[[u,!t.isfiltericon]])]),h(C,{name:"modal"},{default:k(()=>[t.isfiltericon?(i(),n("div",Ls,[e("ul",Os,[e("li",{class:f([{"bg-[#ff5500] rounded-lg text-white":t.isChapter},"px-2 py-1 cursor-pointer"]),onClick:o[38]||(o[38]=l=>t.isChapter=!0)},"MM chapter",2),e("li",{class:f([{"bg-[#ff5500] rounded-lg text-white":!t.isChapter},"px-2 py-1 cursor-pointer"]),onClick:o[39]||(o[39]=l=>t.isChapter=!1)},"Extra chapter",2)])])):a("",!0)]),_:1}),qs,e("ul",Es,[e("li",Fs,[e("input",{onClick:o[40]||(o[40]=l=>t.isCol=!0),type:"radio",id:"contactChoice1",name:"order",value:"frst",class:"w-4 h-4 rounded bg-white border border-gray-200 focus:border-transparent focus:bg-[#ff5500] text-[#ff5500] focus:ring-1 focus:ring-offset-2 focus:ring-[#ff5500]"}),Ns]),e("li",Rs,[e("input",{onClick:o[41]||(o[41]=l=>t.isCol=!1),type:"radio",id:"contactChoice1",name:"order",value:"last",class:"w-4 h-4 rounded bg-white border border-gray-200 focus:border-transparent focus:bg-[#ff5500] text-[#ff5500] focus:ring-1 focus:ring-offset-2 focus:ring-[#ff5500]",checked:""}),Ss])])])])])):a("",!0)]),_:1})]))])}const Ps=A(W,[["render",As],["__scopeId","data-v-ca6ee18a"]]);export{Ps as default};
