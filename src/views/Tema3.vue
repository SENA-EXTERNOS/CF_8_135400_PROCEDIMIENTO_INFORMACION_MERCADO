<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gráficos

    .row.justify-content-center.align-items-center.mb-5                             
      .col-lg-9.col-xs-12
          p Los estudios de mercado que emplean el procesamiento de datos como herramienta para obtener información sobre una variable determinada o información útil para la toma de decisiones, deben utilizar en la presentación de sus informes los datos acompañados de gráficos que faciliten la interpretación rápida y útil de la información. Existen diversos gráficos que pueden ser empleados de acuerdo con lo que se quiere mostrar y la información con la que se cuenta, entre estos tenemos gráficos de barras, gráficos de líneas y gráficos circulares. 

          p Además, los gráficos estadísticos permiten representar series de datos estadísticos de distinta clase, y sirven como fuente para demostrar visualmente la forma cómo se comportan una o más variables comparadas con otras. Por ejemplo, la forma cómo ha evolucionado el precio de un producto comercial en el transcurso de un año o el número de compradores en una tienda de Internet relacionados con los periodos de compra.

      .col-lg-3.col-xs-10
          img.img-a.img-t(src='@/assets/curso/temas/tema3/img1.svg')  


    .row.justify-content-center.align-items-center.mb-5.background-img
      .col-lg-2.col-xs-8
        figure
          img(src='@/assets/curso/temas/tema3/img2.svg').imagen-decora

      .col-lg-7.col-xs-12
        p Los gráficos estadísticos son potentes herramientas para la visualización de datos que permiten representar de manera accesible información compleja, consiguen presentar la información al usuario o lector de manera clara y precisa, facilitando la comparación y la comprensión de la evolución de distintas variables.


    .row.mt-5
      p.text-center A continuación, se explicarán algunos tipos de gráficos estadísticos:

    .row.mt-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-contenido.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="Gráfico de barras")
            .row.justify-content-center.align-items-center.mb-5  
              .col-8
                h4 Gráfico de barras
                p Los gráficos de barras se utilizan para representar #[b la evolución o comportamiento de una variable a través del tiempo]. Están compuestos por un sistema de coordenadas de ejes en el plano cartesiano ubicados en el eje de las X y el eje de las Y. Se reflejan barras rectangulares de manera horizontal o vertical, las cuales representan gráficamente la variable elegida. En este tipo de gráfico es común representar, por ejemplo, los egresos e ingresos de una empresa por periodos de actividad o la evolución transcurrida del PIB de un país de manera anual, semestral, trimestral, bimestral, etc. En términos generales, los gráficos de barras permiten analizar distintas variables, y de esta manera, observar su comportamiento en el transcurso del tiempo. En uno de los ejes se debe establecer el tiempo y en el otro se reflejan las barras, estableciendo el valor que corresponde a cada variable.

                p La orientación de los gráficos de barras puede ser:

                ul.lista-ul.mb-4.lista-ul--color
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Vertical: las diferentes categorías se ubican en el eje horizontal y las barras de frecuencias se muestran de manera vertical.

                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Horizontal: las categorías se sitúan en el eje vertical y las barras se generan horizontalmente. Su uso es común cuando existen varias categorías o sus nombres son demasiado extensos.

              .col-lg-4
                figure
                  img(src='@/assets/curso/temas/tema3/img3.svg')

          .tarjeta.clr-paleYellow.p-4(titulo="Gráfico de tortas o diagrama de sectores")
            .row.justify-content-center.align-items-center.mb-5  
              .col-8
                h4 Gráfico de tortas o diagrama de sectores
                p Este diagrama permite visualizar las partes o sectores de un todo reflejadas a través de una circunferencia dividida en sectores o porciones, como por ejemplo, el porcentaje de estudiantes de una clase en la cual se realiza una determinada actividad escolar como resultado obtenido del 100 % de los estudiantes, un 25 % la realiza completa y la comprende totalmente, un 20 % no la comprende, por lo tanto, no la desarrolla, mientras que el 55 % la comprende, pero no la termina.

              .col-lg-4
                figure
                  img(src='@/assets/curso/temas/tema3/img4.svg')

          .tarjeta.clr-paleYellow.p-4(titulo="Gráfico de líneas o diagrama de frecuencias")
            .row.justify-content-center.align-items-center.mb-5  
              .col-8
                h4 Gráfico de líneas o diagrama de frecuencias
                p Esta clase de gráfico es muy similar al gráfico de barras, en la cual los datos se organizan de acuerdo a los ejes ubicados en el plano cartesiano. Permite observar la evolución de una variable en el tiempo, por ejemplo, la variación en la temperatura mínima y máxima durante un periodo definido. En uno de los ejes se representa la temperatura obtenida y en el otro eje se representan los días del periodo estudiado. A continuación, se deberán marcar los valores obtenidos de la temperatura mínima. Para luego unirlos con una línea que muestra la oscilación; se debe representar igualmente la temperatura máxima, preferiblemente con otro color, para demostrar la diferencia: de esta manera se puede observar cómo han oscilado ambas variables en un periodo de siete días.

              .col-lg-4
                figure
                  img(src='@/assets/curso/temas/tema3/img5.svg')

          .tarjeta.clr-paleYellow.p-4(titulo="Gráfico de dispersión")
            .row.justify-content-center.align-items-center.mb-5  
              .col-8
                h4 Gráfico de barras
                p En este gráfico también se emplean los ejes cartesianos que permiten mostrar todos los datos de una variable dependiente y de la variable independiente, o en algunos casos de dos variables para comprobar si existe relación. El resultado refleja una serie de puntos que muestra una dispersión o una concentración de los valores, el cual es útil para determinar si hay o no relación entre las variables analizadas. Esta representación gráfica permite realizar combinaciones diferentes, por ejemplo, la representación de una variable en barras y otra en líneas, en caso de que el tipo de datos a representar así lo permita.

              .col-lg-4
                figure
                  img(src='@/assets/curso/temas/tema3/img6.svg')  

    .row
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      

</template>

<script>
export default {
  name: 'Tema3',
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
