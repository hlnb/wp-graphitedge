(window.blocksyJsonP=window.blocksyJsonP||[]).push([[14],{33:function(e,t,r){"use strict";r.r(t),r.d(t,"mount",(function(){return s}));var a=r(6),c=r.n(a);const l=()=>[...document.querySelectorAll(".quantity")].map(e=>{e.querySelector(".ct-increase")&&[...e.querySelectorAll("input")].map(e=>{e.hasInputListener||(e.hasInputListener=!0,e.addEventListener("input",t=>{e.closest("tr")&&[...e.closest("tr").querySelectorAll(".quantity input")].filter(t=>t!==e).map(e=>e.value=t.target.value)}))}),e.querySelector(".ct-increase")&&!e.querySelector(".ct-increase").ctHasListener&&(e.querySelector(".ct-increase").ctHasListener=!0,e.querySelector(".ct-increase").addEventListener("click",t=>{const r=e.querySelector("input"),a=r.getAttribute("max")?parseFloat(r.getAttribute("max"),0):1/0,l=parseFloat(r.value,10)||0;r.value=l<a?Math.round(100*(l+parseFloat(r.step||"1")))/100:a,c()(r).trigger("change"),r.closest("tr")&&[...r.closest("tr").querySelectorAll(".quantity input")].filter(e=>e!==r).map(e=>e.value=r.value)})),e.querySelector(".ct-decrease")&&!e.querySelector(".ct-decrease").ctHasListener&&(e.querySelector(".ct-decrease").ctHasListener=!0,e.querySelector(".ct-decrease").addEventListener("click",t=>{const r=e.querySelector("input"),a=r.getAttribute("min")?Math.round(100*parseFloat(r.getAttribute("min"),0))/100:0,l=parseFloat(r.value,10)||0;r.value=l>a?Math.round(100*(l-parseFloat(r.step||"1")))/100:a,c()(r).trigger("change"),r.closest("tr")&&[...r.closest("tr").querySelectorAll(".quantity input")].filter(e=>e!==r).map(e=>e.value=r.value)}))}),s=()=>{c.a&&c()(document.body).on("updated_cart_totals",l),l()}}}]);