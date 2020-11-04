import { User } from '../models/users/User'
import { UserRepository } from '~/application/UserRepository'

export class UserService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private userRepository: UserRepository) {}

  /**
   * exists
   */
  public exists(user: User): boolean {
    /**
     * UserId が一致する場合に存在すると判定している
     * TODO : その他の識別子 Email などの判定を考慮する
     */
    const found = this.userRepository.find(user.id)
    return !!found
  }
}
