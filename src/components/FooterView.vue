<template>
  <div>
    <footer class="footer">
        <div class="logo-header-footer"></div>
        <div class="footer1">
            <p>Todos los derechos reservados</p>
        </div>
        <div class="footer2">
            <h2>Redes sociales</h2>
            <div class="instagram"></div>
            <div class="Twitter"></div>
            <div class="Youtube"></div>
            <ul>
                <li class="instagram-li">Instagram</li>
                <li class="twitter-li">Twitter</li>
                <li class="youtube-li">Youtube</li>
            </ul>
        </div>
        <div class="footer3">
            <h2 class="contacto">
                Contactanos
            </h2>
            <p>noseque@gmail.com</p>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
    name: 'FooterView'

}
</script>

<style scoped>

.footer {
  position: relative;
  top: 76rem;
    margin-top: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 300px;
    background-color: rgb(19, 93, 102);
}

ul li {
    margin-top: 20px;
    list-style: none;
}

.footer1,
.footer2,
.footer3 {
    display: flex;
    bottom: 60px;
    flex-direction: column;
    align-items: center;
    position: relative;
    color: #fff;
}


.contacto {
    font-weight: bold;
}

.instagram {
    position: absolute;
    left: 0px;
    width: 25px;
    height: 25px;
    background-size: cover;
    background-image: url(../assets/slider/instagram.png);

    top: 90px;
}

.Twitter {
    background-image: url(../assets/slider/Logo_of_Twitter.png);
    width: 25px;
    height: 25px;
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    top: 130px;
    left: 0px;
}

.Youtube {
    background-image: url(../assets/slider/Youtube_logo.png);

    width: 25px;
    height: 25px;
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    top: 180px;
    left: 0px;
}

.logo-header-footer {
    background-image: url(../assets/logo.png);
    width: 150px;
    height: 150px;
    position: absolute;
    background-size: cover;
    left: 0;
    bottom: 14rem;
}

a {
    text-decoration: none;
    color: #000;
}

</style>