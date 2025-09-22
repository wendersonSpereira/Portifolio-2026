<script>
export default {
  props: {
    texto: {String},
    personalizar: {String}
  }, emits: ['personalizar']
};
</script>
<template>
    <button :class="personalizar" >{{texto}}</button>
</template>