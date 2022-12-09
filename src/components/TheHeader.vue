<template>
  <div>
    <header>
      <div class="wrapper">
        <HelloWorld msg="Báo cáo!" />
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/lifecycle">LifCycle Hook</RouterLink>
          <RouterLink to="/scopecss">Scope CSS</RouterLink>
          <RouterLink to="/mecoda">MeCoDa</RouterLink>
          <RouterLink to="/databinding">Data Binding</RouterLink>
          <RouterLink to="/eventkey">Event Key</RouterLink>
          <RouterLink to="/propsemit">Props Emit</RouterLink>
          <RouterLink to="/watchref">WatchRef</RouterLink>
          <RouterLink to="/routerslot">Router Slot</RouterLink>
          <RouterLink to="/jsview">JavaScript</RouterLink>

        </nav>
      </div>
    </header>

    <!-- HEADER -->
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
import HelloWorld from "./HelloWorld.vue";
export default {
  components: { HelloWorld }
}
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;

}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
  padding: 0 1rem 0 0;

}

nav a:last-of-type {
  border: 0 1rem;
  /* padding: 0 0 1rem 0; */

}
</style>