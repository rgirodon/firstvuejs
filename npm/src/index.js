let bootstrap = require('bootstrap');

let Vue = require('vue');

let vueInstance = new Vue({	
    el: '#app',
    data: {
        message: 'Hello World !',
        subtitle: 'Discovering VueJs binding',
        description: 'This tutorial illustrates the power of <em>binding</em>',
        provider: 'Design Tech Académie',
        providerUrl: 'https://www.telecom-st-etienne.fr/formations/design-tech-academie-2/'
    }
});