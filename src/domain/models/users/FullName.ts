import { IllegalArgumentError } from '../errors/IllegalArgumentError'
import { Name } from './Name'

export class FullName {
  private firstName: Name
  private lastName: Name

  constructor(firstName: string, lastName: string) {
    if (!firstName || !lastName) {
      throw new IllegalArgumentError('入力が空です')
    }
    this.firstName = new Name(firstName)
    this.lastName = new Name(lastName)
  }

  public get() {
    return `${this.lastName.get()} ${this.firstName.get()}`
  }
}
