import { IllegalArgumentError } from '../errors/IllegalArgumentError'

export class UserName {
  private readonly value: string

  constructor(value: string) {
    if (!value) {
      throw new IllegalArgumentError('入力が空です')
    }
    if (value.length < 3) {
      throw new IllegalArgumentError('名前は3文字以上です')
    }
    const regex = /^[a-zA-Z]+$/
    if (!regex.test(value)) {
      throw new IllegalArgumentError('許可されていない文字が使用されています')
    }
    this.value = value
  }

  get() {
    return this.value
  }
}
