import { IllegalArgumentError } from '../errors/IllegalArgumentError'

export class UserId {
  private readonly userId: string
  constructor(value: string) {
    if (!value) {
      throw new IllegalArgumentError('文字が空です')
    }
    this.userId = value
  }
}
