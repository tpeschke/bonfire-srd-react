// @ts-ignore
import express from 'express'
// @ts-ignore
import session from 'express-session'
// @ts-ignore
import passport from 'passport'
// @ts-ignore
import Auth0Strategy from 'passport-auth0'
// @ts-ignore
import bodyParser from 'body-parser'
// @ts-ignore
import cors from 'cors'
// @ts-ignore
import path from 'path'

import { server } from './server-config'
import rulesGuideRoutes from './controllers/rulesGuide/rulesGuideRoutes'

// import { Response, Request } from './interfaces/apiInterfaces'

const app = express()
app.use(bodyParser.json({ limit: '10mb' }))
app.use(cors())

// ================================== \\

app.use('/rulesGuide', rulesGuideRoutes)

app.use(express.static(__dirname + `/../../app/dist`));
// app.get('/*', (request: Request, response: Response) => {
//     response.sendFile(path.join(__dirname + '/../../app/dist/index.html'))
// })

// ================================== \\

app.listen(server, () => {
    console.log(`The night lays like a lullaby on the earth ${server}`)
})