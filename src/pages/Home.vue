<script lang="js">
import Button from '../components/Button.vue'
import Footer from '../components/Footer.vue';

export default {
    components: {
        Button, Footer
    },

};
</script>

<template>
    <section>
        <div class="container-texto">
            <h1 class="Titulo">
                Olá, meu nome é Wenderson
            </h1>
            <p class="subtitulo">
                Desenvolvedor full stack
            </p>
            <p class="texto-descritivo">
               Olá pessoa! Quer um site elegante como este, que abra portas para o seu negócio e torne sua marca mais atrativa e profissional para seus clientes? É só clicar no botão ‘Entrar em Contato’ e falar comigo.
            </p>

            <Button texto="Entrar em contato" personalizar="botao-cadastro" />

        </div>
    
            <img class="image-home" src="../assets/images/rabisco.svg" alt="">
       
    </section>
    <Footer />
</template>
<style scoped>
.container-texto{
    margin-top: 194px;
    
    margin-left: 79px;
}
.Titulo {
    color: #000000;
    font-size: 55px;
    font-family: "Fredoka", sans-serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    margin-bottom: 36px;
}
.subtitulo{
    color: #5D6363;
    font-size: 48px;
    font-family: "Fredoka", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    margin-bottom: 97px;
}

.texto-descritivo{
    color: #5D6363;
    font-size: 28px;
    font-family: "Fredoka", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    width: 696px;
    line-height: 1.1;
    text-align: justify;
}
.image-home{
    position: absolute;
    right: 0px;
    top:35px;
    z-index: -1;

}
.botao-cadastro {
    width: 264px;
    height: 61px;
    background-color: #5D6363;
    font-size: 24px;
    font-family: "Fredoka", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    margin-top: 109px;
    cursor: pointer;
}
</style>