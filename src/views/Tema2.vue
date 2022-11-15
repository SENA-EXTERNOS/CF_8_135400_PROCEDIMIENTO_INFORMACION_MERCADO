<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tablas de frecuencia

    .row
      p Una tabla de frecuencias, o también conocida como distribución de frecuencias, es una representación gráfica de la forma como se distribuyen los datos de acuerdo con las frecuencias calculadas.

      p.text-center A continuación, los tipos de frecuencias:

    .bg--img_03.mt-5
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img1.svg", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Frecuencias absolutas")
              .col-12
                p.mb-0 Corresponde al número de veces que está un número en un conjunto de datos, la cantidad de veces que se repite.

            .row(titulo="Frecuencias absolutas acumuladas")
              .col-12
                p.mb-0 Hace referencia a la suma de las frecuencias absolutas.

            .row(titulo="Frecuencia relativa")
              .col-12
                p.mb-0 Se refiere al número de veces que se repite un número dentro de un conjunto de datos de acuerdo a un total, y se expresa en porcentajes (%).

            .row(titulo="Frecuencia relativa acumulada")
              .col-12
                p.mb-0 Corresponde a la suma de las frecuencias relativas.

    .row
      p.text-center A continuación, se explicará paso a paso cómo construir una tabla de frecuencias: 

    .row.justify-content-between.align-items-center.mt-5
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Paso 1")
            .col-md-4.mb-4.mb-md-0
              p.text-small Se deben reunir los datos.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/tabla1.svg', alt='Texto que describa la imagen')

          .row(numero="2" titulo="Paso 2")
            .col-md-4.mb-4.mb-md-0
              p.text-small Se genera una nueva tabla, la cual incluye en la primera columna el listado de las notas del 1 al 10 (o conforme a la notación de cada lugar) en orden de menor a mayor. En la segunda columna se debe digitar la cantidad de veces que se repite cada nota y asignar el nombre de los datos con una frecuencia absoluta.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/tabla2.svg', alt='Texto que describa la imagen')

          .row(numero="3" titulo="Paso 3")
            .col-md-4.mb-4.mb-md-0
              p.text-small La tabla realizada corresponde a una tabla de frecuencias sencillas, además, se puede agregar una columna más que permita calcular la frecuencia absoluta acumulada, en la cual los valores se obtendrán sumando los datos en diagonal. 

              p.text-small #[u Ejemplo:] el primer valor será igual al primer dato de la #[b frecuencia absoluta], en este caso es cero. Para obtener el siguiente dato se debe sumar el cero más el dato que sigue en la tabla de frecuencia absoluta, que en este caso también es cero, y así sucesivamente.

              p.text-small Una forma de revisar y verificar que la operación es correcta es asegurarse de que el número obtenido como número final corresponda a la cantidad de datos que se tienen; en este caso, la suma debe ser igual a 10.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/tabla3.svg', alt='Texto que describa la imagen')


          .row(numero="4" titulo="Paso 4")
            .col-md-4.mb-4.mb-md-0
              p.text-small Determinar la frecuencia relativa y la frecuencia relativa absoluta.

              p.text-small Se debe incluir una nueva columna con el nombre de frecuencia relativa. Para completarla es necesario tomar cada dato de la #[b frecuencia absoluta] y dividirlo entre #[b 10], que corresponde a la cantidad de datos totales de la columna. Para verificar se debe revisar que el resultado que se obtiene es igual a 1 o un valor aproximado.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/tabla4.svg', alt='Texto que describa la imagen')


          .row(numero="5" titulo="Paso 5")
            .col-md-4.mb-4.mb-md-0
              p.text-small Para la #[b frecuencia relativa acumulada] se debe sumar los datos en diagonal, como se realizó en la #[b frecuencia absoluta acumulada]. De esta manera, el primer valor siempre debería ser igual al primer dato de la frecuencia relativa, en este caso específico, debe ser igual a cero. Luego, para obtener el siguiente dato, se suma el siguiente valor a cero y así sucesivamente.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/tabla5.svg', alt='Texto que describa la imagen')       

      

</template>

<script>
export default {
  name: 'Tema2',
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
