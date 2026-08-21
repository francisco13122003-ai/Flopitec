// Configuración del aviso global activo. Cambiar el id y el contenido al iniciar una nueva campaña.
export const siteNotice = {
  enabled: true,
  id: 'verano-agosto-2026',
  eyebrow: 'Este verano',
  title: 'Pon tu ordenador a punto para la vuelta a la rutina',
  intro:
    'Durante agosto te atendemos con nuestro horario de verano. Consulta aquí los días y horas antes de venir.',
  scheduleId: 'summer',
  commercialTitle: '¿Tu ordenador va lento?',
  commercialText:
    'Podemos revisar qué está afectando a su rendimiento y valorar contigo si compensa realizar mantenimiento, ampliar la memoria, instalar un SSD u otra mejora según el equipo.',
  primaryCta: {
    label: 'Ver opciones para mi ordenador',
    href: '/servicios/pc-portatiles/',
  },
  dismissLabel: 'Seguir navegando',
} as const;
