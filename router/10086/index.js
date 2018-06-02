import Router from 'koa-router'
import { mongo } from '../../mongo'

const router = new Router()
router.get('/nums', async (ctx, next) => {
    ctx.body = await mongo('10086', 'num', async (err, db, coll) => {
        if (err) {
            return
        }

        return await coll.find({}).toArray()
    })
    ctx.set('Access-Control-Allow-Origin', '*')
})

export default router