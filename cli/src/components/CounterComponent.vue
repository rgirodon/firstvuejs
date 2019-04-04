<template>
    <div>
        <slot><h2>Counter demo</h2></slot>
        <p>
            <button class="btn btn-primary btn-lg" v-on:click="sayHello">Say hello</button>

            <button class="btn btn-primary btn-lg" v-on:click="displayHelloCounter = false;" v-if="displayHelloCounter">Hide hello counter</button>

            <button class="btn btn-primary btn-lg" v-on:click="displayHelloCounter = true;" v-else>Display hello counter</button>
        </p>

        <p v-if="displayHelloCounter">
            You said "hello" {{ helloCounter }} time(s) !
        </p>
    </div>
</template>

<script>
import lifeCycleMixin from '../base/lifeCycleMixin';    
    
export default {
    data: function() {
        
        return {
            name: 'counterComponent',
            
            displayHelloCounter: true
        }
    },
    
    computed: {
        helloCounter: function() {
            return this.$store.state.counter;
        }
    },
    
    mixins: [lifeCycleMixin],
    
    methods: {
        
        sayHello: function() {
            
            this.$store.commit('incrementCounter'); 
        },
    }
}
</script>

<style scoped>
</style>