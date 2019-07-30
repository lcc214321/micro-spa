<template>
  <div class="test">
    test1
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {};
  },
  computed: {
  },
  mounted () {
  }
};
</script>

<style style lang="scss" scoped>
.test {
  background: url('../assets/images/test.jpg');
}
</style>
