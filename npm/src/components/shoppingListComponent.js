let Vue = require('vue');

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