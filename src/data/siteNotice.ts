// Configuración del aviso global activo. Cambiar el id y el contenido al iniciar una nueva campaña.
export const siteNotice = {
  enabled: true,
  id: 'vuelta-rutina-agosto-2026',
  eyebrow: 'Ya estamos de vuelta',
  title: 'Pon tu ordenador a punto para la vuelta a la rutina',
  intro:
    'Desde el lunes 17 de agosto volvemos a atenderte con nuestro horario habitual de verano.',
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
