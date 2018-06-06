'use strict'

const db = require('../server/db')
const { User, Car, Cart} = require('../server/db/models')

/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'}),
    User.create({email: 'meow@email.com', password: 'meowsita'}),
    User.create({email: 'sayWords@email.com', password: 'sayMagicCo'}),
    User.create({email: 'harry@email.com', password: 'potter'})
  ])

  const cars = await Promise.all([
    Car.create({
      name: 'Corvette',
      model: 'ZF1',
      year: 2018,
      color: 'Ghost white',
      description: 'Brand New',
      specification: 'V20 engine',
      price: 100000,
      imageUrl:
        'http://www.stingrayforums.com/forum/attachments/purchasing/13098d1411290857-finally-got-my-2015-c7-arctic-white-great-site-great-people-zf1.1.jpg',
      country: 'USA'
    }),
    Car.create({
      name: 'Mustang',
      model: 'GT',
      year: 2018,
      color: 'Salmon',
      description: 'Ferocious hemi engine that eats squirrels',
      specification: 'V20 engine',
      price: 100500,
      imageUrl:
        'http://st.motortrend.com/uploads/sites/5/2018/05/2018-Ford-Mustang-GT-Performance-Pack-2-front-three-quarter-e1526508541250.jpg?interpolation=lanczos-none&fit=around|660:440',
      country: 'USA'
    }),
    Car.create({
      name: 'Camry',
      model: 'LTE',
      year: 2018,
      color: 'Champagne',
      description: 'This is for moms and dads only, no tweens.',
      specification: 'V4 engine',
      price: 7,
      imageUrl:
        'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USB50TOC021E0101.jpg',
      country: 'USA'
    })

  ])

  const carts = await Promise.all([
    Cart.create({products: [1], subTotal: 100000.00, total: 100000.00 * 1.085, tax: 100000.00 * 0.085}),
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  console.log(`seeded ${cars.length} cars`)
  console.log(`seeded successfully`)
  console.log(`seeded ${carts.length} carts`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  seed()
  .catch(err => {
    console.error(err)
    process.exitCode = 1
  })
  .then(() => { // `finally` is like then + catch. It runs no matter what.
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })
  /*
   * note: everything outside of the async function is totally synchronous
   * The console.log below will occur before any of the logs that occur inside
   * of the async function
   */
  console.log('seeding...')
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
