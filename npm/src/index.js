let bootstrap = require('bootstrap');

let Vue = require('vue');

let lifeCycleMixin = require('./base/lifeCycleMixin');

require('./base/blueifyGlobalDirective');

require('./components/welcomeComponent');

let counterComponent = require('./components/counterComponent');

require('./components/shoppingListComponent');

require('./components/footerComponent');

let vueInstance = new Vue({	
    
    el: '#app',
    
    data: {
        name: 'rootVueInstance',
        
        shoppingListEpicerie: [
                { 
                    label: 'lait', 
                    quantity: 2
                },
                { 
                    label: 'oeufs', 
                    quantity: 12
                },
                { 
                    label: 'farine', 
                    quantity: 1
                }
            ],
        shoppingListBricolage: [
                { 
                    label: 'marteau', 
                    quantity: 2
                },
                { 
                    label: 'perceuse', 
                    quantity: 1
                },
                { 
                    label: 'visseuse', 
                    quantity: 1
                }
            ]
    },
    
    methods: {
        removeItem: function(items, item) {
            
            var index = items.indexOf(item);
            
            if (index > -1) {
              items.splice(index, 1);
            }
        }
    },
        
    mixins: [lifeCycleMixin],    
    
    components: {
        'counterComponent': counterComponent
    }
});