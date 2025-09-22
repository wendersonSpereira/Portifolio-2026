<template>
    <section class="container-sobre-mim">
        <img class="guitarra" src="../assets/images/guitarra.svg" alt="">
        <div class="container-texto-sobre-mim">
            <h1 class="titulo-sobre-mim">Um pouco sobre minha pessoa</h1>
            <img class="minha-foto" src="../assets/icons/logo.svg" alt="">
            <p class="texto-sobre-mim">
                Olá, meu nome é Wenderson, tenho 24 anos, 1,75m de altura e cabelos negros. Confesso: sou muito bonitão (sim, eu me acho 😅).  
            </p>
            <p class="texto-sobre-mim">
                Gosto de desenhar, pratico atividades físicas com frequência e, sempre que posso, aproveito cada oportunidade para aprender algo novo.  
            </p>
            <p class="texto-sobre-mim">
                Minha única vaidade é o cabelo — gosto de mantê-lo grande, incluse meu maior medo é ficar calvo. 
            </p>
            <p class="texto-sobre-mim">
                Ah, e só pra deixar claro: aquela guitarra não está ali só de enfeite, eu realmente curto muito ROCK.  
            </p>
        </div>
        <img class="img" src="../assets/images/rabisco02.svg" alt="">
    </section>
</template>

<style scoped>
.container-sobre-mim{
    width: 100%;
    height: 1080px;
    position: relative;
}
.guitarra{
    position: absolute;
    left: 0;
    bottom: 0;
}
.container-texto-sobre-mim{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 793px;
    margin: 53px auto;
    text-align: justify;
}
.titulo-sobre-mim{
    font-size: 55px;
    font-family: "Fredoka", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    margin: 0 auto;
}
.minha-foto{
    width: 286px;
    margin: 80px auto;
}
.texto-sobre-mim{
    font-size: 28px;
    font-family: "Fredoka", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    color: #454A4A;
    width: 673px;
    margin: 0 auto;
    margin-bottom: 40px;
    line-height: 1.1
}
.img{
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>