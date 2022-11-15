<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Confidencialidad de la información

    .row.justify-content-center.align-items-center.mb-5      

      .col-lg-4.col-xs-10
          img.img-a.img-t(src='@/assets/curso/temas/tema6/img1.svg')  

      .col-lg-8.col-xs-12
          p En cuanto al manejo de la información, actualmente existe un derecho llamado #[i habeas data], regulado por la Ley 1266 del 2008, que declara que toda persona puede conocer, actualizar y rectificar la información que haya sido obtenida sobre ella en archivos o instituciones de carácter público o privado. El habeas data fue decretado por la Corte Constitucional de Colombia, la cual lo define como:
         
          .bloque-texto-b.color-secundario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0 Un derecho que otorga la facultad al titular de datos personales de exigir de las administradoras de esos datos el acceso, inclusión, exclusión, corrección, adición, actualización y certificación de los datos, así como la limitación en las posibilidades de su divulgación, publicación o cesión, de conformidad con los principios que regulan el proceso de administración de datos personales. Asimismo, ha señalado que este derecho tiene una naturaleza autónoma que lo diferencia de otras garantías con las que está en permanente relación, como los derechos a la intimidad y a la información. 
            
              p.etiqueta-p (Corte Constitucional, 2011, párr. 25).
              i.fas.fa-quote-right


    
    .row.mt-1
      p.text-center De acuerdo con lo anterior, la administración de los datos debe ser regida por los siguientes principios:
    
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-5.background-img2

          .col-lg-7

             ul.lista-ul.mb-0.lista-ul--color
                li 
                  i.fas.fa-angle-right.txt--orange
                  | Veracidad o transparencia en la obtención de datos.
                li 
                  i.fas.fa-angle-right.txt--orange
                  | Que tenga una finalidad.
                li 
                  i.fas.fa-angle-right.txt--orange
                  | Que su circulación sea controlada y restringida. 
                li 
                  i.fas.fa-angle-right.txt--orange
                  | Que la información tenga temporalidad. 
                li 
                  i.fas.fa-angle-right.txt--orange
                  | Que exista una interpretación integral de los derechos constitucionales. 
                li 
                  i.fas.fa-angle-right.txt--orange
                  | Que los datos sean manejados con absoluta seguridad y confidencialidad.

          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema6/img2.svg').imgdimensioncaj.imagen-decora
               
   
    .row.justify-content-center.align-items-center.mb-5      

      .col-lg-4.col-xs-10
          img.img-a.img-t(src='@/assets/curso/temas/tema6/img3.svg')  

      .col-lg-8.col-xs-12
          p La Ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales, tiene como objeto:

          .bloque-texto-b.color-secundario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0 Desarrollar el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bases de datos o archivos, y los demás derechos, libertades y garantías constitucionales a que se refiere el artículo 15 de la Constitución Política; así como el derecho a la información consagrado en el artículo 20 de la misma.

              p.etiqueta-p (Función Pública, 2012, párr. 1).
              i.fas.fa-quote-right

    .row
      p También tenemos la ISO 27001 versión 2013, la cual afirma que la confidencialidad garantiza que la información recogida en un proceso de recolección de datos será protegida, no siendo divulgada sin la autorización de las personas que dieron dicha información. Para ello existen reglas con las cuales esta norma establece la confidencialidad como una obligación, evitando con ello el riesgo de divulgación de información sensible, que en algunos casos incluye información sobre empleados, clientes, proveedores, datos financieros y datos operativos en general, pues, según la ISO 27001 versión 2013, este tipo de riesgos está dentro de la clasificación CID (Confidencialidad, Integridad y Disponibilidad). Esta norma establece también una guía basada en el ciclo PHVA, la cual busca proporcionar un enfoque en la mejora continua.
      

</template>

<script>
export default {
  name: 'Tema6',
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
