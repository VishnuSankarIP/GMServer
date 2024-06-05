const jsonServer=require('json-server')
const GetMServer=jsonServer.create()
const middleware=jsonServer.defaults()
const router=jsonServer.router('db.json')
const PORT=3000 || process.env.PORT

GetMServer.use(middleware)
GetMServer.use(router)


GetMServer.listen(PORT,()=>{
    console.log(`GET MOVIE Server started at port${PORT}`);
})
