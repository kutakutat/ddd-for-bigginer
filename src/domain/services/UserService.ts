import { User } from '../models/users/User'
import { UserRepository } from '~/application/UserRepository'

export class UserService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private userRepository: UserRepository) {}

  /**
   * exists
   */
  public exists(user: User): boolean {
    // FIXME 永続化している User のデータに問い合わせて確認する
    const found = this.userRepository.find(user.name)
    return !!found
  }
}
