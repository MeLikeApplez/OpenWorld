import Shader from "./Shader"
import WaterVertexCode from '../gl/vertex/waterVertex.glsl?raw'
import WaterFragmentCode from '../gl/fragment/waterFrag.glsl?raw'

type Attributes = {
    vertexData: number
    vertexOffset: number
}

type Uniforms = {
    cameraPosition: WebGLUniformLocation | null
    cameraProjection: WebGLUniformLocation | null
    cameraRotation: WebGLUniformLocation | null
    vertexScale: WebGLUniformLocation | null
    time: WebGLUniformLocation | null
}

export default new class _WaterShaders extends Shader {
    uniforms: Uniforms
    attributes: Attributes

    constructor() {
        super('WaterShaders')

        this.uniforms = {
            cameraPosition: null,
            cameraProjection: null,
            cameraRotation: null,
            vertexScale: null,
            time: null
        }
        this.attributes = {
            vertexData: -1,
            vertexOffset: -1
        }

        this.preloadSourceCode(WaterVertexCode, WaterFragmentCode)
    }
}


