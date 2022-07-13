const e=document.querySelector(".start"),t=document.querySelector(".stop");let d=null;e.addEventListener("click",(()=>{d=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1500),e.disabled=!0})),t.addEventListener("click",(()=>{clearInterval(d),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.b16a0834.js.map
