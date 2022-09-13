const express = require("express"); //created a variable called express that will store express
const app = express();
const {faker} = require("@faker-js/faker")
const port = 8000;


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User{
    constructor(){
        this._id = faker.datatype.uuid();
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.number();
        this.lastName = faker.name.lastName();
        this.firstName = faker.name.firstName();
    }
}

const newUser = new User();
console.log(newUser)


class Company{
    constructor(){
        this.name = faker.company.bs();
        this.address = {
        street : faker.address.streetAddress(),
        city : faker.address.city(),
        state : faker.address.state(),
        zipCode : faker.address.zipCode(),
        country : faker.address.country()
        }
    }
}

const company = new Company();
console.log(company)

app.get("/api/users/new", (req, res)=>{
    res.json(new User());
})
app.get("/api/company/new", (req, res)=>{
    res.json(new Company());
})
app.get("/api/user/company/new", (req, res)=>{
    res.json(new Company());
    res.json(new User());
})

app.listen( port, () => console.log(`You are now on the Death Star Bridge: ${port}`) );

    // class Address{
    //     constructor(){
    //         this.street = faker.address.streetAddress();
    //         this.city = faker.address.city();
    //         this.state = faker.address.state();
    //         this.zipCode = faker.address.zipCode();
    //         this.country = faker.address.country();
    //     }
    // }
    
    // const companyObjectAddress = new Address();
    // console.log(companyObjectAddress);