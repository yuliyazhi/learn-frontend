const user = {
    name: "Alexander",
    age: 29,
    city: "SPB",
}

for (const nameProp in user) {
    console.log(`имя свойства: ${nameProp}, значение свойства: ${user[nameProp]}`);
}

const arrayValuesUser = Object.values(user);
//console.log(arrayValuesUser);

const arrayKeysUser = Object.keys(user);
//console.log(arrayKeysUser);

const arrayKeysValuesUser = Object.entries(user);
//console.log(arrayKeysValuesUser);

//arrayKeysValuesUser.forEach(([key, value]) => console.log(`имя свойства: ${key}, значение свойства: ${value}`));




const obj = {
    name: "Petr",
    age: 10,
    "city-adress": "Moscow",
};

obj["last - name"] = "Sergeev";// если нужно название свойства через дефис или через пробел

console.log(typeof { name: "Petr", age: 10 });
console.log(obj.name);
console.log(obj["city-adress"]);


const users = {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    children: {
        sun: "Mike",
        daughter: "Roza",
    }

}
console.log(users.children.sun)