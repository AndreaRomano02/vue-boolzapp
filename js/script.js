console.log('VUE OK', Vue);

//# Creo la pagina VEU
const { createApp } = Vue;

const myApp = createApp({
  data() {
    return {};
  },
});

//# La monto  in pagina
myApp.mount('#root');
