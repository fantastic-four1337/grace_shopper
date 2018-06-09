'use strict';

const db = require('../server/db');
const { User, Car, Cart, Transaction } = require('../server/db/models');

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

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  const users = await Promise.all([
    User.create({ email: 'cody@email.com', password: '123' }),
    User.create({ email: 'murphy@email.com', password: '123' }),
    User.create({ email: 'meow@email.com', password: 'meowsita' }),
    User.create({ email: 'sayWords@email.com', password: 'sayMagicCo' }),
    User.create({ email: 'harry@email.com', password: 'potter' })
  ]);

  const cars = await Promise.all([
    Car.create({
      name: 'Chevy',
      model: 'Corvette',
      year: 2018,
      color: 'Ghost White',
      description: 'Brand New',
      specification: 'ZF1, V8 Super-charger, RWD',
      price: 98500,
      imageUrl:
        'http://www.stingrayforums.com/forum/attachments/purchasing/13098d1411290857-finally-got-my-2015-c7-arctic-white-great-site-great-people-zf1.1.jpg',
      country: 'USA'
    }),
    Car.create({
      name: 'Ford',
      model: 'Mustang GT',
      year: 2018,
      color: 'Fire Red',
      description: 'Ferocious hemi engine that eats squirrels',
      specification: 'V6 Twin-Turbo, RWD',
      price: 74000,
      imageUrl:
        'http://st.motortrend.com/uploads/sites/5/2018/05/2018-Ford-Mustang-GT-Performance-Pack-2-front-three-quarter-e1526508541250.jpg?interpolation=lanczos-none&fit=around|660:440',
      country: 'USA'
    }),
    Car.create({
      name: 'Toyota',
      model: 'Camry',
      year: 2018,
      color: 'Indigo BLue',
      description: 'This is for moms and dads only, no tweens.',
      specification: 'V4 DOHC, FWD',
      price: 28750,
      imageUrl:
        'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USB50TOC021E0101.jpg',
      country: 'USA'
    }),
    Car.create({
      name: 'Lamborghini ',
      model: 'Huaracan',
      year: 2018,
      color: 'Midnight Black',
      description: 'Destroy the road',
      specification: 'LP580-2, V10 Twin-turbo, RWD',
      price: 184500,
      imageUrl:
        'https://car-images.bauersecure.com/pagefiles/67486/1040x585/lm-001.jpg',
      country: 'Italy'
    }),
    Car.create({
      name: 'Bugatti',
      model: 'Chiron',
      year: 2018,
      color: 'Coral Blue',
      description: 'Rev some engine!',
      specification: 'V16 Quad-Turbo, AWD, Brombo Brakes',
      price: 2966575,
      imageUrl:
        'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/bugatti-chiron.jpg?itok=ev4ISo0P',
      country: 'Italy'
    }),
    Car.create({
      name: 'BMW',
      model: 'M3',
      year: 2018,
      color: 'Snow White',
      description: 'Performance matters.',
      specification: 'Inline 6, RWD',
      price: 66500,
      imageUrl:
        'https://dqc7wek3c8i9z.cloudfront.net/uploads/5f9805f6928964c36285b8cd8d66c082.jpg',
      country: 'Germany'
    }),
    Car.create({
      name: 'Porsche',
      model: 'Macan Turbo',
      year: 2018,
      color: 'City Gray',
      description: 'SUV with performance.',
      specification: '400hp, AWD, Performance Pkg',
      price: 87700,
      imageUrl:
        'http://b9ed5af805e29a5074bf-298613918ac10dd8380d273c03a66c3b.r3.cf1.rackcdn.com/WP1AF2A50JLB70446/a00a47f26a6674435c58434d72d87dc5.jpg',
      country: 'USA'
    }),
    Car.create({
      name: 'Porsche',
      model: '718 Boxster S',
      year: 2018,
      color: 'Bright Yellow',
      description: 'Sky is yours',
      specification: '350hp, RWD, Convertible w/ PDK pkg',
      price: 75000,
      imageUrl: 'https://i.ytimg.com/vi/MW8XkPzvt60/maxresdefault.jpg',
      country: 'USA'
    })
  ]);

  const carts = await Promise.all([
    Cart.create({
      subTotal: 100000.0,
      total: 100000.0 * 1.085,
      tax: 100000.0 * 0.085
    }),
    Cart.create({
      subTotal: 100000.0,
      total: 100000.0 * 1.085,
      tax: 100000.0 * 0.085
    })
  ]);

  const transactions = await Promise.all([
    Transaction.create({
      billingAddress: '12 Alphabet Street Apt. 2A New York, NY 10029',
      shippingAddress: '12 Alphabet Street Apt. 2A New York, NY 10029',
      cardHolder: 'Bozo J Clown',
      cardType: 'Visa',
      cardNumber: 1234567890,
      expirationDate: '03/11',
      csv: 311
    })
  ]);
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  console.log(`seeded ${cars.length} cars`);
  console.log(`seeded successfully`);
  console.log(`seeded ${carts.length} carts`);
  console.log(`seeded successfully`);
  console.log(`seeded ${transactions.length} transactions`);
  console.log(`seeded successfully`);
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  seed()
    .catch(err => {
      console.error(err);
      process.exitCode = 1;
    })
    .then(() => {
      // `finally` is like then + catch. It runs no matter what.
      console.log('closing db connection');
      db.close();
      console.log('db connection closed');
    });
  /*
   * note: everything outside of the async function is totally synchronous
   * The console.log below will occur before any of the logs that occur inside
   * of the async function
   */
  console.log('seeding...');
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
