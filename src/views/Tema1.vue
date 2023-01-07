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
        p.mb-0 La exposición de datos hace referencia a la disponibilidad de una determinada estructura de datos, con finalidades académicas, empresariales, usos generales etc. Es posible que los datos solo estén disponibles para un destinatario único, sin embargo, estos datos están disponibles a través de un servicio de red. <br><br> Esto implica que toda persona que acceda a las redes sociales tendría acceso a la información de tipo personal. Como los datos sobre su domicilio, teléfono, parentescos, entre otros.

    .row.justify-content-center.align-items-center.mb-5.mt-5                             
      .col-lg-11
          p Los datos pueden incluir: notas de laboratorio, registros de campo, datos de información primaria, obtenida a través de cuestionarios, grabaciones de audio y videos, desarrollo de modelos, toma de fotografías, objetos digitales, películas, interpretación de algoritmos, scripts, desarrollo de bases de datos, generación y esquema de metadatos y configuraciones de <i>software</i>.

          p Por lo tanto, no se consideran datos finales de una investigación: las notas tomadas en desarrollo de laboratorio, datos parcializados, estudios preliminares, borradores de investigaciones, planificación investigaciones en el futuro, etc. 
      .col-lg-1
          img.img-a.img-t(src='@/assets/curso/temas/tema1/img2.svg') 

    .row.mt-3
      p.text-center A continuación, conozca los tipos de datos y la gestión de datos utilizados en una investigación. Es importante que tome nota y lleve registro de lo más destacado en su libreta personal de apuntes:

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
                | Según el nivel de procesamiento y análisis se pueden identificar en estado bruto (datos primarios), en procesamiento o en resultados de análisis. 

              li 
                i.fas.fa-angle-right.txt--orange
                p.mb-0 De acuerdo con fuente de procedencia, pueden ser experimentales (obtenidos en laboratorio, en observación, ej. encuestas) o ser de simulación (obtenidos en programas de #[i software]). 

              li 
                i.fas.fa-angle-right.txt--orange
                p.mb-0 Según el formato podrán ser de: texto, (Word, PDF, etc.), numéricos (Excel, etc.), multimedia (JPEG, MPEG, WAV, etc.), estructurados (XML, MySQL, etc.), de código de <em>software</em> (Java, C, etc.), específicos de un <em>software</em> (3D CAD, modelo estadístico, etc.) o específicos de una disciplina o instrumento.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img5.svg', alt='')
              
      .py-4.py-md-5(titulo="Gestión de datos utilizados en una investigación" :icono="require('@/assets/curso/temas/tema1/img3.svg')")
        .row
          .col-md-8.mb-4.mb-md-0

            p La gestión de datos se puede presentar en todas las etapas de una investigación y puede abarcar la recopilación, planeación, organización, información documentada, almacenamiento y preservación de la información empleada o generada en el transcurso de un proyecto.

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
                | Permite optimizar tiempo evitando que se dupliquen y, además, hacer un uso correcto de los recursos disponibles. 

              li 
                i.fas.fa-angle-right.txt--orange
                | Mejora el perfil del investigador asignado en el impacto y la visibilidad de los proyectos.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img6.svg', alt='')
              
    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1. Tablas de frecuencia

    .row
      p Una tabla de frecuencias o, también conocida como distribución de frecuencias, corresponde a una tabla que representa la forma en la que se distribuyen los datos, de acuerdo con las frecuencias calculadas. 

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
                p.mb-0 Corresponde al número de veces repetidas que está, un número, en un conjunto de datos. La cantidad de veces que se repite.

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
      p.text-center Conozca el paso a paso para construir una tabla de frecuencias. Presta suma atención a cada uno de ellos:  

    .row.justify-content-between.align-items-center.mt-5
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Reunir datos:")
            .col-md-4.mb-4.mb-md-0
              p Se deben reunir los datos.
            .col-md-6

              figure
                img(src='@/assets/curso/temas/tema2/tabla1.svg', alt='')

          .row(numero="2" titulo="Nueva tabla:")
            .col-md-4.mb-4.mb-md-0
              p Generar nueva tabla que incluye, en la primera columna, el listado de las notas del 1 al 10, en orden de menor a mayor. En la segunda columna, la cantidad de veces que es repetida cada nota y asignar el nombre de datos de frecuencia absoluta.
            .col-md-6
        
              figure
                img(src='@/assets/curso/temas/tema2/tabla2.svg', alt='')

          .row(numero="3" titulo="Cálculo de frecuencia absoluta acumulada:")
            .col-md-4.mb-4.mb-md-0
              p La tabla realizada corresponde a una tabla de frecuencias sencillas, además, se puede agregar una columna más que permita calcular la frecuencia absoluta acumulada, en la cual los valores se obtendrán sumando los datos en diagonal. 

              p #[u Ejemplo:] el primer valor será igual al primer dato de la <b>frecuencia absoluta</b>, en este caso es cero, para obtener el dato siguiente, se debe sumar el cero más el dato que continúa en la tabla de frecuencia absoluta que, en este caso, es nuevamente cero y así sucesivamente. 

              p Una forma de revisar y verificar que la operación es correcta es asegurarse que el número obtenido como número final corresponda a la cantidad de datos que se tienen. En este caso, sería igual a 10.

            .col-md-6
          
              figure
                img(src='@/assets/curso/temas/tema2/tabla3.svg', alt='')


          .row(numero="4" titulo="Frecuencia relativa y frecuencia relativa absoluta:")
            .col-md-4.mb-4.mb-md-0
              p Se debe incluir una nueva columna con el nombre de <b>frecuencia relativa</b>. Se debe tomar cada dato de la <b>frecuencia absoluta</b> y dividirlo en <b>10</b>, que corresponde a la cantidad de datos totales de la columna. Para verificar se debe revisar que el resultado que se obtiene es 1 o aproximado. 

            .col-md-6
           
              figure
                img(src='@/assets/curso/temas/tema2/tabla4.svg', alt='')


          .row(numero="5" titulo="Suma de datos:")
            .col-md-4.mb-4.mb-md-0
              p Para la <b>frecuencia relativa acumulada</b> se deben sumar los datos en diagonal, como se realizó en la <b>frecuencia absoluta acumulada</b>. Así, el primer valor siempre deberá ser igual al primer dato de la frecuencia relativa. En este caso específico es igual a cero. Posteriormente, para obtener el siguiente dato, se suma el siguiente valor a cero y, de la misma manera, sucesivamente.
            .col-md-6
          
              figure
                img(src='@/assets/curso/temas/tema2/tabla5.svg', alt='')       

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2. Uso de gráficos

    .row.justify-content-center.align-items-center.mb-5                             
      .col-lg-9.col-xs-12
          p Los estudios de mercado que emplean el procesamiento de datos como herramienta para tener información sobre una variable determinada o información útil para la toma de decisiones, deben utilizar en la presentación de sus informes, los datos acompañados de gráficos que faciliten la interpretación rápida y útil de la información. Existen diversos gráficos que pueden ser empleados de acuerdo con lo que se quiere mostrar y la información con la que se cuenta. Entre ellos están: gráficos de barras, gráficos de líneas y gráficos circulares. 

          p Además, los gráficos estadísticos permiten representar series de datos estadísticos de distinta clase y fuente para demostrar visualmente la forma cómo se comporta una o más variables comparados con otras. Por ejemplo, la forma en que ha evolucionado el precio de un producto comercial en el transcurso de un año o el número de compradores en una tienda de internet, relacionado con los periodos de compra.

      .col-lg-3.col-xs-10
          img.img-a.img-t(src='@/assets/curso/temas/tema3/img1.svg')  


    .row.justify-content-center.align-items-center.mb-5.background-img
      .col-lg-2.col-xs-8.my-3
        figure
          img(src='@/assets/curso/temas/tema3/img2.svg').imagen-decora

      .col-lg-7.col-xs-12
        p.mb-0 Los gráficos estadísticos son potentes herramientas para la visualización de datos. Permiten representar de manera accesible información compleja, consiguen presentar la información al usuario o lector de manera clara y precisa, facilitando la comparación de la evolución de distintas variables.

    .row.mt-5
      p.text-center A continuación, se explicarán algunos tipos de gráficos estadísticos:

    .row.mt-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-contenido.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="Gráfico de barras")
            .row.justify-content-center.align-items-center.mb-5  
              .col-8
                h4 Gráfico de barras
                p Se utilizan para representar la evolución o comportamiento de una variable en el tiempo. Se compone de un sistema de coordenadas de ejes en el plano cartesiano (eje X y eje Y). Reflejan barras rectangulares de manera horizontal o vertical que representan la variable elegida. 
                p Representan, por ejemplo, egresos e ingresos de una empresa por periodos de actividad o la evolución transcurrida del PIB de un país de manera sea anual, semestral, trimestral, bimestral, etc. 
                p En términos generales permite analizar distintas variables y observar su comportamiento en el transcurso del tiempo. En uno de los ejes se debe establecer el tiempo y en el otro se reflejan las barras estableciendo el valor que corresponde a la variable.


              .col-lg-4
                figure
                  img(src='@/assets/curso/temas/tema3/img3.svg')

          .tarjeta.clr-paleYellow.p-4(titulo="Gráfico de tortas o diagrama de sectores")
            .row.justify-content-center.align-items-center.mb-5  
              .col-8
                h4 Gráfico de tortas o diagrama de sectores
                p Este diagrama permite visualizar las partes o sectores de un todo, reflejadas a través de una circunferencia dividida en sectores o porciones. Como ejemplo, el porcentaje de estudiantes de una clase en la cual se realiza una determinada actividad escolar: como resultado obtenido del 100 % de los estudiantes, un 25% la realiza completa y la comprende totalmente, un 20 % no la comprende por lo tanto no la desarrolla, el 55% la comprende, pero no loa termina.

              .col-lg-4
                figure
                  img(src='@/assets/curso/temas/tema3/img4.svg')

          .tarjeta.clr-paleYellow.p-4(titulo="Gráfico de líneas o diagrama de frecuencias")
            .row.justify-content-center.align-items-center.mb-5  
              .col-8
                h4 Gráfico de líneas o diagrama de frecuencias
                p Similar al gráfico de barras, permite observar la evolución de una variable en el tiempo. Por ejemplo: la variación en la temperatura mínima y máxima durante un periodo definido. En uno de los ejes se representa la temperatura obtenida y en el otro eje se representan los días del periodo estudiado. A continuación, se deberán marcar los valores obtenidos de la temperatura mínima y se deben unir con una línea que muestra la oscilación; preferiblemente con otro color se debe representar, igualmente, la temperatura máxima para demostrar la diferencia. De esta manera se puede observar cómo ha oscilado ambas variables en cierto periodo de tiempo.

              .col-lg-4
                figure
                  img(src='@/assets/curso/temas/tema3/img5.svg')

          .tarjeta.clr-paleYellow.p-4(titulo="Gráfico de dispersión")
            .row.justify-content-center.align-items-center.mb-5  
              .col-8
                h4 Gráfico de barras
                p En este grafico también se emplean los ejes cartesianos que permiten mostrar todos los datos de una variable dependiente y de la variable independiente o, en algunos casos, de dos variables para comprobar si existe relación. El resultado refleja una serie de puntos que muestran una dispersión o una concentración de los mismos para determinar la relación, o no, entre las variables analizadas. Esta representación gráfica permite realizar combinaciones diferentes, por ejemplo, la representación de una variable en barras y otras en línea, en los casos que el tipo de datos a representar lo permita.

              .col-lg-4
                figure
                  img(src='@/assets/curso/temas/tema3/img6.svg')  

    p.mb-5 Amplíe sus conocimientos sobre gráficas de representación de datos e información. Visualice con atención el recurso que se muestra enseguida y tome nota de lo más destacado:
    .row
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3. Presentación del informe 

    .row.justify-content-center.align-items-center.mb-5    
      .col-lg-2.col-xs-10
        figure
          img(src='@/assets/curso/temas/tema4/img1.svg', alt='')

      .col-lg-10
        p.mb-0 Un informe corresponde a un documento cuya finalidad es mostrar información de tipo científico, técnico o comercial. Su objetivo es comunicar información importante que contribuya con la toma de decisiones. Este documento se utiliza generalmente para presentar resultados obtenidos o interpretaciones importantes que aporten al crecimiento de la organización.

    .row.mt-3
      p Los informes facilitan la interpretación de la información recolectada, la muestran de manera más adecuada y precisa. Para su desarrollo se pueden tener en cuenta las siguientes características: 
      
    .row.justify-content-center.align-items-center.mb-5    
      .col-lg-12
        figure
          img(src='@/assets/curso/temas/tema4/img2.svg', alt='')

    .row.mt-3
      p.text-center A continuación, se presentan los principales tipos de informes:

    .bg--img_03.mt-5
      .row.justify-content-center.mb-4
        .col-lg-7
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Informe expositivo")
              .col-12
                p.mb-0 Da a conocer los hechos o sucesión de acontecimientos que no incluyen estudios ni interpretaciones particulares, por consiguiente, tampoco tiene conclusiones. Suele incluir antecedentes sobre el estudio. Se trata de una perspectiva más objetiva de los hechos.

            .row(titulo="Informe interpretativo")
              .col-12
                p.mb-0 Se enfoca en el análisis y la interpretación de los hechos. Generalmente, es empleado para evaluar la implementación y obtención de los resultados acerca de metodologías y técnicas que sean innovadoras. Permiten evaluar la viabilidad en la formulación de nuevas estrategias en una organización. 

            .row(titulo="Informe demostrativo")
              .col-12
                p.mb-0 Se enfoca en presentar, desde el ámbito científico, resultados de proyectos que permitan describir cada una de las etapas desarrolladas y, además, la presentación de conclusiones acerca de los resultados obtenidos. Su punto de partida puede ser las investigaciones de los hechos. 
         
        .col-lg-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema4/img3.svg", alt="alt").img400.m-auto

    p La presentación de informes debe responder a una estructura determinada, teniendo como base una norma reconocida. La más recomendada, actualmente, es APA. 

    p Es importante el orden, la ortografía, las imágenes empleadas, la redacción, etc. Puesto que este documento representa los resultados de un estudio. El documento debe ir acompañado de gráficos que faciliten la interpretación de los datos obtenidos. 
    p.text-center.mb-5 A continuación, un ejemplo de la estructura de los informes:
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
      p.text-center En cuanto a la estructura pertinente para la presentación de un informe de procesamiento de datos, existen algunas recomendaciones que usted debe conocer. Estas son:

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row.justify-content-center.align-items-center.mb-3    
        .col-md-8.mb-4.mb-md-0
          h3 Título
          p Debe demostrar la idea principal del estudio de investigación de una manera entendible y coherente, empleando una buena redacción. En lo posible evitar las palabras sin propósitos útiles. En los títulos no se usan abreviaturas y se recomienda no usar más de 12 palabras.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema4/img5.svg', alt='')

      .row.justify-content-center.align-items-center.mb-3    
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema4/img6.svg', alt='')
           
        .col-md-8
          h3.margen-linea-tiempo Resumen
          p.margen-linea-tiempo Síntesis integral del contenido de la investigación. Permite que los lectores tengan una idea general de la investigación. En el resumen se deben incluir palabras claves y ser precisos y coherentes. Se recomienda utilizar de 150 a 250 palabras.

      .row.justify-content-center.align-items-center.mb-3    
        .col-md-8.mb-4.mb-md-0
          h3 Introducción
          p Proporciona un contexto del estudio presentado, en la cual se mencionan los fines específicos del estudio, sin necesidad de incluir datos y menos de presentar conclusiones del trabajo presentado. La introducción no lleva un encabezado. En una introducción apropiada se debe explicar, claramente, la importancia del problema, además de la descripción de trabajos que se hayan realizado con anticipación y la presentación de los supuestos.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema4/img7.svg', alt='')

      .row.justify-content-center.align-items-center.mb-3    
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema4/img8.svg', alt='')
           
        .col-md-8
          h3.margen-linea-tiempo Justificación
          p.margen-linea-tiempo Demuestra las razones por las cuales se hace necesario dicho estudio de investigación y, además, recalca la importancia y aplicación de los resultados obtenidos a través del mismo. 

      .row.justify-content-center.align-items-center.mb-3    
        .col-md-8.mb-4.mb-md-0
          h3 Objetivos
          p Los objetivos se definen como los resultados que se quieren lograr en el desarrollo de la investigación que darán respuesta a un determinado problema. Se representa un objetivo general y varios específicos.

        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema4/img9.svg', alt='')

      .row.justify-content-center.align-items-center.mb-3    
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema4/img10.svg', alt='')
           
        .col-md-8
          h3.margen-linea-tiempo Resultados
          p.margen-linea-tiempo En los resultados se resumen los datos obtenidos y su respectivo análisis. Deberán ser relevantes para la discusión posterior. Se debe realizar una presentación completa, veraz, precisa y clara. Emplear tablas, cuadros o gráficos que faciliten su interpretación.

      .row.justify-content-center.align-items-center.mb-3    
        .col-md-8.mb-4.mb-md-0
          h3 Conclusiones
          p Presentan la información de manera puntual y clara, dando respuesta a los logros obtenidos en el desarrollo de cada objetivo específico. Las conclusiones obtenidas se deben respaldar con instrumentos como tasas, índices o porcentajes.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema4/img11.svg', alt='')
    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4. Normas técnicas para presentación de informes

    .row.justify-content-center.align-items-center.mb-5      

      .col-lg-3.col-xs-10
          img.img-a.img-t(src='@/assets/curso/temas/tema5/img1.svg')  

      .col-lg-9.col-xs-12
          p En la actualidad y con aceptación general, las normas APA representan una guía completa para la presentación de toda clase de trabajos académicos y empresariales. Estas, orientan y regulan la forma en que se presenta y registra información, documentos, trabajos, archivos, fuentes, etc.

          p En lo relacionado con la presentación de informes de procesamiento de datos y las normas de presentación, tenga en cuenta los siguientes elementos clave:


          p #[b Tipo y tamaño de fuente:] en la séptima versión se acepta una variedad de fuentes; entre ellas: Calibri 11; Arial 11; Times New Roman 12. Se recomienda usar la misma fuente en todo el documento, incluyendo la portada.  

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
      p.text-center La portada, estructurada bajo las Normas Apa, puede tener la siguiente forma:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.col-xs-12
        figure
          img(src='@/assets/curso/temas/tema5/img3.svg')

    .tarjeta.color-acento-contenido.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema5/v.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Consulte las normas APA en su séptima edición, visitando el enlace que se propone a continuación:
            .col-sm-auto
              a.boton.color-acento-botones(href= "https://www.revista.unam.mx/wp-content/uploads/3_Normas-APA-7-ed-2019-11-6.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .row
      p Otro aspecto importante para tener en cuenta en la elaboración de informes, con base en las normas APA, son los elementos de una tabla, los cuales se describen a continuación:


    
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
              p Estos deben mostrar qué datos están presentes en cada columna y también proporcionar informaciones explicativas en caso de ser necesario. Deben incluir unidad de medida, período de tiempo o área geográfica. 

          .row(titulo="Cabeceras de las filas")
            .col-12
              p Deben establecer los datos en cada una de las filas de la tabla. 
      

          .row(titulo="Notas a pie de tabla")
            .col-12
              p Incluyen información adicional, en caso de ser necesario, para facilitar la comprensión y utilizar adecuadamente los datos.
      
          .row(titulo="Fuente de los datos")
            .col-12
              p Se trata del origen en donde se elaboraron los datos y el método empleado en la recogida de datos. Ejemplo, las estadísticas de población o encuestas aplicadas a una de población activa, deberían indicarse en la parte inferior de la tabla. 

    Separador 
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.5.	Confidencialidad de la información

    .row.justify-content-center.align-items-center.mb-5      

      .col-lg-4.col-xs-10
          img.img-a.img-t(src='@/assets/curso/temas/tema6/img1.svg')  

      .col-lg-8.col-xs-12
          p En el manejo de la información, actualmente existe un derecho llamado “<i>hábeas data</i>” regulado por la Ley 1266 del 2008 el cual trata de que toda persona puede conocer, actualizar y rectificar la información que haya sido obtenida, en archivos o instituciones de carácter público o privado. En la cual se tiene el siguiente concepto: 
         
          .bloque-texto-b.p-4
            .bloque.mb-3
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p Un derecho que otorga la facultad al titular de datos personales de exigir de las administradoras de esos datos el acceso, inclusión, exclusión, corrección, adición, actualización y certificación de los datos, así como la limitación en las posibilidades de su divulgación, publicación o cesión, de conformidad con los principios que regulan el proceso de administración de datos personales. Asimismo, ha señalado que este derecho tiene una naturaleza autónoma que lo diferencia de otras garantías con las que está en permanente relación, como los derechos a la intimidad y a la información. 
            
              p.etiqueta-p.bg.p-2 (Corte Constitucional, 2011, párr. 25).
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
                  | Es necesario que exista una interpretación integral de los derechos constitucionales. 
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

          .bloque-texto-b.p-4
            .bloque.mb-3
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0 Desarrollar el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bases de datos o archivos, y los demás derechos, libertades y garantías constitucionales a que se refiere el artículo 15 de la Constitución Política; así como el derecho a la información consagrado en el artículo 20 de la misma.

              p.etiqueta-p.bg.p-2 (Función Pública, 2012, párr. 1).
              i.fas.fa-quote-right

    p También se tiene la ISO 27001 versión 2013, la cual afirma que la confidencialidad de la información garantiza que la información obtenida en un proceso de recolección de información será protegida al no ser divulgada sin autorización de una persona. Para ello existen reglas que establecen la confidencialidad como un elemento riesgo en la información sensible que, en algunos casos, incluye información sobre empleados, clientes, proveedores datos financieros y datos operativos en general.

    .row.justify-content-center.align-items-center.my-5           
      .col-lg-10.bg2.p-5
        p.mb-0 Según la (ISO 27001, 2013) este tipo de riesgos está dentro de la clasificación CID (Confidencialidad, Integridad y disponibilidad). Para lo cual norma establece una guía basada en el ciclo PHVA para proporcionar un enfoque en la mejora continua.      

    p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
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
