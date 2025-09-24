<script>
    import Card from '../components/Card.vue';

    export default {
        components: {Card}
    }
</script>
<template>
    <section class="container-page-projetos">
        <div class="container-conteudo-projetos">
            <h1 class="titulo-projetos">Aqui  estão todas as minhas ideias que sairam do papel</h1>
            <Card texto="Em Breve"/>
            <Card texto="Em Breve"/>
        </div>
        <img class="img" src="../assets/images/rabisco03.svg" alt="">
    </section>
</template>

<style scoped>
    .container-page-projetos{
        width: 100%;
        height: 1080px;
    }
    .container-conteudo-projetos{
        width: 1444px;
        margin: 90px auto;
    }
    .titulo-projetos{
        font-size: 55px;
        font-family: "Fredoka", sans-serif;
        font-optical-sizing: auto;
        font-weight: bold;
        font-style: normal;
        font-variation-settings: "wdth" 100;
        text-align: center;
    }
    .img{
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
    }
</style>