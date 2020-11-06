import { UserRepository } from './UserRepository'
import { UserService } from '~/domain/services/UserService'
import { UserName } from '~/domain/models/users/Name'
import { User } from '~/domain/models/users/User'
import { CanNotRegisterUserError } from '~/domain/library/errors/CanNotRegisterUserError'
import { UserId } from '~/domain/models/users/UserId'

export class UserApplicationService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private repository: UserRepository) {}

  register(userName: UserName): UserId {
    const user = new User(userName)
    const service = new UserService(this.repository)
    if (service.exists(user)) {
      throw new CanNotRegisterUserError('ユーザーが重複してます')
    }
    return this.repository.save(user)
  }

  get(userId: UserId): User | null {
    return this.repository.find(userId)
  }
}
