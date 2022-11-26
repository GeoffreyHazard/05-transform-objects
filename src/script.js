import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */


const car = new THREE.Group()

// Body
const base = new THREE.Mesh(new THREE.BoxGeometry(2, .5, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }))
car.add(base)

// Glass
const glass = new THREE.Mesh(new THREE.BoxGeometry(1.2, .4, 1), new THREE.MeshBasicMaterial({ color: 0x00ffff }))
glass.position.x = .2
glass.position.y = .44
car.add(glass)

// Wheels
const wheel1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.5, 32), new THREE.MeshBasicMaterial({ color: 0xffff00 }))
wheel1.rotateX(Math.PI * 0.5)
wheel1.scale.set(1, 0.5, 1)
const wheel2 = wheel1.clone()
wheel1.position.z = 0.5
wheel2.position.z = -0.5
const frontWheels = new THREE.Group()
frontWheels.add(wheel1, wheel2)
frontWheels.position.x = - 0.7
frontWheels.position.y = -0.25

const backWheels = frontWheels.clone()
backWheels.position.x = 0.7
car.add(frontWheels, backWheels)

scene.add(car)
car.rotation.y = Math.PI * 0.25

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0, 0, 3)
scene.add(camera)

/**
 * Axes helper
 * 
 * This is a helper that will show us the x, y, and z axis
 * The red axis is the x axis
 * The green axis is the y axis
 * The blue axis is the z axis
 */
const axesHelper = new THREE.AxesHelper(1.5)
scene.add(axesHelper)
 

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

