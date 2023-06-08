<template>
  <NavBar />
  <router-view />
</template>

<script type="text/javascript">
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar, // register component
  },
};
</script>
