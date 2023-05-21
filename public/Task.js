class Task{
    constructor(title, description, Users){
        this.title = title;
        this.description = description;
  
        this.Users = Users;
    }
get title(){
    return this._title;
}
set title(value){   
    this._title = value;
}

get description(){
    return this._description;
}    
set description(value){
    this._description = value;
}

get Users(){
    return this._Users;
}        
set Users(value){
    this._Users = value;
}
    
}
export default Task;