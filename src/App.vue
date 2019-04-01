<template>
    <div>
        <p>Demo "Hello World" component</p>
        <i>This is main/entry component, where other child components or vue-router placeholder must be used.</i>
        <img src="./assets/images/logo.png" />
    </div> 
</template>

<script>
    import Utils from './assets/js/utils.js';

    export default {
        name: "app",
        data: function(){
            return {
                
            }
        },
        created: function(){
            console.log('Created ...');
        }
    }
</script>

<style>
p { font-family:"Open Sans" }
</style>
