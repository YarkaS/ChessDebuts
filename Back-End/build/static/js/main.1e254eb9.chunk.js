(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,i){},251:function(e,t,i){},563:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Benoni.0c816805.jpeg"},633:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i.n(n),s=i(18),c=i.n(s),o=(i(251),i(42)),a=i(43),d=i(46),u=i(45),j=i(72),l=i(21),p=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return null}}]),i}(n.Component),O=i(122),b=i(170),m=i(121),h=[{question:"Given the Polish Opening, what is the correct move order?",answers:[{type:"correct",content:"1.b4"},{type:"incorrect",content:"1.d4 f5"}]},{question:"You want to play the Nimzovich-Larsen Attack. What is the first move for White?",answers:[{type:"correct",content:"1.b3"},{type:"incorrect",content:"1.d4"}]},{question:"What is this opening: 1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6?",answers:[{type:"correct",content:"Four Knights"},{type:"incorrect",content:"Queen's Gambit"}]},{question:"Given the Catalan Opening, what is the correct move order?",answers:[{type:"correct",content:"1.d4 Nf6 2.c4 e6 3.g3"},{type:"incorrect",content:"1.e4 e5 2.Nf3 Nc6 "}]},{question:"You want to play the Bird's Opening. What is the first move for White?",answers:[{type:"correct",content:"1.f4"},{type:"incorrect",content:"1.e4"}]}],v=i(123),f=i(5);var x=function(e){return Object(f.jsx)("h2",{className:"question",children:e.content})};var g=function(e){return Object(f.jsxs)("div",{className:"questionCount",children:["Question ",Object(f.jsx)("span",{children:e.counter})," of ",Object(f.jsx)("span",{children:e.total})]})};var y=function(e){return Object(f.jsxs)("li",{className:"answerOption",children:[Object(f.jsx)("input",{type:"radio",className:"radioCustomButton",name:"radioGroup",checked:e.answerType===e.answer,id:e.answerType,value:e.answerType,disabled:e.answer,onChange:e.onAnswerSelected}),Object(f.jsx)("label",{className:"radioCustomLabel",htmlFor:e.answerType,children:e.answerContent})]})};var N=function(e){return Object(f.jsx)(v.CSSTransitionGroup,{className:"container",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500,children:Object(f.jsxs)("div",{children:[Object(f.jsx)(g,{counter:e.questionId,total:e.questionTotal}),Object(f.jsx)(x,{content:e.question}),Object(f.jsx)("ul",{className:"answerOptions",children:e.answerOptions.map((function(t){return Object(f.jsx)(y,{answerContent:t.content,answerType:t.type,answer:e.answer,questionId:e.questionId,onAnswerSelected:e.onAnswerSelected},t.content)}))})]},e.questionId)})};var w=function(e){return Object(f.jsx)(v.CSSTransitionGroup,{className:"container result",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500,children:Object(f.jsxs)("div",{children:["You are mainly ",Object(f.jsx)("strong",{children:e.quizResult}),"!"]})})},k=(i(104),function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{},result:""},n.handleAnswerSelected=n.handleAnswerSelected.bind(Object(m.a)(n)),n}return Object(a.a)(i,[{key:"componentDidMount",value:function(){var e=this,t=h.map((function(t){return e.shuffleArray(t.answers)}));this.setState({question:h[0].question,answerOptions:t[0]})}},{key:"shuffleArray",value:function(e){for(var t,i,n=e.length;0!==n;)i=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[i],e[i]=t;return e}},{key:"handleAnswerSelected",value:function(e){var t=this;this.setUserAnswer(e.currentTarget.value),this.state.questionId<h.length?setTimeout((function(){return t.setNextQuestion()}),300):setTimeout((function(){return t.setResults(t.getResults())}),300)}},{key:"setUserAnswer",value:function(e){this.setState((function(t){return{answersCount:Object(b.a)(Object(b.a)({},t.answersCount),{},Object(O.a)({},e,(t.answersCount[e]||0)+1)),answer:e}}))}},{key:"setNextQuestion",value:function(){var e=this.state.counter+1,t=this.state.questionId+1;this.setState({counter:e,questionId:t,question:h[e].question,answerOptions:h[e].answers,answer:""})}},{key:"getResults",value:function(){var e=this.state.answersCount,t=Object.keys(e),i=t.map((function(t){return e[t]})),n=Math.max.apply(null,i);return t.filter((function(t){return e[t]===n}))}},{key:"setResults",value:function(e){1===e.length?this.setState({result:e[0]}):this.setState({result:"Undetermined"})}},{key:"renderQuiz",value:function(){return Object(f.jsx)(N,{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:h.length,onAnswerSelected:this.handleAnswerSelected})}},{key:"renderResult",value:function(){return Object(f.jsx)(w,{quizResult:this.state.result})}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"Play",children:[Object(f.jsx)("div",{className:"Play-header"}),this.state.result?this.renderResult():this.renderQuiz()]})}}]),i}(n.Component)),C=(i(265),i(145),i(266),i(141)),q=i(640),B=i(641),D=i(638),A=i(635),S=i(636),T=i(637),G=i(642),I=[{id:1,value:"Alekhine's Defense",picture:"./Imgs/Alekhine.jpeg"},{id:2,value:"Amar Opening",picture:"./Imgs/Amar.jpeg"},{id:3,value:"Benoni Opening",picture:Object(f.jsx)("img",{src:i(563).default})},{id:4,value:"Bird's Opening",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.f4",description:"White's purpose is to gain control of the e5 square.This opening provides a good attack for White at the expense of a weak kingside.Black's best response is to play d5.From here, White has multiple ways to maintain control of the e5 square including moving Nf3 or eventually the bishop to b2."},{id:5,value:"Bishop's Opening",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.Nc4",description:""},{id:6,value:"Bogo-Indian Defense",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.d4 Nf6 2.c4e6 3.Nf3 Bb4",description:""},{id:7,value:"Budapest Gambit",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.d4 Nf6 2.c4e5",description:""},{id:8,value:"Caro-Kann Defense",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 c6",description:""},{id:9,value:"Catalan Opening",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.d4 Nf6 2.c4 e6 3.g3",description:""},{id:10,value:"Center Game",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.d4 exd4",description:""},{id:11,value:"Chigorin Defense",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.d4 d5 2.c4 Bc6",description:""},{id:12,value:"Danish Gambit",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.d4 exd4 3.c3",description:""},{id:13,value:"Dutch Defense",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.d4 f5",description:""},{id:14,value:"English Opening",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.c4",description:""},{id:15,value:"Evans Gambit",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc6 4.b4",description:""},{id:16,value:"Evans Gambit Accepted",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc6 4.b4 Bxb4 5.c3",description:""},{id:17,value:"Four Knights",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6",description:""},{id:18,value:"French Defense",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e6",description:""},{id:19,value:"Giuoco Piano",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5",description:""},{id:20,value:"Giuoco Pianissimo",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.d3",description:""},{id:21,value:"Grunfeld Defense",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.d4 Nf6 2.c4 Nc3 3.d5",description:""},{id:22,value:"Italian Gambit",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.d4",description:""},{id:23,value:"Italian Game",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.Nf3 Nc6 3.Bc4",description:""},{id:24,value:"King's Gambit",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.f4",description:""},{id:25,value:"King's Gambit Accepted",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.f4 exf4",description:""},{id:26,value:"King's Gambit Declined",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.f4 d5",description:""},{id:27,value:"King's Indian Attack",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.Nf3 Nf6 2.g3 d5",description:""},{id:28,value:"King's Indian Defense",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.d4 Nf6 2.c4 g6",description:""},{id:29,value:"Modern Defense",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 g6",description:""},{id:30,value:"Nimzo-Indian Defense",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.d4 Nf6 2.c4 e6 3.Nc3 Bb4",description:""},{id:31,value:"Nimzovich-Larsen Attack",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.b3",description:""},{id:32,value:"Petrov's Defense",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.Nf3 Nf6",description:""},{id:33,value:"Philidor Defense",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.Nf3 d6",description:""},{id:34,value:"Pirc Defense",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 d6 2.d4 Nf6 3.Nc3",description:""},{id:35,value:"Polish Opening",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.b4",description:""},{id:36,value:"Queen's Gambit",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.d4 d5 2.c4",description:""},{id:37,value:"Queen's Gambit Accepted",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.d4 d5 2.d4 dxc4",description:""},{id:38,value:"Queen's Gambit Declined",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.d4 d5 2.c4 e6",description:""},{id:39,value:"Queen's Indian Defense",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.d4 Nf6 2.Nf3 b6",description:""},{id:40,value:"Richter Veresov",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.d4 Nf6 2.Nc3 d5 3.Bg5",description:""},{id:41,value:"Ruy Lopez",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.Nf3 Nc6 3.Bb5",description:""},{id:42,value:"Scandinavian Defense",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 d5",description:""},{id:43,value:"Scotch Game",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 2.Nf3 Nc6 3.d4",description:""},{id:44,value:"Sicillian Defense",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 c5",description:""},{id:45,value:"Slav Defense",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.d4 d5 2.c4 c6",description:""},{id:46,value:"Vienna Game",picture:Object(f.jsx)("img",{src:""}),moveOrder:"1.e4 e5 Nc3",description:""}],P=(C.a.Option,function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(){var e;Object(o.a)(this,i);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={visible:!1},e.showDrawer=function(){e.setState({visible:!0})},e.onClose=function(){e.setState({visible:!1})},e}return Object(a.a)(i,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(q.a,{type:"primary",onClick:this.showDrawer,children:[Object(f.jsx)(G.a,{})," Search Openings"]}),Object(f.jsx)(B.a,{title:"Search your favorite Chess Opening",width:520,onClose:this.onClose,visible:this.state.visible,bodyStyle:{paddingBottom:80},children:Object(f.jsxs)(D.a,{layout:"vertical",hideRequiredMark:!0,children:[Object(f.jsx)(A.a,{gutter:16,children:Object(f.jsx)(S.a,{style:{width:200},options:I,placeholder:"try to type `b`",filterOption:function(e,t){return-1!==t.value.toUpperCase().indexOf(e.toUpperCase())}})}),Object(f.jsx)(A.a,{gutter:16,children:Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:"https://media2.uscfsales.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_eso_b_5_-_korica.jpg"})})})})]})})]})}}]),i}(r.a.Component));c.a.render(Object(f.jsx)(P,{}),document.getElementById("root"));var R=i(639);function Q(){return Object(f.jsx)(R.a,{width:200,src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"})}c.a.render(Object(f.jsx)(Q,{}),document.getElementById("root"));var z=Q;var E=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Welcome to the Dictionary Page"}),Object(f.jsx)("h2",{children:"Come here to gain learn more about any opening."}),Object(f.jsx)("h2",{children:"You can view the final board state, see the move order, and read a brief description"}),Object(f.jsx)("h3",{children:"To get started, press on the button"}),Object(f.jsx)(P,{}),Object(f.jsx)("br",{}),Object(f.jsx)(z,{})]})},W=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)("p",{children:'"The place for a board or a game." '})})}}]),i}(n.Component),F=i(171),K=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return Object(f.jsxs)("h2",{children:[Object(f.jsx)(F.a,{sourceType:"profile",screenName:"chesscom",options:{height:500,width:400}}),Object(f.jsx)(F.a,{sourceType:"profile",screenName:"FIDE_chess",options:{height:500,width:400}})]})}}]),i}(n.Component),U=function(e){Object(d.a)(i,e);var t=Object(u.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return Object(f.jsx)(j.a,{children:Object(f.jsxs)("div",{children:[Object(f.jsxs)("ul",{className:"header",children:[Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{exact:!0,to:"/",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{to:"/play",children:"Short Quiz"})}),Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{to:"/dictionary",children:"Dictionary"})}),Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{to:"/board",children:"Chess Board"})}),Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{to:"/trending",children:"Trending"})})]}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)(l.a,{exact:!0,path:"/",component:p}),Object(f.jsx)(l.a,{path:"/play",component:k}),Object(f.jsx)(l.a,{path:"/Dictionary",component:E}),Object(f.jsx)(l.a,{path:"/Board",component:W}),Object(f.jsx)(l.a,{path:"/Trending",component:K})]})]})})}}]),i}(n.Component);c.a.render(Object(f.jsx)(U,{}),document.getElementById("root"))}},[[633,1,2]]]);
//# sourceMappingURL=main.1e254eb9.chunk.js.map