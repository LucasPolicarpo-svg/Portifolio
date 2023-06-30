function showAlert(isCorrect){
    if(isCorrect){
        Swal.fire({
            icon: "success",
            title: 'Muito Obrigado!',
            confirmButtonColor: '#629460',
            showConfirmButton: true,
        });
    }else{
        Swal.fire({
            icon: "error",
            title: 'Desculpe, tente novamente!',
            confirmButtonColor: '#d33f49',
            showConfirmButton: true,
        });
    }
}


document.querySelector('#cad-usuario').addEventListener("submit", function(event){
    event.preventDefault();

    let nome = document.querySelector('#i_name').value;
    let email = document.querySelector('#i_email').value;
    let mensagem = document.querySelector('#i_msg').value;
    let isCorrect = nome.length > 0 && email.length > 0 && mensagem.length > 0;

    

showAlert(isCorrect);
})



