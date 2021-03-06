import { IllegalArgumentError } from '../../library/errors/IllegalArgumentError'
import { UserName } from './Name'

export class FullName {
  private firstName: UserName
  private lastName: UserName

  constructor(firstName: string, lastName: string) {
    if (!firstName || !lastName) {
      throw new IllegalArgumentError('入力が空です')
    }
    this.firstName = new UserName(firstName)
    this.lastName = new UserName(lastName)
  }

  public get value() {
    return `${this.lastName.value} ${this.firstName.value}`
  }
}
