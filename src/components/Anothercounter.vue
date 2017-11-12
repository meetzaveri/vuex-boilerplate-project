<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment by 500 </button>
        <button class="btn btn-primary" @click="decrement">Decrement by 500 </button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                this.$store.commit('increment',500);
            },
            decrement() {
                this.$store.commit('decrement',500);
            }
        }
    }
</script>