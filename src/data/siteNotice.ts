// Configuración del aviso global activo. Cambiar el id y el contenido al iniciar una nueva campaña.
export const siteNotice = {
  enabled: true,
  id: 'horario-actual-2026',
  eyebrow: 'HORARIO ACTUAL',
  title: 'Horario de atención al público',
  intro: 'Consulta nuestros días y horas de atención antes de venir.',
  scheduleId: 'regular',
  commercialTitle: '¿Tu ordenador va lento?',
  commercialText:
    'Podemos revisar qué está afectando a su rendimiento y valorar contigo si compensa realizar mantenimiento, ampliar la memoria, instalar un SSD u otra mejora según el equipo.',
  primaryCta: {
    label: 'Ver opciones para mi ordenador',
    href: '/servicios/pc-portatiles/',
  },
  dismissLabel: 'Seguir navegando',
} as const;
