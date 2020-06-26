(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{k31A:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return p})),r.d(t,"default",(function(){return l}));r("91GP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("q1tI");var n=r("7ljp"),b=r("013z");r("qKvR");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o,p={},i=(o="Caption",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),u={_frontmatter:p},c=b.a;function l(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,b={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(b[r]=e[r]);return b}(e,["components"]);return Object(n.b)(c,a({},u,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Remote debugging"),Object(n.b)("p",null,"It might be necessary to use a remote debugger to step through code execution on the cluster, where log analysis does not provide sufficient information to resolve an issue.\nThe following is an outline of the steps required to connect eclipse’s remote debugger to the SPM code running on the cluster."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Edit the Curam Producer deployment spec to pass debug arguments to the WebSphere® Liberty server."),Object(n.b)("li",{parentName:"ul"},"Forward the debugging port from the port running the Curam Producer pod."),Object(n.b)("li",{parentName:"ul"},"Create the remote debug configuration in eclipse."),Object(n.b)("li",{parentName:"ul"},"Connect the remote debugger to the listener.")),Object(n.b)("h3",null,"Edit the Curam Producer deployment"),Object(n.b)("p",null,"Edit the deployment spec for the Curam Producer deployment."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"kubectl edit deployment release-apps-curam-producer")),Object(n.b)("p",null,"Add the following lines under containers:"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{}),"containers:\n- args:\n  - /opt/ibm/wlp/bin/server\n  - debug\n  - defaultServer\n")),Object(n.b)("p",null,"The Curam Producer deployment will terminate its pod and start a new one with the debug configuration."),Object(n.b)("h3",null,"Forward the debugging port"),Object(n.b)("p",null,"Next, forward the WebSphere® Liberty server’s debug port to make it available to the remote debugger. 7777 is the default debug port for WebSphere® Liberty."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"kubectl port-forward release-apps-curam-producer-XXXX 7777:7777")),Object(n.b)("h3",null,"View the logs in real-time"),Object(n.b)("p",null,"In order to tail the logs while you debug use the following command:"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"kubectl logs -f release-apps-curam-producer-XXXX")),Object(n.b)("p",null,"Note, WebSphere® Liberty will not start the Curam application until the remote debugger attaches to the listener. Therefore, the log will not be populated before you launch the remote debugger."),Object(n.b)("h3",null,"Create the remote debug configuration"),Object(n.b)("p",null,"From the Eclipse debug view, create a Java Remote Application. Attach an appropriate source code project, and attach the Java Remote Application to the port you forwarded in the above step."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",a({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAABYlAAAWJQFJUiTwAAABpklEQVQoz5WT2Y6bMBiF/f4P1V5WGmm6hITFBDAYvOEFUghRlaQ9pBpp1A6j9rPlC+D4/Bsk3X15Tr6mSZpmWRRFeZ5LtdJ1HXsghLDW9i8YY7zzh3J/KDJynqdpHIbghuBD8OMQzud5WZafG9zvd5yJOHyie0IrGR1lXeu6szVXx5IzLuGglNbawNM5B6vXG2scTtY4Eh/Fx6c0zvkw/dD29PQ52aWMN7yuG8Zqo01v+j+2kkpKJURH4FHkWVUWl+WMgJuatS33fk0BLvYtOOdSdEoK0jubUQqreZ7xeVVVcZJQSlEwBP+mOHjHOpczSaQxx6LAdygD9BAXRVGWJQreb2KEMrwVxFhXVqWU8nq9Iu40TXOaa6OHB6cNxnFcc7amozRpmuZ2u0GMaJFCi7w5R7ntNigbEaI+xHvMBrqP+/B0LRTa4719F+RFOim/7aI4jtHQEAKusP/GKm6FymjOWHW5XBD2/4mH8YSeQva72lrpv6fi9TYrOHshJcFYLy9M07S+2ebxf1jMzvfQe2cI58haPu5bA37f1mIZzTr/YTc8U/8L27E2slTdwIQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("picture",{parentName:"span"},"\n        ",Object(n.b)("source",a({parentName:"picture"},{srcSet:["/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/0eda2/remote_debugger.webp 288w","/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/460e2/remote_debugger.webp 576w","/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/e0ca3/remote_debugger.webp 1152w","/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/d02be/remote_debugger.webp 1728w","/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/ff5d0/remote_debugger.webp 1768w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"})),"\n        ",Object(n.b)("source",a({parentName:"picture"},{srcSet:["/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/7fc1e/remote_debugger.png 288w","/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/a5df1/remote_debugger.png 576w","/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/3cbba/remote_debugger.png 1152w","/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/0b124/remote_debugger.png 1728w","/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/78453/remote_debugger.png 1768w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"})),"\n        ",Object(n.b)("img",a({parentName:"picture"},{className:"gatsby-resp-image-image",src:"/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/3cbba/remote_debugger.png",alt:"Figure 1: Example Debugger Config",title:"Figure 1: Example Debugger Config",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}})),"\n      "),"\n    "),Object(n.b)(i,{mdxType:"Caption"},Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Figure 1:")," Example debugger config")),Object(n.b)("h3",null,"Connect the remote debugger to the listener"),Object(n.b)("p",null,"Launch the debugger and debug as usual."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-08-runtime-remote-debugging-mdx-5f55d4fae3cc1f4fd945.js.map