<template>

    <section class="container-section-habilidades">
        <img class="mao-esquerda" src="../assets/images/mao-esquerda.png" alt="">
        <div class="container-conteudo-habilidades"> 
            <h1 class="titulo-habilidades">Ferramentas que dão vida às minhas ideias</h1>
            <img class="habilidades" src="../assets/images/habilidades.svg" alt="">
        </div>
        <img class="img" src="../assets/images/rabisco02.svg" alt="">
        <img class="mao-direita" src="../assets/images/mao-direita.png" alt="">
    </section>

</template>

<style scoped>
    .container-section-habilidades {
        position: relative;
        width: 100%;
        height: 1080px;
    }
    .container-conteudo-habilidades{
        text-align: center;
        width: 1132px;
        margin: 66px auto;
    }
    .titulo-habilidades{
        font-size: 55px;
        font-family: "Fredoka", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        font-variation-settings: "wdth" 100;
    }
    .habilidades{
        margin-top: 120px;
        animation: girando 30s linear infinite;
    }
    .mao-esquerda{
        position: absolute;
        bottom: 0;
        left: 61px;
    }
    .img{
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .mao-direita{
        position: absolute;
        bottom: 0;
        right: 61px;
    }

    @keyframes girando {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }   
    }
</style>