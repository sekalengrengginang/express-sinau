const { PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } }
})
// // dummy data
// let users = [
//     { id: 1, name: "Delphia", email: "Felipa_Dietrich36@gmail.com" },
//     { id: 2, name: "Caitlyn", email: "Marisol.Lesch36@gmail.com" }
//   ]
  
module.exports={
    index: (req, res) => {
        // if (users.length > 0) {
        //   res.json({
        //     status:true,
        //     data:users,
        //     method: req.method,
        //     url: req.url
        //   });
        //   return
        // }
        // res.json({
        //   status:false,
        //   message: 'data users kosong!'
        // });
        const users = prisma.user.findMany()
        res.send(users);
        // res.render('user/index',{users})
      },
    register:(req,res) =>{
        res.render('user/register')
    },
    add:(req, res) => {
        // res.json({
        //   status:true,
        //   data:users,
        //   method: req.method, 
        //   message:'data users berhasil disimpan',
        //   url: req.url
        // });
        // users.push(res.body);
      const user = prisma.user.create({
        data: {
        name:req.body.name,
        email:req.body.email,
      },
    })
      console.log(user);
      res.redirect('/users');
      // users.push({
      //   id:uuidv4(),
      //   name:req.body.name,
      //   email:req.body.email
      // })
      },
    show:(req,res) =>{
      const id = req.params.id
      const data = users.filter(user => {
        return user.id == id
      })
      res.render('user/show',{user: data})
    },
    update:(req, res) => {
        const id = req.params.id
        users.filter(user =>{
          if (user.id == id) {
            user.id = id
            user.name = req.body.name
            user.email = req.body.email
            return user
          }
          return
        })
        res.json({
          status:true,
          data:users,
          method: req.method, 
          message:'data users berhasil diedit',
          url: req.url
        });
      },
    delete:(req, res) => {
        let id = req.params.id
        users = users.filter(users => users.id != id )
        res.send({      
          status:true,
          data:users,
          method: req.method, 
          message:'data users berhasil dihapus',
          url: req.url});
        }
}