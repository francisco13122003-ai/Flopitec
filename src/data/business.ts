export const business = {
  commercialName: 'Flopitec Servicios Informáticos', legalName: 'Luis Alemán Caballero', nif: '24255871W',
  address: { street: 'C/ Pablo Iglesias 30 bajo', postalCode: '18140', locality: 'La Zubia', province: 'Granada', country: 'España', full: 'C/ Pablo Iglesias 30 bajo, 18140 La Zubia, Granada, España' },
  phone: { main: '958891822', secondary: '642663026', mainHref: 'tel:+34958891822', secondaryHref: 'tel:+34642663026' },
  whatsapp: { label: '642663026', url: 'https://wa.me/34642663026' }, email: 'flopitec@hotmail.com', emailHref: 'mailto:flopitec@hotmail.com',
  mapsUrl: 'https://share.google/7l0ndiNV0vNxQjSyY', reviewUrl: 'https://g.page/r/CRiakERZ_Fd8EAE/review', slogan: 'Tus equipos en las mejores manos',
} as const;
export const schedules = {
  regular: { id: 'regular', name: 'Horario actual', period: '', lines: ['Lunes: 10:00–14:00 y 17:30–20:00', 'Martes: 10:00–14:00', 'Miércoles: 10:00–14:00', 'Jueves: 10:00–14:00', 'Viernes: 10:00–14:00 y 17:30–20:00', 'Sábado: 10:30–14:00', 'Domingo cerrado'] },
} as const;
export function getActiveSchedule() { return schedules.regular; }
