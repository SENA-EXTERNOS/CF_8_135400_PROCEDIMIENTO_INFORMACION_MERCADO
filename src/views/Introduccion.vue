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
          p Apreciado aprendiz, bienvenido a este componente formativo, donde usted podrá asimilar y apropiar conceptos y acciones relacionadas con los resultados de una investigación de mercados, los cuales requieren de la presentación de informes que vincularán determinadas estructuras y normas para su desarrollo.

          p Las temáticas que se desarrollan en este componente formativo están encaminadas en brindar información para coordinadores, supervisores, técnicos, mandos medios e incluso miembros de juntas directivas de las empresas, para que puedan generar informes sobre los resultados obtenidos de una investigación de mercado, teniendo en cuenta aspectos como: normatividad, estructuras, leyes que regulen el uso de datos personales, confidencialidad en la información, etc.
    
    .row.justify-content-center.align-items-center.mb-5.background-img            
      .col-lg-7
        p Amplie sus conocimientos estudiando todos los temas del componente; conviértase en todo un experto de la presentación de informes, recolección de información en el marco de la investigación de mercados; de este modo fortalezca sus habilidades y capacidades para impulsar la comercialización de sus productos o los productos de su empresa..

        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

      .col-lg-2.my-3
        figure
          img(src='@/assets/curso/temas/introduccion/img2.svg').imgdimensioncaj.imagen-decora
   
    .row.mt-4
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/AaQCuz7lOLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
