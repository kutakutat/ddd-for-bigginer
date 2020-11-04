<template>
  <div class="container">
    <div>
      <h1 class="title">ddd-for-bigginer</h1>
      <p>
        登録名 :
        <input v-model="inputName" type="text" />
      </p>
      <button @click="onRegisterUserButton">Register</button>
      <p>ID : {{ userId }}</p>
      <button @click="onClickFindButton">Find</button>
      <p>Found? : {{ isFound }}</p>
      <p>名前 : {{ userName }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { UserId } from '~/domain/models/users/UserId'
import { UserName } from '~/domain/models/users/Name'
import { InMemoryUserRepository } from '~/infrastructure/InMemoryUserReoisitory'
import { UserApplicationService } from '~/application/UserApplicationService'
import { UserRepository } from '~/application/UserRepository'

export default Vue.extend({
  data() {
    return {
      inputName: '',
      userId: '',
      userName: '',
      repository: {} as UserRepository,
      isFound: false,
    }
  },
  created() {
    this.repository = new InMemoryUserRepository()
  },
  methods: {
    onClickFindButton() {
      const userApllicationService = new UserApplicationService(this.repository)
      const userId = new UserId(this.userId)
      const user = userApllicationService.get(userId)
      if (user !== null) {
        this.isFound = true
        this.userName = user.name.value
      }
    },
    onRegisterUserButton() {
      const userApllicationService = new UserApplicationService(this.repository)
      const userName = new UserName(this.inputName)
      const userId = userApllicationService.register(userName)
      this.userId = userId.value
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
