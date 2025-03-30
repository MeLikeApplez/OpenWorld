import Camera from "../Camera/Camera"
import Scene from "./Scene"
import Renderer from "../Renderer"
import WaterShaders from "../Shaders/WaterShaders"
import Shader from "../Shaders/Shader"
import type Water from "../Terrain/Water"

type SceneShaders = {
    default: typeof WaterShaders
}

export default class WaterScene extends Scene {
    shaders: SceneShaders
    objects: Array<Water>
    time: number

    constructor(camera: Camera) {
        super(camera)

        this.shaders = {
            default: WaterShaders
        }

        this.objects = []

        this.time = 0
    }

    load(renderer: Renderer) {
        Shader.loadAllPreloadedShaders(renderer.gl, Object.values(this.shaders), true)

        renderer.gl.enable(renderer.gl.DEPTH_TEST)
        // renderer.gl.enable(renderer.gl.CULL_FACE)

        renderer.gl.depthMask(true)
        // renderer.gl.depthFunc(renderer.gl.LESS)
        // renderer.gl.cullFace(renderer.gl.FRONT_AND_BACK)

        for(let i = 0; i < this.objects.length; i++) {
            const sceneObjects = this.objects[i]

            sceneObjects.update(renderer.gl)
        }
    }

    render(gl: WebGL2RenderingContext) {
        const shader = this.shaders.default
        const { program, uniforms } = shader

        gl.useProgram(program)
        this.camera.render(gl, program, uniforms.cameraPosition, uniforms.cameraProjection, uniforms.cameraRotation)

        gl.uniform1f(uniforms.time, this.time)

        for(let i = 0; i < this.objects.length; i++) {
            const sceneObjects = this.objects[i]

            sceneObjects.render(gl, shader)
        }
    }
}