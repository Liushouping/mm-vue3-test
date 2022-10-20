import{_ as F,r as d,H as E,F as N,a as y,l as V,o as n,c as a,b as e,d as w,e as f,n as k,f as _,m as r,g as u,w as I,T as P,q as R,p as S,j as A,h as j,k as c}from"./index.4ea2594e.js";const C="/image/ninja_comic.png",D="/image/filter_logo.png",g="/image/back.png",H={props:{isburimg:Boolean},setup(m){const o=d(),x=d(),t=d(),v=d(!1),b=d(!0),h=d(!1),p=d(!0),i=d(!1);function l(){i.value=!0,document.body.classList.add("modal-open")}function z(){i.value=!1,document.body.classList.remove("modal-open")}function T(){t.value=!0,document.body.classList.add("modal-open")}function B(){x.value=!0,document.body.classList.add("modal-open")}function L(){o.value=!0,document.body.classList.add("modal-open")}function M(){t.value=!1,document.body.classList.remove("modal-open")}function O(){x.value=!1,document.body.classList.remove("modal-open")}function q(){o.value=!1,document.body.classList.remove("modal-open")}return{comic_01:o,comic_02:x,comic_03:t,isCol:v,isChapter:b,isbgheight:h,comicopen_03:T,comicopen_02:B,comicopen_01:L,comicclose_03:M,comicclose_02:O,comicclose_01:q,isMobileFilter:i,FilterOpen:l,FilterClose:z,isfiltericon:p}},components:{Header:E,Footer:N}},s=m=>(S("data-v-dcd5ca30"),m=m(),A(),m),W={class:"relative w-full h-full xl:h-screen bg-[#EFEFED] lg:overflow-hidden pb-[130px] lg:pb-0"},G={key:0,class:"relative flex xl:hidden w-full h-[340px] sm:h-[480px] bg-[#ff5500] transition-all flex items-end overflow-hidden z-30"},J=j('<div class="absolute flex justify-center items-center z-20 w-full" data-v-dcd5ca30><img src="'+C+'" class="w-[65%] sm:w-[50%] md::w-[35%]" data-v-dcd5ca30></div><div class="absolute pt-52 flex flex-col justify-center items-end w-full z-30" data-v-dcd5ca30><div class="flex flex-row justify-center items-end w-full space-x-2" data-v-dcd5ca30><span class="font-TTOctosquaresBold text-white text-[24px] leading-none" data-v-dcd5ca30>Artis</span><span class="font-AntonRegular text-white text-[96px] leading-[5.5rem]" data-v-dcd5ca30>Luis</span></div></div><div class="absolute top-0 w-full h-full rounded-b-[2rem] overflow-hidden z-20" style="background:linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #ff5500 100%);" data-v-dcd5ca30></div>',3),K=[J],Q={class:"relative flex xl:hidden"},U={class:"absolute bottom-4 right-4 z-30"},X=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5 fill-white"},[e("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"})],-1)),Y=[X],Z={class:"relative z-50"},$=s(()=>e("p",{class:"text-white px-4 sm:px-20 text-center py-2"},"MadManga is an international team, with Silicon Valley venture capitalists as consultants and team members.",-1)),ee=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-white"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"})],-1)),te=[ee],oe={class:"max-w-[90%] w-full mx-auto flex flex-col lg:flex-row pb-12 pt-12 sm:py-12 lg:py-24"},se={class:"w-full xl:w-[50%] flex flex-row space-x-0 lg:space-x-6"},le={class:"hidden lg:flex w-1/5 flex-col"},ie={class:"space-y-4 pt-12 sticky top-8"},ce=s(()=>e("h5",{class:"text-[#ff5500]"},"Order",-1)),ne={class:"flex flex-col space-y-1"},re={class:"flex justify-start items-center"},ae=s(()=>e("label",{for:"contactChoice1",class:"text-[#ff5500] text-[12px] ml-1"},"Frst episode",-1)),de={class:"flex justify-start items-center"},fe=s(()=>e("label",{for:"contactChoice1",class:"text-[#ff5500] text-[12px] ml-1"},"Last episode",-1)),me={key:0,class:"w-full xl:w-4/5 flex flex-col"},xe={class:"relative flex flex-row items-center py-6 lg:py-0"},_e=s(()=>e("img",{src:D,class:"w-[25px]"},null,-1)),ue=[_e],ge=s(()=>e("h5",{class:"font-TTOctosquaresBold text-[#ff5500] text-[32px] text-center lg:text-left w-full"},"Episode",-1)),he={class:"w-full min-h-[200px] rounded-[1rem] border border-gray-200 shadow-sm bg-white p-2 overflow-hidden flex flex-row space-x-2"},pe=s(()=>e("div",{class:"w-[50%] bg-cover bg-center rounded-lg",style:{"background-image":"url(/image/comic/comic_poster/luis_comic_03.png)"}},null,-1)),we={class:"w-[50%] flex flex-col justify-center items-start"},ve=s(()=>e("div",{class:"flex flex-col pt-12"},[e("div",null,[e("span",{class:"font-TTOctosquaresBold text-[28px]"},"#03"),e("span",{class:"ml-2 font-TTOctosquaresBold text-[#ff5500] text-[12px]"},"New")]),e("h5",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),be={class:"w-full h-full flex justify-end items-end"},ye=c("Read "),ke=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),je=[ye,ke],Ce={class:"w-full min-h-[200px] rounded-[1rem] border border-gray-200 shadow-sm bg-white p-2 overflow-hidden flex flex-row space-x-2"},ze=s(()=>e("div",{class:"w-[50%] bg-cover bg-center rounded-lg",style:{"background-image":"url(/image/comic/comic_poster/luis_comic_02.png)"}},null,-1)),Te={class:"w-[50%] flex flex-col justify-center items-start"},Be=s(()=>e("div",{class:"flex flex-col pt-12"},[e("div",null,[e("span",{class:"font-TTOctosquaresBold text-[28px]"},"#02")]),e("h5",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),Le={class:"w-full h-full flex justify-end items-end"},Me=c("Read "),Oe=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),qe=[Me,Oe],Fe={class:"w-full min-h-[200px] rounded-[1rem] border border-gray-200 shadow-sm bg-white p-2 overflow-hidden flex flex-row space-x-2"},Ee=s(()=>e("div",{class:"w-[50%] bg-cover bg-center rounded-lg",style:{"background-image":"url(/image/comic/comic_poster/luis_comic_01.png)"}},null,-1)),Ne={class:"w-[50%] flex flex-col justify-center items-start"},Ve=s(()=>e("div",{class:"flex flex-col pt-12"},[e("div",null,[e("span",{class:"font-TTOctosquaresBold text-[28px]"},"#01")]),e("h5",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),Ie={class:"w-full h-full flex justify-end items-end"},Pe=c("Read "),Re=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),Se=[Pe,Re],Ae={key:0,class:"relative overflow-hidden w-full xl:w-1/2 hidden xl:flex flex-col justify-start items-center"},De=j('<div class="fixed bottom-0 lg:right-0 2xl:right-20 flex flex-col justify-center items-center" data-v-dcd5ca30><div class="flex flex-col justify-center items-center" data-v-dcd5ca30><div class="flex flex-row items-end justify-center text-center space-x-2" data-v-dcd5ca30><span class="font-TTOctosquaresBold text-[#ff5500] text-[24px] leading-1" data-v-dcd5ca30>Artis</span><span class="font-AntonRegular text-[#ff5500] text-[96px] leading-none" data-v-dcd5ca30>Ninja</span></div><p class="w-[360px] text-[12px] text-[#ff5500] py-4 text-center" data-v-dcd5ca30>MadManga is an international team, with Silicon Valley venture capitalists as consultants and team members.</p></div><img src="'+C+'" class="w-[55%] xl:w-[50%] 2xl:w-[70%]" data-v-dcd5ca30></div>',1),He=[De],We={key:0,class:"fixed top-0 left-0 w-full h-screen bg-white sm:bg-white/90 flex justify-start xs:justify-center items-start xs:items-center z-[210] overflow-y-scroll sm:overflow-hidden"},Ge={class:"hidden md:flex absolute top-4 right-4 z-20"},Je=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-gray-900"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)),Ke=[Je],Qe={class:"absolute md:hidden top-4 left-4 z-30"},Ue=s(()=>e("img",{src:g,class:"w-[25px]"},null,-1)),Xe=[Ue],Ye={class:"relative max-w-5xl w-full hidden lg:flex flex-row justify-end items-end px-2"},Ze=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-1"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})],-1)),$e=c(" Prev "),et=[Ze,$e],tt={class:"relative max-w-2xl w-full mx-auto flex flex-col justify-center items-center z-20"},ot=s(()=>e("div",{class:"pb-6"},[e("h5",{class:"font-TTOctosquaresBold text-center text-[36px]"},"#03"),e("p",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),st={class:"relative h-[450px] overflow-y-scroll flex flex-col space-y-1"},lt=s(()=>e("div",{class:"pt-6"},[e("p",{class:"text-gray-700"},"@ Madmanga")],-1)),it=c("Next "),ct=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),nt=[it,ct],rt={class:"relative max-w-2xl w-full h-full mx-auto flex lg:hidden flex-col justify-start sm:justify-center items-center z-20"},at=s(()=>e("div",{class:"pb-6"},[e("h5",{class:"font-TTOctosquaresBold text-center text-[36px]"},"#03"),e("p",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),dt={class:"relative sm:h-[75vh] overflow-hidden sm:overflow-y-scroll flex flex-col space-y-1"},ft={class:"pt-6 flex flex-row w-full justify-between px-4"},mt=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-1"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})],-1)),xt=c(" Prev "),_t=[mt,xt],ut=s(()=>e("p",{class:"text-gray-700"},"@ Madmanga",-1)),gt=c("Next "),ht=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),pt=[gt,ht],wt={key:0,class:"fixed top-0 left-0 w-full h-screen bg-white sm:bg-white/90 flex justify-start xs:justify-center items-center z-[210] overflow-y-scroll sm:overflow-hidden"},vt={class:"hidden md:flex absolute top-4 right-4 z-20"},bt=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-gray-900"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)),yt=[bt],kt={class:"absolute md:hidden top-4 left-4 z-30"},jt=s(()=>e("img",{src:g,class:"w-[25px]"},null,-1)),Ct=[jt],zt={class:"relative max-w-5xl w-full hidden lg:flex flex-row justify-end items-end px-2"},Tt=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-1"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})],-1)),Bt=c(" Prev "),Lt=[Tt,Bt],Mt={class:"relative max-w-2xl w-full mx-auto flex flex-col justify-center items-center z-20"},Ot=s(()=>e("div",{class:"pb-6"},[e("h5",{class:"font-TTOctosquaresBold text-center text-[36px]"},"#02"),e("p",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),qt={class:"relative h-[450px] overflow-y-scroll flex flex-col space-y-1"},Ft=s(()=>e("div",{class:"pt-6"},[e("p",{class:"text-gray-700"},"@ Madmanga")],-1)),Et=c("Next "),Nt=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),Vt=[Et,Nt],It={class:"relative max-w-2xl w-full h-full mx-auto flex lg:hidden flex-col justify-start sm:justify-center items-center z-20"},Pt=s(()=>e("div",{class:"pb-6"},[e("h5",{class:"font-TTOctosquaresBold text-center text-[36px]"},"#02"),e("p",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),Rt={class:"relative sm:h-[75vh] sm:overflow-y-scroll flex flex-col space-y-1"},St={class:"pt-6 flex flex-row w-full justify-between px-4"},At=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-1"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})],-1)),Dt=c(" Prev "),Ht=[At,Dt],Wt=s(()=>e("p",{class:"text-gray-700"},"@ Madmanga",-1)),Gt=c("Next "),Jt=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),Kt=[Gt,Jt],Qt={key:0,class:"fixed top-0 left-0 w-full h-screen bg-white sm:bg-white/90 flex justify-start xs:justify-center items-center z-[210] overflow-y-scroll sm:overflow-hidden"},Ut={class:"hidden md:flex absolute top-4 right-4 z-20"},Xt=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-gray-900"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)),Yt=[Xt],Zt={class:"absolute md:hidden top-4 left-4 z-30"},$t=s(()=>e("img",{src:g,class:"w-[25px]"},null,-1)),eo=[$t],to={class:"relative max-w-5xl w-full hidden lg:flex flex-row justify-end items-end px-2"},oo=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-1"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})],-1)),so=c(" Prev "),lo=[oo,so],io={class:"relative max-w-2xl w-full mx-auto flex flex-col justify-center items-center z-20"},co=s(()=>e("div",{class:"pb-6"},[e("h5",{class:"font-TTOctosquaresBold text-center text-[36px]"},"#01"),e("p",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),no={class:"relative h-[450px] overflow-y-scroll flex flex-col space-y-1"},ro=s(()=>e("div",{class:"pt-6"},[e("p",{class:"text-gray-700"},"@ Madmanga")],-1)),ao=c("Next "),fo=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),mo=[ao,fo],xo={class:"relative max-w-2xl w-full h-full mx-auto flex lg:hidden flex-col justify-start sm:justify-center items-center z-20"},_o=s(()=>e("div",{class:"pb-6"},[e("h5",{class:"font-TTOctosquaresBold text-center text-[36px]"},"#01"),e("p",{class:"font-TTOctosquaresBold text-gray-700"},"Episode title name here")],-1)),uo={class:"relative sm:h-[75vh] sm:overflow-y-scroll flex flex-col space-y-1"},go={class:"pt-6 flex flex-row w-full justify-between px-4"},ho=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-1"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})],-1)),po=c(" Prev "),wo=[ho,po],vo=s(()=>e("p",{class:"text-gray-700"},"@ Madmanga",-1)),bo=c("Next "),yo=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 ml-1"},[e("path",{"fill-rule":"evenodd",d:"M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),ko=[bo,yo],jo={key:0,class:"fixed top-0 w-full h-screen flex justify-end items-center z-[210]"},Co={class:"flex absolute top-8 left-8 z-30 animate__animated animate__fadeIn animate__delay-1s"},zo=s(()=>e("img",{src:g,class:"w-[25px]"},null,-1)),To=[zo],Bo={class:"relative w-[200px] h-full bg-[#EFEFED] z-[110] flex flex-col justify-start px-6 animate__animated animate__fadeInRight"},Lo={class:"space-y-4 pt-12"},Mo=s(()=>e("h5",{class:"text-[#ff5500]"},"Order",-1)),Oo={class:"flex flex-col space-y-2"},qo={class:"flex justify-start items-center"},Fo=s(()=>e("label",{class:"text-[#ff5500] text-[12px] ml-2"},"Frst episode",-1)),Eo={class:"flex justify-start items-center"},No=s(()=>e("label",{class:"text-[#ff5500] text-[12px] ml-2"},"Last episode",-1));function Vo(m,o,x,t,v,b){const h=y("Header"),p=y("Footer"),i=V("lazy");return n(),a(R,null,[e("div",W,[w(h,{burcolor:"text-white",isburimg:!1}),t.isChapter?(n(),a("div",G,K)):f("",!0),e("div",Q,[e("div",{class:k(["w-full rounded-b-[2rem] h-[150px] -mt-24 bg-[#ff5500] z-20 duration-500 absolute",{"mt-0":t.isbgheight}])},[e("span",U,[e("button",{onClick:o[0]||(o[0]=l=>t.isbgheight=!t.isbgheight),type:"button"},Y)]),e("div",Z,[$,t.isbgheight?(n(),a("button",{key:0,class:"flex justify-center items-center w-full",onClick:o[1]||(o[1]=l=>t.isbgheight=!t.isbgheight),type:"button"},te)):f("",!0)])],2)]),e("div",oe,[e("div",se,[e("div",le,[e("div",ie,[ce,e("ul",ne,[e("li",re,[e("input",{onClick:o[2]||(o[2]=l=>t.isCol=!0),type:"radio",id:"contactChoice1",name:"order",value:"frst",class:"w-4 h-4 rounded bg-white border border-gray-200 focus:border-transparent focus:bg-[#ff5500] text-[#ff5500] focus:ring-1 focus:ring-offset-2 focus:ring-[#ff5500]"}),ae]),e("li",de,[e("input",{onClick:o[3]||(o[3]=l=>t.isCol=!1),type:"radio",id:"contactChoice1",name:"order",value:"last",class:"w-4 h-4 rounded bg-white border border-gray-200 focus:border-transparent focus:bg-[#ff5500] text-[#ff5500] focus:ring-1 focus:ring-offset-2 focus:ring-[#ff5500]",checked:""}),fe])])])]),t.isChapter?(n(),a("div",me,[e("div",xe,[e("button",{type:"button",class:"flex lg:hidden",onClick:o[4]||(o[4]=(...l)=>t.FilterOpen&&t.FilterOpen(...l))},ue),ge]),e("div",{class:k(["flex flex-col space-y-4 h-full lg:h-[80%] 2xl:h-[85%] lg:overflow-y-scroll lg:pr-4",{"flex-col-reverse space-y-reverse":t.isCol}])},[e("div",he,[pe,e("div",we,[ve,e("div",be,[e("button",{onClick:o[5]||(o[5]=(...l)=>t.comicopen_03&&t.comicopen_03(...l)),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center transition-all hover:bg-orange-700 z-30"},je)])])]),e("div",Ce,[ze,e("div",Te,[Be,e("div",Le,[e("button",{onClick:o[6]||(o[6]=(...l)=>t.comicopen_02&&t.comicopen_02(...l)),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center transition-all hover:bg-orange-700 z-30"},qe)])])]),e("div",Fe,[Ee,e("div",Ne,[Ve,e("div",Ie,[e("button",{onClick:o[7]||(o[7]=(...l)=>t.comicopen_01&&t.comicopen_01(...l)),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center transition-all hover:bg-orange-700 z-30"},Se)])])])],2)])):f("",!0)]),t.isChapter?(n(),a("div",Ae,He)):f("",!0)]),w(p,{title:"MM-Comic World",textcolor:"text-[#ff5500]",bgcolor:"",crcolor:"text-[#ff5500]",sicolor:"fill-[#ff5500]"})]),(n(),_(u,{to:"#comic_body"},[t.comic_03?(n(),a("div",We,[e("div",{onClick:o[8]||(o[8]=l=>t.comic_03=!1),class:"absolute top-0 left-0 w-full h-screen z-10"}),e("div",Ge,[e("button",{type:"button",onClick:o[9]||(o[9]=(...l)=>t.comicclose_03&&t.comicclose_03(...l))},Ke)]),e("div",Qe,[e("button",{type:"button",onClick:o[10]||(o[10]=(...l)=>t.comicclose_03&&t.comicclose_03(...l))},Xe)]),e("div",Ye,[e("button",{onClick:o[11]||(o[11]=l=>{t.comic_03=!1,t.comic_02=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6 z-20"},et),e("div",tt,[ot,e("div",st,[r(e("img",null,null,512),[[i,{src:"/image/comic/comic_content/03/03.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]]),r(e("img",null,null,512),[[i,{src:"/image/comic/comic_content/03/04.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]])]),lt]),e("button",{onClick:o[12]||(o[12]=l=>{t.comic_03=!1,t.comic_01=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6 z-20"},nt)]),e("div",rt,[at,e("div",dt,[r(e("img",null,null,512),[[i,{src:"/image/comic/comic_content/03/03.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]]),r(e("img",null,null,512),[[i,{src:"/image/comic/comic_content/03/04.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]])]),e("div",ft,[e("button",{onClick:o[13]||(o[13]=l=>{t.comic_03=!1,t.comic_02=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6 z-20"},_t),ut,e("button",{onClick:o[14]||(o[14]=l=>{t.comic_03=!1,t.comic_01=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6 z-20"},pt)])])])):f("",!0)])),(n(),_(u,{to:"#comic_body"},[t.comic_02?(n(),a("div",wt,[e("div",{onClick:o[15]||(o[15]=l=>t.comic_02=!1),class:"absolute top-0 left-0 w-full h-screen z-10"}),e("div",vt,[e("button",{type:"button",onClick:o[16]||(o[16]=(...l)=>t.comicclose_02&&t.comicclose_02(...l))},yt)]),e("div",kt,[e("button",{type:"button",onClick:o[17]||(o[17]=(...l)=>t.comicclose_02&&t.comicclose_02(...l))},Ct)]),e("div",zt,[e("button",{onClick:o[18]||(o[18]=l=>{t.comic_02=!1,t.comic_01=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6 z-20"},Lt),e("div",Mt,[Ot,e("div",qt,[r(e("img",null,null,512),[[i,{src:"/image/comic/comic_content/02/01.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]]),r(e("img",null,null,512),[[i,{src:"/image/comic/comic_content/02/02.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]])]),Ft]),e("button",{onClick:o[19]||(o[19]=l=>{t.comic_02=!1,t.comic_03=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6 z-20"},Vt)]),e("div",It,[Pt,e("div",Rt,[r(e("img",null,null,512),[[i,{src:"/image/comic/comic_content/02/01.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]]),r(e("img",null,null,512),[[i,{src:"/image/comic/comic_content/02/02.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]])]),e("div",St,[e("button",{onClick:o[20]||(o[20]=l=>{t.comic_02=!1,t.comic_01=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6 z-20"},Ht),Wt,e("button",{onClick:o[21]||(o[21]=l=>{t.comic_02=!1,t.comic_03=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6 z-20"},Kt)])])])):f("",!0)])),(n(),_(u,{to:"#comic_body"},[t.comic_01?(n(),a("div",Qt,[e("div",{onClick:o[22]||(o[22]=l=>t.comic_01=!1),class:"absolute top-0 left-0 w-full h-screen z-10"}),e("div",Ut,[e("button",{type:"button",onClick:o[23]||(o[23]=(...l)=>t.comicclose_01&&t.comicclose_01(...l))},Yt)]),e("div",Zt,[e("button",{type:"button",onClick:o[24]||(o[24]=(...l)=>t.comicclose_01&&t.comicclose_01(...l))},eo)]),e("div",to,[e("button",{onClick:o[25]||(o[25]=l=>{t.comic_01=!1,t.comic_03=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6 z-20"},lo),e("div",io,[co,e("div",no,[r(e("img",null,null,512),[[i,{src:"/image/comic/comic_content/02/01.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]]),r(e("img",null,null,512),[[i,{src:"/image/comic/comic_content/02/02.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]])]),ro]),e("button",{onClick:o[26]||(o[26]=l=>{t.comic_01=!1,t.comic_02=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6 z-20"},mo)]),e("div",xo,[_o,e("div",uo,[r(e("img",null,null,512),[[i,{src:"/image/comic/comic_content/02/01.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]]),r(e("img",null,null,512),[[i,{src:"/image/comic/comic_content/02/02.jpeg",loading:"/image/comic/loader_comic.png",error:"/image/comic/loader_comic.png",delay:50}]])]),e("div",go,[e("button",{onClick:o[27]||(o[27]=l=>{t.comic_01=!1,t.comic_03=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6 z-20"},wo),vo,e("button",{onClick:o[28]||(o[28]=l=>{t.comic_01=!1,t.comic_02=!0}),type:"button",class:"bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6 z-20"},ko)])])])):f("",!0)])),(n(),_(u,{to:"body"},[w(P,{name:"scale"},{default:I(()=>[t.isMobileFilter?(n(),a("div",jo,[e("div",{onClick:o[29]||(o[29]=l=>t.isMobileFilter=!1),class:"absolute top-0 left-0 w-full h-screen bg-white/80 z-20"}),e("div",Co,[e("button",{type:"button",onClick:o[30]||(o[30]=(...l)=>t.FilterClose&&t.FilterClose(...l))},To)]),e("div",Bo,[e("div",Lo,[Mo,e("ul",Oo,[e("li",qo,[e("input",{onClick:o[31]||(o[31]=l=>t.isCol=!0),type:"radio",id:"contactChoice1",name:"order",value:"frst",class:"w-4 h-4 rounded bg-white border border-gray-200 focus:border-transparent focus:bg-[#ff5500] text-[#ff5500] focus:ring-1 focus:ring-offset-2 focus:ring-[#ff5500]"}),Fo]),e("li",Eo,[e("input",{onClick:o[32]||(o[32]=l=>t.isCol=!1),type:"radio",id:"contactChoice1",name:"order",value:"last",class:"w-4 h-4 rounded bg-white border border-gray-200 focus:border-transparent focus:bg-[#ff5500] text-[#ff5500] focus:ring-1 focus:ring-offset-2 focus:ring-[#ff5500]",checked:""}),No])])])])])):f("",!0)]),_:1})]))],64)}const Po=F(H,[["render",Vo],["__scopeId","data-v-dcd5ca30"]]);export{Po as default};
