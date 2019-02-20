let Vue = require('vue');

let lifeCycleMixin = require('../base/lifeCycleMixin');

Vue.component('welcome-component', {
    
    template:  `<div>
                    <h1 v-blueify>{{ message | capitalize }}</h1>
            
                    <h2 v-text="subtitle"></h2>
            
                    <p v-html="description"></p>
                </div>`,
    
    props: [
      'message'  
    ],
    
    mixins: [lifeCycleMixin],
    
    data: function() {
        
        return {
            name: 'welcomeComponent',
            subtitle: 'Discovering VueJs binding',
            description: 'This tutorial illustrates the power of <em>binding</em>'
        }
    },
    
    filters: {
        capitalize: function(text) {
            return text.toUpperCase();
        }
    }
});