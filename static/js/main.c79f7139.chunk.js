(this["webpackJsonpfrontend-team"]=this["webpackJsonpfrontend-team"]||[]).push([[0],{57:function(e,a,t){e.exports=t(79)},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(18),i=t.n(r),c=(t(62),t(63),t(14)),s=t(21),o=t(27),m=t(26),d=t(88),u=t(87),p=(t(48),t(64),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"nav-container"},l.a.createElement(d.a,{collapseOnSelect:!0,expand:"lg",variant:"dark",sticky:"bottom"},l.a.createElement(d.a.Brand,{className:"main-web-name",href:"#home"},"Tech Hub IIT Tirupati"),l.a.createElement(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(d.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(u.a,{className:"ml-auto"},l.a.createElement(u.a.Link,{className:"navigation-link",href:"#home"},"Home"),l.a.createElement(u.a.Link,{className:"navigation-link",href:"#about"},"About"),l.a.createElement(u.a.Link,{className:"navigation-link",href:"#clubs"},"Clubs"),l.a.createElement(u.a.Link,{className:"navigation-link",href:"#achievements"},"Achievements"),l.a.createElement(u.a.Link,{className:"navigation-link",href:"#ongoing-projets"},"Ongoing Projects"),l.a.createElement(u.a.Link,{className:"navigation-link",href:"#challenges"},"Challenges"),l.a.createElement(u.a.Link,{className:"navigation-link",href:"#faqs"},"FAQs")))))}}]),t}(n.Component)),E=(t(68),t(81)),h=function(e){for(var a=[31,28,31,30,31,30,31,31,30,31,30,31],t=new Date,n=t.getMonth(),r=t.getFullYear(),i=new Date(r,n).getDay(),c=["January","February","March","April","May","June","July","August","September","November","December"][n],s=[],o=1,m=!1,d=0;d<5;d+=1){for(var u=[],p=0;p<7;p+=1){m?(o+=1)>a[n]&&(m=!1):p===i&&o<=a[n]&&(m=!0);var h=null;if(m)for(var g=0;g<e.events.length;g++)if(e.events[g].date===o){h=l.a.createElement("div",{style:{height:"100%",position:"relative",cursor:"pointer"}},l.a.createElement("img",{style:{height:"100%"},className:"d-block w-100",src:e.events[g].image,alt:"event"}),l.a.createElement("span",{className:"date-calendar",style:{position:"absolute",bottom:"0",right:"0.3rem"}},o));break}var v="cell-calendar";0===d?v+=" top-row":4===d&&(v+=" bottom-row"),u.push(l.a.createElement("td",{key:"td".concat(d).concat(p),style:{padding:"0"}},l.a.createElement("div",{className:v},m?l.a.createElement("div",{className:"border-div-calendar"},h||l.a.createElement("div",{className:"no-event-cell"},l.a.createElement("span",{className:"date-calendar",style:{position:"absolute",bottom:"0",right:"0.3rem"}},o))):l.a.createElement("div",{className:"border-div-calendar-no-hover"},l.a.createElement("div",{className:"not-present-month"})))))}var b=l.a.createElement("tr",{key:"td".concat(d)},u);s.push(b)}return l.a.createElement("div",{className:"calendar-container"},l.a.createElement("p",{className:"heading-calendar"},"Calendar Activities"),l.a.createElement("p",{className:"month-name-calendar"},"".concat(c.toUpperCase()," ").concat(r)),l.a.createElement("div",{className:"table-calendar"},l.a.createElement(E.a,{borderless:!0},l.a.createElement("thead",null,l.a.createElement("tr",{style:{color:" #A19F9D"}},l.a.createElement("th",{className:"th-calendar"},"Sunday"),l.a.createElement("th",{className:"th-calendar"},"Monday"),l.a.createElement("th",{className:"th-calendar"},"Tuesday"),l.a.createElement("th",{className:"th-calendar"},"Wednesday"),l.a.createElement("th",{className:"th-calendar"},"Thursday"),l.a.createElement("th",{className:"th-calendar"},"Friday"),l.a.createElement("th",{className:"th-calendar"},"Saturday"))),l.a.createElement("tbody",{style:{border:"3px solid #8F7FC6"}},s))))},g=(t(69),t(20)),v=t(89),b=(t(70),t(71),function(e){return l.a.createElement("div",{className:"border-div-button"},l.a.createElement("div",{className:"Button"},e.text))}),f=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e={controls:!1,indicators:!0,wrap:!0,interval:3e3};return l.a.createElement("div",{style:{marginTop:"5%"}},l.a.createElement("p",{className:"heading-carousel"},"Activities Showcase"),l.a.createElement("div",null,l.a.createElement(g.a,Object.assign({},e,{className:"desktop-carousel"}),l.a.createElement(g.a.Item,null,l.a.createElement("div",{className:"carousel-root"},l.a.createElement("div",{className:"border-div"},l.a.createElement("div",{className:"image-div"},l.a.createElement("img",{style:{height:"100%"},className:"d-block w-100",src:"https://images.unsplash.com/photo-1499578124509-1611b77778c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80",alt:"First slide"}))),l.a.createElement("div",{className:"border-div"},l.a.createElement("div",{className:"content-div"},l.a.createElement("p",{className:"event-heading-carousel"},"Robo Wars 2020"),l.a.createElement("p",{className:"event-description-carousel"},"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."))))),l.a.createElement(g.a.Item,null,l.a.createElement("div",{className:"carousel-root"},l.a.createElement("div",{className:"border-div"},l.a.createElement("div",{style:{height:"100%",width:"100%"}},l.a.createElement("img",{style:{height:"100%"},className:"d-block w-100",src:"https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",alt:"First slide"}))),l.a.createElement("div",{className:"border-div"},l.a.createElement("div",{style:{height:"100%",width:"100%",backgroundColor:"#20201F"}},l.a.createElement("p",{className:"event-heading-carousel"},"Lorem Ipsum 2020"),l.a.createElement("p",{className:"event-description-carousel"},"Event synopsis/ description goes here."))))),l.a.createElement(g.a.Item,null,l.a.createElement("div",{className:"carousel-root"},l.a.createElement("div",{className:"border-div"},l.a.createElement("div",{style:{height:"100%",width:"100%"}},l.a.createElement("img",{style:{height:"100%"},className:"d-block w-100",src:"https://images.unsplash.com/photo-1546767858-b102785c0794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80",alt:"First slide"}))),l.a.createElement("div",{className:"border-div"},l.a.createElement("div",{style:{height:"100%",width:"100%",backgroundColor:"#20201F"}},l.a.createElement("p",{className:"event-heading-carousel"},"Star Gazing 2020"),l.a.createElement("p",{className:"event-description-carousel"},"Event synopsis/ description goes here."))))))),l.a.createElement("div",null,l.a.createElement(g.a,Object.assign({},e,{className:"mobile-carousel"}),l.a.createElement(g.a.Item,null,l.a.createElement("div",null,l.a.createElement("div",{className:"border-div",style:{width:"100%"}},l.a.createElement(v.a,{style:{width:"100%",background:"#20201f",fontFamily:"Roboto Slab"}},l.a.createElement(v.a.Img,{variant:"top",src:"https://images.unsplash.com/photo-1546767858-b102785c0794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"}),l.a.createElement(v.a.Body,null,l.a.createElement(v.a.Title,{style:{textAlign:"start"}},"Robo Wars 2020"),l.a.createElement(v.a.Text,{style:{textAlign:"start"}},"Some quick example text to build on the card title and make up the bulk of the cards content."),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(b,{text:"Read More"}))))))),l.a.createElement(g.a.Item,null,l.a.createElement("div",{className:"border-div",style:{width:"100%"}},l.a.createElement(v.a,{style:{width:"100%",height:"100%",background:"#20201f",fontFamily:"Roboto Slab"}},l.a.createElement(v.a.Img,{variant:"top",src:"https://images.unsplash.com/photo-1546767858-b102785c0794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"}),l.a.createElement(v.a.Body,null,l.a.createElement(v.a.Title,{style:{textAlign:"start"}},"Robo Wars 2020"),l.a.createElement(v.a.Text,{style:{textAlign:"start"}},"Some quick example text to build on the card title and make up the bulk of the cards content."),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(b,{text:"Read More"})))))))))}}]),t}(n.Component),y=(t(72),t(73),function(e){return l.a.createElement("div",{className:"border-div-button-featured"},l.a.createElement("div",{className:"Button-featured"},l.a.createElement("span",{className:"Button-text-featured"},e.text)))}),N=function(){return l.a.createElement("div",{className:"border-root-featured"},l.a.createElement(g.a,Object.assign({},{controls:!1,indicators:!0,wrap:!0,interval:3e3},{style:{background:"#20201f"}}),l.a.createElement(g.a.Item,null,l.a.createElement("div",{className:"carousel-root-featured"},l.a.createElement("div",{className:"content-div-featured"},l.a.createElement("p",{className:"featured-heading"},"Featured."),l.a.createElement("p",{className:"featured-description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. vcsdvsdv ds v button-div-featured-desktopsd"),l.a.createElement("div",{className:"button-div-featured-desktop"},l.a.createElement(y,{text:"Read full article"}))),l.a.createElement("div",{className:"image-div-featured"},l.a.createElement("div",{className:"image-featured"},l.a.createElement("img",{className:"d-block w-100",src:"https://www.freepngimg.com/thumb/computer%20pc/2-computer-desktop-pc-png-image.png",alt:"First slide"})),l.a.createElement("div",{className:"button-div-featured-mobile"},l.a.createElement(y,{text:"Read full article"}))))),l.a.createElement(g.a.Item,null,l.a.createElement("div",{className:"carousel-root-featured"},l.a.createElement("div",{className:"content-div-featured"},l.a.createElement("p",{className:"featured-heading"},"Featured."),l.a.createElement("p",{className:"featured-description"},"Featured student projects, awards, news, updates, announcements, activities, articles, etc. go here"),l.a.createElement("div",{className:"button-div-featured-desktop"},l.a.createElement(y,{text:"Read full article"}))),l.a.createElement("div",{className:"image-div-featured"},l.a.createElement("div",{className:"image-featured"},l.a.createElement("img",{className:"d-block w-100",src:"https://www.freepngimg.com/thumb/drone/21583-5-drone-transparent.png",alt:"First slide"}),l.a.createElement("div",{className:"button-div-featured-mobile"},l.a.createElement(y,{text:"Read full article"})))))),l.a.createElement(g.a.Item,null,l.a.createElement("div",{className:"carousel-root-featured"},l.a.createElement("div",{className:"content-div-featured"},l.a.createElement("p",{className:"featured-heading"},"Featured."),l.a.createElement("p",{className:"featured-description"},"Featured student projects, awards, news, updates, announcements, activities, articles, etc. go here"),l.a.createElement("div",{className:"button-div-featured-desktop"},l.a.createElement(y,{text:"Read full article"}))),l.a.createElement("div",{className:"image-div-featured"},l.a.createElement("div",{className:"image-featured"},l.a.createElement("img",{className:"d-block w-100",src:"https://www.freepngimg.com/thumb/satellite/7-2-satellite-png-hd.png",alt:"First slide"}),l.a.createElement("div",{className:"button-div-featured-mobile"},l.a.createElement(y,{text:"Read full article"}))))))))},w=(t(74),t(39)),k=t(43),x=t.n(k),T=t(52),C=t(46),A=t(56),F=t(85),j=t(86),U=t(82);function S(e){var a=e.onEmailSubmit,t=e.title,r=e.description,i=Object(A.a)(e,["onEmailSubmit","title","description"]),c=Object(n.useState)(""),s=Object(C.a)(c,2),o=s[0],m=s[1];return l.a.createElement(F.a,Object.assign({},i,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(F.a.Header,{closeButton:!0},l.a.createElement(F.a.Title,{id:"contained-modal-title-vcenter"},t)),l.a.createElement(F.a.Body,null,l.a.createElement("h4",null,r),l.a.createElement("p",null,"Enter your College Email address to join this Activity"),l.a.createElement(j.a,null," ",l.a.createElement(j.a.Group,{controlId:"formBasicEmail"},l.a.createElement(j.a.Control,{value:o,onChange:function(e){m(e.target.value)},type:"email",placeholder:"Enter email",required:!0}),l.a.createElement(j.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")))),l.a.createElement(F.a.Footer,null,l.a.createElement(U.a,{onClick:function(e){e.preventDefault(),o&&a(o)}},"Submit"),l.a.createElement(U.a,{variant:"danger",onClick:i.onHide},"Close")))}var O=function(e){var a=e.postRequestUrl,t=e.title,r=e.description,i=e.buttonTitle,c=Object(n.useState)(!1),s=Object(C.a)(c,2),o=s[0],m=s[1],d=function(){var e=Object(T.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log(a),alert("Successfully Submitted")}catch(t){alert("Something went wrong try again")}case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(U.a,{id:"UpcomingActivities-swipe-btn",variant:"outline",onClick:function(){return m(!0)}},i),l.a.createElement(S,{show:o,onEmailSubmit:d,onHide:function(){return m(!1)},title:t,description:r}))},D=[{buttonTitle:"Join Telegram",title:"Let\u2019s Download Telegram",description:" Justice League\u2019s Snyder cut realesing exclusively on HBO Max and Telegram in 2021.",postRequestUrl:"localhost",imageUrl:"https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-3.jpg"},{buttonTitle:"Join Telegram",title:"Let\u2019s Download Telegram",description:" Justice League\u2019s Snyder cut realesing exclusively on HBO Max and Telegram in 2021.",postRequestUrl:"#!",imageUrl:"https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-3.jpg"},{buttonTitle:"Join Telegram",title:"Let\u2019s Download Telegram",description:" Justice League\u2019s Snyder cut realesing exclusively on HBO Max and Telegram in 2021.",postRequestUrl:"#!",imageUrl:"https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-3.jpg"},{buttonTitle:"Join Telegram",title:"Let\u2019s Download Telegram",description:" Justice League\u2019s Snyder cut realesing exclusively on HBO Max and Telegram in 2021.",postRequestUrl:"#!",imageUrl:"https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-3.jpg"},{buttonTitle:"Join Telegram",title:"Let\u2019s Download Telegram",description:" Justice League\u2019s Snyder cut realesing exclusively on HBO Max and Telegram in 2021.",postRequestUrl:"#!",imageUrl:"https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-3.jpg"}],I=function(){Object(n.useEffect)((function(){new w.a("#UpcomingActivities-swiper-container",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:20,stretch:0,depth:200,modifier:1,slideShadows:!0},pagination:{el:"#UpcomingActivities-swiper-pagination",clickable:!0},loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},lazy:!0,navigation:{nextEl:"#UpcomingActivities-swiper-button-next",prevEl:"#UpcomingActivities-swiper-button-prev"}})}),[]);var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"UpcomingActivitiescenter"},l.a.createElement("div",{className:"UpcomingActivitiescenter heading-carousel"},"Upcoming Activities"),l.a.createElement("div",{className:"swiper-container",id:"UpcomingActivities-swiper-container"},l.a.createElement("div",{id:"wrapper1",className:"swiper-wrapper"},D.map((function(e,a){return l.a.createElement("div",{className:"swiper-slide",id:"UpcomingActivities-swiper-slide",key:a},l.a.createElement("img",{id:"UpcomingActivities-swipe-image",src:e.imageUrl,alt:"news"}),l.a.createElement("span",{id:"UpcomingActivities-swipe-title"},e.title+a),l.a.createElement("span",{id:"UpcomingActivities-swipe-description"},e.description),l.a.createElement("div",{id:"UpcomingActivitiescenter"},l.a.createElement(O,{postRequestUrl:e.postRequestUrl,title:e.title,description:e.description,buttonTitle:e.buttonTitle})))}))),e>500?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"swiper-button-next",id:"UpcomingActivities-swiper-button-next"}),l.a.createElement("div",{className:"swiper-button-prev",id:"UpcomingActivities-swiper-button-prev"})):null,l.a.createElement("div",{className:"swiper-pagination",id:"UpcomingActivities-swiper-pagination"}))))},q=(t(76),[{title:"Advanced Chaos Theory by Prof. P C Deshmuk",time:"Sunday, 5-12-2020, 2:00 pm",location:"TC1 Transit Campus"},{title:"Advanced Chaos Theory by Prof. P C Deshmuk",time:"Sunday, 5-12-2020, 2:00 pm",location:"TC1 Transit Campus"},{title:"Advanced Chaos Theory by Prof. P C Deshmuk",time:"Sunday, 5-12-2020, 2:00 pm",location:"TC1 Transit Campus"},{title:"Advanced Chaos Theory by Prof. P C Deshmuk",time:"Sunday, 5-12-2020, 2:00 pm",location:"TC1 Transit Campus"},{title:"Advanced Chaos Theory by Prof. P C Deshmuk",time:"Sunday, 5-12-2020, 2:00 pm",location:"TC1 Transit Campus"},{title:"Advanced Chaos Theory by Prof. P C Deshmuk",time:"Sunday, 5-12-2020, 2:00 pm",location:"TC1 Transit Campus"},{title:"Advanced Chaos Theory by Prof. P C Deshmuk",time:"Sunday, 5-12-2020, 2:00 pm",location:"TC1 Transit Campus"},{title:"Advanced Chaos Theory by Prof. P C Deshmuk",time:"Sunday, 5-12-2020, 2:00 pm",location:"TC1 Transit Campus"}]),B=function(){return Object(n.useEffect)((function(){new w.a("#UpcomingTalks-swiper-container",{direction:"vertical",pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:4,spaceBetween:30,mousewheel:!0,autoplay:{delay:2500,disableOnInteraction:!1},lazy:!0})})),l.a.createElement("div",null,l.a.createElement("div",{id:"UpcomingTalks-center"},l.a.createElement("div",{className:"center heading-carousel"},"Upcoming Talks & Workshops"),l.a.createElement("div",{className:"swiper-container",id:"UpcomingTalks-swiper-container"},l.a.createElement("div",{className:"swiper-wrapper"},q.map((function(e,a){return l.a.createElement("div",{id:"UpcomingTalks-swiper-slide",className:"swiper-slide",key:a},l.a.createElement("span",{id:"UpcomingTalksText"}," ",e.title),l.a.createElement("span",{id:"UpcomingTalksDate"},e.time,"at",e.location))}))),l.a.createElement("div",{className:"swiper-pagination"}))))},H=function(){return l.a.createElement("div",{className:"HomePage"},l.a.createElement(N,null),l.a.createElement(f,null),l.a.createElement(I,null),l.a.createElement(B,null),l.a.createElement(h,{events:[{date:5,image:"https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",name:"Lorem Ipsum"},{date:20,image:"https://images.unsplash.com/photo-1546767858-b102785c0794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80",name:"Lorem Ipsum"}]}))},L=(t(77),t(45)),P=t(83),J=t(84),M=t(55),R=t(33),W=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement(P.a,{fluid:!0,style:{height:"1px"},className:"top-div-Footer"},l.a.createElement(J.a,null,l.a.createElement(M.a,{xs:2,md:1,style:{padding:"0px"}},l.a.createElement(P.a,{style:{height:"100%"},fluid:!0},l.a.createElement(J.a,{style:{height:"100%"}},l.a.createElement(M.a,{xs:4,className:"logo1-Top-Footer"}),l.a.createElement(M.a,{xs:4,className:"logo2-Footer"}),l.a.createElement(M.a,{xs:4,className:"logo3-Footer"})))),l.a.createElement(M.a,{xs:5,md:5,style:{padding:"0px",background:"#5C2E91"}}),l.a.createElement(M.a,{xs:5,md:6,style:{padding:"0px",background:"#5C015C"}}))),l.a.createElement("div",{className:"middle-Desktop"},l.a.createElement(P.a,{fluid:!0},l.a.createElement(J.a,null,l.a.createElement(M.a,{className:"quick"},l.a.createElement("p",null,"Quick access")),l.a.createElement(M.a,{className:"home"},l.a.createElement("p",null,"Home"),l.a.createElement("p",null,"About"),l.a.createElement("p",null,"Club"),l.a.createElement("p",null,"Achievements")),l.a.createElement(M.a,{className:"home"},l.a.createElement("p",null,"featured"),l.a.createElement("p",null,"Ideology"),l.a.createElement("p",null,"Digital Wizards"),l.a.createElement("p",null,"Risha lab")),l.a.createElement(M.a,{className:"home"},l.a.createElement("p",null,"Announcements"),l.a.createElement("p",null,"club heads"),l.a.createElement("p",null,"Techmaniacs"),l.a.createElement("p",null,"Inter IIT Tech Meet")),l.a.createElement(M.a,{className:"home"},l.a.createElement("p",null,"Past Activities"),l.a.createElement("p",null,"Tech info"),l.a.createElement("p",null,"Gagan Vedhi"),l.a.createElement("p",null,"Ongoing Projects")),l.a.createElement(M.a,{className:"home"},l.a.createElement("p",null,"Upcoming Activities"),l.a.createElement("p",null,"Facilities"),l.a.createElement("p",null,"Automobiles club"),l.a.createElement("p",null,"Challenges")),l.a.createElement(M.a,{className:"home"},l.a.createElement("p",null,"Upcoming Talks"),l.a.createElement("p",null,"Idea Square"),l.a.createElement("p",null,"3D printing club"),l.a.createElement("p",null,"FAQs")),l.a.createElement(M.a,{className:"home"},l.a.createElement("p",null,"Upcoming Workshops"),l.a.createElement("p",null,"Web Team"),l.a.createElement("p",null,"CNC Club")),l.a.createElement(M.a,{className:"home"},l.a.createElement("p",null,"Calender Activities"),l.a.createElement("p",null,"Amphibians"))))),l.a.createElement("div",{className:"Hidden-Footer"},l.a.createElement("p",null,"Home"),l.a.createElement("p",null,"About"),l.a.createElement("p",null,"Clubs"),l.a.createElement("p",null,"Achievements"),l.a.createElement("p",null,"Ongoing Projects"),l.a.createElement("p",null,"Challenges"),l.a.createElement("p",null,"FAQs")),l.a.createElement(P.a,{fluid:!0,className:"bottom-Footer-Desktop"},l.a.createElement(J.a,null,l.a.createElement(M.a,{xs:2,md:1,style:{padding:"0px"}},l.a.createElement(P.a,{style:{height:"100%"},fluid:!0},l.a.createElement(J.a,{style:{height:"100%"}},l.a.createElement(M.a,{xs:4,className:"logo1-Footer"},l.a.createElement("a",{className:"icons-Footer",href:"https://medium.com/",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(R.b,{color:"white",size:"1em"}))),l.a.createElement(M.a,{xs:4,className:"logo2-Footer"},l.a.createElement("a",{href:"https://www.facebook.com/",className:"icons-Footer",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(R.a,{color:"white",size:"1em"}))),l.a.createElement(M.a,{xs:4,className:"logo3-Footer"},l.a.createElement("a",{href:"https://www.instagram.com/",className:"icons-Footer",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(L.a,{color:"white",size:"1em"})))))),l.a.createElement(M.a,{xs:5,md:5,style:{padding:"0px",background:"#5C2E91",display:"flex",justifyContent:"center"}},l.a.createElement("p",{className:"techHub-Footer"}," TechHub IIT Tirupati")),l.a.createElement(M.a,{xs:5,md:6,style:{padding:"0px",background:"#5C015C",display:"flex",justifyContent:"center"}},l.a.createElement("p",{className:"ideaSquare-Footer"},"\xa92020 IdeaSquare. All rights reserved")))),l.a.createElement(P.a,{fluid:!0,className:"bottom-Footer-Mobile"},l.a.createElement(J.a,null,l.a.createElement(M.a,{xs:4,md:1,style:{padding:"0px"}},l.a.createElement(P.a,{style:{height:"100%"},fluid:!0},l.a.createElement(J.a,{style:{height:"100%"}},l.a.createElement(M.a,{xs:4,className:"logo1-Footer"},l.a.createElement("a",{className:"icons-Footer",href:"https://medium.com/",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(R.b,{color:"white",size:"1.3em"}))),l.a.createElement(M.a,{xs:4,className:"logo2-Footer"},l.a.createElement("a",{href:"https://www.facebook.com/",className:"icons-Footer",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(R.a,{color:"white",size:"1.3em"}))),l.a.createElement(M.a,{xs:4,className:"logo3-Footer"},l.a.createElement("a",{href:"https://www.instagram.com/",className:"icons-Footer",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(L.a,{color:"white",size:"1.3em"})))))),l.a.createElement(M.a,{xs:8,md:6,style:{padding:"0px",background:"#5C015C",display:"flex",justifyContent:"center"}},l.a.createElement("p",{className:"ideaSquare-Footer"},"\xa92020 IdeaSquare. All rights reserved")))))};t(78);var z=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(H,null),l.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.c79f7139.chunk.js.map