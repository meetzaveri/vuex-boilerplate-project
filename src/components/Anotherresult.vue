<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks are: {{ stringCounter }}</p>
    </div>
    
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        // new method using mapGetters 
        computed :{
            ...mapGetters([
            'doubleCounter',
            'stringCounter'
        ])
        } 
    }
</script>