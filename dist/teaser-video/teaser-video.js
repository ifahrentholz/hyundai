import{j as a,x as i}from"../__chunks__/lit-html.7EXFFo54.js";import{o as u}from"../__chunks__/unsafe-html.B33SCsdY.js";const c=t=>t?i`
<video autoplay="true" muted="true" loop="true" playsinline="true" class="w-full h-full object-cover absolute left-0 top-0 bottom-0 right-0">
  <source src="${t}"></source>
</video>
`:null,h=t=>t?i`<h2 class="relative z-10 text-white font-hyundaihead text-[48px] font-medium m-0 mb-[8px]">
    ${t}
  </h2>`:null,f=t=>t?i`<h3 class="relative z-10 text-white font-hyundaitext text-[20px] m-0 font-normal mb-[40px]">
    ${t}
  </h2>`:null,p=t=>i`
    <div id="teaser-video" class="flex flex-col justify-end text-center bg-hyundai-blue overflow-hidden relative">
      ${c(t.video)}
      <!--<div class="absolute left-6 top-10">${u(t.logo)}</div>
      <div class="absolute right-6 top-10">${u(t.award)}</div>
      <div>${h(t.headline)} ${f(t.subheadline)}</div>-->
    </div>
  `;function x(t){const s=Array.from(t.children),o=t.querySelectorAll("img");for(let e=0;e<o.length;e++){const r=o[e];e===0&&(r.setAttribute("width","88"),r.setAttribute("height","37")),e===1&&(r.setAttribute("width","118"),r.setAttribute("height","37")),r.setAttribute("loading","eager"),r.setAttribute("fetchpriority","high")}const d=s.reduce((e,r)=>{const[n,l]=r.children;return e={...e,[`${n.textContent}`]:n.textContent==="award"||n.textContent==="logo"?l.innerHTML.replace(/\n/g,"").replace(/[\t ]+\</g,"<").replace(/\>[\t ]+\</g,"><").replace(/\>[\t ]+$/g,">"):l.textContent},e},{});t.innerHTML="",a(p(d),t)}export{x as default};
//# sourceMappingURL=teaser-video.js.map
