const express =require('express')

const app =express()
app.use(express.json())

const courses =[
    {id: 1,name:"cousre 1"},
    {id: 2,name:"cousre 2"},
    {id: 3,name:"cousre 3"}
]

app.get('/',(req, res)=>{
    res.send("heloo there")
})

app.get('/courses',(req,res) =>{
    
    res.send(courses)
})

app.listen(3000,()=>{
    console.log("Up and running...")
})
