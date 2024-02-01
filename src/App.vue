<template>
    <nav class="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="light">
        <div class="container-fluid">
            <a class="navbar-brand m-2 me-3" href="#">
                <img src="./img/izack-logo.jpg" width="30" height="30" class="d-inline-block align-top" id="logo">
                iZack's
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                Menu
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav justify-content-s">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/setup">Set-Up</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/music">Music</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <main class="text-center">
        <router-view />
    </main>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
#app {
    font-family: Roboto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #222725;
}

nav {
    padding: 30px;
    background-color: #0D1B2A;
    color: #FFFFFF !important;
}

nav a {
    font-weight: bold;
    color: #FFFFFF;
}

nav a.router-link-exact-active {
    color: #42b983;
}


#logo {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: 6px;
}
</style>
