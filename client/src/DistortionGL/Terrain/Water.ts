import * as Constants from "../Core/Constants"
import GameObject from "../Core/GameObject"
import Vector3 from "../Math/Vector3"
import WaterShaders from "../Shaders/WaterShaders"

const STRIDE = 3 * Float32Array.BYTES_PER_ELEMENT

export default class Water extends GameObject {
    size: Vector3
    density: Vector3
    transformData: Float32Array;
    _vertexBuffer: WebGLBuffer | null
    _transformBuffer: WebGLBuffer | null

    static SQUARE_VERRICES = new Float32Array([
        0.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        0.0, 0.0, 1.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 1.0,
        0.0, 0.0, 1.0
    ])

    constructor(width: number, length: number, widthDensity: number, lengthDensity: number) {
        super()
        this.type = Constants.GameObjectType.Water

        this.size = new Vector3(1, 1, 1)
        this.density = new Vector3(1, 1, 1)

        this.transformData = new Float32Array()

        this._vertexBuffer = null
        this._transformBuffer = null

        this.setSize(width, length, widthDensity, lengthDensity)
    }

    setSize(width: number, length: number, widthDensity: number, lengthDensity: number) {
        this.size.set(width, 0.0, length)
        this.density.set(widthDensity, 0.0, lengthDensity)

        const area = widthDensity * lengthDensity
        this.transformData = new Float32Array(area * 3)

        let  index = 0
        for(let i = 0; i < widthDensity; i++) {
            for(let j = 0; j < lengthDensity; j++) {
                const x = width / widthDensity * i
                const z = length / lengthDensity * j

                this.transformData[index] = x
                this.transformData[index + 2] = z

                index += 3
            }
        }

    }

    dispose(gl: WebGL2RenderingContext) {
        
    }

    update(gl: WebGL2RenderingContext) {
        if(this._vertexBuffer !== null) {
            gl.deleteBuffer(this._vertexBuffer)

            this._vertexBuffer = null
        }

        if(this._transformBuffer !== null) {
            gl.deleteBuffer(this._transformBuffer)

            this._transformBuffer = null
        }

        if(this._vertexBuffer === null) {
            this._vertexBuffer = gl.createBuffer()

            gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer)
            gl.bufferData(gl.ARRAY_BUFFER, Water.SQUARE_VERRICES, gl.STATIC_DRAW)
        }

        if(this._transformBuffer === null) {
            this._transformBuffer = gl.createBuffer()

            gl.bindBuffer(gl.ARRAY_BUFFER, this._transformBuffer)
            gl.bufferData(gl.ARRAY_BUFFER, this.transformData, gl.STATIC_DRAW)
        }
    }
    render(gl: WebGL2RenderingContext, shader: typeof WaterShaders) {
        gl.uniform2f(shader.uniforms.vertexScale, this.size.x / this.density.x, this.size.z / this.density.z)

        gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer)

        gl.vertexAttribPointer(shader.attributes.vertexData, 3, gl.FLOAT, false, 0, 0)
        gl.enableVertexAttribArray(shader.attributes.vertexData)

        gl.bindBuffer(gl.ARRAY_BUFFER, this._transformBuffer)

        gl.vertexAttribPointer(shader.attributes.vertexOffset, 3, gl.FLOAT, false, STRIDE, 0)
        gl.enableVertexAttribArray(shader.attributes.vertexOffset)
        gl.vertexAttribDivisor(shader.attributes.vertexOffset, 1)

        gl.drawArraysInstanced(gl.TRIANGLES, 0, Water.SQUARE_VERRICES.length, this.density.x * this.density.z)
    }
}