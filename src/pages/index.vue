<template>
  <div class="container">
    <div>
      <h1 class="title">ddd-for-bigginer</h1>
      <p>ID : {{ user.id }}</p>
      <p>名前 : {{ user.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { User } from '@/domain/models/users/User'
import { UserId } from '~/domain/models/users/UserId'
import { UserName } from '~/domain/models/users/Name'
import { UserService } from '~/domain/services/UserService'

export default Vue.extend({
  data() {
    return {
      user: {} as User,
    }
  },
  created() {
    const userId = new UserId('test12345')
    const userName = new UserName('ponyoshida')
    const userService = new UserService()
    this.user = new User(userId, userName)
    if (!userService.exists(this.user)) {
      console.error('User が重複しています')
    }
  },
  methods: {},
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
  font-size: 40px;
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
