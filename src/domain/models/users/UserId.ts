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
}
