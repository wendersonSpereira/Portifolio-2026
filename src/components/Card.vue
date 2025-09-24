<script>
export default {
    props: {
        texto: {String}
    }
}
</script>
<template>
    <div class="card">
        <p class="texto">{{ texto }}</p>
    </div>
</template>

<style>
    .card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 450px;
        height: 230px;
        background-color: #5D6363;
        border-radius: 10px;
        margin-top: 74px;
    }
    .texto{
        text-align: center;
        font-size: 55px;
        font-family: "Fredoka", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        font-variation-settings: "wdth" 100;
        color: #D9D9D9;
    }
</style>