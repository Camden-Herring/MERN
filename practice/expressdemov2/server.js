const express = require("express"); //created a variable called express that will store express
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const menuItems = [
    { name: "🍔", price: 12.0 },
    { name: "🍕", price: 15.0 },
    { name: "🦑", price: 19.0 },
    { name: "🍲", price: 9.0 },
    { name: "🍝", price: 20.0 },
];

// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World, How are you? Anyone ready to eat lunch?" });
});

app.get("/api/menu", (req, res)=>{
    res.json({
        HowMany: menuItems.length,
        results: menuItems
    })
})

app.post("/api/menu", (req, res)=>{
    menuItems.push(req.body)
    res.json({
        HowMany: menuItems.length,
        results: menuItems,
    });
})

app.put("/api/menu/:id", (req, res)=>{
    menuItems[req.params.id] = req.body;
    
    res.json({
        count: menuItems.length,
        results: menuItems,
    });
})

app.delete("/api/menu/:id",(req, res)=>{
    menuItems.splice(req.params.id, 1);
    res.json({
        count: menuItems.length,
        results: menuItems,
    });
})

// this needs to be below the other code blocks
app.listen( port, () => console.log(`You are now on the Death Star Bridge: ${port}`) );