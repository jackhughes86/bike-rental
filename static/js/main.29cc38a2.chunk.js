(window["webpackJsonpbike-rentals"]=window["webpackJsonpbike-rentals"]||[]).push([[0],{37:function(e){e.exports=JSON.parse('{"products":[{"id":1,"name":"Adult Male Bike","price":20.5,"image":"http://via.placeholder.com/250x250?text=Adult%20Male%20Bike","product_type":"bike"},{"id":2,"name":"Adult Female Bike","price":20.5,"image":"http://via.placeholder.com/250x250?text=Adult%20Female%20Bike","product_type":"bike"},{"id":3,"name":"Kids Unisex Bike","price":12.75,"image":"http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike","product_type":"bike"},{"id":4,"name":"Adult Unisex Helmet","price":4,"image":"http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet","product_type":"accessory"},{"id":5,"name":"Kids Unisex Helmet","price":3.5,"image":"http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet","product_type":"accessory"},{"id":6,"name":"Insurance","price":9.99,"image":"http://via.placeholder.com/250x250?text=Insurance","product_type":"addon"}]}')},50:function(e,t,a){e.exports=a(79)},55:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=(a(55),a(21)),i=a(22),m=a(29),s=a(23),u=a(30),p=a(85),d=a(81),h=a(82),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).showModal=function(){e.setState({show:!0})},e.handleClose=function(){e.setState({show:!1})},e.onFormSubmit=function(t){t.preventDefault(),alert("Woohooo, your bike has been booked..!!"),e.setState({show:!1})},e.state={show:!1},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(p.a,{style:{width:"18rem"}},r.a.createElement(p.a.Img,{variant:"top",src:this.props.image}),r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,null,this.props.name),r.a.createElement(p.a.Text,null,"Price : ",this.props.price),r.a.createElement(p.a.Text,null,"Product Type: ",this.props.product_type),r.a.createElement(d.a,{variant:"primary",onClick:this.showModal},"Book")))),r.a.createElement("div",null,r.a.createElement(h.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(h.a.Header,{closeButton:!0},r.a.createElement(h.a.Title,null,this.props.name)),r.a.createElement(h.a.Body,null,r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",class:"form-control",required:!0}),r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",class:"form-control",required:!0}),r.a.createElement("label",null,"Phone Number"),r.a.createElement("input",{type:"number",class:"form-control",required:!0}),r.a.createElement("br",null),r.a.createElement("button",{class:"btn btn-primary",type:"submit"},"Reserve!"))),r.a.createElement(h.a.Footer,null,r.a.createElement(d.a,{variant:"secondary",onClick:this.handleClose},"Close")))))}}]),t}(n.Component),b=a(84),v=a(83),y=a(37),k=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(y.products)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(b.a,{bg:"dark",expand:"lg",variant:"dark"},r.a.createElement(b.a.Brand,{href:"#home"},"Bike Rental"),r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(v.a,{className:"mr-auto"},r.a.createElement(v.a.Link,{href:"#home"},"Home"))))),r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h2",null,"Bike Rental")),r.a.createElement("div",{className:"d-flex justify-content-between flex-row flex-wrap align-content-around p-5"},y.products.map((function(e,t){return r.a.createElement("div",{key:e.id},r.a.createElement(E,{image:e.image,name:e.name,price:e.price,product_type:e.product_type}),r.a.createElement("br",null))}))))}}]),t}(n.Component);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(78);o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.29cc38a2.chunk.js.map