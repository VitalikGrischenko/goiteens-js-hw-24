const user = {
    name:"Anton",
    pfor:"teacher",
    showname() {console.log('Hello I am your new ' + this.pfor + ' my name is ' + this.name)}

};

user.showname();

const user1 = {
    name:"Artem",
    pfor:"student"
};

user.showname.call(user1);
//user.showname.apply(user1) //це одне й те сам але зроблено через call і apply

user1.showname = user.showname.bind(user1);

user1.showname();

const numbers = [1, 2, 5]
//console.log(Math.max(numbers));  буде NaN
console.log(Math.max.apply(null, numbers))
//console.log(Math.max.call(null, 1, 2, 3, 4, 5)) через call


const prod = {
    name:'4 cheese',
    price:189,
    getPrice() {
        console.log('This pizza ' + this.name + ' cost ' + this.price);
    },
};

prod.getPrice()