const usuariosContrasena = [{ Usuario: 'Luis', Contrasena: '123' },{ Usuario: 'Alberto', Contrasena: '456' },{ Usuario: 'Jefferson', Contrasena: '789' }];

const botonEnviar = document.getElementById('Enviar');
const botonLimpiar = document.getElementById('Limpiar');

botonEnviar.addEventListener('click', iniciarSesion);
botonLimpiar.addEventListener('click', limpiarSesion);



function iniciarSesion() 
{
    var usuario = document.getElementById('usuario');
    var contrasena = document.getElementById('contrasena');

    var spamUsuario = document.getElementById('sUsuario');
    var spamContrasena = document.getElementById('sContrasena');

    var spanEsValido = document.getElementById('sEsValido');

    spamUsuario.innerText = "";
    spamContrasena.innerText = "";
    usuario.style.borderColor = ""
    contrasena.style.borderColor = ""

    spanEsValido.style.borderColor = ""
    spanEsValido.innerText = "";
    

    if (usuario.value !== "" && contrasena.value !== "")
    {

      var hallarUsuario = usuariosContrasena.find(element => element.Usuario === usuario.value && element.Contrasena === contrasena.value)
  
      if (hallarUsuario) 
      {
        
       
        spanEsValido.innerText = `Sesión iniciada para ${hallarUsuario.Usuario}`;
        spanEsValido.style.color = "red";

      } 
      else 
      {
        var spanEsValido = document.getElementById('sEsValido');
        spanEsValido.innerText = "¡Usuario o contraseña no son correctos!";
        spanEsValido.style.color = "red";
      }

    }
    else
    {
        if (usuario.value === "")
        {
               
           spamUsuario.innerText = "Ingrese usuario";
           spamUsuario.style.color = "red";
           usuario.style.borderColor =  "red";

        } 

        if (contrasena.value === "")
        {

            spamContrasena.innerText = "Ingrese contraseña";
            spamContrasena.style.color = "red";
            contrasena.style.borderColor =  "red";

        }
        
    }
    
}

function limpiarSesion() 
{
    var usuario = document.getElementById('usuario');
    var contrasena = document.getElementById('contrasena');
    usuario.value = ""
    contrasena.value = ""
    usuario.style.borderColor = ""
    contrasena.style.borderColor = ""

    var spamUsuario = document.getElementById('sUsuario').innerText = ""; 
    var spamContrasena = document.getElementById('sContrasena') .innerText = "";

    var spanEsValido = document.getElementById('sEsValido');
    spanEsValido.style.borderColor = ""
    spanEsValido.innerText = "";
    
}

