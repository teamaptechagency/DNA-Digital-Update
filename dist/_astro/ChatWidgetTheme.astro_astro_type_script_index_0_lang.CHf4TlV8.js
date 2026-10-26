const f=document.getElementById("main-nav"),p=document.getElementById("mobile-menu-btn"),i=document.getElementById("mobile-menu"),P=document.querySelectorAll("#main-nav [data-nav-link]"),a=document.getElementById("conversation-panel"),s=a?.querySelector("iframe"),g=a?.querySelector(".conversation-leadconnector-form"),C=a?.querySelector(".conversation-panel-content");function m(){if(!s||!g||!C)return;if(!window.matchMedia("(min-width: 1600px) and (min-height: 1000px)").matches){s.style.removeProperty("transform");return}const e=g.clientHeight,t=s.offsetHeight;if(e>0&&t>0){const n=Math.min(1,e/t);s.style.transform=`scale(${n})`}}if(s&&g&&C){const e=new ResizeObserver(m);e.observe(s),e.observe(g),s.addEventListener("load",m),window.addEventListener("resize",m),m()}const O=document.getElementById("conversation-close"),R=document.getElementById("conversation-close-inline"),c=document.getElementById("ai-concierge-panel"),F=document.getElementById("ai-concierge-close"),G=document.getElementById("ai-chat-form"),L=document.getElementById("ai-chat-input"),u=document.getElementById("ai-chat-thread"),v="6ac5795bc407264032740ca8";function $(e){e.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),e.dispatchEvent(new MouseEvent("mouseup",{bubbles:!0})),e.click()}function U(){const e=[`button[data-widget-id="${v}"]`,`[data-widget-id="${v}"]:not(script)`,'button[class*="chat-widget"]','button[id*="chat-widget"]','button[class*="lc_chat"]','button[id*="lc_chat"]','div[class*="chat-widget-launcher"]','div[id*="chat-widget-launcher"]','iframe[src*="leadconnectorhq.com"][src*="chat"]'];for(const t of e){const n=document.querySelector(t);if(n&&n instanceof HTMLElement)return n}return null}function h(){const e=window,t=[e?.leadConnector?.chatWidget?.openWidget,e?.LeadConnector?.chatWidget?.open,e?.LeadConnector?.widget?.open,e?.LeadConnectorWidget?.open,e?.LC_API?.open_chat_window,e?.LC_API?.openChat,e?.LC_API?.openChatWidget,e?.GHLChatWidget?.open];for(const o of t)if(typeof o=="function")try{return o(v),!0}catch{try{return o(),!0}catch{}}const n=U();return n?($(n),!0):!1}function Y(){const e=window,t=e?.leadConnector?.chatWidget;if(typeof t?.closeWidget=="function"){t.closeWidget();return}const n=[e?.LeadConnector?.chatWidget?.close,e?.LeadConnector?.widget?.close,e?.LeadConnectorWidget?.close,e?.LC_API?.close_chat_window,e?.LC_API?.closeChat,e?.LC_API?.closeChatWidget,e?.GHLChatWidget?.close];for(const o of n)if(typeof o=="function")try{o();return}catch{}}function z(){if(!a)return;x(),Y(),a.classList.remove("translate-x-full","opacity-0","pointer-events-none"),a.classList.add("translate-x-0","opacity-100"),a.setAttribute("aria-hidden","false");const e=a.querySelector(".conversation-panel-content");e&&(e.scrollTop=0,window.requestAnimationFrame(()=>{e.scrollTop=0}))}function l(){a&&(a.classList.add("translate-x-full","opacity-0","pointer-events-none"),a.classList.remove("translate-x-0","opacity-100"),a.setAttribute("aria-hidden","true"))}window.addEventListener("message",e=>{if(!a||!Array.isArray(e.data))return;const t=document.getElementById("inline-sLvKUPU9fncv2nyE5VeJ"),[n,o]=e.data;e.source===t?.contentWindow&&n==="set-sticky-contacts"&&typeof o=="string"&&o.includes(t.id)&&a.classList.add("conversation-panel-submitted")});function x(){c&&(c.classList.add("translate-x-full","opacity-0","pointer-events-none"),c.classList.remove("translate-x-0","opacity-100"),c.setAttribute("aria-hidden","true"))}function A(){l(),!h()&&setTimeout(()=>{h()||setTimeout(()=>{h()||c&&(c.classList.remove("translate-x-full","opacity-0","pointer-events-none"),c.classList.add("translate-x-0","opacity-100"),c.setAttribute("aria-hidden","false"))},500)},300)}function K(e){if(!(e instanceof HTMLIFrameElement))return!1;const t=e.getAttribute("src")||"";return t.includes("leadconnectorhq.com")&&!t.includes("/widget/form/")}document.addEventListener("pointerdown",e=>{e.target?.closest("chat-widget")&&l()},!0);window.addEventListener("blur",()=>{setTimeout(()=>{K(document.activeElement)&&l()},0)});function y(){f&&(window.scrollY>80?f.classList.add("nav-scrolled"):f.classList.remove("nav-scrolled"),V())}window.addEventListener("scroll",y,{passive:!0});window.addEventListener("hashchange",y);y();function J(){return f?.offsetHeight||0}function I(e){P.forEach(t=>{const n=t.dataset.navSection===e;t.classList.toggle("nav-link-active",n),n?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}function j(){return window.location.pathname!=="/"?window.location.pathname.startsWith("/about")?"about":"":"home"}function V(){I(j())}function S(e){const t=document.getElementById(e);if(!t)return!1;const n=window.scrollToPlateSection;if(t.matches("section")&&typeof n=="function")return n(e);const o=t.getBoundingClientRect().top+window.scrollY-J();return window.scrollTo({top:Math.max(0,o),behavior:"smooth"}),window.history.replaceState(null,"",`#${e}`),!0}document.querySelectorAll("#main-nav [data-scroll-target]").forEach(e=>{e.addEventListener("click",t=>{const n=e.dataset.scrollTarget;!n||window.location.pathname!=="/"||(t.preventDefault(),I(e.dataset.navSection||""),S(n))})});p?.addEventListener("click",()=>{i.classList.contains("hidden")?(i.classList.remove("hidden"),i.classList.add("flex"),p.setAttribute("aria-expanded","true"),document.body.classList.add("mobile-menu-open")):(i.classList.add("hidden"),i.classList.remove("flex"),p.setAttribute("aria-expanded","false"),document.body.classList.remove("mobile-menu-open"))});function b(){i.classList.add("hidden"),i.classList.remove("flex"),p?.setAttribute("aria-expanded","false"),document.body.classList.remove("mobile-menu-open")}document.querySelectorAll("[data-mobile-toggle]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.mobileToggle,n=t?document.getElementById(t):null;if(!n)return;const o=!n.classList.contains("hidden"),r=!o;document.querySelectorAll(`[data-mobile-toggle="${t}"]`).forEach(N=>{N.setAttribute("aria-expanded",r?"true":"false")}),n.classList.toggle("hidden",o)})});document.addEventListener("click",e=>{e.target?.closest("[data-open-conversation]")&&(e.preventDefault(),b(),z())});O?.addEventListener("click",l);R?.addEventListener("click",l);F?.addEventListener("click",x);document.addEventListener("click",e=>{e.target?.closest("[data-open-ai-concierge]")&&(e.preventDefault(),b(),A())});window.addEventListener("keydown",e=>{e.key==="Escape"&&(l(),x())});window.openAIConcierge=A;G?.addEventListener("submit",e=>{e.preventDefault();const t=L?.value?.trim();if(!t||!u)return;const n=t.replace(/</g,"&lt;").replace(/>/g,"&gt;"),o=document.createElement("div");o.className="ai-row ai-row-user",o.innerHTML=`<div class="ai-bubble ai-bubble-user"><p>${n}</p></div>`,u.appendChild(o);const r=document.createElement("div");r.className="ai-row ai-row-assistant",r.innerHTML=`
    <div class="ai-avatar" aria-hidden="true">✦</div>
    <div class="ai-bubble ai-bubble-assistant">
      <p>Thanks. Our AI Concierge received your message and will guide you to the right practice area.</p>
    </div>
  `,u.appendChild(r),L.value="",u.scrollTop=u.scrollHeight});i?.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{b()})});window.addEventListener("resize",()=>{window.innerWidth>=1024&&b()});document.querySelectorAll(".nav-practice-link").forEach(e=>{e.addEventListener("click",t=>{const n=e.hash.replace("#",""),o=e.dataset.expertiseTab;if(!n){t.preventDefault();return}!document.getElementById(n)||window.location.pathname!=="/"||(t.preventDefault(),S(n),window.history.replaceState(null,"",e.href),o&&setTimeout(()=>{const r=window.showExpertiseTab;r&&r(o)},700))})});document.querySelectorAll(".nav-submenu-link").forEach(e=>{e.addEventListener("click",()=>{const t=e.closest(".nav-menu-group");if(!t)return;t.classList.add("is-locked");const n=()=>{t.classList.remove("is-locked"),t.removeEventListener("mouseleave",n)};t.addEventListener("mouseleave",n,{once:!0}),document.activeElement instanceof HTMLElement&&document.activeElement.blur()})});document.querySelectorAll(".footer-placeholder-link").forEach(e=>{e.addEventListener("click",t=>{e.getAttribute("href")==="#"&&t.preventDefault()})});document.querySelectorAll("footer [data-expertise-tab]").forEach(e=>{e.addEventListener("click",t=>{const n=document.getElementById("expertise");if(!n)return;t.preventDefault(),window.showExpertiseTab?.(e.dataset.expertiseTab);const o=document.getElementById("main-nav")?.getBoundingClientRect().height||0,r=n.querySelector(".expertise-carousel")||n;window.scrollTo({top:window.scrollY+r.getBoundingClientRect().top-o-16,behavior:"smooth"}),history.replaceState(null,"",e.href)})});const Q=document.getElementById("footer-home-link");Q?.addEventListener("click",e=>{window.location.pathname==="/"&&(e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))});const T="dna_consent",q="dna-cookie-prefs";function X(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?`DNA-${crypto.randomUUID().slice(0,8).toUpperCase()}`:`DNA-${Math.random().toString(36).slice(2,11).toUpperCase()}`}function B(){try{const e=localStorage.getItem(T);if(e)return JSON.parse(e);const t=localStorage.getItem(q);if(t){const n=JSON.parse(t);return{analytics:!!n.analytics,marketing:!!n.marketing}}}catch{}return null}function W(e,t,n="preferences"){const o={essential:!0,analytics:!!e,marketing:!!t,timestamp:new Date().toISOString(),consentID:X(),source:n};try{localStorage.setItem(T,JSON.stringify(o)),localStorage.removeItem(q)}catch{}return window.dispatchEvent(new CustomEvent("dna:consent-changed",{detail:o})),o}window.DNAConsent={read:B,save:W};window.dispatchEvent(new CustomEvent("dna:consent-ready"));const d=document.getElementById("cookie-consent-banner"),Z=B();Z||requestAnimationFrame(()=>{d?.classList.add("is-visible"),d?.setAttribute("aria-hidden","false")});function D(e,t,n){W(e,t,n),d?.classList.remove("is-visible"),d?.setAttribute("aria-hidden","true")}document.getElementById("banner-accept-cookies")?.addEventListener("click",()=>{D(!0,!0,"accept-all")});document.getElementById("banner-decline-cookies")?.addEventListener("click",()=>{D(!1,!1,"decline-all")});const ee=d?.querySelector('a[href="/cookie-preferences"]');ee?.addEventListener("click",e=>{window.location.pathname.replace(/\/$/,"")==="/cookie-preferences"&&(e.preventDefault(),d?.classList.remove("is-visible"),d?.setAttribute("aria-hidden","true"))});const te=`/* Injected only into the chat widget and its nested open shadow roots. */
:host {
  --chat-widget-background-color: #1a1a1a !important;
  --chat-widget-received-message-color: #5a4d3b !important;
  --chat-widget-sender-message-color: #6b5c47 !important;
  --chat-widget-received-message-text-color: #ffffff !important;
  --chat-widget-sender-message-text-color: #ffffff !important;
  --chat-widget-welcome-message-text-color: #ffffff !important;
  --chat-widget-system-message-text-color: #ffffff !important;
  --chat-widget-header-message-text-color: #ffffff !important;
  --ion-text-color: #ffffff !important;
  --ion-background-color: #1a1a1a !important;
  --color: #ffffff !important;
  color: #ffffff !important;
}

/* Include legal copy, voice-agent labels, system messages and nested slots. */
*:not(style):not(script), *::before, *::after {
  color: #ffffff !important;
}

.chat-selection-root,
.chat-selection-actions,
.chat-selection-button,
.lc_text-widget_sub-heading--root,
.lc_text-widget--form,
.lc_text-widget--text-input,
.lc_text-widget--text-input-input,
.lc_legal-text-wrapper,
.lc_legal-text-container,
.lc_legal-consent-block,
.lc_legal-text,
input:not([type='checkbox']):not([type='hidden']),
textarea, select,
.iti__country-list,
ion-card {
  background: #5a4d3b !important;
  --background: #5a4d3b !important;
  --color: #ffffff !important;
}

.chat-selection-button,
.lc_text-widget--text-input-input,
input:not([type='checkbox']):not([type='hidden']), textarea, select {
  border-color: rgba(255, 255, 255, 0.2) !important;
}

.chat-selection-button {
  --background-hover: #6b5c47 !important;
  --background-focused: #6b5c47 !important;
  --background-activated: #6b5c47 !important;
}
.chat-selection-button svg [stroke] { stroke: #ffffff !important; }
input::placeholder, textarea::placeholder { color: #ffffff !important; opacity: 1 !important; }
input, textarea { caret-color: #ffffff !important; color-scheme: dark; }
input:-webkit-autofill {
  -webkit-text-fill-color: #ffffff !important;
  -webkit-box-shadow: 0 0 0 1000px #5a4d3b inset !important;
}
.iti__selected-flag, .iti__country { background-color: #5a4d3b !important; }
.iti__country:hover, .iti__country.iti__highlight { background-color: #6b5c47 !important; }
.iti__arrow { border-top-color: #ffffff !important; }
.lc_legal-msg a, .lc_legal-notice a { text-decoration: underline !important; }
ion-checkbox {
  --checkbox-background: #5a4d3b !important;
  --checkbox-background-checked: #5a4d3b !important;
  --border-color: rgba(255,255,255,.7) !important;
  --border-color-checked: #ffffff !important;
  --checkmark-color: #ffffff !important;
}
:focus-visible { outline: 2px solid #ffffff !important; outline-offset: 2px; }\r

/* GHL paints the input-card shell using a pseudo-element. */
.lc_text-widget--form::after,
.lc_text-widget--form::before {
  background: #5a4d3b !important;
}
.chat-selection-root, .chat-selection-actions, .lc_text-widget--text-input {
  border-color: rgba(255,255,255,.2) !important;
}
.lc_text-widget_sub-heading--root { border-radius: 8px !important; }\r
:host { color-scheme: dark; }
* { scrollbar-color: #91836c #1a1a1a; }
.lc_text-widget--form::after, .lc_text-widget--form::before {
  border-color: rgba(255,255,255,.2) !important;
}\r

.lc_text-widget--voice-ai-badge { background: #5a4d3b !important; }\r

/* One rounded outline per field; avoid stacked square input borders. */
.lc_text-widget--form {
  border-radius: 10px !important;
  overflow: hidden !important;
  isolation: isolate;
}
.lc_text-widget--form::before, .lc_text-widget--form::after {
  border-radius: 10px !important;
  border: 0 !important;
  box-shadow: none !important;
}
.lc_text-widget--text-input {
  border: 1px solid rgba(255,255,255,.24) !important;
  border-radius: 7px !important;
  overflow: hidden !important;
}
.lc_text-widget--text-input-input {
  border: 0 !important;
  border-radius: 6px !important;
  box-shadow: none !important;
  outline: none !important;
}
.lc_text-widget--text-input:focus-within {
  box-shadow: 0 0 0 2px rgba(255,255,255,.6) !important;
}

/* Keep the conversation canvas dark so individual olive bubbles stand out. */
ion-content { --background: #1a1a1a !important; }
ion-list, ion-item { --background: transparent !important; background: transparent !important; }
.bubble {
  background: #5a4d3b !important;
  border: 1px solid rgba(255,255,255,.12) !important;
  border-radius: 10px !important;
  padding: 10px 12px !important;
  box-shadow: 0 2px 6px rgba(0,0,0,.18) !important;
}
.bubble.outgoing { background: #6b5c47 !important; }
:host .message-container .bubble.informational { background: #4e4436 !important; }
.message-container { margin-block: 5px !important; }\r

/* The composer owns the border; its textarea stays inside the same radius. */
.input-container-textarea {
  background: #5a4d3b !important;
  border: 1px solid rgba(255,255,255,.35) !important;
  border-radius: 10px !important;
  overflow: hidden !important;
  box-shadow: 0 2px 5px rgba(0,0,0,.15) !important;
}
.input-container-textarea textarea, .input-container-textarea ion-textarea,
.input-container-textarea .textarea-wrapper {
  background: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  outline: none !important;
}
.input-container-textarea:focus-within {
  border-color: rgba(255,255,255,.75) !important;
  box-shadow: 0 0 0 2px rgba(255,255,255,.16) !important;
}\r

.bubble.bubble-footer-padding { padding-bottom: 28px !important; }\r

/* System messages need inset space even when Ionic removes their item padding. */
:host .message-container .bubble.informational {
  box-sizing: border-box !important;
  padding: 12px 14px !important;
}
.bubble.informational slot::slotted(*) { margin: 0 !important; }
.info-message-container { padding-inline: 3px !important; }\r

/* Informational messages have no timestamp; remove their reserved footer area. */
:host .message-container.info-message-container .bubble.informational.bubble-footer-padding {
  display: block !important;
  height: auto !important;
  min-height: 0 !important;
  padding: 12px 14px !important;
}
:host .message-container.info-message-container .bubble.informational > .footer {
  display: none !important;
}\r

/* A little breathing room below the final restart card. */
.live-message-end-pane {
  margin-bottom: 16px !important;
}\r
`,k="dna-chat-widget-theme",_=new WeakSet;let w=!1;function H(e){if(!e.querySelector(`#${k}`)){const t=document.createElement("style");t.id=k,t.textContent=te,e.append(t)}_.has(e)||(_.add(e),new MutationObserver(E).observe(e,{childList:!0,subtree:!0})),e.querySelectorAll("*").forEach(t=>{t.shadowRoot&&H(t.shadowRoot)})}function M(){w=!1,document.querySelectorAll("chat-widget").forEach(e=>{e.shadowRoot&&H(e.shadowRoot)})}function E(){w||(w=!0,requestAnimationFrame(M))}new MutationObserver(E).observe(document.body,{childList:!0,subtree:!0});M();const ne=window.setInterval(E,500);window.setTimeout(()=>window.clearInterval(ne),3e4);
