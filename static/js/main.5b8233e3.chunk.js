(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{25:function(e,t,a){e.exports=a(42)},30:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),l=a.n(r),o=(a(30),a(3)),m=a(4),i=a(6),s=a(5),u=a(7),d=(a(31),a(32),a(35),a(2)),p=a(12),E=(a(36),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-md bg-dark"},c.a.createElement(d.b,{className:"navbar-brand",to:"/"}," ",c.a.createElement("i",{className:"fas fa-camera"})," camera "),c.a.createElement("button",{className:"navbar-toggler shadow-none",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"true","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav ml-auto "},c.a.createElement("li",{className:"nav-item"},c.a.createElement(d.b,{className:"nav-link",to:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(d.b,{className:"nav-link",to:"/product"},"product")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(d.b,{className:"nav-link",to:"/cart"},c.a.createElement("i",{className:"fas fa-cart-plus"})," cart"))))))}),f=function(e){var t=e.title;return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header row "},c.a.createElement("div",{className:"header-img col-md-6"},c.a.createElement("img",{src:"./camera/img/home-img.png",alt:"camera"})),c.a.createElement("div",{className:"header-content col-md-6"},c.a.createElement("h1",{className:"display-3"},t),c.a.createElement("p",{className:"mb-3"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat sapiente qui vel aliquam quisquam!"),c.a.createElement(d.b,{className:"btn btn-outline-primary mb-3",to:"/product",role:"button"},"our product"))))},b=a(10),v=a(18),g=[{id:1,img:"./camera/img/camera01.jpg",title:"camera s1",price:140,company:"camera pro",info:"Lorem ipsum dolorsit amet consectetur adipisicing elitIn totam non suscipit, modi laborum",inCart:!1,count:0,total:0},{id:2,img:"./camera/img/camera02.jpg",title:"camera s2",price:33,company:"amera fan",info:"Lorem ipsum dolorsit amet consectetur adipisicing elitIn totam non suscipit, modi laborum",inCart:!1,count:0,total:0},{id:3,img:"./camera/img/camera03.jpg",title:"camera s3",price:500,company:"google",info:"Lorem ipsum dolorsit amet consectetur adipisicing elitIn totam non suscipit, modi laborum",inCart:!1,count:0,total:0},{id:4,img:"./camera/img/camera04.jpg",title:"camera s4",price:18,company:"google",info:"Lorem ipsum dolorsit amet consectetur adipisicing elitIn totam non suscipit, modi laborum",inCart:!1,count:0,total:0},{id:5,img:"./camera/img/camera05.jpg",title:"camera s5",price:12,company:"google",info:"Lorem ipsum dolorsit amet consectetur adipisicing elitIn totam non suscipit, modi laborum",inCart:!1,count:0,total:0},{id:6,img:"./camera/img/camera06.jpg",price:10,title:"camera s6",company:"google",info:"Lorem ipsum dolorsit amet consectetur adipisicing elitIn totam non suscipit, modi laborum",inCart:!1,count:0,total:0}],N={id:1,img:"./camera/img/camera01.jpg",title:"camera s1",price:10,company:"camera pro",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus tempore animi amet. Corporis quo quod sed Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus tempore animi amet. Corporis quo quod sed adipisci. Eos natus odio totam nisi earum ullam, nulla ducimus sed neque assumenda!",inCart:!1,count:0,total:0},h=c.a.createContext(),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={cart:[],products:[],DetailProduct:N,modalOpen:!1,modalProduct:N,cartSubTotal:0,cartTax:0,cartTotal:0},a.getItem=function(e){return a.state.products.find((function(t){return t.id===e}))},a.setProduct=function(){var e=[];g.forEach((function(t){var a=Object(v.a)({},t);e=[].concat(Object(b.a)(e),[a])})),a.setState((function(){return{products:e}}))},a.handleDetail=function(e){var t=a.getItem(e);a.setState((function(){return{DetailProduct:t}}))},a.addToCart=function(e){var t=Object(b.a)(a.state.products),n=t.indexOf(a.getItem(e)),c=t[n];c.inCart=!0,c.count=1;var r=c.price;c.total=r,a.setState((function(){return{products:t,cart:[].concat(Object(b.a)(a.state.cart),[c])}}),(function(){a.addTotal()}))},a.openModal=function(e){var t=a.getItem(e);a.setState((function(){return{modalProduct:t,modalOpen:!0}}))},a.closeModal=function(){a.setState((function(){return{modalOpen:!1}}))},a.increment=function(e){var t=Object(b.a)(a.state.cart),n=t.find((function(t){return t.id===e})),c=t.indexOf(n),r=t[c];r.count=r.count+1,r.total=r.count*r.price,a.setState((function(){return{cart:Object(b.a)(t)}}),(function(){a.addTotal()}))},a.decrement=function(e){var t=Object(b.a)(a.state.cart),n=t.find((function(t){return t.id===e})),c=t.indexOf(n),r=t[c];r.count=r.count-1,r.total=r.count*r.price,r.count>0?a.setState((function(){return{cart:Object(b.a)(t)}}),(function(){a.addTotal()})):a.removeItem(e)},a.removeItem=function(e){var t=Object(b.a)(a.state.products),n=Object(b.a)(a.state.cart);n=n.filter((function(t){return t.id!==e}));var c=t.indexOf(a.getItem(e)),r=t[c];r.inCart=!1,r.count=0,r.total=0,a.setState((function(){return{cart:Object(b.a)(n),products:Object(b.a)(t)}}),(function(){a.addTotal()}))},a.clearCart=function(){a.setState((function(){return{cart:[]}}),(function(){a.setProduct(),a.addTotal()}))},a.addTotal=function(){var e=0;a.state.cart.map((function(t){e+=t.total}));var t=parseFloat((.1*e).toFixed(2)),n=e+t;a.setState((function(){return{cartSubTotal:e,cartTax:t,cartTotal:n}}))},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setProduct()}},{key:"render",value:function(){return c.a.createElement(h.Provider,{value:Object(v.a)({},this.state,{handleDetail:this.handleDetail,addToCart:this.addToCart,openModal:this.openModal,closeModal:this.closeModal,increment:this.increment,decrement:this.decrement,removeItem:this.removeItem,clearCart:this.clearCart})},this.props.children)}}]),t}(n.Component),O=h.Consumer,y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,null,(function(e){var t=e.DetailProduct,a=t.id,n=t.company,r=t.img,l=t.info,o=t.price,m=t.title,i=t.inCart;return c.a.createElement("div",{className:"container py-5"},c.a.createElement("div",{className:"row detail"},c.a.createElement("div",{className:"col-md-6 mb-4"},c.a.createElement("img",{src:r,className:"img-fluid",alt:""})),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h1",null,c.a.createElement("span",{className:"product-info"},"product name :")," ",m),c.a.createElement("p",null,c.a.createElement("span",{className:"product-info"},"company :")," ",n),c.a.createElement("p",{className:"text-muted"},c.a.createElement("span",{className:"product-info"},"info :"),c.a.createElement("br",null),l),c.a.createElement("p",null,c.a.createElement("span",{className:"product-info mb-6"}," price :")," ",o," $"),c.a.createElement(d.b,{to:"/product",className:"btn btn-secondary"},"back to products"),c.a.createElement("button",{className:"btn btn-primary float-right",disabled:!!i,onClick:function(){e.addToCart(a),e.openModal(a)}}," ",i?c.a.createElement("p",{className:"text-capitalize mb-0",disabled:!0},"in cart"):c.a.createElement("span",null,"add to cart ",c.a.createElement("i",{className:"fas fa-cart-plus"}))))))})))}}]),t}(n.Component);function x(e){var t=e.name,a=e.title;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 mx-auto my-2 text-center text-title"},c.a.createElement("h1",null,t," ",c.a.createElement("span",null,a))))}var C=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.product,t=e.id,a=e.title,n=e.img,r=e.inCart,l=e.price;return c.a.createElement(O,null,(function(e){return c.a.createElement("div",{className:"card col-md-6 col-lg-4 col-12"},c.a.createElement("img",{src:n,className:"card-img-top",alt:"product"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},a),c.a.createElement("p",{className:"card-text"},c.a.createElement("span",{className:"price"},"price : ")," ",c.a.createElement("span",{className:"dollar"},l,"$")),c.a.createElement(d.b,{to:"/details",onClick:function(){return e.handleDetail(t)},className:"btn btn-secondary"},"learn more"),c.a.createElement("button",{className:"btn btn-primary float-right",disabled:!!r,onClick:function(){e.addToCart(t),e.openModal(t)}}," ",r?c.a.createElement("p",{className:"text-capitalize mb-0",disabled:!0},"in cart"):c.a.createElement("i",{className:"fas fa-cart-plus"}))))}))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"py-5"},c.a.createElement("div",{className:"container"},c.a.createElement(x,{name:"our",title:"products"}),c.a.createElement("div",{className:"row"},c.a.createElement(O,null,(function(e){return e.products.map((function(e){return c.a.createElement(C,{key:e.id,product:e})}))}))))))}}]),t}(n.Component);function T(){return c.a.createElement("div",{className:"container-fluid text-center d-none d-lg-block"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("p",null,"product")),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("p",null,"name of product")),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("p",null,"price")),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("p",null,"quantity")),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("p",null,"remove")),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("p",null,"total"))))}function w(){return c.a.createElement("div",{className:"container mt-5"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-center"},c.a.createElement("h1",null," your cart is empty"))))}function I(e){var t=e.item,a=e.value,n=t.id,r=t.title,l=t.img,o=t.price,m=t.total,i=t.count,s=a.increment,u=a.decrement,d=a.removeItem;return c.a.createElement("div",{className:"row mt-1 text-center d-flex align-content-center"},c.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},c.a.createElement("img",{src:l,alt:"cart",className:"img-fluid"})),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2 mt-2"},c.a.createElement("span",{className:"d-md-none"},"product : "),"  ",r),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2 mt-2"},c.a.createElement("span",{className:"d-md-none"},"price : ")," ",o," $"),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2 mt-2"},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("span",{className:"btn btn-black mx-1",onClick:function(){u(n)}},"-"),c.a.createElement("span",{className:"btn btn-black mx-1"},i),c.a.createElement("span",{className:"btn btn-black mx-1",onClick:function(){s(n)}},"+"))),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2 mt-2"},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("span",{className:"btn  mx-1",onClick:function(){d(n)}},c.a.createElement("i",{class:"fas fa-trash"})))),c.a.createElement("div",{className:"col-10 mx-auto col-lg-2 mt-2"},c.a.createElement("span",{className:"d-md-none"},"total : "),"  ",m," $"))}function S(e){var t=e.value,a=t.cart;return c.a.createElement("div",{className:"container"},a.map((function(e){return c.a.createElement(I,{key:e.id,item:e,value:t})})))}function M(e){var t=e.value,a=t.cartTax,n=t.cartTotal,r=t.cartSubTotal,l=t.clearCart;return c.a.createElement("React-fragment",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right"},c.a.createElement(d.b,{to:"/product"},c.a.createElement("button",{className:"btn btn-outline-danger mb-3",onClick:function(){return l()}},"clear cart")),c.a.createElement("h5",null,c.a.createElement("span",{className:"text-title"},"subtotal : "),c.a.createElement("strong",null,r," $")),c.a.createElement("h5",null,c.a.createElement("span",{className:"text-title"},"cartTax : "),c.a.createElement("strong",null,a," $")),c.a.createElement("h5",null,c.a.createElement("span",{className:"text-title"},"Total : "),c.a.createElement("strong",null,n," $"))))))}var P=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"py-4"},c.a.createElement("div",{className:"container"},c.a.createElement(O,null,(function(e){return e.cart.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement(x,{name:"your",title:"cart"}),c.a.createElement(T,null),c.a.createElement(S,{value:e}),c.a.createElement(M,{value:e})):c.a.createElement(w,null)}))))}}]),t}(n.Component),q=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(O,null,(function(e){var t=e.modalOpen,a=(e.closeModal,e.modalProduct),n=a.count,r=a.title,l=a.price;return t?c.a.createElement("div",{className:"container text-center "},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"my-modal col-lg-4 col-7"},c.a.createElement("h2",{className:"color-success"},"Added to cart"),c.a.createElement("h3",null,"model : ",r),c.a.createElement("h5",null,"price : ",l," $"),c.a.createElement("h5",null,"count : ",n," "),c.a.createElement(d.b,{to:"/product",onClick:function(){e.closeModal()},className:"btn btn-primary mb-2 float-left"},"contenio shoping"),c.a.createElement(d.b,{to:"/cart",onClick:function(){e.closeModal()},className:"btn btn-info float-right"},"go to cart")))):null}))}}]),t}(n.Component),L=(a(41),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(E,null),c.a.createElement(p.a,{exact:!0,path:"/",component:function(){return c.a.createElement(f,{title:"see by new eyes"})}}),c.a.createElement(p.a,{path:"/Product",component:k}),c.a.createElement(p.a,{path:"/cart",component:P}),c.a.createElement(p.a,{path:"/details",component:y}),c.a.createElement(q,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(j,null,c.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.5b8233e3.chunk.js.map