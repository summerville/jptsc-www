// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Last updated: 2011-10-27
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_blur(n,k,c){var f=jQuery;var b=document.createElement("canvas").getContext;var l=n.width,g=n.height;k.each(function(h){if(h){f(this).hide()}});var j;this.go=function(h,o){if(j){return -1}j=1;var s=f(k.get(o)),q=f(k.get(h));if(b){var r=e(s,30),p=e(q,30);r.fadeIn(n.duration/3,"linear",function(){s.hide();r.fadeOut(n.duration/6,"linear");p.fadeIn(n.duration/6,"linear",function(){r.hide();q.show();p.fadeOut(n.duration/2,"linear",function(){r.remove();p.remove();j=0})})})}else{var r=e(s,5);r.fadeIn(n.duration/3,"linear",function(){s.css("z-index",1);q.css("z-index",3).fadeIn(n.duration/3,"linear",function(){s.hide();q.css("z-index",1);r.remove();j=0})})}return h};function e(t,s){var w=(parseInt(t.css("z-index"))||0)+1;if(b){var o=f('<canvas width="'+l+'" height="'+g+'"/>');o.css({"z-index":w,position:"absolute",left:0,top:0,display:"none"}).appendTo(c);var B=o.get(0).getContext("2d");B.drawImage(t.get(0),0,0);i(B,0,0,l,g,s);return o}var C=f("<div></div>").css({position:"absolute","z-index":w,left:t.position().left,top:t.position().top,width:l+"px",height:g+"px",display:"none"}).appendTo(t.parent());var A=(Math.sqrt(5)+1)/2;var p=1-A/2;for(var q=0;p*q<s;q++){var u=Math.PI*A*q;var h=(p*q+1);var z=h*Math.cos(u);var v=h*Math.sin(u);f("<div></div>").css({opacity:1/(q+1),position:"absolute","z-index":w,left:0,top:0,background:'url("'+t.attr("src")+'") no-repeat '+Math.round(z)+"px "+Math.round(v)+"px",width:"100%",height:"100%"}).appendTo(C)}return C}var m=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var a=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function i(af,N,L,h,o,W){if(isNaN(W)||W<1){return}W|=0;var aa;try{try{aa=af.getImageData(N,L,h,o)}catch(ae){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");aa=af.getImageData(N,L,h,o)}catch(ae){alert("Cannot access local image");throw new Error("unable to access local image data: "+ae);return}}}catch(ae){alert("Cannot access image");throw new Error("unable to access image data: "+ae)}var t=aa.data;var U,T,ac,Z,C,F,z,r,s,K,A,M,I,Q,V,D,w,E,G,P;var ad=W+W+1;var R=h<<2;var B=h-1;var Y=o-1;var v=W+1;var X=v*(v+1)/2;var O=new d();var J=O;for(ac=1;ac<ad;ac++){J=J.next=new d();if(ac==v){var u=J}}J.next=O;var ab=null;var S=null;z=F=0;var H=m[W];var q=a[W];for(T=0;T<o;T++){Q=V=D=r=s=K=0;A=v*(w=t[F]);M=v*(E=t[F+1]);I=v*(G=t[F+2]);r+=X*w;s+=X*E;K+=X*G;J=O;for(ac=0;ac<v;ac++){J.r=w;J.g=E;J.b=G;J=J.next}for(ac=1;ac<v;ac++){Z=F+((B<ac?B:ac)<<2);r+=(J.r=(w=t[Z]))*(P=v-ac);s+=(J.g=(E=t[Z+1]))*P;K+=(J.b=(G=t[Z+2]))*P;Q+=w;V+=E;D+=G;J=J.next}ab=O;S=u;for(U=0;U<h;U++){t[F]=(r*H)>>q;t[F+1]=(s*H)>>q;t[F+2]=(K*H)>>q;r-=A;s-=M;K-=I;A-=ab.r;M-=ab.g;I-=ab.b;Z=(z+((Z=U+W+1)<B?Z:B))<<2;Q+=(ab.r=t[Z]);V+=(ab.g=t[Z+1]);D+=(ab.b=t[Z+2]);r+=Q;s+=V;K+=D;ab=ab.next;A+=(w=S.r);M+=(E=S.g);I+=(G=S.b);Q-=w;V-=E;D-=G;S=S.next;F+=4}z+=h}for(U=0;U<h;U++){V=D=Q=s=K=r=0;F=U<<2;A=v*(w=t[F]);M=v*(E=t[F+1]);I=v*(G=t[F+2]);r+=X*w;s+=X*E;K+=X*G;J=O;for(ac=0;ac<v;ac++){J.r=w;J.g=E;J.b=G;J=J.next}C=h;for(ac=1;ac<=W;ac++){F=(C+U)<<2;r+=(J.r=(w=t[F]))*(P=v-ac);s+=(J.g=(E=t[F+1]))*P;K+=(J.b=(G=t[F+2]))*P;Q+=w;V+=E;D+=G;J=J.next;if(ac<Y){C+=h}}F=U;ab=O;S=u;for(T=0;T<o;T++){Z=F<<2;t[Z]=(r*H)>>q;t[Z+1]=(s*H)>>q;t[Z+2]=(K*H)>>q;r-=A;s-=M;K-=I;A-=ab.r;M-=ab.g;I-=ab.b;Z=(U+(((Z=T+v)<Y?Z:Y)*h))<<2;r+=(Q+=(ab.r=t[Z]));s+=(V+=(ab.g=t[Z+1]));K+=(D+=(ab.b=t[Z+2]));ab=ab.next;A+=(w=S.r);M+=(E=S.g);I+=(G=S.b);Q-=w;V-=E;D-=G;S=S.next;F+=h}}af.putImageData(aa,N,L)}function d(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Last updated: 2011-10-27
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"blur",prev:"",next:"",duration:20*100,delay:20*100,outWidth:620,outHeight:420,width:620,height:420,autoPlay:true,stopOnHover:false,loop:false,bullets:0,caption:false,controls:true});