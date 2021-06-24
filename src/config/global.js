export default {
  global: {
    componenteFormativo: 'Implementación de infraestructura tecnológica',
    descripcionCurso:
      'El aprendiz se apropia de los elementos y conceptos de entrada requeridos para la elaboración de la infraestructura tecnológica como componente fundamental en el funcionamiento de cualquier organización.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Redes de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Historia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Conceptos básicos y componentes de una red',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Medios de transmisión',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Protocolos de comunicación',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Clasificación de redes',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Topologías de redes',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Modelo TCP/IP y OSI',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Tecnología Ethernet',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tecnologías y conceptos básicos de Networking',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tecnología',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Conceptos básicos de Networking',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diseño e implementación de la red LAN',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Análisis de requerimientos de redes',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Cableado estructurado',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Configuración y pruebas de la red',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cisco Networking Academy. (2016) Introducción a las redes IntroNet6. Curso IntroNet6_es/index.html',
    },
    {
      referencia: 'Corona, A. E. (2004). Protocolos tcp/ip de internet.',
    },
    {
      referencia:
        'Forouzan, B. A. (2002). Transmisión de datos y redes de comunicaciones.',
    },
    {
      referencia: 'La red y todo sobre ella. Historia',
      link: 'https://basicamente18.wixsite.com/todored/historia',
    },
    {
      referencia:
        'Moro Vallina, M. (2013). Infraestructuras de redes de datos y sistemas de telefonía. Editorial Paraninfo.',
    },
    {
      referencia:
        'Pérez, E. H. (2003). Tecnologías y redes de transmisión de datos. Editorial Limusa.',
    },
    {
      referencia:
        'Stallings, W., Stallings, W., Tanenbaum, A., Fall, K. R., y Stevens, W. R. (2000). Comunicaciones y Redes de Computadores, 7ª Edición. Pearson Prentice-Hall.',
    },
  ],
  glosario: [
    {
      termino: 'Adaptador de red',
      significado: 'dispositivo que añade funcionalidad de red a su equipo.',
    },
    {
      termino: 'Ancho de banda',
      significado:
        'capacidad de transmisión de un dispositivo o red determinado.',
    },
    {
      termino: 'Bit (dígito binario)',
      significado: 'la unidad más pequeña de información de una máquina.',
    },
    {
      termino: 'Conmutador',
      significado:
        'dispositivo que es el punto central de conexión de equipos y otros dispositivos de una red, de forma que los datos puedan transmitirse a velocidad de transmisión completa.',
    },
    {
      termino: 'DHCP (Protocolo de configuración dinámica de host)',
      significado:
        'protocolo que permite a un dispositivo de una red, conocido como servidor DHCP, asignar direcciones IP temporales a otros dispositivos de red y normalmente equipos.',
    },
    {
      termino: 'Dirección IP',
      significado:
        'dirección que se utiliza para identificar un equipo o dispositivo en una red.',
    },
    {
      termino: 'Enrutador',
      significado:
        'dispositivo de red que conecta redes múltiples, tales como una red local e Internet.',
    },
    {
      termino: 'Red',
      significado:
        'serie de equipos o dispositivos conectados con el fin de compartir datos, almacenamiento y la transmisión entre usuarios.',
    },
    {
      termino: 'TCP (Transport Control Protocol)',
      significado:
        'un protocolo de red para la transmisión de datos que requiere la confirmación del destinatario de los datos enviados.',
    },
    {
      termino: 'Topología',
      significado: 'distribución física de una red.',
    },
  ],
  complementario: [
    {
      texto:
        'Joskowicz, J. (2013). Cableado Estructurado. Universidad de la República Montevideo, URUGUAY.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo1.pdf',
    },
    {
      texto:
        'Pérez, E. H. (2003). Tecnologías y redes de transmisión de datos. Editorial Limusa.',
      tipo: 'E-libro',
      link:
        'https://books.google.es/books?id=RmYvfnMKrsgC&printsec=frontcover#v=onepage&q&f=false',
    },
    {
      texto:
        'Redes Informáticas - Nociones fundamentales (7ª edición) - (Protocolos, Arquitecturas, Redes inalámbricas, Virtualización, Seguridad, IPv6...). Editorial ENI.',
      tipo: 'E-libro',
      link:
        'https://www.ediciones-eni.com/open/mediabook.aspx?idR=9a76703d59b0fd180004f0cd38f2c537',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Tovar Artunduaga',
        cargo: 'Experto temático',
        centro: 'Centro de Servicios y Gestión Empresarial Regional Antioquia',
      },
      {
        nombre: 'Jorge Eliécer Loaiza Muñoz',
        cargo: 'Experto temático',
        centro:
          'Centro de Diseño e Innovación Tecnológica Industrial Regional Antioquia',
      },
      {
        nombre: 'Claudia López Arboleda',
        cargo: 'Experta temática',
        centro:
          'Centro de Teleinformática y Producción Industrial Regional Cauca',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Durán López',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: [
          'Adriana Marcela Suárez Eljure',
          'Gilberto Junior Rodríguez Rodríguez',
          'Jessica Moreno Realpe',
          'Lady Adriana Ariza Luque',
          'Laura Gisselle Murcia Pardo',
          'María Carolina Tamayo López',
          'Víctor Raúl Cárdenas Cáceres',
          'Wilson Andrés Arenales Cáceres',
          'Zuleidy Maria Ruiz Torres',
        ],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
