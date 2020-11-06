import { IllegalArgumentError } from '../../library/errors/IllegalArgumentError'

export class UserId {
  private readonly userId: string

  constructor(userId: string) {
    if (!userId) {
      throw new IllegalArgumentError('文字が空です')
    }
    this.userId = userId
  }

  get value() {
    return this.userId
  }

  /**
   * UserId によって等価性を判定します
   * other:UserId
   */
  public equals(other: UserId): boolean {
    return this.userId === other.userId
  }
}
