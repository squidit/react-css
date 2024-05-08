import EventEmitter from 'eventemitter3'

const eventEmitter = new EventEmitter()

const Emitter = {
  on: (event: any, fn: any) => eventEmitter.on(event, fn),
  once: (event: any, fn: any) => eventEmitter.once(event, fn),
  off: (event: any, fn: any) => eventEmitter.off(event, fn),
  emit: (event: any, payload: any) => eventEmitter.emit(event, payload),
}

Object.freeze(Emitter)

export default Emitter

/*
 Usage on a component:  
 - Emit event insite the component:
 Emitter.emit('hover', hover)

 - To listen on every change
 componentDidMount() {
    Emitter.on('hover', (hover) => // your code here)
  }

  componentWillUnmount() {
    Emitter.off('hover')
  }

  - To listen once:
  componentDidMount() {
    Emitter.once('hover', (hover) => // your code here)
  }

  componentWillUnmount() {
    Emitter.off('hover')
  }
*/
