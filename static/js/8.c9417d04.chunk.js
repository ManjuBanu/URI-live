(this["webpackJsonpmy-ecomm"]=this["webpackJsonpmy-ecomm"]||[]).push([[8],{93:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(54),c=t(9),l=t(3),o=t.n(l),u=t(44);var s=t(56);function m(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],a=!0,r=!1,i=void 0;try{for(var c,l=n[Symbol.iterator]();!(a=(c=l.next()).done)&&(t.push(c.value),!e||t.length!==e);a=!0);}catch(o){r=!0,i=o}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return t}}(n,e)||Object(s.a)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=t(39),p=t(52),f=t(5),b=t(4);function h(){var n=Object(f.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n\n  &.shrink {\n    ","\n  }\n"]);return h=function(){return n},n}function g(){var n=Object(f.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ label {\n    ","\n  }\n"]);return g=function(){return n},n}function x(){var n=Object(f.a)(["\n  position: relative;\n  margin: 45px 0;\n\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"]);return x=function(){return n},n}function v(){var n=Object(f.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"]);return v=function(){return n},n}var w=Object(b.b)(v(),"black"),y=b.c.div(x()),j=b.c.input(g(),"grey","grey",w),O=b.c.label(h(),"grey",w),E=function(n){var e=n.handleChange,t=n.label,a=Object(p.a)(n,["handleChange","label"]);return r.a.createElement(y,null,r.a.createElement(j,Object.assign({onChange:e},a)),t?r.a.createElement(O,{className:a.value.length?"shrink":""},t):null)},S=t(15),C=t(21);function k(){var n=Object(f.a)(["\nbackground-color: #4285f4;\n"]);return k=function(){return n},n}function I(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  \n  @media screen and (max-width: 800px) {\n    margin-left: 30px;\n    display: flex;\n    width:80%;\n  }\n\n"]);return I=function(){return n},n}function N(){var n=Object(f.a)(["\n  margin: 10px 0;\n  @media screen and (max-width: 800px) {\n    margin: 0;\n    text-align:center;\n  }\n"]);return N=function(){return n},n}function P(){var n=Object(f.a)(["\n  margin: 10px 0;\n  @media screen and (max-width: 800px) {\n    margin: 5px 0;\n    text-align:center;\n  }\n"]);return P=function(){return n},n}function q(){var n=Object(f.a)(["\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n  @media screen and (max-width: 800px) {\n    width: 70%;\n  }\n"]);return q=function(){return n},n}var z=b.c.div(q()),D=b.c.h2(P()),G=b.c.h4(N()),U=b.c.div(I()),A=Object(b.c)(d.a)(k()),J=Object(C.b)(null,(function(n){return{googleSignInStart:function(){return n(Object(S.c)())},emailSignInStart:function(e,t){return n(Object(S.b)({email:e,password:t}))}}}))((function(n){var e=n.emailSignInStart,t=n.googleSignInStart,l=m(Object(a.useState)({email:"",password:""}),2),s=l[0],p=l[1],f=s.email,b=s.password,h=function(){var n=Object(u.a)(o.a.mark((function n(t){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),e(f,b);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(n){var e=n.target,t=e.value,a=e.name;p(Object(c.a)(Object(c.a)({},s),{},Object(i.a)({},a,t)))};return r.a.createElement(z,null,r.a.createElement(D,null,"I already have an account"),r.a.createElement(G,null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:h},r.a.createElement(E,{name:"email",type:"email",handleChange:g,value:f,label:"email",required:!0}),r.a.createElement(E,{name:"password",type:"password",value:b,handleChange:g,label:"password",required:!0}),r.a.createElement(U,null,r.a.createElement(d.a,{type:"submit"}," Sign in "),r.a.createElement(A,{type:"button",onClick:t,isGoogleSignIn:!0},"Sign in with Google"))))})),T=t(29),B=t(30),F=t(32),H=t(31);function K(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  \n  @media screen and (max-width: 800px) {\n    margin-left:100px;\n    display: flex;\n    width:80%;\n  }\n\n"]);return K=function(){return n},n}function L(){var n=Object(f.a)(["\n  margin: 10px 0;\n  @media screen and (max-width: 800px) {\n    margin: 0;\n    text-align:center;\n  }\n"]);return L=function(){return n},n}function M(){var n=Object(f.a)(["\n  margin: 10px 0;\n  @media screen and (max-width: 800px) {\n    margin: 5px 0;\n    text-align:center;\n  }\n"]);return M=function(){return n},n}function Q(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n  \n  @media screen and (max-width: 800px) {\n    width: 70%;\n  }\n"]);return Q=function(){return n},n}var R=b.c.div(Q()),V=b.c.h2(M()),W=b.c.h4(L()),X=b.c.div(K()),Y=function(n){Object(F.a)(t,n);var e=Object(H.a)(t);function t(){var n;return Object(T.a)(this,t),(n=e.call(this)).handleSubmit=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,r,i,c,l,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.props.signUpStart,r=n.state,i=r.displayName,c=r.email,l=r.password,u=r.confirmPassword,l===u){e.next=6;break}return alert("passwords don't match"),e.abrupt("return");case 6:a({displayName:i,email:c,password:l});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(i.a)({},a,r))},n.state={displayName:"",email:"",password:"",confirmPassword:""},n}return Object(B.a)(t,[{key:"render",value:function(){var n=this.state,e=n.displayName,t=n.email,a=n.password,i=n.confirmPassword;return r.a.createElement(R,null,r.a.createElement(V,null,"I do not have a account "),r.a.createElement(W,null,"Sign up with your email and password "),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(E,{type:"text",name:"displayName",value:e,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(E,{type:"email",name:"email",value:t,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(E,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(E,{type:"password",name:"confirmPassword",value:i,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(X,null,r.a.createElement(d.a,{type:"submit"},"SIGN UP"))))}}]),t}(r.a.Component),Z=Object(C.b)(null,(function(n){return{signUpStart:function(e){return n(Object(S.j)(e))}}}))(Y);function $(){var n=Object(f.a)(["\n  width: 850px;\n  display: flex;\n  justify-content: space-between;\n  margin: 30px auto;\n\n  @media screen and (max-width: 800px) {\n    flex-direction: column;\n    width: unset;\n    align-items: center;\n    > *:first-child {\n      margin-bottom: 50px;\n    }\n  }\n"]);return $=function(){return n},n}var _=b.c.div($());e.default=function(){return r.a.createElement(_,null,r.a.createElement(J,null),r.a.createElement(Z,null))}}}]);
//# sourceMappingURL=8.c9417d04.chunk.js.map