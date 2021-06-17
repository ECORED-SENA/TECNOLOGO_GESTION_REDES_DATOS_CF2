<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center
      .col-lg-7
        p El surgimiento y avance de la tecnología de la información y comunicación, precisa que las organizaciones se doten de una adecuada infraestructura tecnológica que les permita estar permanentemente comunicadas con sus similares y a la vez les contribuya con la administración y gestión del activo más importante que puedan tener (datos) De ahí la importancia de conocer todos aquellos elementos, tanto físicos como lógicos, que aportan o asisten en la constitución de dicha infraestructura y que será la que ayude en el alcance de los objetivos establecidos como pilares en la formación de la organización.
        p En relación con la elaboración del componente, es importante especificar que se abordaron varios autores conocidos en el campo de las redes de datos; se referencian en la bibliografía aquellos de quienes se tomaron los conceptos y ejemplos; respetando al igual que ellos, la recopilación y producción de material para el uso en educación. Es preciso señalar que el conocimiento es social y, por lo tanto, es para usarlo; cuando se investiga especialmente en el campo de la educación se busca aportar a la formación de quienes necesitan adquirir el conocimiento. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de las redes de datos.
      .col-lg-5
        figure.mt-4.mt-lg-0
          img(src='@/assets/curso/img1.svg', style="width: 500px; margin: auto;")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
