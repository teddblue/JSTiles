const div = document.getElementById('JSTiles')
const canvas = document.createElement('canvas')
canvas.width = 256
canvas.height = 240
div.appendChild(canvas)
const pen = canvas.getContext('2d')
pen.fillStyle = "#000000"
pen.fillRect(0,0,256,240)