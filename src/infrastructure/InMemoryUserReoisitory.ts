import { UserRepository } from '../application/UserRepository'
import { User } from '~/domain/models/users/User'
import { UserName } from '~/domain/models/users/Name'
import { UserId } from '~/domain/models/users/UserId'

type InMemoryUserStoreItem = {
  userId: UserId
  user: User
}

export class InMemoryUserRepository implements UserRepository {
  public store: InMemoryUserStoreItem[]

  constructor() {
    this.store = [
      {
        userId: new UserId('sampleId'),
        user: new User(new UserName('ponyoshida'), new UserId('sampleId')),
      },
    ]
  }

  save(user: User): UserId {
    const item: InMemoryUserStoreItem = {
      userId: user.id,
      user,
    }
    this.store.push(item)
    return user.id
  }

  // Overloads
  find(userId: UserId): User | null
  // eslint-disable-next-line no-dupe-class-members
  find(userName: UserName): User | null
  // eslint-disable-next-line no-dupe-class-members
  find(value: UserId | UserName): User | null {
    const target = this.store.find((item) => {
      if (value instanceof UserName) {
        return value.equals(item.user.name)
      }
      if (value instanceof UserId) {
        return value.equals(item.userId)
      }
      return false
    })
    if (target) {
      // ディープコピーを返す
      return target.user
    } else {
      return null
    }
  }
}
