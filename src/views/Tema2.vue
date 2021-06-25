<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Tecnologías y conceptos básicos de Networking
    p De acuerdo con Cisco (2016):
    p.mb-5.ms-4 Nos encontramos en un momento decisivo respecto del uso de la tecnología para extender y potenciar nuestra capacidad de comunicarnos. La globalización de Internet se ha producido más rápido de lo que cualquiera hubiera imaginado. El modo en que se producen las interacciones sociales, comerciales, políticas y personales cambia en forma continua para estar al día con la evolución de esta red global. En la próxima etapa de nuestro desarrollo los innovadores usarán Internet como punto de inicio para sus esfuerzos, creando nuevos productos y servicios diseñados específicamente para aprovechar las funcionalidades de la red. A medida que los programadores impulsen los límites de lo posible, las funcionalidades de las redes interconectadas que crean la Internet jugarán un papel cada vez más grande en el éxito de estos proyectos. (Cisco. CCNA Routing and Switching. Introduction to Networks Capítulo 1: Exploración de la red 2016).
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0mbw-CgmkEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_2_1
    .titulo-segundo
      h2 2.1 Tecnología
    p Imaginar hoy en día el mundo sin Internet, sin YouTube, Google, correo electrónico, Facebook, Netflix, juegos en línea, ni acceso a la información de actualidad. Un mundo sin sitios web para comparar precios y comprar en línea para evitar hacer fila, sin poder buscar mapas para llegar a diferentes sitios con solo un clic, entre otras cosas. Todo lo anterior es posible pues gracias a la tecnología, las redes se expandieron y transformaron paso a paso por varios años, con el fin de mejorar la calidad de vida de las personas en todo el mundo. Los recursos disponibles en internet durante un día son de gran ayuda para realizar tareas importantes y optimizar el tiempo utilizado en las mismas, estas pueden ser:
    .row.justify-content-center
      .col-11
        ul.lista-ul
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Acceso a tareas curriculares para su entrega a tiempo.
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Búsqueda de rutas menos congestionadas hacia los destinos escolares, laborales observando el estado del tráfico y clima.
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Comunicación con familiares, amigos, compañeros de trabajo usando el correo electrónico, llamadas telefónicas a través de Internet o mensajería instantánea.
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Consulta de cuentas bancarias y pago de facturas de forma electrónica.
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Compartir fotos, videos y experiencias con amigos y conocidos en el mundo. 
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Juegos en línea con amigos y conocidos. 
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Observar videos, películas o capítulos de programas de televisión a gusto de cada persona.
    Separador
    #t_2_2
    .titulo-segundo
      h2 2.2 Conceptos básicos de Networking
    .row.justify-content-center
      .col-lg-8.mb-5
        .cajon.color-primario.p-4
          p.mb-0 Se puede definir como un sistema de apoyo para compartir información y servicios entre usuarios, dispositivos, terminales y grupos de trabajo que pertenecen a redes comunes o independientes. A continuación, se abordan los conceptos básicos de Networking.
      .col-lg-10.mb-5
        .row.align-items-center
          .col-lg-4
            h4 Conexión a Internet
            p Dentro de los requisitos necesarios para la conexión a internet se tienen, conexión física utilizando una tarjeta adaptadora, tal como un módem o una NIC, desde un PC a una red, una conexión lógica que aplica estándares denominados protocolos, unas aplicaciones encargadas de interpretar datos y mostrar la información en un formato comprensible como los navegadores Web Google Chrome, Microsoft Edge, Firefox, entre otros. 
          .col-lg-8.mt-4.mt-lg-o
            figure
              img(src='@/assets/curso/img31.svg', style="width: 800px; margin: auto;")
      hr
      .col-lg-10.my-5
        .row.align-items-center
          .col-lg-8
            h4 Ancho de banda
            p Los datos enviados por una red de computadoras, son divididos en bloques pequeños llamados paquetes, cada cual contiene información de la dirección de origen y destino, este paquete, junto con la información de dirección física, se denomina trama, también posee información que describe cómo volver a unir los paquetes en el destino. El ancho de banda determina la cantidad de paquetes que pueden transmitirse en un lapso de tiempo fijo. #[b La unidad de medida del ancho de banda es el bit por segundo y generalmente, se indica con las siguientes unidades:]
          .col-lg-4
            .cajon.color-primario.p-4
              p.mb-0 Bits por segundo: b/s.
              p.mb-0 Kilobits por segundo: Kb/s.
              p.mb-0 Megabits por segundo: Mb/s.
              p.mb-0 Gigabits por segundo: Gb/s.
      hr
      .col-lg-10.mt-5
        h4 Direccionamiento de equipos de red
        p.mb-5 Las direcciones binarias de 32 bits usadas para acceder a Internet se llaman direcciones de Protocolo Internet (IP). La dirección IP de un dispositivo se forma por una parte de red y una de host que representa a un dispositivo específico de una red en particular. Para que el dispositivo sepa cómo está dividida la dirección IP, se utiliza un segundo número de 32 bits llamado máscara de subred, que se conforma de números unos que identifican la porción de red y por números ceros que indican el host en la red. Con la ayuda de la matemática de red al realizar una operación AND booleana entre la dirección IP 10.10.23.134 y la máscara de subred 255.0.0.0 se obtiene como resultado la dirección de red de este host.
        .row.justify-content-center.mb-5
          .col-lg-7
            h4 Solución:
            .cajon.color-primario.p-4
              p.mb-0 #[span.me-4 #[b.me-3 IP 10.10.23.134]] 00001010. 00001010. 00010111. 10000110
              p.mb-0 #[span.me-1 #[b.me-3 Máscara 255.0.0.0]]	#[u 11111111. 00000000. 00000000. 00000000]
              p.mb-0 #[span.me-5 #[b.me-3 Red 10.0.0.0]] 	00001010. 00000000. 00000000. 00000000
        p Dentro de los direccionamientos se tiene dos tipos básicos de direcciones IP que son IPv4 e IPv6, estos direccionamientos se pueden realizar también de dos formas básicas que son el direccionamiento estático y el direccionamiento DHCP o dinámico. Igualmente se encuentra el ICMP o Protocolo de Mensajes de Control de Internet, que sirve de apoyo en el conjunto de protocolos de Internet, se utiliza por los routers, para enviar mensajes de error e información operativa que indica el éxito o el fracaso en la comunicación con otra dirección IP.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
