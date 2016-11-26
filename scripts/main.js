"use strict";

// 1. Define route components.
// These can be imported from other files
var Hero = Vue.component('hero', { template: '#hero-template' })
var Form = Vue.component('form', { template: '#form-template' })
var GMap = Vue.component('gmap', { template: '<div>bar</div>' })

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), a component id string registered via Vue.component(),
// or just a component options object.
// We'll talk about nested routes later.
var routes = [
  { path: '/', component: Hero },
  { path: '/form', component: Form },
  { path: '/map', component: GMap }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter({
  routes // short for routes: routes
})

var app = new Vue({
  router
}).$mount('#app')
