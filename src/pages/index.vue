<template>
  <div class="container">
    <div>
      <h1 class="title">ddd-for-bigginer</h1>
      <p>名前 : {{ fullName }}</p>
      <p>インスタンスの比較 : {{ isEqual }}</p>
      <p>プロパティの比較 : {{ isSame }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { FullName } from '@/domain/models/users/FullName'

export default Vue.extend({
  data() {
    return {
      fullName: '',
      isEqual: false,
      isSame: false,
    }
  },
  created() {
    this.fullName = this.getFullName()
    this.isEqual = this.isEqualInstance()
    this.isSame = this.isSamelName()
  },
  methods: {
    getFullName() {
      const fullName = new FullName('pon', 'yoshida')
      return fullName.get()
    },
    isEqualInstance() {
      const nameA = new FullName('pon', 'yoshida')
      const nameB = new FullName('pon', 'yoshida')
      return nameA === nameB
    },
    isSamelName() {
      const nameA = new FullName('pon', 'yoshida')
      const nameB = new FullName('pon', 'yoshida')
      return nameA.get() === nameB.get()
    },
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
