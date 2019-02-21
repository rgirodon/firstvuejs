let bootstrap = require('bootstrap');

let Vue = require('vue');

let VueRouter = require('vue-router');

Vue.use(VueRouter);

let lifeCycleMixin = require('./base/lifeCycleMixin');

require('./base/blueifyGlobalDirective');

require('./components/welcomeComponent');

let counterComponent = require('./components/counterComponent');

require('./components/shoppingListComponent');

require('./components/footerComponent');

const routes = [
    { path: '/counter', component: counterComponent },
    { path: '/shoppingList/:shoppingListType', component: Vue.component('shopping-list-component')}
];

const router = new VueRouter({
    routes : routes
});

let vueInstance = new Vue({	
    
    el: '#app',
    
    router : router,
    
    data: {
        name: 'rootVueInstance'
    },
        
    mixins: [lifeCycleMixin],    
    
    components: {
        'counterComponent': counterComponent
    }
});