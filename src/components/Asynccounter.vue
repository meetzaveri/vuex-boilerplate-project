<!-- Changing data by Dispatching Actions -->
<template>
    <div>
        <h2>Async Counter</h2>
        <button class="btn btn-primary" @click="Asyncincrement({by:50})">Increment</button>
        <button class="btn btn-primary" @click="Asyncdecrement({by:50})">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'Asyncincrement',
                'Asyncdecrement'
            ])
        }
    }
</script>
