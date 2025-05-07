import app from './app'
import { DBconect } from './database/database'

const PORT = app.get('port')

async function main() {
  await DBconect()
}

app.listen(PORT, () => {
  console.log('server running on:', PORT)
})
main()
