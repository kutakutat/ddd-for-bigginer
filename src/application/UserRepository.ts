import { UserName } from '~/domain/models/users/Name'
import { User } from '~/domain/models/users/User'

export interface UserRepository {
  save(user: User): void
  find(userName: UserName): User | null
}
