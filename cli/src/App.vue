<template>
  <div id="app">
    
    <welcome-component message="Hello All !"></welcome-component>

    <nav class="navbar bg-dark">

        <ul class="nav justify-content-start">

            <li class="nav-item ml-3 px-1">
                <router-link to="/counter">Counter Demo</router-link>
            </li>

            <li class="nav-item ml-3 px-1">
                <router-link to="/shoppingList/epicerie">Shopping List Epicerie</router-link>
            </li>

            <li class="nav-item ml-3 px-1">
                <router-link to="/shoppingList/bricolage">Shopping List Bricolage</router-link>
            </li>

        </ul>
    </nav>

    <main>
        <router-view></router-view>
    </main>

    <footer-component></footer-component>
      
  </div>
</template>

<script>
    
import lifeCycleMixin from './base/lifeCycleMixin'; 

import WelcomeComponent from './components/WelcomeComponent';  
    
import FooterComponent from './components/FooterComponent';
    
export default {
    
    mixins: [lifeCycleMixin],

    components: {
        'welcome-component': WelcomeComponent, 

        'footer-component': FooterComponent}
}
    
</script>

<style>

</style>
