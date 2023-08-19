function Pessoa(name, age) {
  this.name = name,
  this.age = age,

  this.getName = function() {
    return this.name
  },

  this.getAge = function() {
    return this.age
  },

  this.setName = function(name) {
    this.name = name
  },

  this.setAge = function(age) {
    this.age = age
  },

  this.info = function() {
    console.log(this.name + " " + this.age);
  };
}

let pessoas = [];

const btn_add = document.querySelector(".send");
const res = document.querySelector(".resultado");
const namePessoa = document.querySelector(".name");
const agePessoa = document.querySelector(".age");
const user = document.querySelector(".user");
const userAge = document.querySelector(".userAge");

const addUsuario = () => {
  res.innerHTML = "";
  pessoas.map((p) => {
    const div = document.createElement("div");
    div.innerHTML = p.getName();
    res.appendChild(div);
  });
};

btn_add.addEventListener("click", (evt) => {
  const p = new Pessoa(namePessoa.value, agePessoa.value);
  pessoas.push(p);
  addUsuario();
  namePessoa.value = "";
  agePessoa.value = "";
  namePessoa.focus();
  console.log(pessoas);
});
