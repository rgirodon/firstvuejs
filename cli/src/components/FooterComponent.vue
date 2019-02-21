<template>
    <footer>
        Powered by <a v-bind:href="providerUrl" target="_blank">{{ provider }}</a> <span class="alert alert-primary">{{ providerDescriptionExcerpt }}</span>
    </footer>
</template>

<script>
import lifeCycleMixin from '../base/lifeCycleMixin';    
    
export default {
    data: function() {
        
        return {
            name: 'footerComponent',
            
            provider: 'Design Tech Académie',
        
            providerUrl: 'https://www.telecom-st-etienne.fr/formations/design-tech-academie-2/',

            providerDescription : 'La Design Tech Academie est une formation labellisée \"Grande École du Numérique\". Il s\'agit d’une formation courte (10 mois), gratuite et qualifiante qui prépare aux métiers du numérique tel que intégrateur web HTML CSS ou développeur web (front-end | back-end | full-stack)'
        }
    },
    
    mixins: [lifeCycleMixin],
    
    computed: {
        providerDescriptionExcerpt() {
            
            let result = '';
            
            if (this.providerDescription.length < 50) {
                
                result = this.providerDescription;
            }
            else {
                
                result = this.providerDescription.substring(0, 49) + ' [...]';
            }
            
            return result;
        }
    }
}
</script>

<style scoped>
</style>