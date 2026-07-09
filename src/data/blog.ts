export const blogPosts = [
{slug:'merece-la-pena-cambiar-disco-duro-por-ssd', title:'¿Merece la pena cambiar un disco duro por un SSD?', description:'Claves para saber cuándo una mejora a SSD puede dar una segunda vida al equipo.', image:'/images/flopitec-detalle-componentes.webp'},
{slug:'actualizar-a-windows-11', title:'Actualizar a Windows 11: cuándo conviene y cuándo no', description:'Compatibilidad, copia de seguridad y criterios prudentes antes de actualizar.', image:'/images/flopitec-mostrador.webp'},
{slug:'portatil-no-enciende-causas', title:'Mi portátil no enciende: causas habituales', description:'Posibles motivos y qué revisar sin prometer diagnósticos a distancia.', image:'/images/flopitec-equipo-reparando.webp'},
] as const;
export function getPostBySlug(slug:string){ return blogPosts.find((post)=>post.slug===slug); }
