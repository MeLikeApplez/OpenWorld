import { generateUUID } from "../Math/MathUtils.js"

/**
 * @typedef {Map} _Events
 */

/**
 * @type {_Events}
 * @module Events
 */
export default class Events extends Map {
    constructor() {
        super()
    }

    /**
     * @param {string} eventName 
     */
    createEvent(eventName) {
        this.set(eventName, [])
    
        return this
    }

    /**
     * @param {string} eventName 
     */
    removeEvent(eventName) {
        this.delete(eventName)
    }

    /**
     * @param {string} eventName 
     * @param {...*} data 
     * @returns {boolean}
     */
    dispatchEvent(eventName, ...data) {
        const group = this.get(eventName)

        if(!group) return false

        for(let i = 0; i < group.length; i++) {
            const listener = group[i]
            
            listener.callback(...data)
        }

        return true
    }

    /**
     * @param {string} eventName 
     * @param {Function} callback
     * @returns {string | Error}
     */
    listen(eventName, callback) {
        const group = this.get(eventName)

        if(!group) return new Error(`Unable to find event eventName: "${eventName}"`)
        if(typeof callback !== 'function') return new Error('Callback function is required!')

        const uuid = generateUUID()
        
        group.push({ uuid, callback })
    }

    /**
     * @param {string} eventName 
     * @param {string} uuid 
     * @returns {true | Error}
     */
    unlisten(eventName, uuid) {
        const group = this.get(eventName)

        if(!group) return new Error(`Unable to find event eventName: "${eventName}"`)
        const index = group.findIndex(v => v.uuid === uuid)

        if(index === -1) return new Error(`Unable to find listener function with uuid: "${uuid}"`)
    
        group.splice(index, 1)
        
        return true
    }
}