export const business = {
  commercialName: 'Flopitec Servicios Informáticos', legalName: 'Luis Alemán Caballero', nif: '24255871W',
  address: { street: 'C/ Pablo Iglesias 30 bajo', postalCode: '18140', locality: 'La Zubia', province: 'Granada', country: 'España', full: 'C/ Pablo Iglesias 30 bajo, 18140 La Zubia, Granada, España' },
  phone: { main: '958891822', secondary: '642663026', mainHref: 'tel:+34958891822', secondaryHref: 'tel:+34642663026' },
  whatsapp: { label: '642663026', url: 'https://wa.me/34642663026' }, email: 'flopitec@hotmail.com', emailHref: 'mailto:flopitec@hotmail.com',
  mapsUrl: 'https://share.google/7l0ndiNV0vNxQjSyY', reviewUrl: 'https://g.page/r/CRiakERZ_Fd8EAE/review', slogan: 'Tus equipos en las mejores manos',
} as const;
export const schedules = {
  regular: { id: 'regular', name: 'Temporada normal', period: 'Del 1 de septiembre al 30 de junio', lines: ['Lunes a viernes: 10:00–14:00', 'Lunes, miércoles y viernes: 17:30–20:00', 'Sábado: 10:30–14:00', 'Domingo cerrado'] },
  summer: { id: 'summer', name: 'Horario de verano', period: 'Del 1 de julio al 31 de agosto', lines: ['Lunes a viernes: 8:30–15:00', 'Sábado cerrado', 'Domingo cerrado'] },
} as const;
export function isSummerSchedule(date = new Date()): boolean { const month = date.getMonth() + 1; return month === 7 || month === 8; }
export function getActiveSchedule(date = new Date()) { return isSummerSchedule(date) ? schedules.summer : schedules.regular; }
