<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Exposición de datos
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La exposición de datos hace referencia a la disponibilidad de una determinada estructura de datos con finalidades académicas, empresariales, usos generales, etc. Es posible que los datos solo estén disponibles para un destinatario único, sin embargo, estos datos están disponibles a través de un servicio de red. Esto implica que toda persona que acceda a las redes sociales tendría acceso a la información de tipo personal, como lo son los datos de domicilio, el número telefónico, los parentescos, entre otros.

    .row.justify-content-center.align-items-center.mb-5.mt-5                             
      .col-lg-11
          p Estos datos pueden incluir notas de laboratorio, registros de campo, datos de información primaria obtenida a través de cuestionarios, grabaciones de audio y videos, desarrollo de modelos, toma de fotografías, objetos digitales, películas, interpretación de algoritmos, #[i scripts], desarrollo de bases de datos, generación y esquema de metadatos y configuraciones de #[i software]. Debido a su naturaleza, algunos antecedentes no se consideran datos finales para una investigación, tal es el caso de, por ejemplo, las notas tomadas en el desarrollo de un laboratorio, datos parcializados, estudios preliminares, borradores de investigaciones, planificación e investigaciones en el futuro, entre otros.
      .col-lg-1
          img.img-a.img-t(src='@/assets/curso/temas/tema1/img2.svg') 

    .row.mt-3
      p.text-center A continuación, se describirán los tipos de datos y la gestión de datos utilizados en una investigación: 

    TabsB.color-acento-contenido.mt-3
      .py-4.py-md-5(titulo="Tipos de datos" :icono="require('@/assets/curso/temas/tema1/img4.svg')")
        .row
          .col-md-8.mb-4.mb-md-0

            p Los datos pueden clasificarse de la siguiente manera:
            
            ul.lista-ul.mb-4.lista-ul--color
              li 
                i.fas.fa-angle-right.txt--orange
                | Los datos obtenidos pueden ser cuantificables o descriptivos.  

              li 
                i.fas.fa-angle-right.txt--orange
                | Según la naturaleza se clasifican en cualitativos o cuantitativos. 

              li 
                i.fas.fa-angle-right.txt--orange
                | Según el nivel de procesamiento y análisis se pueden identificar en estado bruto, es decir, datos primarios en procesamiento o resultados de análisis. 

              li 
                i.fas.fa-angle-right.txt--orange
                p.mb-0 De acuerdo con la fuente de donde provienen podrían ser experimentales, obtenidos a través de un laboratorio de observación (como sucede, por ejemplo, con las encuestas) y de simulación, obtenidos a través de un programa de #[i software]. 

              li 
                i.fas.fa-angle-right.txt--orange
                | Según el formato:  en texto (Word, PDF, entre otros), numéricos (Excel, Gnumeric, entre otros), multimedia (JPEG, MPEG, WAV, entre otros), de forma estructurada (XML, MySQL, entre otros), con código de #[isoftware] (Java, C, C++, entre otros), específicos de algún #[isoftware], como 3D CAD, modelo estadístico o específico de una disciplina o instrumento.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img5.svg', alt='Texto que describa la imagen')
              
      .py-4.py-md-5(titulo="Gestión de datos utilizados en una investigación" :icono="require('@/assets/curso/temas/tema1/img3.svg')")
        .row
          .col-md-8.mb-4.mb-md-0

            p La gestión de datos se puede presentar en todas las etapas de una investigación, y puede abarcar la recopilación, planeación, organización, información documentada, almacenamiento y preservación de la información empleada o generada en el transcurso de un proyecto.

            p Una gestión de datos oportuna permite a los investigadores realizar una mejor investigación porque facilita:
            
            ul.lista-ul.mb-4.lista-ul--color
              li 
                i.fas.fa-angle-right.txt--orange
                | Llevar a cabo los requisitos con las entidades financiadoras. 

              li 
                i.fas.fa-angle-right.txt--orange
                | Claridad en la validación de los resultados obtenidos en la investigación. 

              li 
                i.fas.fa-angle-right.txt--orange
                | Mejorar la confidencialidad de datos y reducir el riesgo en la pérdida, divulgación o manipulación de estos. 

              li 
                i.fas.fa-angle-right.txt--orange
                p.mb-0 Asegurar que la información sea localizable, accesible y reutilizable.

              li 
                i.fas.fa-angle-right.txt--orange
                | Optimizar el tiempo evitando que la información se duplique, haciendo un uso correcto de los recursos disponibles.

              li 
                i.fas.fa-angle-right.txt--orange
                | Mejora el perfil del investigador asignado en el impacto y la visibilidad de los proyectos.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img6.svg', alt='Texto que describa la imagen')
              


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
