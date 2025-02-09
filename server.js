
/* 
as rotas precisam de:
    1- Tipo de rota ou Método HTTP (get, post, put, patch ou delete)
    2- Endereço (rota)
*/
import express from 'express';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
app.use(express.json());

const users = []

// request, response
// tipo  endereco
app.post('/users', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,   
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json(req.body)
});

app.get('/users', (req, res) => {
    res.status(200).json(users)
});

app.listen(3000)

/* 
    Criar nossa api de usuários
    
        1. criar os usuarios
        2. listar todos os usuarios
        3. editar um usuario
        4. deletar um usuario

        rafael
        raa112233

*/