<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>Number of clicks are: {{ clicks }}</p>
    </div>
</template>

<script>
    export default { 
        //old method of accessing store via computed
        computed : {
            counter(){
                return this.$store.getters.doubleCounter;
            },
            clicks(){
                return this.$store.getters.stringCounter;
            }
        }
    }
</script>