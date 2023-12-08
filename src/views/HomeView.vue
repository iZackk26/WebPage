<template>
    <div class="home">
        <br>
        <div class="container mt-4">
            <div class="row">
                <div class="col-6" id="name">
                    <p><b>Hey, I'm Isaac</b></p>
                    I'm currently studying Computer Engineering at Tecnologico de Costa Rica. I like to create custom apps
                    to learn new things.
                </div>
                <div class="col-6" id="right-picture">
                    <a href="https://github.com/iZackk26">
                        <img class="img-fluid" src="../img/izack.jpg" id="picture" alt="Isaac's Profile Image">
                    </a>
                </div>
            </div>
            <h1 class="mb-3 mt-3" id="skills">Skills</h1>
            <div class="row rowcols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img class="card-img-top" src="../img/Futuristic-PC-Parts.png" alt="Skill-1">
                        <div class="card-body">
                            <h5 class="card-title">Hardware</h5>
                            <p class="card-text">Text!</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img class="card-img-top" src="../img/Software.png" alt="Skill-2">
                        <div class="card-body">
                            <h5 class="card-title">Software</h5>
                            <p class="card-text">Text!</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="../img/Cloud-Computing.png" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">Cloud Computing</h5>
                            <p class="card-text">Text!</p>
                        </div>
                    </div>
                </div>
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
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
}

#skills {
    text-align: left;
}
</style>

