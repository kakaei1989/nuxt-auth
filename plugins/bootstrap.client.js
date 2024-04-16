import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
export default defineNuxtPlugin((NuxtApp)=>{
return NuxtApp.provide('bootstrap',bootstrap)
})