import { UserName } from '~/domain/models/users/Name'
import { User } from '~/domain/models/users/User'
import { UserId } from '~/domain/models/users/UserId'

export interface UserRepository {
  save(user: User): UserId
  find(value: UserName | UserId): User | null
}
