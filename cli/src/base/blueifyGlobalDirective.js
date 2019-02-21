import Vue from 'vue';

// Register a global custom directive called `v-blueify`
Vue.directive('blueify', {
    
    // When the directive is bound to the element...
    bind: function (el) {
        
        el.style.color = "#3b5998";
    }
});