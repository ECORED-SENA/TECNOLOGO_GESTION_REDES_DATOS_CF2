<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Redes de datos
    .row.mx-0.mb-5
      .col-lg-4.d-flex.align-items-center.bg-color1
        figure.my-4.my-lg-0
          img(src='@/assets/curso/img2.svg', style="width: 200px; margin: auto;")
      .col-lg-8.p-5.bg-color2
        p Una red informática es una colección de dispositivos conectados entre sí utilizando un medio de transmisión, que comparten recursos e intercambian información. La comunicación en la red informática posee dos roles para los elementos conectados, que son el emisor y receptor, estos se asumen y alternan en diferentes instantes de tiempo.
    p Las redes de datos son infraestructuras creadas para transmitir información a través del intercambio de datos. Según Moro (2013) son arquitecturas específicas para este fin, cuya base principal es la conmutación de paquetes y que atienden a una clasificación exclusiva, teniendo en cuenta la distancia que es capaz de cubrir su arquitectura física y por supuesto, el tamaño que presentan.
    Separador
    #t_1_1
    .titulo-segundo
      h2 1.1 Historia
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_1_2
    .titulo-segundo
      h2 1.2 Conceptos básicos y componentes de una red
    p Una red implica que en ella intervengan varios actores que básicamente se pueden enmarcar en cuatro bien definidos que son: los dispositivos, el medio, la información y los recursos que va a utilizar o compartir para mejorar la eficiencia de los mismos. 
    p.mb-5 Los dispositivos son aquellos elementos que se conectan a la red y están divididos en dos grandes grupos:
    figure.mb-5
      img(src='@/assets/curso/img3.svg', style="width: 1000px; margin: auto;")
    p.mb-5 El medio es la conexión que permite a dispositivos relacionarse entre sí. A su vez se define la información como la unidad que se intercambia entre dispositivos de gestión, acceso, comunicación y de usuario final como es el texto, imágenes, música, hipertexto, video, entre otros. Por otra parte, los recursos hacen referencia a todo aquello que un dispositivo pide a la red, se identifica y accede directamente. Estos recursos pueden ser archivos compartidos en otros dispositivos de la red, un documento a imprimir en una impresora compartida, un servicio a consumir, información, espacio en disco duro, tiempo de procesamiento, etc.
    .h4.mb-5 A continuación se definen los dispositivos y elementos más importantes en las redes de datos:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Rr8POxBrOlo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    TabsB.color-acento-contenido
      .p-4.p-md-5(titulo="Servidor" :icono="require('@/assets/curso/img4.svg')").bg-color3
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Servidor
            p Es un computador que en la red tiene la función de proveer servicios a otros dispositivos llamados clientes. También se suele denominar con la palabra servidor a una aplicación informática o programa que realiza algunas tareas en beneficio de otras aplicaciones llamadas clientes.  Entre los servicios ofrecidos por un servidor, está el manejo de archivos y aplicaciones. Los primeros consisten en un proceso de lectura y escritura por parte de los usuarios sobre archivos almacenados en una estación de trabajo. Las aplicaciones permiten a los usuarios finales realizar tareas acordes a sus necesidades.
          .col-md-6
            figure
              img(src='@/assets/curso/img1.png', alt='Texto que describa la imagen')
      .p-4.p-md-5(titulo="Estaciones de trabajo" :icono="require('@/assets/curso/img5.svg')").bg-color3
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Estaciones de trabajo
            p Son los nodos finales de una red de computadoras. Normalmente, las estaciones de trabajo permiten a los usuarios ejecutar aplicaciones y almacenar diferentes tipos de información. Sin embargo, una impresora conectada a la red podría verse como un nodo final de ésta y verse como una estación de trabajo, pero con prestaciones diferentes y reducidas comparadas con la de un computador.
          .col-md-6
            figure
              img(src='@/assets/curso/img2.png', alt='Texto que describa la imagen')
      .p-4.p-md-5(titulo="Tarjeta de acceso a la red" :icono="require('@/assets/curso/img6.svg')").bg-color3
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Tarjeta de acceso a la red
            p Es un dispositivo que le permite a todo computador conectarse a la red informática ya sea para conexión cableada o inalámbrica. Cuando se trata de una conexión alámbrica, se habla de una tarjeta de red o NIC (Network Interface Card) por sus siglas en inglés, la cual puede ser insertada directamente en la placa madre por medio de un puerto PCI. Dicha tarjeta trae consigo un conector para cable de red. Por otro lado, las tarjetas de red inalámbricas también pueden ser conectadas a la tarjeta madre por medio del puerto PCI o de manera externa por medio de un puerto USB.
          .col-md-6
            figure
              img(src='@/assets/curso/img3.png', alt='Texto que describa la imagen')
      .p-4.p-md-5(titulo="Repetidor" :icono="require('@/assets/curso/img7.svg')").bg-color3
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Repetidor
            p Se trata de un dispositivo electrónico capaz de transmitir una señal recibida de bajo nivel y retransmitirla a más alto nivel, permitiendo con esto cubrir distancias largas sin que haya degradación considerable de la señal. En los inicios de la telegrafía se utilizó para regenerar las señales telegráficas.
          .col-md-6
            figure
              img(src='@/assets/curso/img4.png', alt='Texto que describa la imagen')
      .p-4.p-md-5(titulo="Router" :icono="require('@/assets/curso/img8.svg')").bg-color3
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Router
            p Es un dispositivo de red encargado de indicar la ruta más adecuada para transmitir el mensaje que ha enviado el transmisor hacia un destino determinado dentro o fuera de la red a la cual pertenecen, utilizando los protocolos adecuados.
          .col-md-6
            figure
              img(src='@/assets/curso/img5.png', alt='Texto que describa la imagen')
      .p-4.p-md-5(titulo="Switch" :icono="require('@/assets/curso/img9.svg')").bg-color3
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Switch
            p Es un dispositivo de red que se encarga de interconectar varios segmentos de red, por medio de la dirección MAC de los dispositivos destino de las tramas de red.
          .col-md-6
            figure
              img(src='@/assets/curso/img6.png', alt='Texto que describa la imagen')
      .p-4.p-md-5(titulo="Cableado" :icono="require('@/assets/curso/img10.svg')").bg-color3
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Cableado
            p Se trata del medio físico utilizado para la conexión de los dispositivos hacia la red en la cual solicitarán los servicios dependiendo de los requerimientos de longitud, velocidad entre otros.
          .col-md-6
            figure
              img(src='@/assets/curso/img7.png', alt='Texto que describa la imagen')
      .p-4.p-md-5(titulo="Protocolo" :icono="require('@/assets/curso/img11.svg')").bg-color3
        .row
          .col-12
            h4 Protocolo
            p.mb-5 Es el elemento software de la red, encargado de establecer los parámetros de comunicación entre dispositivos, habilitar mecanismos de identificación de los equipos y usuarios en la red, definir el formato de la información que circula en la red.
            .row.justify-content-center
              .col-lg-8
                figure
                  img(src='@/assets/curso/img12.svg', alt='Texto que describa la imagen')
    Separador
    #t_1_3
    .titulo-segundo
      h2 1.3 Medios de transmisión
    p.mb-5 Son los caminos por los cuales viaja la información o los datos. Estos medios según como conducen las señales se clasifican en dos tipos:
    .row.bg-color3.p-4
      .col-lg-4
        p.mt-4 #[b Medios de transmisión guiados:] están formados por cables que se encargan de guiar las señales de un extremo a otro. Dentro de las características de estos medios están: el tipo de conductor, velocidad máxima de transmisión, distancia máxima ofrecida entre repetidores, inmunidad ante interferencias electromagnéticas, facilidad de instalación y la compatibilidad con varias tecnologías de capa de enlace. Los medios guiados más usados para interconexión en el campo de las telecomunicaciones son: cable de par trenzado, cable coaxial y la fibra óptica
      .col-lg-8.mt-4.mt-lg-0
        SlyderC.mb-5(:datos="datosSlyder1")
    .row.bg-color3.p-4
      .col-lg-4
        p.mt-4 #[b Medios de transmisión no guiados:] son aquellos que permiten la comunicación sin uso de cables o conductor físico, las señales electromagnéticas son radiadas a través del espacio libre y se encuentran disponibles para cualquier usuario con un dispositivo inalámbrico. Para estos medios es necesario el uso de antenas tanto para transmitir como para recibir las señales. Los medios no guiados más usados son: ondas de radio, microondas e infrarrojo.
      .col-lg-8.mt-4.mt-lg-0
        SlyderC.mb-5(:datos="datosSlyder2")
    Separador
    #t_1_4
    .titulo-segundo
      h2 1.4 Protocolos de comunicación
    .row
      .col-lg-7.mb-4.mb-lg-0
        p Cuando se trata de la comunicación entre ordenadores primero se deben conocer cuáles son las normas que permiten esta comunicación, o lo que es lo mismo, qué protocolo de comunicación utilizan. Para Stallings, Tanenbaum y Stevens (2000), un protocolo de red es un grupo de reglas que establece la forma para identificarse, transmitir la información y cómo procesar los datos en la red.  Los protocolos pueden ser de tipo hardware (tarjetas de red), software (drivers), o combinación de ambos.
        p.mb-0 Existen diferentes protocolos, cada uno de ellos está identificado por la capa del modelo OSI en la que va a trabajar. Por nombrar algunos: 
      .col-lg-5
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Capa 1: CGI. MIME, IEEE
          p.mb-0 Capa 2: Ethernet
          p.mb-0 Capa 3: Protocolo de internet IP
          p.mb-0 Capa 4: Protocolo de control de Transmisión TCP, UDP
          p.mb-0 Capa 5: NetBIOS
          p.mb-0 Capa 6: ASN.1
          p.mb-0 Capa 7: TELNET, FTP, SNMP
    Separador
    #t_1_5.mt-5
    .titulo-segundo
      h2 1.5 Clasificación de redes
    p.mb-5 Las redes están clasificadas de diferentes maneras teniendo en cuenta el número de dispositivos conectados y la distancia entre los mismos, el tipo de conexión o la tecnología utilizada, esta clasificación se detalla a continuación:
    TabsC.color-primario.mb-5
      .p-3.p-md-4(titulo="Por alcance")
        .row
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul--separador
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Red PAN o de área personal (Personal Area Network)
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Red LAN o de área local (Local Area Network)
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Red CAN o de área de campus (Campus Area Network)
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Red MAN o de área metropolitana (Metropolitan Area Network)
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Red WAN o de área amplia (Wide Area Network)
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Red SAN o de área de almacenamiento (Storage Area Network)
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Red VLAN o de área local virtual (Virtual LAN)
          .col-md-6
            figure
              img(src='@/assets/curso/img15.svg', style="width: 550px; margin: auto;")
      .p-3.p-md-4(titulo="Por tipo de conexión")
        .row
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                span #[b Red cableada: ]
                  | es aquella red en la que se conectan mediante cable computadores y otros periféricos, se intercambian archivos, y se envían datos a otros dispositivos. La siguiente figura ilustra un ejemplo de red cableada:
          .col-md-6
            figure
              img(src='@/assets/curso/img16.svg', style="width: 300px; margin: auto;")
        hr
        .row.mt-5
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                span #[b Red inalámbrica: ]
                  | aquella red en la cual dos o más dispositivos como computadores portátiles, agendas electrónicas, entre otros, se comunican sin necesidad de una conexión por cable, con este tipo de red, los usuarios pueden estar conectados cuando se desplazan dentro de una determinada área geográfica. En la siguiente figura se observa una red de tipo inalámbrica:
          .col-md-6
            figure
              img(src='@/assets/curso/img17.svg', style="width: 300px; margin: auto;")
      .p-3.p-md-4(titulo="Por relación funcional")
        .row
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul--separador
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Es una arquitectura o relación que consiste en realizar peticiones o solicitudes a un componente de la red informática llamado servidor y que puede estar alojado en la misma red del peticionario. Este componente a su vez puede o no responder satisfactoriamente la petición y si ésta es positiva entonces se dará lugar a un servicio.
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Peer-to-peer que consiste en la conformación de una red de datos en la que no hay componentes dominantes o que dirijan a los demás integrantes de la malla. Es decir, cada elemento de la red tiene los mismos privilegios y restricciones que cualquier otro.
          .col-md-6
            figure
              img(src='@/assets/curso/img18.svg', style="width: 400px; margin: auto;")
      .p-3.p-md-4(titulo="Por tecnología")
        .row
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul--separador
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                span #[b Red Punto a Punto: ]
                  | es aquella donde se conectan parejas individuales de dispositivos terminales y que necesitan routers intermedios que establezcan rutas apropiadas para el envío de la información.
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                span #[b Red Broadcast: ]
                  | es una red que transmite los datos por un solo canal de comunicación compartido por todos los dispositivos de la red, este mensaje o paquete se envía a todos los terminales  máquinas de la red, pero únicamente la destinataria puede procesarlo.
          .col-md-6
            figure
              img(src='@/assets/curso/img19.svg', style="width: 400px; margin: auto;")
      .p-3.p-md-4(titulo="Por la direccionalidad de los datos")
        .row
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul--separador
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                span #[b Unidireccional o Simplex: ]
                  | consiste en la transmisión de información en un solo sentido donde el emisor no tiene retroalimentación alguna por parte del receptor. Un ejemplo de este tipo de transmisión son las emisoras radiales, donde el oyente necesita de un radio receptor, pero este aparato no permite enviar señal alguna.
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                span #[b Half-Duplex o Bidireccional: ]
                  | este tipo de comunicación permite que la información se transmita en ambos sentidos, pero con la restricción de uno solo a la vez. Es decir, para que uno de los dos involucrados (emisor o receptor) pueda transmitir, el otro debe estar en silencio. También es denominado semi-dúplex. Un ejemplo de este tipo de transmisión son los radios de la policía.
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                span #[b Full-Duplex: ]
                  | la transmisión es en ambos sentidos y al mismo tiempo una misma información. Un ejemplo de este tipo de transmisión son los teléfonos móviles o celulares.
          .col-md-6
            figure
              img(src='@/assets/curso/img20.svg', style="width: 550px; margin: auto;")
      .p-3.p-md-4(titulo="Por grado de difusión")
        .row
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul--separador
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                span #[b Intranet: ]
                  | red privada de usuarios que solo comparte sus recursos e información con los clientes internos, es de uso educativo, comercial entre otros.
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                span #[b Internet: ]
                  | red de área amplia que interconecta gran cantidad de redes de comunicación heterogéneas funcionando como una red de alcance mundial y lógica única, basada en el protocolo TCP/IP.
          .col-md-6
            figure
              img(src='@/assets/curso/img21.svg', style="width: 300px; margin: auto;")
    Separador
    #t_1_6
    .titulo-segundo
      h2 1.6 Topologías de redes
    p.mb-5 Para la topología física, se consideran tres formas básicas para el montaje de una red:
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="BUS")
        .col-md-6.mb-4.mb-md-0
          p Consiste en la conexión de todos los nodos de la red a un solo canal de comunicación lo que genera una serie de desventajas como degradación de la señal, sobre escalamiento entre otras.
        .col-md-6
          figure
            img(src='@/assets/curso/img22.svg', style="width: 250px; margin: auto;")
      div(titulo="ANILLO")
        .row
          .col-md-6.mb-4.mb-md-0
            p Cada terminal tiene conexión con la siguiente y la primera se conecta con la última, cerrando así la conexión, razón por la cual se denomina anillo.
          .col-md-6
            figure
              img(src='@/assets/curso/img23.svg', style="width: 450px; margin: auto;")
      div(titulo="ESTRELLA")
        .row
          .col-md-6.mb-4.mb-md-0
            p Todos los dispositivos de la red se conectan con un dispositivo central llamado nodo el cual se encarga de establecer las comunicaciones entre terminales o usuarios.
          .col-md-6
            figure
              img(src='@/assets/curso/img24.svg', style="width: 450px; margin: auto;")
    p.mb-5 En cuanto a la topología lógica, está determinada por la forma como se accede a los datos y recursos de la red, para este caso tenemos:
    .row.justify-content-center.align-items-center.mb-4
      .col-2
        figure
          img(src='@/assets/curso/img25.svg', style="width: 150px; margin: auto;")
      .col-7
        p.mb-0 #[b Transmisión de tokens:] se realiza la transmisión de tokens electrónicos en forma secuencial hacia cada terminal. Los dos tipos de redes que utilizan esta topología son TokenRing y FDDI.
    .row.justify-content-center.align-items-center
      .col-2
        figure
          img(src='@/assets/curso/img26.svg', style="width: 150px; margin: auto;")
      .col-7
        p.mb-0 #[b Broadcast:] aquí cada dispositivo envía un mensaje hacia todos los demás integrantes de la red. Las operaciones se realizan por orden de llegada como si fuese Ethernet.
    Separador
    #t_1_7
    .titulo-segundo
      h2 1.7 Modelo TCP/IP y OSI
    .row.justify-content-center.mb-5
      .col-lg-10.mb-5
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular Los protocolos IP (Protocolo de Internet) y TCP (Protocolo de Control de Transmisión) se originaron a principios de 1980 y fueron adoptados por la red ARPANET en 1983, integrada por cientos de computadoras de centros de investigación militar, universidades, y algunas empresas. El e-mail (electronic mail) se destacó como el servicio más utilizado, mientras que el sistema operativo más usado fue UNIX, en su versión BSD UNIX, desarrollada por la Universidad de California. A mediados de los ochenta se crea el protocolo TCP/IP con el propósito de tener un lenguaje común a todos los computadores conectados a Internet, con la unión de las redes ARPANET, CSNET y MILNET. El protocolo TCP/IP hace posible entonces, la conexión de dispositivos con marcas y tecnología diferentes por medio del establecimiento de normas y estándares. (p.4).
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Corona (2004)
      .col-lg-10
        figure
          img(src='@/assets/curso/img27.svg', style="width: 1050px; margin: auto;")
    p Iniciando los años ochenta, la Organización Internacional para la Estandarización (ISO, International Standards Organization) desarrolla el modelo de referencia para interconectar sistemas abiertos (OSI, Open Systems Interconnect) para normalizar la manera de comunicarse entre dispositivos de la red. El modelo es importante por el gran paso hacia la interoperabilidad entre dispositivos de red.
    p.mb-5 El modelo OSI enmarca las comunicaciones de red en siete diferentes capas así:
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/img28.svg', style="width: 600px; margin: auto;")
    p El modelo OSI y el TCP/IP sirven como referencia para describir el proceso de comunicación de datos. El TCP/IP es usado para la suite de protocolos TCP/IP, y el OSI se utiliza para la comunicación estándar entre equipos y aplicaciones de diferentes proveedores. Ambos modelos realizan el mismo proceso, pero el modelo TCP/IP utiliza cuatro capas en lugar de siete.
    p.mb-5 En la figura siguiente se muestra una comparación entre las capas de los dos modelos.
    .row.justify-content-center.mb-5
      .col-10
        figure
          img(src='@/assets/curso/img29.svg', style="width: 800px; margin: auto;")
    Separador
    #t_1_8
    .titulo-segundo
      h2 1.8 Tecnología Ethernet
    .row.mx-0.mb-5
      .col-lg-4.d-flex.align-items-center.bg-color1
        figure.my-4.my-lg-0
          img(src='@/assets/curso/img30.svg', style="width: 300px; margin: auto;")
      .col-lg-8.p-5.bg-color2
        p Es una serie de estándares establecidos para la implementación de redes de área local o LAN. Para Forouzan (2002), se caracteriza por ser más estable, confiable y rápida en la transmisión de datos, ya que la interferencia con otros dispositivos de la misma red es mínima. Otra ventaja que presenta esta serie de estándares es la velocidad de transmisión pues puede ser del orden de los 100 Gbit/s. Para poder implementar una red tipo Ethernet es necesario contar con una serie de dispositivos que cumplen diferentes funciones. Algunos de ellos son: enrutadores, switches, cables UTP, bridges, entre otros.
    .row.justify-content-center
      .col-10
        h4 Objetivos
        p.mb-5 Los principales objetivos de Ethernet son consistentes con los que se han convertido en los requerimientos básicos para el desarrollo y uso de redes LAN:
        .row.justify-content-center.mb-5
          .col-6.col-lg-4.p-4
            .row.justify-content-end
              .col-10
                ul.lista-ul
                  li 
                    i.fas.fa-caret-right(style="color: #37A3A5")
                    | Simplicidad.
                  li 
                    i.fas.fa-caret-right(style="color: #37A3A5")
                    | Bajo costo.
                  li 
                    i.fas.fa-caret-right(style="color: #37A3A5")
                    | Compatibilidad.
                  li 
                    i.fas.fa-caret-right(style="color: #37A3A5")
                    | Direccionamiento flexible.
                  li 
                    i.fas.fa-caret-right(style="color: #37A3A5")
                    | Equidad.
          .col-6.col-lg-4.p-4(style="border-left: #707070 solid 1px;")
            .row.justify-content-center
              .col-8
                ul.lista-ul
                  li 
                    i.fas.fa-caret-right(style="color: #37A3A5")
                    | Progreso.
                  li 
                    i.fas.fa-caret-right(style="color: #37A3A5")
                    | Bajo retardo.
                  li 
                    i.fas.fa-caret-right(style="color: #37A3A5")
                    | Estabilidad.
                  li 
                    i.fas.fa-caret-right(style="color: #37A3A5")
                    | Mantenimiento.
                  li 
                    i.fas.fa-caret-right(style="color: #37A3A5")
                    | Arquitectura en capas.
        h4 La trama de Ethernet
        .row
          .col-lg-6
            p Los dispositivos de una red Ethernet intercambian información o datos llamados paquetes Ethernet, cuyo contenido incluye la trama Ethernet o trama de datos, y a la vez se divide en otros conjuntos de datos. Los registros de datos contienen un código binario con información importante, como direcciones, datos de uso, información de control, y sumas de comprobación.
          .col-lg-6
            p Ethernet tiene los siguientes tipos:
            .cajon.color-primario.p-4
              p.mb-0 Ethernet: 10 Base-T, velocidad 10 Mbps
              p.mb-0 Fast Ethernet: 100 Base-T, velocidad 100 Mbps
              p.mb-0 Gigabit Ethernet: 1000 Base-X velocidad 1000 Mbps ó 1 Gbps


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder1: [
      {
        titulo: 'Cable par trenzado',
        texto: '',
        imagen: require('@/assets/curso/img8.png'),
        leyendaImagen: '',
      },
      {
        titulo: 'Cable coaxial',
        texto: '',
        imagen: require('@/assets/curso/img9.png'),
        leyendaImagen: '',
      },
      {
        titulo: 'Cable fibra óptica',
        texto: '',
        imagen: require('@/assets/curso/img10.png'),
        leyendaImagen: '',
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Ondas de radio',
        texto: '',
        imagen: require('@/assets/curso/img11.png'),
        leyendaImagen: '',
      },
      {
        titulo: 'Microondas',
        texto: '',
        imagen: require('@/assets/curso/img12.png'),
        leyendaImagen: '',
      },
      {
        titulo: 'Infrarrojos',
        texto: '',
        imagen: require('@/assets/curso/img13.png'),
        leyendaImagen: '',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
