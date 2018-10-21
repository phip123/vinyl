import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Artist from "./components/Artist.vue";
import Album from "./components/Album.vue";
import * as artistService from "./services/ArtistService";
import * as albumService from "./services/AlbumService";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/artist/:id',
      name: 'artist',
      component: Artist,
      props: (route) => {
        return ({artist: artistService.getArtist(route.params.id), back: true})
      }
    },
    {
      path: '/album/:id',
      name: 'album',
      component: Album,
      props: (route) => ({album: albumService.getAlbum(route.params.id), back: true})
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }

})
