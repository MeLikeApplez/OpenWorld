import Events from '../Core/Events.js'
import Vector2 from '../Math/Vector2.js'
/**
 * @typedef {Object} _Pointer
 * @property {HTMLElement} element
 * @property {Vector2} position
 * @property {Vector2} down
 * @property {Vector2} drag
 * @property {Vector2} offset
 * @property {boolean} isPointerDragging
 * @property {boolean} isPointerDown
 * @property {boolean} isPointerUp
 * @property {number} devicePixelRatio
 * @property {Events} events
 */

/**
 * @type {_Pointer}
 * @module Pointer
 */
export default class Pointer {
    static ONPOINTERDOWN_EVENT = 'onpointerdown'
    static ONPOINTERMOVE_EVENT = 'onpointermove'
    static ONPOINTERUP_EVENT = 'onpointerup'

    /**
     * @param {HTMLElement} element 
     * @param {number} [devicePixelRatio=1] 
     */
    constructor(element, devicePixelRatio=1) {
        this.element = element

        this.position = new Vector2(0, 0)
        this.down = new Vector2(0, 0)
        this.drag = new Vector2(0, 0)
        this.offset = new Vector2(0, 0)

        this.isPointerDragging = false
        this.isPointerDown = false
        this.isPointerUp = true

        this.devicePixelRatio = devicePixelRatio

        this.events = new Events()

        this.events.createEvent(Pointer.ONPOINTERDOWN_EVENT)
        this.events.createEvent(Pointer.ONPOINTERMOVE_EVENT)
        this.events.createEvent(Pointer.ONPOINTERUP_EVENT)

        if(element) this.load(element)
    }

    dispose() {
        if(!this.element) return false

        this.position.set(0, 0)
        this.down.set(0, 0)
        this.drag.set(0, 0)
        this.offset.set(0, 0)

        this.element.onpointerdown = null
        this.element.onpointermove = null
        this.element.onpointerup = null

        this.element = null

        return true
    }

    /**
     * @param {HTMLElement} element
     */
    load(element) {
        this.element = element

        element.onpointerdown = event => {
            this.isPointerDown = true
            this.isPointerUp = false

            const rect = element.getBoundingClientRect()

            this.position.set(
                this.devicePixelRatio * (event.clientX - rect.left + this.offset.x),
                this.devicePixelRatio * (event.clientY - rect.top + this.offset.y)
            )
            this.drag.set(0, 0)

            if(!this.isPointerDragging && this.isPointerDown) {
                this.isPointerDragging = true

                this.down.copy(this.position)
            }

            this.events.dispatchEvent(Pointer.ONPOINTERDOWN_EVENT, this)
        }

        element.onpointermove = event => {
            const rect = element.getBoundingClientRect()

            this.position.set(
                this.devicePixelRatio * (event.clientX - rect.left + this.offset.x),
                this.devicePixelRatio * (event.clientY - rect.top + this.offset.y)
            )

            if(this.isPointerDown) {
                this.drag.set(
                    this.position.x - this.down.x,
                    this.position.y - this.down.y,
                )
            }
        
            this.events.dispatchEvent(Pointer.ONPOINTERMOVE_EVENT, this)
        }

        element.onpointerup = event => {
            this.isPointerDown = false
            this.isPointerUp = true
        
            if(this.isPointerDragging) {
                this.isPointerDragging = false
         
                this.down.set(0, 0)
                this.drag.set(0, 0)
            }
        
            this.events.dispatchEvent(Pointer.ONPOINTERUP_EVENT, this)
        }

        return true
    }
}