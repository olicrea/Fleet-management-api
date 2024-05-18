import request from 'supertest';
import app from '../app';

/*describe('Nombre de tu conjunto de pruebas', () => {
  test('Nombre de tu prueba', () => {
    // Aquí escribe tu prueba
    const resultado = tuFuncion(); // Llama a la función que estás probando
    expect(resultado).toEqual(valorEsperado); // Asegúrate de que el resultado sea el esperado
  });
});*/
 

describe('GET de listTaxis, primer endpoint', () => {
  it('Probando búsqueda inicial con valores de paginación por defecto', async() => {
    const response = await request(app).get('/taxis'); 
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(Array.isArray(response.body)).toBeTruthy();

    expect(response.body[0]).toHaveProperty('id');
    expect(typeof response.body[0].id).toBe('number');

    expect(response.body[0]).toHaveProperty('plate');
    expect(typeof response.body[0].plate).toBe('string');
  });
  
  it('Probando la paginación con valores válidos', async() => {
    const response = await request(app).get('/taxis?page=1&take=10'); 
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('plate');
  });

  it('Probando la paginación con valores inválidos', async() => {
    const response = await request(app).get('/taxis?page=/[a-zA-Z]/&take=/[a-zA-Z]/'); 
    expect(response.status).toBe(500);
  });

  it('Probando cantidad de taxis esperados según take', async () => {
    const response = await request(app).get('/taxis').query({ take: 15 });
    expect(response.body).toHaveLength(15); 
  });

  it('Probando que la función opera con take y skip por defecto', async() => {
    const response = await request(app).get(`/taxis`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy(); 
    expect(response.body.length).toBeGreaterThan(0);
  });
});

