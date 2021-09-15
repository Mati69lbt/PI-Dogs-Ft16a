export default function validate(input) {
    let error = {};
    if (!input.name ){
        error.name = "¿porque no le pones un nombre?"
    } 
     if(!input.weight_min || input.weight_max <= input.weight_min){
        error.weight_min = "¿y su peso minimo?, no puede ser mayor que el maximo"
    }
     if(!input.weight_max || input.weight_max <= input.weight_min){
        error.weight_max = "¿y su peso maximo?, no puede ser menor al minimo"
    }
     if(!input.height_min || input.height_max <= input.height_min){
        error.height_min = "¿y su altura minima?, no puede ser mayor que el maximo"
    } 
     if(!input.height_max || input.height_max <= input.height_min){
        error.height_max = "¿y su altura maxima?, no puede ser menor al minimo"
    }
     if(!input.life_span){
        error.life_span = "¿y su esperanza de vida?"
    }
     if(input.temperament.length < 1){
        error.temperament = "¿y como es?"
    }
    return error   
}

