import Vue from 'vue'
import Router from 'vue-router'
import CounterComponent from './components/CounterComponent.vue';
import ShoppingListComponent from './components/ShoppingListComponent.vue'

Vue.use(Router)

const routes = [
    { path: '/counter', component: CounterComponent },
    { path: '/shoppingList/:shoppingListType', component: ShoppingListComponent}
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
