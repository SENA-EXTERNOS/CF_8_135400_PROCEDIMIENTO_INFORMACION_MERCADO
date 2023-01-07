export default {
  global: {
    componenteFormativo: 'Presentación de informes de procesamiento de datos',
    descripcionCurso:
      'El presente componente formativo está enfocado en determinar y establecer todos los elementos que conforman la presentación de resultados, teniendo en cuenta la estructura del informe, las normas técnicas, las gráficas que serán empleadas y la confidencialidad en la información, con el propósito de presentar esta información de manera clara y concisa. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },

      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        titulo: 'Informes de procesamiento de datos e información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tablas de frecuencia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Uso de gráficos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Presentación del informe',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Normas técnicas para presentación de informes',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Confidencialidad de la información',
            hash: 't_1_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      tema: 'Informes de procesamiento de datos e información',
      referencia:
        'Instituto Nacional de Estadística e Informática. (2009). <em>Guía para la presentación de gráficos estadísticos</em>. Perú. INEI',
      tipo: 'Artículo',
      link:
        'https://www.inei.gob.pe/media/MenuRecursivo/metodologias/libro.pdf',
    },
    {
      tema: 'Uso de gráficos',
      referencia:
        'SAGAPEIO. (s.f.). <em>Presentación de datos estadísticos y gráficos</em>. V Jornada de formación para elaborar proyectos de estadística.',
      tipo: 'Monografía',
      link:
        'https://www.sgapeio.es/descargas/xornadaSecundaria18/obradoiro.pdf',
    },
    {
      tema: 'Confidencialidad de la información ',
      referencia:
        'ISO 27001. (2013). <em>Guía de implementación para la seguridad de la información.</em>',
      tipo: 'Norma',
      link:
        'https://www.nqa.com/medialibraries/NQA/NQA-Media-Library/PDFs/Spanish%20QRFs%20and%20PDFs/NQA-ISO-27001-Guia-de-implantacion.pdf',
    },
    {
      tema: 'Confidencialidad de la información',
      referencia:
        'Cruz García, M. A. (2019). <em>Boletín Científico de las Ciencias Económico Administrativas del ICEA.</em>',
      tipo: 'Artículo',
      link:
        'https://repository.uaeh.edu.mx/revistas/index.php/icea/article/view/4864/6748',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        'descomposición de elementos que conforman la totalidad de datos, para clasificar y reclasificar el material recogido desde diferentes puntos de vista hasta optar por el más preciso y representativo.',
    },
    {
      termino: 'Concepto',
      significado:
        'símbolo que representa la semejanza de fenómenos por demás diversos.',
    },
    {
      termino: 'Conclusiones',
      significado:
        'representan la síntesis de los resultados obtenidos a lo largo del proceso de investigación.',
    },
    {
      termino: 'Confiabilidad',
      significado:
        'indica la estabilidad, consistencia y exactitud de los resultados.',
    },
    {
      termino: 'Cuadro o tabla',
      significado:
        'ordenamiento de datos numéricos en renglones y columnas que especifican la naturaleza de ciertos datos.',
    },
    {
      termino: 'Dato primario',
      significado:
        'información reunida por el investigador directamente de la fuente.',
    },
    {
      termino: 'Dato secundario',
      significado:
        'información reunida por una persona diferente al investigador.',
    },
    {
      termino: 'Descripción',
      significado:
        'información reunida por una persona diferente al investigador.',
    },
    {
      termino: 'Entrevista',
      significado:
        'se efectúa con base en un cuestionario, en el cual las preguntas deben ser resueltas durante el desarrollo.',
    },
    {
      termino: 'Estudio de campo',
      significado:
        'son investigaciones que se realizan en el medio ambiente donde se desarrolla el problema que se va a investigar.',
    },
    {
      termino: 'Hipótesis',
      significado:
        ' es la respuesta tentativa a un problema; una proposición que se pone a prueba para determinar su validez.',
    },
    {
      termino: 'Muestreo',
      significado:
        'es el conjunto de operaciones que se realizan para estudiar la distribución de determinadas características en la totalidad de una población denominada muestra.',
    },
    {
      termino: 'Observación de campo',
      significado: 'se realiza en el lugar donde se da el fenómeno observado.',
    },
    {
      termino: 'Tabulación',
      significado:
        'consiste en determinar grupos, subgrupos, clases o categorías en los que puedan ser clasificadas las respuestas del cuestionario aplicado en la investigación, resumiendo los datos en tablas estadísticas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Baronio, A. (2018). <em>Saber y Saber Hacer con Estadística</em>. UniRio.',
      link: '',
    },
    {
      referencia:
        'Escuela de Administración de Negocios. (2008). Metodologías de la Investigación en las Ciencias Sociales. En C. L. Ibáñez, <i>Fases, fuentes y selección de técnicas</i> (pág. 9). <i>Revista EAN</i>.',
      link: '',
    },
    {
      referencia:
        'Torres, M. (s.f.). <em>Métodos de recolección de datos para una investigación</em>. Boletín electrónico No. 03. Facultad de Ingeniería, Universidad Rafael Landívar.',
      link: '',
    },
    {
      referencia:
        'Hernández Sampieri, R. (2004). <em>Metodología de la Investigación</em>. Mc Graw Hill.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, I. V. (2018). <em>Metodología para la elaboración de guías de fuentes de información</em>. Universidad Complutense de Madrid.',
      link: '',
    },
    {
      referencia:
        'Universidad Autónoma del estado de Hidalgo. (2018). <em>Fuentes de información</em>.',
      link:
        'https://repository.uaeh.edu.mx/bitstream/bitstream/handle/123456789/16700/LECT132.pdf',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
