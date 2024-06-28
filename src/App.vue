<template>
  <the-header></the-header>

  <section class="main">
    <sidebar></sidebar>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  components: {
    TheHeader,
    Sidebar,
  },
};
</script>

<style lang="scss">
.main {
  @include flexBox(none, none);

  flex-grow: 1;

  @media only screen and (max-width: $bp-largest) {
    flex-direction: column;
  }
}

.router-view {
  flex-basis: 100%;
}
</style>
