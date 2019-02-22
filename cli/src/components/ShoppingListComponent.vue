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

            let item = {
                label: this.itemToAdd,
                quantity: 1,
                id: this.sequenceId++
            };
            
            let payload = {
                type : this.$route.params.shoppingListType,
                item: item
            };
            
            this.$store.commit('addItem', payload);
            
            this.itemToAdd = '';
            
            document.getElementById('addItemId').focus();
        },
        
        removeItem: function(item) {
            
            let payload = {
                type : this.$route.params.shoppingListType,
                item: item
            };
            
            this.$store.commit('removeItem', payload);
        },
        
        initializeShoppingList: function(type) {
            
            console.log('initializing ' + type + ' shopping list');
            
            this.label = type.toUpperCase();
            
            if ('epicerie' == type) {
                        
                this.items = this.$store.state.epicerieShoppingList;
            }
            else if ('bricolage' == type) {
                
                this.items = this.$store.state.bricolageShoppingList;
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