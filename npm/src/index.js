let bootstrap = require('bootstrap');

let Vue = require('vue');

Vue.component('welcome-component', {
    
    template:  `<div>
                    <h1>{{ message | capitalize }}</h1>
            
                    <h2 v-text="subtitle"></h2>
            
                    <p v-html="description"></p>
                </div>`,
    
    data: function() {
        
        return {
            message: 'Hello World !',
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

let counterComponent = {

    template:  `<div>
                    <p>
                        <button class="btn btn-primary btn-lg" v-on:click="sayHello">Say hello</button>

                        <button class="btn btn-primary btn-lg" v-on:click="displayHelloCounter = false;" v-if="displayHelloCounter">Hide hello counter</button>

                        <button class="btn btn-primary btn-lg" v-on:click="displayHelloCounter = true;" v-else>Display hello counter</button>
                    </p>
            
                    <p v-if="displayHelloCounter">
                        You said "hello" {{ helloCounter }} time(s) !
                    </p>
                </div>`,
    
    data: function() {
        
        return {
            helloCounter: 0,
            displayHelloCounter: true
        }
    },
    
    methods: {
        
        sayHello: function() {
            
            this.helloCounter++; 
        },
    }
};

Vue.component('shopping-list-component', {
    
    template:  `<div>
                    <h2>Shopping List</h2>
            
                    <label for="itemToAdd">Add Item :</label> <input v-model="itemToAdd" id="itemToAdd"> <button class="btn btn-success" v-on:click="addItem">+</button>

                    <ul>
                        <li v-for="shoppingItem in shoppingList">{{ shoppingItem.label }}</li>
                    </ul>
                </div>`,
    
    data: function() {
        
        return {
            shoppingList: [
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
            
            itemToAdd: ''
        }
    },
    
    methods: {        
        addItem: function() {
            
            let itemToAddObj = {
                label: this.itemToAdd,
                quantity: 1
            };
            
            this.shoppingList.push(itemToAddObj);
            
            this.itemToAdd = '';
            
            document.getElementById('itemToAdd').focus();
        }
    }
});

Vue.component('footer-component', {
    
    template:  `<footer>
                    Powered by <a v-bind:href="providerUrl" target="_blank">{{ provider }}</a> <span class="alert alert-primary">{{ providerDescriptionExcerpt }}</span>
                </footer>`,
    
    data: function() {
        
        return {
            provider: 'Design Tech Académie',
        
            providerUrl: 'https://www.telecom-st-etienne.fr/formations/design-tech-academie-2/',

            providerDescription : 'La Design Tech Academie est une formation labellisée \"Grande École du Numérique\". Il s\'agit d’une formation courte (10 mois), gratuite et qualifiante qui prépare aux métiers du numérique tel que intégrateur web HTML CSS ou développeur web (front-end | back-end | full-stack)'
        }
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
    }
});

let vueInstance = new Vue({	
    
    el: '#app',
        
    created: function() {
        
        console.log("VueJs instance created");        
    },    
    
    components: {
        'counterComponent': counterComponent
    }
});