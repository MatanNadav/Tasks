(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{33:function(t,e,a){t.exports=a(67)},38:function(t,e,a){},40:function(t,e,a){},41:function(t,e,a){},47:function(t,e,a){},65:function(t,e,a){},66:function(t,e,a){},67:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(29),c=a.n(s),u=(a(38),a(1)),i=a.n(u),l=a(4),o=a(12),d=a(13),p=a(15),f=a(14),k=(a(40),a(10)),m=a(2),h=(a(41),function(t){var e=t.task,a=t.toggleTask,n=t.deleteTask;t.updateTask;return e&&r.a.createElement("tr",null,r.a.createElement("td",{className:e.is_finished?"complete":void 0},e.title),r.a.createElement("td",null,e.created_at),r.a.createElement("td",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:e.is_finished,onChange:function(){return a(e)}}))),r.a.createElement("td",null,r.a.createElement("button",{className:"action-edit btn"},r.a.createElement(k.b,{className:"edit-link",to:"/".concat(e.id)},"Edit")),r.a.createElement("button",{onClick:function(){return n(e)},className:"action-delete btn"},"Delete")))}),v=(a(47),a(31)),E=a.n(v).a.create({withCredentials:!0});function b(){return T.apply(this,arguments)}function T(){return(T=Object(l.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.get("".concat("/","task"));case 2:if(!(e=t.sent).data){t.next=7;break}return t.abrupt("return",e.data);case 7:return t.abrupt("return","Couldnt get tasks");case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return g.apply(this,arguments)}function g(){return(g=Object(l.a)(i.a.mark((function t(e){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="?q=".concat(e),t.next=3,E.delete("".concat("/","task")+a);case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(i.a.mark((function t(e){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=E({method:"post",url:"".concat("/","task"),data:{task:e}}),t.abrupt("return",a);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(i.a.mark((function t(e){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=E({method:"put",url:"".concat("/","task"),data:{task:e}}),t.abrupt("return",a);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var N=function(t){var e=t.tasks,a=t.toggleTask,n=t.deleteTask;return r.a.createElement("div",{className:"list-container"},r.a.createElement("h1",null,"Propit Todo App"),r.a.createElement("table",{className:"table-container"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"title"),r.a.createElement("th",null,"created at"),r.a.createElement("th",null,"status"),r.a.createElement("th",null,"actions"))),r.a.createElement("tbody",null,e?e.map((function(t){return r.a.createElement(h,{key:t.id,task:t,updateTask:j,toggleTask:a,deleteTask:n})})):r.a.createElement("h1",null,"No tasks to display"))))},_=(a(65),function(t){Object(p.a)(a,t);var e=Object(f.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={task:null,newTitle:""},t.handleChange=function(e){t.setState({newTitle:e.target.value})},t.updateTaskTitle=Object(l.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=t.state.task).title=t.state.newTitle,e.next=4,t.props.updateTask(a);case 4:case"end":return e.stop()}}),e)}))),t}return Object(d.a)(a,[{key:"componentWillMount",value:function(){var t=this.props.getTask(this.props.id);t.title?(this.setState({task:t}),this.setState({newTitle:t.title})):this.setState({task:"no task  to edit"})}},{key:"render",value:function(){var t=this.state.newTitle;return t&&r.a.createElement("section",{className:"task-edit-container"},r.a.createElement("h1",null,"Propit Todo App"),r.a.createElement("h2",null,"Edit the title of your task and Update"),r.a.createElement("input",{type:"text",value:t,onChange:this.handleChange}),r.a.createElement(k.b,{to:"/"},r.a.createElement("button",{onClick:this.updateTaskTitle,className:"action-delete btn"},"Update")))}}]),a}(n.Component)),S=a(32),C=(a(66),function(t){var e=t.addTask,a=Object(n.useState)(""),s=Object(S.a)(a,2),c=s[0],u=s[1],i=function(){return{id:null,user_id:null,title:c,created_at:Date.now(),is_finished:!1,name:""}};return r.a.createElement("form",{className:"add-task-container"},r.a.createElement("input",{className:"add-input",type:"text",value:c,onChange:function(t){u(t.target.value)}}),r.a.createElement("button",{className:"add-btn",type:"submit",onClick:function(t){if(t.preventDefault(),""!==c.trim()){var a=i();e(a),u("")}}},"Submit new task"))}),D=function(t){Object(p.a)(a,t);var e=Object(f.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={tasks:[]},t.toggleTask=function(){var e=Object(l.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.is_finished=!a.is_finished,t.updateTask(a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.deleteTask=function(){var e=Object(l.a)(i.a.mark((function e(a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],t.state.tasks.forEach((function(t){t.id!==a.id&&n.push(t)})),t.setState({tasks:n}),e.next=5,w(a.id);case 5:200!==e.sent.status&&alert("Error: task wasnt deleted from DB");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.updateTask=function(){var e=Object(l.a)(i.a.mark((function e(a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.tasks,(r=t.state.tasks.findIndex((function(t){return t.id===a.id})))>=0&&(n[r]=a,t.setState({tasks:n})),e.next=5,j(a);case 5:200!==e.sent.status&&alert("Error: task didint update to DB");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.getTask=function(e){var a=t.state.tasks.findIndex((function(t){return Number(t.id)===Number(e)}));if(a>=0)return t.state.tasks[a]},t.addTask=function(){var e=Object(l.a)(i.a.mark((function e(a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t.state.tasks).push(a),r=n.length-1,n[r].created_at=new Date(n[r].created_at).toDateString(),t.setState({tasks:n}),e.next=7,y(a);case 7:200!==e.sent.status&&alert("Error: task didint add to DB");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(d.a)(a,[{key:"componentWillMount",value:function(){var t=Object(l.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:(e=t.sent).forEach((function(t){t.created_at=new Date(t.created_at).toDateString(),t.is_finished?t.is_finished=!0:t.is_finished=!1})),this.setState({tasks:e});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state.tasks;return r.a.createElement("div",{className:"tasks-app"},r.a.createElement(k.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:function(){return r.a.createElement(N,{tasks:e,updateTask:t.updateTask,toggleTask:t.toggleTask,deleteTask:t.deleteTask})}}),r.a.createElement(m.a,{path:"/:id",render:function(e){var a=e.match;return r.a.createElement(_,{updateTask:t.updateTask,getTask:t.getTask,id:a.params.id})}})),r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(C,{addTask:this.addTask}))))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.89f49d0f.chunk.js.map