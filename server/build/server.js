import express from 'express';
const app = express();
app.get('/ads', (request, response) => {
    return response.json([
        { id: '1', nome: 'Arthur' },
        { id: '2', nome: 'Pedro' }
    ]);
});
app.listen(3333);
