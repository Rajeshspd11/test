

export class LocalStorageService{

    
   
    setValue(value: string){
        localStorage.setItem('LoginId', JSON.stringify(value))
            }

    
    getValue(): string{
        return JSON.parse(localStorage.getItem('LoginId'));    
    }

    removeValue(){
        localStorage.clear();
    }

      
      
        
}
    
    

