(this.webpackJsonpenglish_learn_front=this.webpackJsonpenglish_learn_front||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var s=n(1),r=n.n(s),a=n(21),c=n.n(a),i=n(2),o=n(3),u=n(5),l=n(4),h=(n(27),n(11)),j=n(6),d=(n(28),n(0)),b=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.call(this)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("nav",{className:"nav",children:Object(d.jsxs)("ul",{className:"nav__links",children:[Object(d.jsx)(h.b,{className:"nav__anchor",to:"/",children:Object(d.jsx)("li",{className:"nav__link",children:"Home"})}),Object(d.jsx)(h.b,{className:"nav__anchor",to:"/quick_round",children:Object(d.jsx)("li",{className:"nav__link",children:"Quick"})}),Object(d.jsx)(h.b,{className:"nav__anchor",to:"/test_multi",children:Object(d.jsx)("li",{className:"nav__link",children:"Multi test"})}),Object(d.jsx)(h.b,{className:"nav__anchor",to:"/stats",children:Object(d.jsx)("li",{className:"nav__link",children:"Stats"})}),Object(d.jsx)(h.b,{className:"nav__anchor",to:"/login",children:Object(d.jsx)("li",{className:"nav__link",children:"Login"})})]})})}}]),n}(s.Component),O=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.call(this)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h2",{children:"Witaj"})})}}]),n}(s.Component),p=n(14),f=n(12),w=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).getWord=function(){t.showAnswer&&t.setState((function(e){return{answers:[].concat(Object(f.a)(e.answers),[Object(p.a)({},t.state.word,!1)])}})),fetch("https://word-gather.herokuapp.com/word",{credentials:"include"}).then((function(t){return t.json()})).then((function(e){t.setState((function(t){return{word:e.word,translates:e.meaning,wordCounter:t.wordCounter+1,wrongCounter:0,showAnswerBtn:!1,showAnswer:!1}}))}))},t.handleInput=function(e){if("Enter"==e.key){var n=e.target.value;t.handleAnswer(n)?(e.target.value="",t.getWord()):t.setState((function(t){return{wrongCounter:t.wrongCounter+1}}),t.checkShowAnswer)}},t.checkShowAnswer=function(){3==t.state.wrongCounter&&t.setState({showAnswerBtn:!0})},t.handleAnswer=function(e){if(t.state.translates.includes(e))return t.state.showAnswer||t.setState((function(e){return{rightCounter:e.rightCounter+1,answers:[].concat(Object(f.a)(e.answers),[Object(p.a)({},t.state.word,!0)])}})),!0},t.handleNext=function(){t.setState((function(e){return{answers:[].concat(Object(f.a)(e.answers),[Object(p.a)({},t.state.word,!1)])}})),t.getWord()},t.finishRound=function(){t.props.handleTest()},t.state={word:"",translates:[],rightCounter:0,wordCounter:0,wrongCounter:0,showAnswerBtn:!1,showAnswer:!1,answers:[]},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getWord()}},{key:"componentWillUnmount",value:function(){var t=this.state.answers;this.props.gatherData(t)}},{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:this.finishRound,children:"Finish"}),Object(d.jsx)("button",{onClick:this.handleNext,children:"Next"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:this.state.word}),Object(d.jsxs)("li",{children:["Total words: ",this.state.wordCounter]}),Object(d.jsxs)("li",{children:["Right answers: ",this.state.rightCounter]}),this.state.wrongCounter>0?Object(d.jsxs)("li",{children:["Wrong on current word: ",this.state.wrongCounter]}):null]}),Object(d.jsx)("label",{htmlFor:"answer",children:Object(d.jsx)("input",{onKeyDown:this.handleInput,name:"answer"})}),this.state.showAnswerBtn?Object(d.jsx)("button",{onClick:function(){t.setState({showAnswer:!0})},children:"Pokaz znaczenia"}):null,this.state.showAnswer&&Object(d.jsx)("ul",{children:this.state.translates.map((function(t,e){return Object(d.jsx)("li",{children:t},e)}))})]})}}]),n}(s.Component),v=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).finishTest=function(){t.setState({testStarted:!1})},t.gatherData=function(e){var n=e.length,s=e.reduce((function(t,e){return Object.values(e)[0]?t+1:t}),0);t.handleUpdateDb(e),t.setState({total:n,right:s})},t.handleUpdateDb=function(t){fetch("https://word-gather.herokuapp.com/words",{method:"POST",mode:"cors",body:JSON.stringify(t),credentials:"include"}).then((function(t){return console.log(t)}))},t.startTest=function(){t.setState({testStarted:!0})},t.state={testStarted:!1,total:0,right:0},t}return Object(o.a)(n,[{key:"render",value:function(){return this.state.testStarted?Object(d.jsx)(w,{handleTest:this.finishTest,gatherData:this.gatherData}):Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:this.startTest,children:"Start"}),this.state.total>0&&Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["Total ",this.state.total]}),Object(d.jsxs)("p",{children:["Right ",this.state.right]})]})]})}}]),n}(s.Component),g=(n(35),n(36),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).handleClick=function(t){var e=s.props.onAnswer(t.target.innerText);console.log(e),e?s.setState((function(t){return{isAnsweredRight:!0}})):s.setState((function(t){return{isAnsweredRight:!1}}))},s.state={isAnsweredRight:null},s}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(t,e){0==t.answerable&&1==this.props.answerable&&this.setState((function(t){return{isAnsweredRight:null}}))}},{key:"render",value:function(){var t=this.props.answerable,e="";return this.state.isAnsweredRight?e="right":0==this.state.isAnsweredRight&&(e="wrong"),Object(d.jsx)("li",{className:"list-item ".concat(e),onClick:t?this.handleClick:null,children:this.props.answer})}}]),n}(s.Component)),m=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).handleAnswer=function(t){s.setState((function(t){return{answerable:!1}}));var e=t==s.props.rightAnswer;return s.props.onAnswer(s.props.word,e),e},s.state={answerable:!0},s}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(t){t.rightAnswer!==this.props.rightAnswer&&this.setState((function(t){return{answerable:!0}}))}},{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{className:"guess-word",children:this.props.word}),Object(d.jsx)("ul",{className:"answer-list",children:this.props.answers.map((function(e,n){return Object(d.jsx)(g,{onAnswer:t.handleAnswer,answer:e,answerable:t.state.answerable},n)}))})]})}}]),n}(s.Component),x=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).gatherData=function(t,e){s.setState((function(n){return{answers:[].concat(Object(f.a)(n.answers),[Object(p.a)({},t,e)])}}))},s.handleClick=function(){var t=[];s.props.tests.forEach((function(e){var n=e.english_word;0==s.state.answers.filter((function(t){return n in t})).length&&t.push(Object(p.a)({},n,!1))})),s.setState((function(e){return{answers:[].concat(Object(f.a)(e.answers),t)}}),s.updateStatus)},s.updateStatus=function(){fetch("https://word-gather.herokuapp.com/words",{method:"POST",body:JSON.stringify(s.state.answers),credentials:"include",mode:"cors"}).then((function(t){200==t.status&&s.props.handleSend()}))},s.state={answers:[]},s}return Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(t){return t.tests!=this.props.tests}},{key:"render",value:function(){var t=this,e=this.props.tests.map((function(e,n){var s=e.english_word,r=e.right_answers,a=e.false_answers,c=r[Math.floor(Math.random()*r.length)],i=[c].concat(Object(f.a)(a));return i=i.sort((function(){return Math.random()-.5})),Object(d.jsx)(m,{word:s,answers:i,rightAnswer:c,onAnswer:t.gatherData},n)}));return Object(d.jsxs)("div",{children:[e,Object(d.jsx)("button",{onClick:this.handleClick,children:"Finish"})]})}}]),n}(s.Component),k=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).getData=function(e){fetch("https://word-gather.herokuapp.com/words/".concat(e),{credentials:"include"}).then((function(t){return t.json()})).then((function(e){t.setState({testArray:e,isDataSend:!1})}))},t.handleClick=function(){t.getData(t.state.countValue)},t.handleChange=function(e){t.setState({countValue:e.target.value})},t.clearDataAfterUpdate=function(){t.setState({testArray:[],isDataSend:!0})},t.state={countValue:"5",testArray:[],isDataSend:!1},t}return Object(o.a)(n,[{key:"render",value:function(){return 0==this.state.testArray.length?Object(d.jsxs)("div",{children:[this.state.isDataSend?Object(d.jsx)("p",{children:"Answer send"}):null,Object(d.jsx)("p",{children:"Wybierz ilosc slowek"}),Object(d.jsxs)("select",{onChange:this.handleChange,children:[Object(d.jsx)("option",{value:"5",children:"5"}),Object(d.jsx)("option",{value:"10",children:"10"}),Object(d.jsx)("option",{value:"20",children:"20"})]}),Object(d.jsx)("button",{onClick:this.handleClick,children:"Start"})]}):Object(d.jsx)(x,{tests:this.state.testArray,handleSend:this.clearDataAfterUpdate})}}]),n}(s.Component),S=(n(37),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){return Object(i.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){var t=(100*this.props.progress).toFixed(2);return Object(d.jsxs)("div",{className:"progress-bar",children:[Object(d.jsxs)("p",{className:"progress-text",children:[t," %"]}),Object(d.jsx)("div",{style:{width:"".concat(t,"%")},className:"show-progress"})]})}}]),n}(s.Component)),C=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){return Object(i.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:this.props.word}),Object(d.jsxs)("li",{children:["Showed: ",this.props.counter," times"]}),Object(d.jsx)(S,{progress:this.props.progress})]})}}]),n}(s.Component),A=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).getstats=function(){fetch("https://word-gather.herokuapp.com/words/stats",{credentials:"include"}).then((function(t){return t.json()})).then((function(e){return t.setState({stats:e})}))},t.state={stats:[]},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getstats()}},{key:"render",value:function(){return Object(d.jsx)("div",{children:this.state.stats&&this.state.stats.map((function(t,e){return Object(d.jsx)(C,{word:t.word,counter:t.counter,progress:t.progress},e)}))})}}]),n}(s.Component),y=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).handleSubmit=function(t){t.preventDefault();var e=new FormData;e.append("name","pablo"),fetch("https://word-gather.herokuapp.com/login",{method:"POST",body:e,credentials:"include"}).then((function(t){return console.log(t)}))},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{children:[Object(d.jsx)("label",{htmlFor:"name",children:Object(d.jsx)("input",{name:"name"})}),Object(d.jsx)("label",{htmlFor:"submit",children:Object(d.jsx)("input",{type:"submit",name:"submit",value:"Login",onClick:this.handleSubmit})})]})}}]),n}(s.Component),_=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.call(this)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)(h.a,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(b,{}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/",exact:!0,component:O}),Object(d.jsx)(j.a,{path:"/quick_round",component:v}),Object(d.jsx)(j.a,{path:"/test_multi",component:k}),Object(d.jsx)(j.a,{path:"/stats",component:A}),Object(d.jsx)(j.a,{path:"/login",component:y})]})]})})}}]),n}(s.Component);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.81648b67.chunk.js.map