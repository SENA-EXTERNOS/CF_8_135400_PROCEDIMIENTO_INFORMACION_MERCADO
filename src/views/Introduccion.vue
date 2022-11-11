<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5       
      .col-lg-3.col-xs-10
          img.img-a.img-t(src='@/assets/curso/temas/introduccion/img1.svg')                        
      .col-lg-9.col-xs-12
          p Estimado aprendiz, este espacio estará enfocado en el proceso formativo de acuerdo con las competencias de aprendizaje, orientada en presentar los resultados del procesamiento de datos según las normas de archivo y control de documentación, las cuales implican presentar resultados en un informe de manera adecuada. 

          p Los resultados de una investigación de mercados requieren de la presentación de informes, los cuales deben contener ciertas estructuras y normas para su desarrollo. Las temáticas que se desarrollan en este componente formativo están encaminadas a brindar información para coordinadores, supervisores, técnicos, mandos medios e incluso miembros de juntas directivas de las empresas, para que puedan generar informes sobre los resultados obtenidos de una investigación de mercado, teniendo en cuenta aspectos como la normatividad, las estructuras adecuadas, las leyes que regulen el uso de datos personales, la confidencialidad de la información, etc.
    
    .row.justify-content-center.align-items-center.mb-5.background-img            
      .col-lg-7
        p Lo invitamos a que amplíe sus conocimientos estudiando todas las temáticas de este recurso, el cual se convertirá en un insumo fundamental para que presente la información recolectada de manera adecuada y precisa en los procesos de investigación de mercados, para que emprenda una empresa en aras de fortalecer la comercialización de sus productos, con el uso de las buenas prácticas empresariales.

        p A continuación, encontrará un video introductorio donde conocerá, de manera general, todos los temas que se desarrollarán a lo largo del componente formativo.

      .col-lg-2
        figure
          img(src='@/assets/curso/temas/introduccion/img2.svg').imgdimensioncaj.imagen-decora

   
    .row.mt-4
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
