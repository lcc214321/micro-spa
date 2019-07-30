<template>
  <div class="test">
    test1
    {{ userId }}
    {{ testId }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {};
  },
  computed: {
    userId() {
      return this.$store.state.userId;
    },
    testId() {
      return this.$store.state.test.testId;
    }
  },
  mounted() {
    console.log(this.$store.state.test.testId);
  }
};
</script>

<style <style lang="scss" scoped>
.test {
  background: url('../assets/images/test.jpg');
}
</style>


