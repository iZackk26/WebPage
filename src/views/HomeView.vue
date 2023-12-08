<template>
    <div class="home">
        <br>
        <div class="row">
            <div class="col-6" id="name">
                <p><b>Hey, I'm Isaac</b></p>
                I'm currently studying Computer Engineering at Tecnologico de Costa Rica. I like to create custom apps to learn new things.

            </div>
            <div class="col-6" id="right-picture">
                <img src="../img/izack.jpg" id="picture" alt="Isaac's Profile Image">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeView',
    components: {
    },
});
</script>

<style>
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}

#name {
    font-size: 24px;
    padding-left: 35px;
    text-align: left;

}

#picture {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
}
</style>

