import { observable } from 'mobx'
import remotedev from 'mobx-remotedev'

@remotedev
class Store {
    @observable price = 10

    add = () => this.price++

    reset = () => this.price = 0
}

export default Store