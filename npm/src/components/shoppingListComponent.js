let Vue = require('vue');

let lifeCycleMixin = require('../base/lifeCycleMixin');

Vue.component('shopping-list-component', {
    
    template:  `<div>
                    <h2 v-blueify>Shopping List {{ label }}</h2>
            
                    <label :for="addItemId">Add Item :</label> <input v-model="itemToAdd" :id="addItemId"> <button class="btn btn-success" v-on:click="addItem">+</button>

                    <ul>
                        <li v-for="item in items">{{ item.label }} <button class="btn btn-danger btn-sm" v-on:click="$emit('remove-item', items, item)">-</button></li>
                    </ul>
                </div>`,
    
    props: [
        'addItemId',
        'label',
        'items'  
    ],
    
    mixins: [lifeCycleMixin],
    
    data: function() {
        
        return {
            name: 'shoppingListComponent',
            
            itemToAdd: ''
        }
    },
    
    methods: {        
        addItem: function() {
            
            let itemToAddObj = {
                label: this.itemToAdd,
                quantity: 1
            };
            
            this.items.push(itemToAddObj);
            
            this.itemToAdd = '';
            
            document.getElementById(this.addItemId).focus();
        }
    }
});