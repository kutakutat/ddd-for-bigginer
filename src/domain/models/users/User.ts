import { IllegalArgumentError } from '../errors/IllegalArgumentError'
import { UserName } from './Name'
import { UserId } from './UserId'

export class User {
  private readonly userId: UserId
  private name: UserName

  constructor(userId: UserId, name: UserName) {
    if (!userId || !name) {
      throw new IllegalArgumentError('入力がからです')
    }
    this.userId = userId
    this.name = name
  }

  /**
   * UserId によって等価性を判定します
   * other:User
   */
  public equals(other: User) {
    return this.userId === other.userId
  }
}
