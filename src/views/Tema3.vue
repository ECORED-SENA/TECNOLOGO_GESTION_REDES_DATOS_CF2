<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Diseño e implementación de la red LAN
    .row.mx-0
      .col-lg-4.d-flex.align-items-center.bg-color1
        figure.my-4.my-lg-0
          img(src='@/assets/curso/img32.svg', style="width: 300px; margin: auto;")
      .col-lg-8.p-5.bg-color2
        p Para implementar una red LAN es indispensable definir un buen diseño acompañado de una excelente arquitectura de red de área local para, entre otros aspectos necesarios, poder garantizar la disponibilidad, fiabilidad e integridad de la información y por supuesto la seguridad ante posibles ataques.
        p.mb-0 Esta temática debe incluir el análisis de requerimientos de la red, las características que debe incorporar la arquitectura propuesta para este caso de cableado estructurado, el montaje y funcionamiento que comprende configuración y pruebas a los diversos componentes hardware y software de la red.
    Separador
    #t_3_1
    .titulo-segundo
      h2 3.1 Análisis de requerimientos de redes
    p.mb-5 Al analizar las redes se debe enfocar en los requerimientos de los usuarios, las aplicaciones y dispositivos, también se debe entender el comportamiento de la red bajo diferentes escenarios, es importante definir, determinar y describir las relaciones entre el grupo de usuarios de la red, las aplicaciones y dispositivos de red. En el proceso de análisis se debe tomar las decisiones para las etapas de arquitectura, diseño e implementación de la red.
    figure
      img(src='@/assets/curso/img33.svg', style="width: 1000px; margin: auto;")
    Separador
    #t_3_2
    .titulo-segundo
      h2 3.2 Cableado estructurado
    .row.justify-content-center.mb-5
      .col-lg-9.mb-5
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular Un sistema de Cableado estructurado o Structured Cabling System (SCS) está formado por elementos de cableado, conectores, y dispositivos de comunicación que integran los servicios de voz, datos y video, junto con el sistema de administración al interior de un edificio, o un campus, como los sistemas de seguridad de acceso, alarmas, y sistemas de energía entre otros.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 González R (2015)
      .col-lg-10
        h4.text-center.my-5 Para el desarrollo de un sistema de cableado estructurado es importante abordar los siguientes aspectos:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            | #[b Estándares vigentes]
      .col-9.mb-5
        p Estos deben facilitar la administración, detección y resolución de fallas en la comunicación. Se pueden agrupar en tres grandes grupos que serían; estándares comunes, normas locales y estándares de componentes. Entre los más útiles tenemos TIA/EIA 568, IEEE 802.11, entre otros.
      .col-lg-10
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span b
            | #[b Diseño y documentación básicos de redes]
      .col-9.mb-5
        p Para todo proceso de planificación y diseño de una red es necesario tener un respaldo y ello se centraría en cuatro documentos básicos y el más importante sería el diagrama de la red que describe de forma gráfica cómo estará estructurada, las direcciones  y los componentes. Estos documentos base serían:
        .row
          .col-lg-9
            ul.lista-ul
              li 
                i.fas.fa-angle-right(style="color: #37A3A5")
                | Planificación de los requisitos de hardware y la topología de red.
              li 
                i.fas.fa-angle-right(style="color: #37A3A5")
                | Determinación de las direcciones IP, nombres de Host y servicios de nombres a utilizar en la red.
              li 
                i.fas.fa-angle-right(style="color: #37A3A5")
                | Establecimiento de subdivisiones administrativas y estrategia de subredes.
              li 
                i.fas.fa-angle-right(style="color: #37A3A5")
                | Determinación del lugar de los enrutadores en el diseño de la red.
          .col-lg-3
            figure
              img(src='@/assets/curso/img34.svg', style="width: 300px; margin: auto;")
      .col-lg-10
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span c
            | #[b Seguridad física]
      .col-9.mb-5
        p Aquí debemos referirnos a los mecanismos y controles de seguridad dentro y alrededor del centro de cableado como también los medios de acceso remoto del mismo; que se deben implementar para proteger el hardware y medios de almacenamiento de datos. Algunos de los problemas de seguridad física que se pueden tener serían: desastres naturales, incendios, inundaciones, picos, ruidos electromagnéticos, entre otros.
      .col-lg-10
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span d
            | #[b Planificación del cableado estructurado]
      .col-9.mb-5
        p.mb-5 Para esta planificación se debe tener en cuenta, dos componentes muy importantes: el Backbone y el cableado horizontal. El Backbone es la principal conexión troncal de Internet o columna vertebral en la red de área local que cumple la norma de cableado estructurado y se construye en fibra óptica. El cableado horizontal es la parte del sistema de telecomunicaciones que va desde el área de trabajo al cuarto de telecomunicaciones. Contiene las salidas de telecomunicaciones en el área de trabajo, cables y conectores de transición entre las salidas y el cuarto de telecomunicaciones, los patch panels y cables de empalme para configurar las conexiones de cableado horizontal en el cuarto de telecomunicaciones.
        figure
          img(src='@/assets/curso/img35.svg', style="width: 800px; margin: auto;")
      .col-lg-10
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span e
            | #[b Especificación del centro de cableado (SITE)]
      .col-9.mb-5
        p En este caso se debe determinar los equipos que servirán de conexión para los terminales o elementos componentes de la red y en especial de la red LAN, considerando la tecnología y protocolo de la misma a que en la mayoría de casos es Ethernet. Aquí se define la velocidad de los switches que pueden ser 100 o 1000 Mbps y así determinar su modo de funcionamiento. Este dispositivo estaría conectado a un router o un servidor de red el cual permite que los paquetes que salgan de la red LAN y tengan destino la red WAN, viajen a través de él y con su dirección IP, podrán acceder a los servicios y aplicaciones ofrecidas por la red WAN, como Internet, páginas específicas, bases de datos, y en general todos los servicios que se ofrecen  a la red.
      .col-lg-10
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span f
            | #[b Organismos certificadores]
      .col-9
        p Entre los principales organismos están ISO e IEEE, quienes proporcionan a los fabricantes un conjunto de estándares que aseguran mayor compatibilidad e interoperabilidad entre los diferentes tipos de tecnología de red producidos por las empresas a nivel mundial.
    Separador
    #t_3_3
    .titulo-segundo
      h2 3.3 Configuración y pruebas de la red
    .row.mb-5
      .col-lg-6
        p Así como las computadoras no pueden trabajar sin un sistema operativo lo mismo pasa con un router o un switch. El sistema operativo internetwork (IOS) de cisco es el software en dispositivos Cisco IOS (Internetwork Operating System). El Cisco IOS proporciona los siguientes servicios:
        ul.lista-ul.mt-5.ms-4
          li 
            i.fas.fa-angle-right(style="color: #37A3A5")
            | Funciones básicas de enrutamiento y conmutación.
          li 
            i.fas.fa-angle-right(style="color: #37A3A5")
            | Acceso confiable y seguro a recursos en red.
          li 
            i.fas.fa-angle-right(style="color: #37A3A5")
            | Escalabilidad de la red Command line interface (CLI)
      .col-lg-6
        figure
          img(src='@/assets/curso/img36.svg', style="width: 400px; margin: auto;")
    p.mb-5 El archivo en IOS tiene un tamaño en varios megabytes y se encuentra en una memoria semipermanente llamada flash. Esta memoria provee almacenamiento no volátil, también permite que se actualice IOS a versiones más nuevas o que se incorporen nuevas funciones, entre las que se pueden destacar:  
    .row.justify-content-center.mb-5
      .col-lg-8
        ul.lista-ul--separador
          li 
            i.fas.fa-angle-right(style="color: #37A3A5")
            | Métodos de acceso.
          li 
            i.fas.fa-angle-right(style="color: #37A3A5")
            | Consola.
          li 
            i.fas.fa-angle-right(style="color: #37A3A5")
            | Telnet/ SSH.
          li 
            i.fas.fa-angle-right(style="color: #37A3A5")
            | Puerto auxiliar: los dispositivos de red dependen de 2 tipos de software para su funcionamiento.
          li 
            i.fas.fa-angle-right(style="color: #37A3A5")
            | El sistema operativo: facilita la operación básica de los componentes de hardware del dispositivo.
          li 
            i.fas.fa-angle-right(style="color: #37A3A5")
            .row
              .col-12
                p La configuración: contienen los comandos del software IOS de cisco utilizados para personalizar la funcionalidad de un dispositivo Cisco. (los comandos son analizados el software IOS de Cisco) Archivos de Configuración:
                p.mb-0 Archivo de configuración en ejecución.
                p.mb-0 Archivo de configuración de inicio MODOS CISCO IOS.
          li 
            i.fas.fa-angle-right(style="color: #37A3A5")
            .row
              .col-12
                p Los modos de operación tienen cada uno su propio dominio, los comandos presentes en la CLI es de forma jerárquica teniendo en ella los siguientes modos de acceso:
                p.mb-0 Modo de usuario.
                p.mb-0 Modo de ejecución privilegiado.
                p.mb-0 Modo de configuración global (Informática Redes de Computadoras Unidad 5. s.f)
    p.mb-5 La siguiente gráfica describe la configuración y pruebas que se pueden realizar en la red y en especial para dispositivos correspondientes al fabricante Cisco.
    figure
      img(src='@/assets/curso/img37.svg', style="width: 1200px; margin: auto;")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
