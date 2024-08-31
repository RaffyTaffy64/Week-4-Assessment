import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())

import handlerFunctions from './controller.js'

app.get('/api/tasks', handlerFunctions.getTasks)
app.post('/api/addTask', handlerFunctions.addTask)
app.delete('/api/deleteTask/:id', handlerFunctions.deleteTask)
app.put('/api/editTask', handlerFunctions.editTask)

ViteExpress.listen(app, 6464, () => console.log("My number is 64! Home is http://localhost:6464"))