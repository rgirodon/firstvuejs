<template>
    <div>
        <h1 v-blueify>{{ message | capitalize }}</h1>

        <h2 v-text="subtitle"></h2>

        <p v-html="description"></p>
    </div>
</template>

<script>
import lifeCycleMixin from '../base/lifeCycleMixin';    
    
export default {
    props: [
      'message'  
    ],
    
    data: function() {
        
        return {
            name: 'welcomeComponent',
            subtitle: 'Discovering VueJs binding',
            description: 'This tutorial illustrates the power of <em>binding</em>'
        }
    },
    
    mixins: [lifeCycleMixin],
    
    filters: {
        capitalize: function(text) {
            return text.toUpperCase();
        }
    }
}
</script>

<style scoped>
</style>