import test from 'ava'
import bus from '../../src'

// token livre para testes
const TOKEN = '1e7c20905fe86990c5227e7e9f00002fe908d4d4dd4d7c0091032dacd2d0e07d'

test('when authenticate should return credentials', async t => {
  const auth = await bus.auth(TOKEN)
  t.true(typeof auth === 'string')
  t.true(auth.length > 0)
})
