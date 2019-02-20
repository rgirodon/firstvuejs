let bootstrap = require('bootstrap');

let Vue = require('vue');

require('./components/welcomeComponent');

let counterComponent = require('./components/counterComponent');

require('./components/shoppingListComponent');

require('./components/footerComponent');

let vueInstance = new Vue({	
    
    el: '#app',
        
    created: function() {
        
        console.log("VueJs instance created");        
    },    
    
    components: {
        'counterComponent': counterComponent
    }
});