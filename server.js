const fastify = require('fastify')()

fastify
  .register(require('fastify-nextjs'),
  // pass host and port to allow the revalidate hook
  {dev: false, hostname: 'localhost', port: 3001}) // set false if you are in prod and lunch with NODE_ENV=production  node server.js
// and build again
  .after(() => {
    fastify.next('/isgtest')
    fastify.next("/ctxaccess") 
    fastify.next('/api/*', { method: 'GET' });
    fastify.next('/api/*', { method: 'POST' });
  })

fastify.listen(3001, err => {
  if (err) throw err
  console.log('Server listening on http://localhost:3000')
})