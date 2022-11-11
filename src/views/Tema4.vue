<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Informe

    .row.justify-content-center.align-items-center.mb-5    
      .col-lg-2.col-xs-10
        figure
          img(src='@/assets/curso/temas/tema4/img1.svg', alt='Texto que describa la imagen')

      .col-lg-10
        p Un informe corresponde a un documento cuya finalidad es mostrar información de tipo científico, técnico o comercial, en el cual el objetivo es comunicar información importante que contribuya con la toma de decisiones. Este documento se utiliza generalmente para presentar los resultados obtenidos o interpretaciones importantes que contribuyan a la organización.

    .row.mt-3
      p Los informes facilitan la interpretación de la información recolectada de manera adecuada y precisa en los procesos de investigación de mercados que emprenda cada empresa, en aras de fortalecer la comercialización de sus productos. Para su desarrollo se pueden tener en cuenta las siguientes características: 
      
    .row.justify-content-center.align-items-center.mb-5    
      .col-lg-12
        figure
          img(src='@/assets/curso/temas/tema4/img2.svg', alt='Texto que describa la imagen')

    .row.mt-3
      p.text-center A continuación, se presentan los principales tipos de informes:

    .bg--img_03.mt-5
      .row.justify-content-center.mb-4
        .col-lg-7
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Expositivo")
              .col-12
                p.mb-0 Su enfoque se basa en dar a conocer los hechos o sucesión de acontecimientos que no incluyen estudios ni interpretaciones particulares, por consiguiente, tampoco tienen conclusiones. Se caracteriza también por incluir antecedentes sobre el estudio, ya que se trata de una perspectiva más objetiva de los hechos.

            .row(titulo="Interpretativo")
              .col-12
                p.mb-0 Este tipo de informe se enfoca en el análisis y la interpretación de los hechos. Generalmente es empleado para evaluar la implementación y obtención de resultados a raíz de metodologías y técnicas innovadoras; del mismo modo, permite evaluar la viabilidad en la formulación de las nuevas estrategias planteadas dentro de una organización. 

            .row(titulo="Demostrativo")
              .col-12
                p.mb-0 El informe demostrativo predomina en el ámbito científico debido a que se enfoca en presentar resultados de proyectos, información estadística y objetiva que permita describir cada una de las etapas desarrolladas; se fundamenta en las conclusiones a partir de los resultados obtenidos, de allí su nombre. El fundamento metodológico de este tipo de informe es la investigación de los hechos. 
         
        .col-lg-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema4/img3.svg", alt="alt").img400.m-auto

    .row
      p La presentación de informes debe responder a una estructura determinada, teniendo como base una norma reconocida, entre las cuales las más recomendadas son las normas APA. En estas es importante el orden, la ortografía, las imágenes empleadas, la redacción, las márgenes, la citación y en general la presentación de cada documento. Puesto que los informes representan los resultados de un estudio, deben ir acompañados de gráficos que faciliten la interpretación de los datos obtenidos. A continuación, se presenta un ejemplo de la estructura de los informes:

    .row.justify-content-center.align-items-center.mb-3    
      .col-lg-8.col-xs-12
        .tarjeta.color-acento-botones--borde.p-5(titulo="Ejemplo - 1")
          .imgCont.m-auto
            .row.justify-content-center.mb-4
              ImagenInfografica.color-acento-botones.mb-5
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/tema4/img4.svg', alt='', style='')

                .tarjeta.bgr-infografia.p-4(x="16%" y="29%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
                  h5.mb-3.text-center.text-white Introducción
                  p.mb-0.text-center.text-white Permite la presentación y los objetivos deseados en el documento.

                .tarjeta.bgr-infografia.p-4(x="75%" y="10%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
                  h5.mb-3.text-center.text-white Desarrollo
                  p.mb-0.text-center.text-white Se muestra la metodología empleada en la solución de los objetivos propuestos.

                .tarjeta.bgr-infografia.p-4(x="68%" y="70%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
                  h5.mb-3.text-center.text-white Conclusión
                  p.mb-0.text-center.text-white Se muestran de manera concreta los resultados obtenidos y la presentación de los datos.


    .row
      p.text-center Es recomendable llevar a cabo la siguiente estructura para la presentación de informes:

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row.justify-content-center.align-items-center.mb-3    
        .col-md-8.mb-4.mb-md-0
          h3 Título
          p El título debe demostrar la idea principal de la investigación de una manera coherente, empleando una buena redacción, en lo posible, evitando las palabras sin propósito que aumentan la extensión y confunden a los lectores. En los títulos no se usan abreviaturas y se recomienda que su extensión no supere las 12 palabras.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema4/img5.svg', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center.mb-3    
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema4/img6.svg', alt='Texto que describa la imagen')
           
        .col-md-8
          h3 Resumen
          p Representa una síntesis breve e integral del contenido de la investigación, también permite que los lectores tengan una idea general de la investigación. En el resumen se deben incluir palabras clave que sean precisas y coherentes con el texto. Se recomienda utilizar de 150 a 250 palabras.

      .row.justify-content-center.align-items-center.mb-3    
        .col-md-8.mb-4.mb-md-0
          h3 Introducción
          p Proporciona un contexto del estudio presentado en el cual se mencionan los fines específicos de este, sin necesidad de incluir los datos o las conclusiones del trabajo. La introducción no lleva un encabezado, y es apropiada cuando explica claramente la importancia del problema, la descripción de los trabajos que se hayan realizado con anticipación y la presentación de los supuestos.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema4/img7.svg', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center.mb-3    
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema4/img8.svg', alt='Texto que describa la imagen')
           
        .col-md-8
          h3 Justificación
          p Demuestra las razones por las cuales se hace necesario realizar la investigación y recalca la importancia de la aplicación de los resultados obtenidos. 

      .row.justify-content-center.align-items-center.mb-3    
        .col-md-8.mb-4.mb-md-0
          h3 Objetivos
          p Los objetivos se definen como los resultados que se quieren lograr en el desarrollo de la investigación, cuyo propósito es dar respuesta a un determinado problema. Por lo general se formula un objetivo general y varios objetivos específicos.

        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema4/img9.svg', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center.mb-3    
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema4/img10.svg', alt='Texto que describa la imagen')
           
        .col-md-8
          h3 Resultados
          p Aquí se resumen los datos obtenidos que sean relevantes para la discusión posterior y su respectivo análisis. Se debe realizar una presentación completa, veraz, precisa y clara usando tablas, cuadros o gráficos que faciliten la interpretación.

      .row.justify-content-center.align-items-center.mb-3    
        .col-md-8.mb-4.mb-md-0
          h3 Conclusiones
          p En las conclusiones se debe presentar la información de manera puntual y clara, dando respuesta a los logros obtenidos en el desarrollo de cada objetivo específico. Las conclusiones obtenidas se deben respaldar con instrumentos y evidencias, como lo son las tasas, índices o porcentajes.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema4/img5.svg', alt='Texto que describa la imagen')

      

</template>

<script>
export default {
  name: 'Tema4',
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
