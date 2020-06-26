(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{qqAJ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var o=n("7ljp"),r=n("013z");n("qKvR");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i={},s={_frontmatter:i},b=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(b,a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Some issues might require product changes to resolve them."),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},Object(o.b)("inlineCode",{parentName:"strong"},"minikube dashboard")," command on Red Hat")),Object(o.b)("p",null,"When you follow the steps “Kubernetes dashboard” in ",Object(o.b)("a",a({parentName:"p"},{href:"/spm-kubernetes/08-runtime/interrogate_runtime"}),"Monitoring the application in Minikube"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"minikube dashboard")," command might not work on Red Hat operating systems.\nFor more information, see ",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/kubernetes/minikube/issues/5815"}),"Minikube issue"),"."),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"Using Helm on Red Hat")),Object(o.b)("p",null,"When you use Helm on Red Hat, you might have to use the Linux® ",Object(o.b)("inlineCode",{parentName:"p"},"yum")," command to install the ",Object(o.b)("inlineCode",{parentName:"p"},"socat")," utility. Otherwise, Tiller does not work properly."),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"“Context Root Not Found” error on the SPM home page, BIRT, or caseload summary pages")),Object(o.b)("p",null,"The “Context Root Not Found” error occurs because the deployment does not install the BIRT application."),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"The logs are filled by repetitions of the ICWWKS4001I message")),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"[1/22/19 8:48:18:272 GMT] 000000ba com.ibm.ws.security.token.internal.TokenManagerImpl ICWWKS4001I: The security token cannot be validated. This can be for the following reasons:\n1. The security token was generated on another server using different keys.\n2. The token configuration or the security keys of the token service that created the token has been changed.\n3. The token service that created the token is no longer available.\n")),Object(o.b)("p",null,"The root cause is users not clearing the browser cache after the application is redeployed. Users might have old, local cookie files."),Object(o.b)("p",null,"However, after a redeployment or an upgrade, the application does not recognize the cookies that are presented to it by the computer, which causes the error messages in the logs."),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"Limitations when using the Minikube ",Object(o.b)("inlineCode",{parentName:"strong"},"none")," driver")),Object(o.b)("p",null,"There are a number of limitations associated with the Minikube none driver that are documented on the ",Object(o.b)("a",a({parentName:"p"},{href:"https://minikube.sigs.k8s.io/docs/reference/drivers/none/"}),"Minikube site"),". You must evaluate the impacts of these limitations for your implementation."),Object(o.b)("p",null,"However, the unavailability of the ",Object(o.b)("inlineCode",{parentName:"p"},"minikube ssh")," command might make it difficult to analyze and resolve problems and issues. For example, switching to the kvm2 driver enables the use of ",Object(o.b)("inlineCode",{parentName:"p"},"minikube ssh")," and resolves issues with the Docker Registry."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-known-issues-mdx-355fce2f67af21a0f44a.js.map