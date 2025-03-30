import Events from "../Core/Events"

/**
 * @typedef {Object} _AnimationGameLoop
 * @property {Events} events
 * @property {number} animationId
 * @property {number} startTime
 * @property {number} fps
 * @property {number} deltaTime
 */

/**
 * @type {_AnimationGameLoop}
 * @module AnimationGameLoop
 */
export default class AnimationGameLoop {
    static ON_START = 'onstart'
    static ON_UPDATE = 'onupdate'
    static ON_STOP = 'onstop'

    constructor() {
        this.events = new Events()

        this.animationId = -1
        this.startTime = -1

        this.fps = 0
        this.deltaTime = 0

        this.events.createEvent(AnimationGameLoop.ON_START)
        this.events.createEvent(AnimationGameLoop.ON_UPDATE)
        this.events.createEvent(AnimationGameLoop.ON_STOP)
    }

    start() {
        this.startTime = -1
        this.animationId = window.requestAnimationFrame(this.update.bind(this))

        this.events.dispatchEvent(AnimationGameLoop.ON_START, this)

        return this.animationId
    }

    stop() {
        window.cancelAnimationFrame(this.animationId)

        this.animationId = -1
        this.startTime = -1

        this.events.dispatchEvent(AnimationGameLoop.ON_STOP, this)

        return this.animationId
    }

    update(time) {
        this.animationId = window.requestAnimationFrame(this.update.bind(this))

        if(this.startTime === -1) {
            this.startTime = time

            return
        }

        this.deltaTime = (time - this.startTime) / 1000
        this.fps = 1 / this.deltaTime

        this.startTime = time

        this.events.dispatchEvent(AnimationGameLoop.ON_UPDATE, this)
    }
}