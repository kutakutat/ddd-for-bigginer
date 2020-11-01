import { UserRepository } from '../application/UserRepository'
import { User } from '~/domain/models/users/User'
import { UserName } from '~/domain/models/users/Name'
import { UserId } from '~/domain/models/users/UserId'
import { deepCopy } from '~/domain/library/utils/DeepCopy'

type InMemoryUserStoreItem = {
  userId: UserId
  user: User
}

export class InMemoryUserRepository implements UserRepository {
  public store: InMemoryUserStoreItem[]

  constructor() {
    this.store = []
  }

  save(user: User): void {
    const item: InMemoryUserStoreItem = {
      userId: deepCopy(user.id),
      user: deepCopy(user),
    }
    this.store.push(item)
  }

  find(userName: UserName): User | null {
    const target = this.store.find((item) => {
      return item.user.name === userName
    })
    if (target) {
      // ディープコピーを返す
      return deepCopy(target.user)
    } else {
      return null
    }
  }
}
