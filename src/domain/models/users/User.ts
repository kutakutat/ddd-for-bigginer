import { v4 as uuidv4 } from 'uuid'
import { IllegalArgumentError } from '../../library/errors/IllegalArgumentError'
import { UserName } from './Name'
import { UserId } from './UserId'

export class User {
  private readonly userId: UserId
  private userName: UserName

  constructor(name: UserName, userId?: UserId) {
    if (!name || userId === null) {
      throw new IllegalArgumentError('入力がからです')
    }
    if (!userId && typeof userId !== 'undefined') {
      this.userId = userId
      this.userName = name
    } else {
      const uuid: string = uuidv4()
      this.userId = new UserId(uuid)
      this.userName = name
    }
  }

  get id(): UserId {
    return this.userId
  }

  get name(): UserName {
    return this.userName
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
