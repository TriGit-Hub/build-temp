(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{1865:function(e,n,a){"use strict";a.r(n);var o=a(59499),r=a(67294),i=a(41120),t=a(38668),l=a(17812),c=a(96343),s=a(22318),u=a(41749),d=a(43832),f=a(25357),m=a(91594),v=a(2876),g=a(282),p=a(18362),b=a(85893);function h(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function j(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?h(Object(a),!0).forEach((function(n){(0,o.Z)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var C=(0,i.Z)((function(e){return{container:{maxWidth:800,margin:"0 auto",padding:e.spacing(3),backgroundColor:"white",borderRadius:16,boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",marginTop:e.spacing(3)},title:{marginBottom:e.spacing(2),textAlign:"center"},textField:{marginBottom:e.spacing(2)},submitButton:{backgroundColor:"#4caf50",color:"white","&:hover":{backgroundColor:"#45a049"}},backButton:{marginRight:e.spacing(2)},popover:{padding:e.spacing(2)},formColumn:{flexBasis:"50%",padding:"0 10px"}}})),x=function(e){var n=e.name,a=e.label,o=e.value,i=e.onChange,u=e.info,d=C(),f=(0,r.useState)(null),m=f[0],v=f[1],g=function(){v(null)},h=Boolean(m);return(0,r.useEffect)((function(){var e=function(){h&&g()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[h]),(0,b.jsxs)(r.Fragment,{children:[(0,b.jsx)("div",{className:d.formColumn,children:(0,b.jsx)(t.Z,{name:n,label:a,variant:"outlined",fullWidth:!0,className:d.textField,value:o,onChange:i,InputProps:{endAdornment:(0,b.jsx)(l.Z,{"aria-label":"Informaci\xf3n","aria-owns":h?"".concat(n,"-popover"):void 0,"aria-haspopup":"true",onClick:function(e){v(e.currentTarget)},children:(0,b.jsx)(p.Z,{})})}})}),(0,b.jsx)(c.ZP,{id:"".concat(n,"-popover"),open:h,anchorEl:m,onClose:g,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},disableScrollLock:!0,children:(0,b.jsx)(s.Z,{className:d.popover,children:u})})]})},P=[{label:"Cliente",color:"#f44336"},{label:"Electricista",color:"#ffc107"},{label:"Datos de Inspecci\xf3n",color:"#4caf50"}];n.default=function(){var e=C(),n=(0,r.useState)(0),a=n[0],i=n[1],t=(0,r.useState)({name:"",email:"",nit:"",activity:"",phone:"",ncr:""}),l=t[0],c=t[1],p=(0,r.useState)({}),h=p[0],y=(p[1],(0,r.useState)({})),O=y[0],N=y[1],k=function(e){c(j(j({},l),{},(0,o.Z)({},e.target.name,e.target.value)))},w=function(e){N(j(j({},O),{},(0,o.Z)({},e.target.name,e.target.value)))};return(0,b.jsxs)(d.Z,{className:e.container,children:[(0,b.jsx)(s.Z,{variant:"h4",className:e.title,children:"Formulario de Contacto"}),(0,b.jsx)(f.Z,{activeStep:a,alternativeLabel:!0,children:P.map((function(e,n){return(0,b.jsx)(m.Z,{children:(0,b.jsx)(v.Z,{StepIconProps:{style:{color:e.color}},children:e.label})},e.label)}))}),(0,b.jsxs)("form",{children:[function(e){switch(e){case 0:return(0,b.jsx)(r.Fragment,{children:(0,b.jsxs)(u.Z,{container:!0,spacing:2,children:[(0,b.jsx)(x,{name:"name",label:"Nombre",value:l.name,onChange:k,info:"Por favor ingresa tu nombre completo."}),(0,b.jsx)(x,{name:"nit",label:"NIT",value:l.nit,onChange:k,info:"Por favor ingresa tu n\xfamero de Identificaci\xf3n tributaria."}),(0,b.jsx)(x,{name:"email",label:"Correo electr\xf3nico",value:l.email,onChange:k,info:"Por favor ingresa tu direcci\xf3n de correo electr\xf3nico."}),(0,b.jsx)(x,{name:"activity",label:"Actividad Econ\xf3mica",value:l.activity,onChange:k,info:"Por favor ingresa tu actividad o profesi\xf3n."}),(0,b.jsx)(x,{name:"phone",label:"Tel\xe9fono",value:l.phone,onChange:k,info:"Por favor ingresa tu n\xfamero de tel\xe9fono."}),(0,b.jsx)(x,{name:"ncr",label:"N\xfamero de Control de Reporte (NCR)",value:l.ncr,onChange:k,info:"Por favor ingresa tu n\xfamero de NCR (si aplicable)."})]})});case 1:return(0,b.jsx)(r.Fragment,{children:(0,b.jsxs)(u.Z,{container:!0,spacing:2,children:[(0,b.jsx)(x,{name:"name",label:"Nombre",value:h.name,onChange:k,info:"Por favor ingresa tu nombre completo."}),(0,b.jsx)(x,{name:"nit",label:"NIT",value:h.nit,onChange:k,info:"Por favor ingresa tu n\xfamero de Identificaci\xf3n tributaria."}),(0,b.jsx)(x,{name:"email",label:"Correo electr\xf3nico",value:h.email,onChange:k,info:"Por favor ingresa tu direcci\xf3n de correo electr\xf3nico."}),(0,b.jsx)(x,{name:"activity",label:"Actividad Econ\xf3mica",value:h.activity,onChange:k,info:"Por favor ingresa tu actividad o profesi\xf3n."}),(0,b.jsx)(x,{name:"phone",label:"Tel\xe9fono",value:h.phone,onChange:k,info:"Por favor ingresa tu n\xfamero de tel\xe9fono."}),(0,b.jsx)(x,{name:"ncr",label:"N\xfamero de Control de Reporte (NCR)",value:h.ncr,onChange:k,info:"Por favor ingresa tu n\xfamero de NCR (si aplicable)."})]})});case 2:return(0,b.jsx)(r.Fragment,{children:(0,b.jsxs)(u.Z,{container:!0,spacing:2,children:[(0,b.jsx)(x,{name:"inspectionRequested",label:"Inspecci\xf3n solicitada",value:O.inspectionRequested,onChange:w,info:"Por favor describe la inspecci\xf3n que solicitas."}),(0,b.jsx)(x,{name:"projectName",label:"Nombre del proyecto",value:O.projectName,onChange:w,info:"Por favor ingresa el nombre de tu proyecto."}),(0,b.jsx)(x,{name:"supplyVoltage",label:"Tensi\xf3n el\xe9ctrica del suministro",value:O.supplyVoltage,onChange:w,info:"Por favor ingresa la tensi\xf3n el\xe9ctrica del suministro."}),(0,b.jsx)(x,{name:"requestedLoad",label:"Carga a solicitar (kW \xf3 kVA)",value:O.requestedLoad,onChange:w,info:"Por favor ingresa la carga solicitada en kW o kVA."}),(0,b.jsx)(x,{name:"numberOfPanels",label:"N\xfamero de tableros",value:O.numberOfPanels,onChange:w,info:"Por favor ingresa el n\xfamero de tableros."}),(0,b.jsx)(x,{name:"numberOfPlanSheets",label:"N\xfamero de hojas de los planos",value:O.numberOfPlanSheets,onChange:w,info:"Por favor ingresa el n\xfamero de hojas de los planos."}),(0,b.jsx)(x,{name:"installationClassification",label:"Clasificaci\xf3n de la instalaci\xf3n",value:O.installationClassification,onChange:w,info:"Por favor ingresa la clasificaci\xf3n de la instalaci\xf3n."}),(0,b.jsx)(x,{name:"serviceType",label:"Tipo de servicio",value:O.serviceType,onChange:w,info:"Por favor ingresa el tipo de servicio."}),(0,b.jsx)(x,{name:"substationConnection",label:"Conexi\xf3n de la subestaci\xf3n",value:O.substationConnection,onChange:w,info:"Por favor ingresa la conexi\xf3n de la subestaci\xf3n."}),(0,b.jsx)(x,{name:"substationCapacity",label:"Capacidad de la subestaci\xf3n (kVA)",value:O.substationCapacity,onChange:w,info:"Por favor ingresa la capacidad de la subestaci\xf3n en kVA."}),(0,b.jsx)(x,{name:"emergencyGeneratorCapacity",label:"Capacidad del generador de emergencia (kVA)",value:O.emergencyGeneratorCapacity,onChange:w,info:"Por favor ingresa la capacidad del generador de emergencia en kVA."}),(0,b.jsx)(x,{name:"numberOfLevels",label:"N\xfamero de niveles",value:O.numberOfLevels,onChange:w,info:"Por favor ingresa el n\xfamero de niveles."}),(0,b.jsx)(x,{name:"numberOfServices",label:"N\xfamero de servicios a instalar",value:O.numberOfServices,onChange:w,info:"Por favor ingresa el n\xfamero de servicios a instalar."})]})});default:return null}}(a),(0,b.jsxs)("div",{children:[a>0&&(0,b.jsx)(g.Z,{variant:"contained",className:e.backButton,onClick:function(){i((function(e){return e-1}))},children:"Atr\xe1s"}),a<P.length-1?(0,b.jsx)(g.Z,{variant:"contained",color:"primary",onClick:function(){i((function(e){return e+1}))},children:"Siguiente"}):(0,b.jsx)(g.Z,{variant:"contained",color:"primary",onClick:function(){console.log("Datos enviados:",j(j(j({},l),h),O))},children:"Enviar"})]})]})]})}},5683:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form",function(){return a(1865)}])}},function(e){e.O(0,[774,764,50,888,179],(function(){return n=5683,e(e.s=n);var n}));var n=e.O();_N_E=n}]);