(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{vQD9:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return u}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),l=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i,o={},c=(i="InlineNotification",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),s={_frontmatter:o},b=l.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(b,r({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Now that all the elements are in place, build the images as follows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"We will use a ",Object(a.b)("inlineCode",{parentName:"p"},"$DOCKER_REGISTRY")," for the commands below. Please select based on the container environment you are deploying."),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"CRC will be ",Object(a.b)("inlineCode",{parentName:"li"},"default-route-openshift-image-registry.apps-crc.testing")),Object(a.b)("li",{parentName:"ul"},"Minikube will be ",Object(a.b)("inlineCode",{parentName:"li"},"minikube.local:5000")),Object(a.b)("li",{parentName:"ul"},"IKS will be ",Object(a.b)("inlineCode",{parentName:"li"},"us.icr.io")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To build the XML server image, run the following commands:"))),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"cd $SPM_HOME/dockerfiles/Liberty/\necho -e 'content/release-stage/*\\n!content/release-stage/CuramSDEJ/xmlserver' > .dockerignore\ndocker build \\\n     --tag $DOCKER_REGISTRY/xmlserver:latest \\\n     --file XMLServer.Dockerfile .\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"To build the batch image, run the following commands:")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"cd $SPM_HOME/dockerfiles/Liberty/\necho -e 'content/release-stage/ear' > .dockerignore\ndocker build \\\n     --tag $DOCKER_REGISTRY/batch:latest \\\n     --file Batch.Dockerfile .\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"To build the application image, run the following commands for each of the applications (EAR files) needed:")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"cd $SPM_HOME/dockerfiles/Liberty/\necho -e 'content/release-stage/*\\n!content/release-stage/build\\n!content/release-stage/ear\\n!content/release-stage/CuramSDEJ' > .dockerignore\ndocker build \\\n     --tag $DOCKER_REGISTRY/curam:latest \\\n     --file EAR.Dockerfile \\\n     --build-arg MQ_RA_LICENSE=--acceptLicense \\\n     --build-arg EAR_NAME=Curam .\n")),Object(a.b)(c,{mdxType:"InlineNotification"},Object(a.b)("p",null,"For additional SPM applications (e.g. Rest, CitizenPortal), make the following changes to the command:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"the value of the ",Object(a.b)("inlineCode",{parentName:"li"},"--tag")," argument must be the application name in ",Object(a.b)("em",{parentName:"li"},"lowercase")),Object(a.b)("li",{parentName:"ul"},"the value of the ",Object(a.b)("inlineCode",{parentName:"li"},"--build-arg EAR_NAME")," argument must be the name of the EAR file ",Object(a.b)("em",{parentName:"li"},"without")," the file extension (that is, for ",Object(a.b)("inlineCode",{parentName:"li"},"Rest.ear"),", use the value ",Object(a.b)("inlineCode",{parentName:"li"},"Rest"),")")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"docker build \\\n     --tag $DOCKER_REGISTRY/citizenportal:latest \\\n     --file EAR.Dockerfile \\\n     --build-arg MQ_RA_LICENSE=--acceptLicense \\\n     --build-arg EAR_NAME=CitizenPortal .\n"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"To build the IBM MQ server image, run the following commands:")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"cd $SPM_HOME/dockerfiles/MQ/\ndocker build \\\n     --tag $DOCKER_REGISTRY/mqserver:latest \\\n     --file Dockerfile .\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"To build the static content image, run the following commands:")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"cd $SPM_HOME/dockerfiles/HTTPServer/\ndocker build \\\n     --tag $DOCKER_REGISTRY/ihs:latest \\\n     --file StaticContent.Dockerfile .\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"To build an SPM Docker image for your ",Object(a.b)("em",{parentName:"li"},"built")," Universal Access application:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Copy the ",Object(a.b)("inlineCode",{parentName:"li"},"build")," directory from the React application to ",Object(a.b)("inlineCode",{parentName:"li"},"$SPM_HOME/dockerfiles/HTTPServer")),Object(a.b)("li",{parentName:"ul"},"Run the following commands:")))),Object(a.b)(c,{mdxType:"InlineNotification"},Object(a.b)("p",null,"This is applicable only if you are licensed for ",Object(a.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.universalaccess.doc/CitizenEngagement/ctr_CitizenEngagementApplication.html"}),"Universal Access"))),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"cd $SPM_HOME/dockerfiles/HTTPServer/\ndocker build \\\n     --tag $DOCKER_REGISTRY/ce-app:latest \\\n     --file CE.Dockerfile .\n")),Object(a.b)("h2",null,"Pushing the images to the registry"),Object(a.b)("p",null,"When you set up Minikube by following the steps in ",Object(a.b)("a",r({parentName:"p"},{href:"/spm-kubernetes/01-prereq/minikube"}),"Minikube"),", a registry was also created to store the Docker images.\nTo push the new images that you created to the registry, run the following shell script:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"docker push $DOCKER_REGISTRY/xmlserver:latest\ndocker push $DOCKER_REGISTRY/batch:latest\ndocker push $DOCKER_REGISTRY/curam:latest\ndocker push $DOCKER_REGISTRY/mqserver:latest\ndocker push $DOCKER_REGISTRY/ihs:latest\n")),Object(a.b)(c,{mdxType:"InlineNotification"},Object(a.b)("p",null,"If any additional images were built (for other SPM applications or for the React application), do not forget to push the images too. For example:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"docker push $DOCKER_REGISTRY/citizenportal:latest\ndocker push $DOCKER_REGISTRY/ce-app:latest\n"))),Object(a.b)("h2",null,"Pushing the images to the IBM Cloud Container Registry"),Object(a.b)("p",null,"IBM Cloud Container Registry is the service to distribute the containers across Kubernetes clusters. In order to configure it, some preparation steps are\nrequired to obtain the credentials and a namespace, globally unique between all the tenants of IBM Cloud. Please refer to the IBM Cloud Container Registry\ndocumentation ",Object(a.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/Registry?topic=Registry-getting-started"}),"here")," for more information on configuring the registry and obtaining the required credentials."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"ibmcloud login -c <ICR_ENDPOINT> --apikey <ICR_API_KEY> -r <ICR_DC_REGION>\nibmcloud cr login\n\ndocker push us.icr.io/<ICR_NAMESPACE>/xmlserver:latest\ndocker push us.icr.io/<ICR_NAMESPACE>/batch:latest\ndocker push us.icr.io/<ICR_NAMESPACE>/curam:latest\ndocker push us.icr.io/<ICR_NAMESPACE>/mqserver:latest\ndocker push us.icr.io/<ICR_NAMESPACE>/ihs:latest\n")),Object(a.b)("h2",null,"View the artifacts in the repository"),Object(a.b)("p",null,"Confirm that the pushes to the Docker registry succeeded. Run the following command:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"curl http://minikube.local:5000/v2/_catalog\n")),Object(a.b)("p",null,"The command returns the following result:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'{"repositories":["batch","curam","mqserver","xmlserver","ihs"]}\n')),Object(a.b)(c,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," When you shut down Minikube, you might need to repush the Docker images to the registry.")),Object(a.b)("p",null,"For more information about the Docker Registry HTTP API, see ",Object(a.b)("a",r({parentName:"p"},{href:"https://docs.docker.com/registry/spec/api/"}),"Docker Registry HTTP API V2"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-03-build-images-build-images-mdx-3813da257da4acc4450c.js.map