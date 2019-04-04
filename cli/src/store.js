import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      counter: 0,
      
      epicerieShoppingList: [
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
                ],
      
    bricolageShoppingList: [
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
                ] 
  },
  mutations: {
      
      incrementCounter: function(state) {
            
        state.counter++; 
      },
      
      addItem: function(state, payload) {
          
        if ('epicerie' == payload.type) {
                        
            state.epicerieShoppingList.push(payload.item);
        }
        else if ('bricolage' == payload.type) {

            state.bricolageShoppingList.push(payload.item);
        }
      },
      
      removeItem: function(state, payload) {
          
        if ('epicerie' == payload.type) {
                        
            let index = state.epicerieShoppingList.indexOf(payload.item);
            
            if (index > -1) {
                
                state.epicerieShoppingList.splice(index, 1);
            }
        }
        else if ('bricolage' == payload.type) {

            let index = state.bricolageShoppingList.indexOf(payload.item);
            
            if (index > -1) {
                
                state.bricolageShoppingList.splice(index, 1);
            }
        }
      },
  },
  actions: {

  }
})
