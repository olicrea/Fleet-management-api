import app from './app';

const PORT: number = 3001;

app.listen(PORT, (): void => { // se inicia servidor en el puerto y escuchar las conexiones en un puerto
    console.log('SERVER IS UP ON PORT:', PORT);
});
