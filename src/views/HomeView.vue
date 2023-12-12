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
                        <img class="img-fluid" src="../img/Wave.png" id="picture" alt="Isaac's Profile Image">
                    </a>
                </div>
            </div>
            <h1 class="mb-3 mt-3" id="skills">Skills</h1>
            <div class="row rowcols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img class="card-img" src="../img/Futuristic-PC-Parts.png" alt="Skill-1">
                        <div class="card-body">
                            <h5 class="card-title">Hardware</h5>
                            <p class="card-text">I have several skills building computers. Also love to research a lot when
                                i buy anything.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img class="card-img" src="../img/Software.png" alt="Skill-2">
                        <div class="card-body">
                            <h5 class="card-title">Software</h5>
                            <p class="card-text">
                                In my journey to becoming a programmer, I have learned a variety of programming languages.
                                Like Python, C++, Java, Go and a little bit of Javascript.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="../img/Cloud-Computing.png" alt="" class="card-img">
                        <div class="card-body">
                            <h5 class="card-title">Cloud Computing</h5>
                            <p class="card-text">
                                I have some experience with cloud computing. I have created scripts for uploading and
                                downloading information to cloud databases such as Firebase and Google Cloud.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="d-flex flex-warp justify-content-between alight-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex alight-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none 1h-1">
                    <img src="../img/Wave.png" alt="" id="footer-img">
                </a>
                <span class="text-muted">© 2023 iZack</span>
            </div>
            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3">
                    <a class="text-muted" href="https://twitter.com/iZack26_">
                        <img src="../img/Twitter.png" alt="" id="footer-img-right">
                    </a>
                </li>
                <li class="ms-3">
                    <a href="https://www.instagram.com/izackk_r/" target="-blank" class="text-muted">
                        <img src="../img/Instagram.png" alt="" id="footer-img-right">
                    </a>
                </li>
                <li class="ms-3">
                    <a href="https://github.com/iZackk26" class="text-muted">
                        <img src="../img/Github.png" alt="" id="footer-img-right">
                    </a>
                </li>
            </ul>
        </footer>
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

.card-img {
    width: 100%;
    height: 10em;
    object-fit: cover;
}

#footer-img-right {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
}

#footer-img {
    margin-left: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
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

