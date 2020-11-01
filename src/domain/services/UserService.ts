import { User } from '../models/users/User'

export class UserService {
  /**
   * exists
   */
  public exists(user: User): boolean {
    // FIXME 永続化している User のデータに問い合わせて確認する
    return !!user
  }
}
