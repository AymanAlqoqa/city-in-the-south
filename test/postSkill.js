const test = require('tape');
const supertest = require('supertest');
const router = require('../server/app');

test('Testing /api/v1/skills  route', (t) => {
  const fields = { id: 4, name: 'JAVAFX' };
  const body = {
    name: 'JAVAFX',
  };

  supertest(router)
    .post('/api/v1/skills')
    .send(body)
    .expect(200)
    .end((err, result) => {
      if (err) {
        t.error(err);
        t.end();
      }
      t.deepEqual(result.body.data, fields, 'Should contain the same content');
      t.end();
    });
});

test.onFinish(() => {
  process.exit(0);
});
