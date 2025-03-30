import AnimationGameLoop from "../DistortionGL/Utils/AnimationGameLoop"
import Renderer from "../DistortionGL/Renderer"
import PerspectiveCamera from "../DistortionGL/Camera/PerspectiveCamera"

import WaterScene from "../DistortionGL/Scenes/WaterScene"
import Water from "../DistortionGL/Terrain/Water"
import Vector3 from "../DistortionGL/Math/Vector3"

export default function main(canvas: HTMLCanvasElement) {
    const gameLoop = new AnimationGameLoop()

    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
    const scene = new WaterScene(camera)
    const renderer = new Renderer(canvas, {
        antialias: true,
        powerPreference: 'high-performance'
    })

    const density = 200
    const water = new Water(100, 100, density, density)

    camera.position.set(50, 20, 120)
    // camera.lookAt(new Vector3(50, 0, 50))

    scene.add(water)

    console.log(renderer)
    console.log(scene)
    console.log(water)

    renderer.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio)
    renderer.loadScene(scene)

    window.onresize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio)

        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
    }

    gameLoop.events.listen(AnimationGameLoop.ON_UPDATE, () => {
        try {
            animate()
        } catch(error) {
            gameLoop.stop()

            console.error(error)
        }
    })
    gameLoop.start()

    // let time = 0
    function animate() {
        renderer.render()

        scene.time = performance.now() / 1000

        // camera.position.set(50, 10 * Math.sin(time) + 50, 120)

        // time += gameLoop.deltaTime
    }
}