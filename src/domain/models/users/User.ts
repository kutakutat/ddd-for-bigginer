import { IllegalArgumentError } from '../../library/errors/IllegalArgumentError'
import { UserName } from './Name'
import { UserId } from './UserId'

export class User {
  private readonly userId: UserId
  private userName: UserName

  constructor(userId: UserId, name: UserName) {
    if (!userId || !name) {
      throw new IllegalArgumentError('入力がからです')
    }
    this.userId = userId
    this.userName = name
  }

  get id(): string {
    return this.userId.value
  }

  get name(): string {
    return this.userName.value
  }

  /**
   * changeUserName
   * name: string
   */
  public changeUserName(name: string) {
    if (!name) {
      throw new IllegalArgumentError('入力がからです')
    }
    this.userName = new UserName(name)
  }

  /**
   * UserId によって等価性を判定します
   * other:User
   */
  public equals(other: User): boolean {
    return this.userId === other.userId
  }
}
