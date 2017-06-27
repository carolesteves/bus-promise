import test from 'ava'
import bus from '../../src'

// token livre para testes
const TOKEN = '1e7c20905fe86990c5227e7e9f00002fe908d4d4dd4d7c0091032dacd2d0e07d'

test('bus should has the find method', t => {
  t.is(typeof bus.find, 'function')
})

test('when send no param should return error', async t => {
  await bus.find().catch(err => {
    t.is(err.message, 'O método "find" deve receber um objeto com opções.')
  })
})

test('when send no auth param should return error', async t => {
  await bus.find({ auth: '' }).catch(err => {
    t.is(err.message, 'O método "find" deve receber o parâmetro "auth".')
  })
})

test('when send a not allowed param should return error', async t => {
  const auth = bus.auth(TOKEN)
  await bus.find({
    auth,
    tipo: 'not-allowed'
  }).catch(err => {
    t.is(err.message, 'O "tipo" "not-allowed" não existe.')
  })
})

test('when send no termosBusca to paradas should return error', async t => {
  const auth = bus.auth(TOKEN)
  await bus.find({
    auth,
    tipo: 'paradas'
  }).catch(err => {
    t.is(err.message, 'Parâmetro(s) obrigatório(s): "termosBusca".')
  })
})

test('when send no codigoLinha to paradasPorLinha should return error', async t => {
  const auth = bus.auth(TOKEN)
  await bus.find({
    auth,
    tipo: 'paradasPorLinha'
  }).catch(err => {
    t.is(err.message, 'Parâmetro(s) obrigatório(s): "codigoLinha".')
  })
})

test('when send no codigoCorredor to paradasPorCorredor should return error', async t => {
  const auth = bus.auth(TOKEN)
  await bus.find({
    auth,
    tipo: 'paradasPorCorredor'
  }).catch(err => {
    t.is(err.message, 'Parâmetro(s) obrigatório(s): "codigoCorredor".')
  })
})

test('when send no codigoLinha to posicaoVeiculos should return error', async t => {
  const auth = bus.auth(TOKEN)
  await bus.find({
    auth,
    tipo: 'posicaoVeiculos'
  }).catch(err => {
    t.is(err.message, 'Parâmetro(s) obrigatório(s): "codigoLinha".')
  })
})

test('when send no param value to previsaoChegada should return error', async t => {
  const auth = bus.auth(TOKEN)
  await bus.find({
    auth,
    tipo: 'previsaoChegada'
  }).catch(err => {
    t.is(err.message, 'Parâmetro(s) obrigatório(s): "codigoParada,codigoLinha".')
  })
})

test('when send no codigoLinha to previsaoLinha should return error', async t => {
  const auth = bus.auth(TOKEN)
  await bus.find({
    auth,
    tipo: 'previsaoLinha'
  }).catch(err => {
    t.is(err.message, 'Parâmetro(s) obrigatório(s): "codigoLinha".')
  })
})

test('when send no codigoParada to previsaoLinha should return error', async t => {
  const auth = bus.auth(TOKEN)
  await bus.find({
    auth,
    tipo: 'previsaoParada'
  }).catch(err => {
    t.is(err.message, 'Parâmetro(s) obrigatório(s): "codigoParada".')
  })
})
