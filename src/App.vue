<template>
    <nav class="navbar navbar-expand-lg bg-light bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand m-2 me-3" href="#">
                <img src="./img/icon.png" width="30" height="30" class="d-inline-block align-top" id="logo">
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
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}


nav {
    padding: 30px;
    color: #000000 !important;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}


#logo {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
}
</style>
