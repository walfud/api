import fs from 'fs'
import path from 'path'
import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'

import _10086 from './router/10086'

const app = new Koa()
app.use(logger())
app.use(bodyParser())

const root = new Router()
root.use('/10086', _10086.routes())
app.use(root.routes())

app.listen(3000)
console.log(`Listen at 3000`)