<template>
    <div>
        <h2 v-blueify>Shopping List {{ label }}</h2>

        <label for="addItemId">Add Item :</label> <input v-model="itemToAdd" id="addItemId"> <button class="btn btn-success" v-on:click="addItem">+</button>

        <ul>
            <li v-for="item in items" v-bind:key="item.id">{{ item.label }} <button class="btn btn-danger btn-sm" v-on:click="removeItem(item)">-</button></li>
        </ul>
    </div>
</template>

<script>
import lifeCycleMixin from '../base/lifeCycleMixin';    
    
export default {

    mixins: [lifeCycleMixin],
    
    data: function() {
        
        return {
            name: 'shoppingListComponent',
            
            label: '',
            
            items: [],
            
            itemToAdd: '',
            
            sequenceId: 1000
        }
    },
    
    methods: {        
        addItem: function() {
            
            let itemToAddObj = {
                label: this.itemToAdd,
                quantity: 1,
                id: this.sequenceId++
            };
            
            this.items.push(itemToAddObj);
            
            this.itemToAdd = '';
            
            document.getElementById('addItemId').focus();
        },
        
        removeItem: function(item) {
            
            var index = this.items.indexOf(item);
            
            if (index > -1) {
                
                this.items.splice(index, 1);
            }
        },
        
        initializeShoppingList: function(type) {
            
            console.log('initializing ' + type + ' shopping list');
            
            this.label = type.toUpperCase();
            
            if ('epicerie' == type) {
                        
                this.items = [
                    { 
                        id: 1,
                        label: 'lait', 
                        quantity: 2
                    },
                    { 
                        id: 2,
                        label: 'oeufs', 
                        quantity: 12
                    },
                    { 
                        id: 3,
                        label: 'farine', 
                        quantity: 1
                    }
                ];
            }
            else if ('bricolage' == type) {
                this.items = [
                    { 
                        id: 1,
                        label: 'marteau', 
                        quantity: 2
                    },
                    { 
                        id: 2,
                        label: 'perceuse', 
                        quantity: 1
                    },
                    { 
                        id: 3,
                        label: 'visseuse', 
                        quantity: 1
                    }
                ];
            }
        }
    },
    
    created: function() {
                
        this.initializeShoppingList(this.$route.params.shoppingListType);
    },
    
    watch: {
        '$route': function(to, from) {
            
            this.initializeShoppingList(to.params.shoppingListType);
        }
    }
}
</script>

<style scoped>
</style>