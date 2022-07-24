import{K as v,al as C,am as _,Z as B,an as y,ao as R,b as c,j as o,Y as T,B as k,u as g,d as F,g as S,C as $,i as A}from"./index.2260f7b0.js";import{a as q,V as z}from"./index.esm.1c574b8e.js";import{R as P,T as L}from"./TextFitler.f91bbe0f.js";import{f as Q}from"./index.b7b985d4.js";import{F as j,p as D}from"./Fab.cafef32b.js";import{u as E}from"./useRemainingViewPortHeight.7d856509.js";import"./rotate-cw.cedef2d0.js";import"./debounce.c2d20996.js";function U(e){const r=e.providers,t=Object.keys(r),s={};for(let n=0;n<t.length;n++){const i=t[n];s[i]={...r[i],idx:n}}return{byName:s,names:t}}async function V(e,r){const{url:t,init:s}=v(r);let n={providers:{}};try{const i=await fetch(t+e,s);i.ok&&(n=await i.json())}catch(i){console.log("failed to GET /providers/rules",i)}return U(n)}async function I({name:e,apiConfig:r}){const{url:t,init:s}=v(r);try{return(await fetch(t+`/providers/rules/${e}`,{method:"PUT",...s})).ok}catch(n){return console.log("failed to PUT /providers/rules/:name",n),!1}}async function W({names:e,apiConfig:r}){for(let t=0;t<e.length;t++)await I({name:e[t],apiConfig:r})}var H=function(e,r,t,s,n,i,a,d){if(!e){var l;if(r===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var m=[t,s,n,i,a,d],x=0;l=new Error(r.replace(/%s/g,function(){return m[x++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},M=H;function O(e){return M(e.rules&&e.rules.length>=0,"there is no valid rules list in the rules API response"),e.rules.map((r,t)=>({...r,id:t}))}async function K(e,r){let t={rules:[]};try{const{url:s,init:n}=v(r),i=await fetch(s+e,n);i.ok&&(t=await i.json())}catch(s){console.log("failed to fetch rules",s)}return O(t)}const w=C({key:"ruleFilterText",default:""});function G(e,r){const t=y(),{mutate:s,isLoading:n}=R(I,{onSuccess:()=>{t.invalidateQueries("/providers/rules")}});return[a=>{a.preventDefault(),s({name:e,apiConfig:r})},n]}function J(e){const r=y(),{data:t}=N(e),{mutate:s,isLoading:n}=R(W,{onSuccess:()=>{r.invalidateQueries("/providers/rules")}});return[a=>{a.preventDefault(),s({names:t.names,apiConfig:e})},n]}function N(e){return _(["/providers/rules",e],()=>V("/providers/rules",e))}function Y(e){const{data:r,isFetching:t}=_(["/rules",e],()=>K("/rules",e)),{data:s}=N(e),[n]=B(w);if(n==="")return{rules:r,provider:s,isFetching:t};{const i=n.toLowerCase();return{rules:r.filter(a=>a.payload.toLowerCase().indexOf(i)>=0),isFetching:t,provider:{byName:s.byName,names:s.names.filter(a=>a.toLowerCase().indexOf(i)>=0)}}}}const Z="_RuleProviderItem_12aid_1",X="_left_12aid_7",ee="_middle_12aid_14",te="_gray_12aid_21",re="_action_12aid_25",ne="_refreshBtn_12aid_32",u={RuleProviderItem:Z,left:X,middle:ee,gray:te,action:re,refreshBtn:ne};function se({idx:e,name:r,vehicleType:t,behavior:s,updatedAt:n,ruleCount:i,apiConfig:a}){const[d,l]=G(r,a),m=Q(new Date(n),new Date);return c("div",{className:u.RuleProviderItem,children:[o("span",{className:u.left,children:e}),c("div",{className:u.middle,children:[o(T,{name:r,type:`${t} / ${s}`}),o("div",{className:u.gray,children:i<2?`${i} rule`:`${i} rules`}),c("div",{className:u.action,children:[c(k,{onClick:d,disabled:l,className:u.refreshBtn,children:[o(P,{isRotating:l,size:13}),o("span",{className:"visually-hidden",children:"Refresh"})]}),c("small",{className:u.gray,children:["Updated ",m," ago"]})]})]})]})}function ie({apiConfig:e}){const[r,t]=J(e),{t:s}=g();return o(j,{icon:o(P,{isRotating:t}),text:s("update_all_rule_provider"),style:D,onClick:r})}const oe="_rule_1ymqx_1",ae="_left_1ymqx_12",le="_a_1ymqx_19",ce="_b_1ymqx_26",ue="_type_1ymqx_37",f={rule:oe,left:ae,a:le,b:ce,type:ue},h={_default:"#59caf9",DIRECT:"#f5bc41",REJECT:"#cb3166"};function de({proxy:e}){let r=h._default;return h[e]&&(r=h[e]),{color:r}}function me({type:e,payload:r,proxy:t,id:s}){const n=de({proxy:t});return c("div",{className:f.rule,children:[o("div",{className:f.left,children:s}),c("div",{children:[o("div",{className:f.b,children:r}),c("div",{className:f.a,children:[o("div",{className:f.type,children:e}),o("div",{style:n,children:t})]})]})]})}const fe="_header_1j1w3_1",he="_RuleProviderItemWrapper_1j1w3_17",b={header:fe,RuleProviderItemWrapper:he},{memo:ve}=A,p=30;function pe(e,{rules:r,provider:t}){const s=t.names.length;return e<s?t.names[e]:r[e-s].id}function _e({provider:e}){return function(t){const s=e.names.length;return t<s?110:80}}const ye=ve(({index:e,style:r,data:t})=>{const{rules:s,provider:n,apiConfig:i}=t,a=n.names.length;if(e<a){const l=n.names[e],m=n.byName[l];return o("div",{style:r,className:b.RuleProviderItemWrapper,children:o(se,{apiConfig:i,...m})})}const d=s[e-a];return o("div",{style:r,children:o(me,{...d})})},q),Re=e=>({apiConfig:S(e)}),Te=F(Re)(ge);function ge({apiConfig:e}){const[r,t]=E(),{rules:s,provider:n}=Y(e),i=_e({provider:n}),{t:a}=g();return c("div",{children:[c("div",{className:b.header,children:[o($,{title:a("Rules")}),o(L,{placeholder:"Filter",textAtom:w})]}),o("div",{ref:r,style:{paddingBottom:p},children:o(z,{height:t-p,width:"100%",itemCount:s.length+n.names.length,itemSize:i,itemData:{rules:s,provider:n,apiConfig:e},itemKey:pe,children:ye})}),n&&n.names&&n.names.length>0?o(ie,{apiConfig:e}):null]})}export{Te as default};
