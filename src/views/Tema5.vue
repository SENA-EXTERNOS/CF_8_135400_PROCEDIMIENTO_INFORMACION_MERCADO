<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Normas técnicas

    .row.justify-content-center.align-items-center.mb-5      

      .col-lg-3.col-xs-10
          img.img-a.img-t(src='@/assets/curso/temas/tema5/img1.svg')  

      .col-lg-9.col-xs-12
          p Las normas APA representan una guía completa para la presentación de toda clase de trabajos académicos y empresariales. En adelante se presentan los principales elementos que se deben tener en cuenta:

          p #[b Tipo y tamaño de fuente:] en la séptima versión se acepta una variedad de fuentes, entre ellas: Calibri 11 puntos, Arial 11 puntos y Times New Roman 12 puntos. Se recomienda usar la misma fuente en todo el documento, incluyendo la portada. 

          p #[b Márgenes:] se sugiere aplicar una pulgada (2,5 cm) en todos los lados de la página, en hojas tamaño carta.

          p #[b Portada:] usar negrita en el título.

          p #[b Numeración:] las páginas deben estar numeradas en la esquina superior derecha, iniciando en la portada y contraportada (aquí no deben visualizarse).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .row.justify-content-center.align-items-center.mb-5.background-img
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema5/img2.svg').imgdimensioncaj.imagen-decora

          .col-lg-7
             p Las páginas del documento pueden tener el siguiente orden:

             ul.lista-ul.mb-0.lista-ul--color
                li 
                  i.fas.fa-angle-right.txt--orange
                  | Portada
                li 
                  i.fas.fa-angle-right.txt--orange
                  | Resumen
                li 
                  i.fas.fa-angle-right.txt--orange
                  | Texto
                li 
                  i.fas.fa-angle-right.txt--orange
                  | Referencias
                li 
                  i.fas.fa-angle-right.txt--orange
                  | Notas
                li 
                  i.fas.fa-angle-right.txt--orange
                  | Tablas
                li 
                  i.fas.fa-angle-right.txt--orange
                  | Figuras
                li 
                  i.fas.fa-angle-right.txt--orange
                  | Apéndice

    .row
      p.text-center La portada estructurada bajo las Normas Apa puede tener la siguiente forma:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.col-xs-12
        figure
          img(src='@/assets/curso/temas/tema5/img3.svg')

    .row
      p Otro aspecto importante para tener en cuenta en la elaboración de informes correspondiente a las normas APA son los elementos de una tabla, los cuales se describen a continuación:


    
    .row.mt-3
      .col-lg-5.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema5/img5.svg", alt="alt").m-auto

      .col-lg-7
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta clr--gris")
          .row(titulo="Título")
            .col-12
              p El #[b título] de la tabla debe incluir una descripción muy clara y precisa de los datos presentados. Del mismo modo, debe dar respuesta a tres preguntas: ¿qué?, ¿dónde? y ¿cuándo?, de manera breve y concisa, evitando, de ser posible, el uso de verbos. 

          .row(titulo="Encabezados de las columnas")
            .col-12
              p Estos deben mostrar qué datos están presentes en cada columna y también proporcionar respuestas explicativas. En caso de que sea necesario pueden incluir información cuantitativa, como unidad de medida, período de tiempo, área geográfica, entre otras. 

          .row(titulo="Cabeceras de las filas")
            .col-12
              p Las cabeceras de las filas deben establecer los datos en cada una de las filas de la tabla.
      

          .row(titulo="Notas a pie de tabla")
            .col-12
              p Se utilizan para incluir información adicional, en caso de ser necesario, para facilitar la comprensión y utilizar adecuadamente los datos.
      
          .row(titulo="Fuente de los datos")
            .col-12
              p Son los fundamentos teóricos de los cuales se extrajo la información para elaborar los datos y el método empleado en la recogida de insumos; por ejemplo, las estadísticas de población o las encuestas aplicadas a una población activa, las cuales deben indicarse en la parte inferior de la tabla. 

</template>

<script>
export default {
  name: 'Tema5',
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
