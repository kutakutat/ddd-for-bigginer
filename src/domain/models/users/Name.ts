import { IllegalArgumentError } from '../errors/IllegalArgumentError'

export class Name {
  private readonly value: string

  constructor(value: string) {
    if (!value) {
      throw new IllegalArgumentError('入力が空です')
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
