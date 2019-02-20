let Vue = require('vue');

Vue.component('welcome-component', {
    
    template:  `<div>
                    <h1>{{ message | capitalize }}</h1>
            
                    <h2 v-text="subtitle"></h2>
            
                    <p v-html="description"></p>
                </div>`,
    
    props: [
      'message'  
    ],
    
    data: function() {
        
        return {
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