const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const prisma = new PrismaClient({
    datasources: { db: { url: process.env.DATABASE_URL } }
})

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = (await prisma.user.findMany({
                select:{
                    name:true,
                    email:true,
                }
            }))
            if (users.length > 0) {
                res.json({
                    status: true,
                    data: users,
                    method: req.method,
                    url: req.url
                });
            } else {
                res.send('no users is available!')
            }
        }
        catch (error) {
            res.send('error viewing users!')
        }
    },
    getLogin: (req, res) => {

    },
    postLogin: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })
            const checkPassword = await bcrypt.compare(password, user.password)
            if (checkPassword) {
                const payload = {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                }
                const secret = process.env.JWT_SECRET;
                const token = jwt.sign(payload, secret, { expiresIn: 60 * 60 * 2 });
                return res.json({
                    status: true,
                    token: token,
                    method: req.method,
                    url: req.url,
                    message: 'login success!'
                })
            } else {
                return res.status(403).json({
                    status: false,
                    method: req.method,
                    url: req.url,
                    message: 'wrong password!'
                })
            }
        } catch (error) {
            res.send('please enter user email and password!')
        }
    },
    getRegister: async (req, res) => {

    },
    postRegister: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const passwordHashed = await bcrypt.hash(password, 10);
            const result = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: passwordHashed,
                },
            })
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: 'registrasi berhasil!'
            })
        } catch (error) {
            res.send('registrasi gagal!')
        }

    },
    postLogout: async (req, res) => {

    }
}