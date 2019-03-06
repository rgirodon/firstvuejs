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
        providerDescription : 'La Design Tech Academie est une formation labellisée \"Grande École du Numérique\". Il s\'agit d’une formation courte (10 mois), gratuite et qualifiante qui prépare aux métiers du numérique tel que intégrateur web HTML CSS ou développeur web (front-end | back-end | full-stack)',
        helloCounter: 0,
        displayHelloCounter: true,
        shoppingList: [
            { 
                label: 'lait', 
                quantity: 2,
                categorie: 'epicerie'
            },
            { 
                label: 'oeufs', 
                quantity: 12,
                categorie: 'epicerie'
            },
            { 
                label: 'farine', 
                quantity: 1,
                categorie: 'epicerie'
            },
            { 
                label: 'bache', 
                quantity: 1,
                categorie: 'bricolage'
            },
            { 
                label: 'sous-couche blanc', 
                quantity: 1,
                categorie: 'bricolage'
            },
            { 
                label: 'peinture bleue', 
                quantity: 1,
                categorie: 'bricolage'
            },
            { 
                label: 'rouleau', 
                quantity: 1,
                categorie: 'bricolage'
            }
        ]
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
        },        
        shoppingListEpicerie: function() {
    
            return this.shoppingList.filter(
                
                function(item) {
                    
                    return item.categorie == 'epicerie';
                }
            );
        },
        shoppingListBricolage: function() {
    
            return this.shoppingList.filter(
                
                function(item) {
                    
                    return item.categorie == 'bricolage';
                }
            );
        },
    },
    filters: {
        capitalize: function(text) {
            return text.toUpperCase();
        }
    },
    created: function() {
        
        console.log("VueJs instance created");        
    },
    methods: {
        sayHello: function() {
            
            this.helloCounter++; 
        }
    }
});