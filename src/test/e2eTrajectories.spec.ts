import request from 'supertest';
import app from '../app';

describe('GET de historialTaxi, segundo endpoint', () => {
  it('Probando solicitud típica', async() => {
    const id = '6598';
    const day = '2008-02-03';
    const dayModify = '2008-02-03T00:01:11.000Z';
    const response = await request(app).get(`/trajectories/${id}/${day}`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy(); 
    expect(response.body.length).toBeGreaterThan(0);

    expect(typeof response.body[0].date).toBe('string');
    expect(response.body[0].date).toEqual(dayModify);

    expect(response.body[0]).toHaveProperty('latitude');
    expect(typeof response.body[0].latitude).toBe('number');

    expect(response.body[0]).toHaveProperty('longitude');
    expect(typeof response.body[0].longitude).toBe('number');

    expect(response.body[0]).toHaveProperty('date');
    expect(typeof response.body[0].date).toBe('string');

    const date1 = Date.parse(response.body[0].date);
    const date2 = Date.parse(response.body[1].date);
    expect(date2).toBeGreaterThanOrEqual(date1);

  });

  it('Probando con un id inválido', async() => {
    const id = /[a-zA-Z]/;
    const day = '2008-02-03';
    const response = await request(app).get(`/trajectories/${id}/${day}`);
    expect(response.status).toBe(404);
  });

  it('Probando con un day inválido', async() => {
    const id = '15';
    const day = /[a-zA-Z]/;
    const response = await request(app).get(`/trajectories/${id}/${day}`);
    expect(response.status).toBe(404);
  });

  it('Probando que no funciona sin querys', async() => {
    const response = await request(app).get(`/trajectories`);
    expect(response.status).toBe(404);
  });

});

describe('GET de lastLocation, tercer endpoint', () => {
  test('Nombre de tu prueba', async() => {
    const response = await request(app).get('/lastLocation');
    expect(response.status).toBe(200);

    expect(response.body[0]).toHaveProperty('taxi_id');
    expect(typeof response.body[0].latitude).toBe('number');
    
    expect(response.body[0]).toHaveProperty('latitude');
    expect(typeof response.body[0].latitude).toBe('number');

    expect(response.body[0]).toHaveProperty('longitude');
    expect(typeof response.body[0].longitude).toBe('number');

    expect(response.body[0]).toHaveProperty('date');
    expect(typeof response.body[0].date).toBe('string');

    const date1 = Date.parse(response.body[0].date);
    const date2 = Date.parse(response.body[1].date);
    expect(date1).toBeGreaterThanOrEqual(date2);
  });
});