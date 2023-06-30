function validacao(){

    let nome = document.getElementById("i_name");
    let email = document.getElementById("i_email");
    let mensagem = document.getElementById("i_msg");
    
    

    input_style(nome, "#f45656", "#008000");
    input_style(email, "#f45656", "#008000");
    input_style(mensagem, "#f45656", "#008000");
    
    
}

function input_style(input, cor_1, cor_2){


    if(!input.checkValidity()){
       return input.style.border = `3px solid ${cor_1}`
    }else{
       return input.style.border = `2px solid ${cor_2}`
    }

    
}