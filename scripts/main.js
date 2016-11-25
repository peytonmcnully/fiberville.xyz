"use strict";

// 1. Define route components.
// These can be imported from other files
const Hero = Vue.component('hero', { template: '#hero-template' })
const Form = Vue.component('form', { template: '#form-template' })
const GMap = Vue.component('gmap', { template: '<div>bar</div>' })

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), a component id string registered via Vue.component(),
// or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Hero },
  { path: '/form', component: Form },
  { path: '/map', component: GMap }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for routes: routes
})

const app = new Vue({
  router
}).$mount('#app')
