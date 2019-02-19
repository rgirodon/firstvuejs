let bootstrap = require('bootstrap');

let Vue = require('vue');

let vueInstance = new Vue({	
    el: '#app',
    data: {
        message: 'Hello World !',
        subtitle: 'Discovering VueJs binding',
        description: 'This tutorial illustrates the power of <em>binding</em>',
        provider: 'Design Tech Académie',
        providerUrl: 'https://www.telecom-st-etienne.fr/formations/design-tech-academie-2/',
        providerDescription : 'La Design Tech Academie est une formation labellisée \"Grande École du Numérique\". Il s\'agit d’une formation courte (10 mois), gratuite et qualifiante qui prépare aux métiers du numérique tel que intégrateur web HTML CSS ou développeur web (front-end | back-end | full-stack)'
    },
    computed: {
        providerDescriptionExcerpt() {
            
            let result = '';
            
            if (this.providerDescription.length < 50) {
                
                result = this.providerDescription;
            }
            else {
                
                result = this.providerDescription.substring(0, 49) + ' [...]';
            }
            
            return result;
        }
    },
    filters: {
        capitalize: function(text) {
            return text.toUpperCase();
        }
    }
});