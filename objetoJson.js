let student = {
    nome: "Gabriel",
    age: 26,
    isAdm: false,
    courses: [
        'HTML', 'CSS', 'JS'
    ],
    wife: null
};

let json = JSON.stringify(student);//Converte o objeto para o formato JSON
console.log(json);
console.log();

//Transforma texto em objeto
let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// propriedade ainda não existe, logo teremos erro
//console.log(user.friends[0] ?? "Propriedade inexistente");
user = JSON.parse(user);//agora a propriedade existe
console.log(user.friends[0]);
console.log();

var json2 = '{ "name":"John Doe", "birth":"2017-11-30T12:00:00.000Z", "city":"Porto Alegre"}'
var obj = JSON.parse(json2, function (key, value) {
if (key == "birth") {
return new Date(value);
}
return value;
});
console.log("Nome: " + obj.name);
console.log("DNasc: " + obj.birth);