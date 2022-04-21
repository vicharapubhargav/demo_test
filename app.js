const express = require('express');
const mongoose = require('mongoose')

const app= express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

  
// mongoose.connect(process.env.DB_URL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(console.log("DB Connected Successfully..."))
// .catch(error => {
    
//         console.log("DB Connection Failed!!!");
//         console.log(error);
//         process.exit(1);
// });


app.get("/", (req,res) =>{
    res.send("DB Connected successfully");
})

app.listen(PORT, () => {
    process.env.PORT
});
