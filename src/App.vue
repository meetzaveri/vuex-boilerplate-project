<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-anotherresult></app-anotherresult>
                <hr>
                <app-counter></app-counter>
                <br>
                <app-anothercounter></app-anothercounter>
                <br>
                <app-asynccounter></app-asynccounter>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Asynccounter from './components/Asynccounter.vue';
    import Anothercounter from './components/Anothercounter.vue';
    import Result from './components/Result.vue';
    import Anotherresult from './components/Anotherresult.vue';

    export default {
        components: {
            appCounter: Counter,
            appAnothercounter : Anothercounter,
            appAsynccounter : Asynccounter,
            appResult: Result,
            appAnotherresult: Anotherresult,
        }
    }
</script>

