function toggleSidebarNav(){document.querySelectorAll(".sidebar-nav li").forEach(e=>{e.onclick=function(){this.classList.contains("sidebar-nav-active")||(document.querySelector(".sidebar-panel-active").classList.remove("sidebar-panel-active"),document.querySelector("#"+this.dataset.target).classList.add("sidebar-panel-active"),document.querySelector(".sidebar-nav-active").classList.remove("sidebar-nav-active"),this.classList.add("sidebar-nav-active"))}})}function activateNavByIndex(e){if(e.classList.contains("active-current"))return;document.querySelectorAll(".post-toc .active").forEach(e=>{e.classList.remove("active","active-current")}),e.classList.add("active","active-current");let t=e.parentNode;for(;!t.matches(".post-toc");)t.matches("li")&&t.classList.add("active"),t=t.parentNode}function listenSidebarTOC(){const e=document.querySelectorAll(".post-toc li");if(!e.length)return;const t=[...e].map(e=>{const t=e.querySelector(".toc-link"),n=document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""));return t.addEventListener("click",e=>{e.preventDefault(),window.scrollTo(0,n.offsetTop+1)}),n});!function n(i){i=Math.floor(i+1e4);let c=new IntersectionObserver((c,a)=>{let r=document.documentElement.scrollHeight+100;if(r>i)return a.disconnect(),void n(r);let o=function(e){let n=0,i=e[n];if(i.boundingClientRect.top>0)return 0===(n=t.indexOf(i.target))?0:n-1;for(;n<e.length;n++){if(!(e[n].boundingClientRect.top<=0))return t.indexOf(i.target);i=e[n]}return t.indexOf(i.target)}(c);activateNavByIndex(e[o])},{rootMargin:i+"px 0px -100% 0px",threshold:0});t.forEach(e=>{e&&c.observe(e)})}(document.documentElement.scrollHeight)}function initSidebar(){toggleSidebarNav(),listenSidebarTOC()}document.addEventListener("DOMContentLoaded",initSidebar),document.addEventListener("pjax:success",initSidebar);