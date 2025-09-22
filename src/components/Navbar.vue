<template>
    <nav class="navbar">
        <div class="navbar-container">

        <div class="logo"><img src="../assets/icons/logo.svg" alt=""></div>
        <ul class="nav-links">
            <li><RouterLink class="link" to="/">HOME</RouterLink></li>
            <li><RouterLink class="link" to="/SobreMim">SOBRE MIM</RouterLink></li>
            <li><RouterLink class="link" to="/Habilidades">HABILIDADES</RouterLink></li>
            <li><RouterLink class="link" to="/Projetos">PROJETOS</RouterLink></li>
        </ul>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    width: 100%;
    
}
.navbar-container {
    margin-top: 22px;
    display: flex;
    width: 1808px;
    height: 90px;
    justify-content: space-between;
    margin: 0 auto;
}
.logo{
    margin: auto 0;
}
.nav-links {
    list-style: none;
    display: flex;
    font-size: 24px;
    font-family: "Fredoka", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    margin: auto 0;
    
}
.link{
    text-decoration: none;
    color: #5D6363;
    margin-left: 20px;
    cursor: pointer;
}
.router-link-exact-active {
  color: black; /* link selecionado */
  font-weight: bold;
}
</style>