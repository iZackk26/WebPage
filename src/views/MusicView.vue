<template>
  <div class="music">
      <div class="container">
          <div class="row">
              <h1 class="mb-3 mt-3" id="text">Music Collection</h1>
              <p id="text">As a music enthusiast i love to listen to a lot of different genres, so here's the current music that i'm listening to.</p>
              <div class="row rowcols-1 row-cols-md-3 g-4">
                  <div class="card">
                      <router-link to="/rap">
                          <img src="../img/rap-music.jpeg" alt="Rap Music" class="card-img">
                      </router-link>
                      <div class="card-body">
                          <h5 class="card-title">Rap</h5>
                          <p class="card-text">Hit play for the hottest rap tracks featuring Drake, Travis Scott, Kanye West, and more. Immerse yourself in the essence of modern hip-hop with this curated playlist.</p>
                          <router-link to="/rap">
                              <a href="#" class="btn btn-primary">▶︎•၊၊||၊|။||||။၊|။•</a>
                          </router-link>
                      </div>
                  </div>
                  <div class="card">
                      <router-link to="/reggaeton">
                          <img src="../img/reggaeton.jpg" alt="Reggaeton" class="card-img">
                      </router-link>
                      <div class="card-body">
                          <h5 class="card-title">Reggaeton</h5>
                          <p class="card-text">Dive into the reggaeton vibe with Bad Bunny, Eladio Carrion, Ferxxo, and more. Experience the hottest beats defining the modern reggaeton scene in this curated playlist.</p>
                          <router-link to="/reggaeton">
                              <a href="/reggaeton" class="btn btn-primary">▶︎•၊၊||၊|။||||။၊|။•</a>
                          </router-link>
                      </div>
                  </div>
                  <div class="card">
                      <router-link to="/nineties">
                          <img src="../img/90-music.jpg" alt="90's Music" class="card-img">
                      </router-link>
                      <div class="card-body">
                          <h5 class="card-title">90's Music</h5>
                          <p class="card-text">Travel back to the '90s with hits from Michael Jackson, Earth, Wind & Fire, Queen, and more. Experience the magic of the era in this curated playlist.</p>
                          <router-link to="/nineties">
                              <a href="#" class="btn btn-primary">▶︎•၊၊||၊|။||||။၊|။•</a>
                          </router-link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <footer class="d-flex flex-warp justify-content-between alight-items-center py-3 my-4 border-top" id="footer">
        <div class="col-md-4 d-flex alight-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none 1h-1">
                <img src="../img/izack-logo.jpg" alt="" id="footer-img">
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

</template>

<style>
.card {
  width: 18rem;
  margin: 10px;
}
.card-img {
    margin-top: 15px;
}

#text {
    text-align: left;
}

</style>

