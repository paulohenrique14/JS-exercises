let myCleaning = (object) =>{
    if(object.name == null ){
        delete object.name
    }else if(object.surname == null){
        delete object.surname
    }else if(object.age == null){
        delete object.age
    }

    console.log(object)
}

myCleaning({name: "paulo", surname: "Henirque", age: null})