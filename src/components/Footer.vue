<script>

</script>

<template>
    <footer>
        <div class="footer-container">
            <div class="icones">
                <p class="titulo-footer">Redes sociais:</p>
                <ul class="lista-icones">
                    <li class="links" > <a class="icon" href="https://www.instagram.com/wendersonspereira"><img class="img" src="../assets/icons/instagram.svg" alt=""></a> </li>
                    <li class="links"> <a class="icon" href="https://www.linkedin.com/in/wenderson-pereira-04990a210"> <img class="img" src="../assets/icons/linkedin.svg" alt=""> </a>  </li>
                    <li class="links"> <a class="icon" href=""> <img class="img" src="../assets/icons/github.svg" alt=""> </a>  </li>
                </ul>
                <p class="texto-copy">Wenderson © 2025. Todos os direitos reservados.</p>
            </div>
            <p class="texto-footer"></p>
        </div>
    </footer>
</template>

<style scoped>
.footer-container{
    margin-left: 300px;
    margin-top: 76px;
    width: 696px;
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
    font-family: "Fredoka", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-variation-settings: "wdth" 100;
}
.icones {
    width: 300px;
}
.titulo-footer{
    text-align: center;
    color: #454A4A;
}

.lista-icones{
    margin: auto;
    display: flex;
    justify-content: center;
}
.links{
    display: flex;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: #5D6363;
    margin: 21px auto;
    cursor: pointer;
    
}
.icon{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: auto 0;
}
.texto-copy{
    text-align: center;
    font-size: 11px;
    margin-top: 27px;
}
.img{
    margin: auto 0;
    width: 40px;
    height: 40px;
}
</style>