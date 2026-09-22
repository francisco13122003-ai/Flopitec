// Configuración del aviso global activo. Cambiar el id y el contenido al iniciar una nueva campaña.
export const siteNotice = {
  enabled: true,
  id: 'asistencia-tecnica-2026-09',
  eyebrow: 'ASISTENCIA TÉCNICA · LA ZUBIA Y GRANADA',
  title: '¿Qué le pasa a tu equipo?',
  intro:
    'Cuéntanos el problema por WhatsApp o teléfono y te orientamos antes de reparar. Revisamos qué puede estar fallando, qué opciones tienes y si merece la pena intervenir, sin recomendar cambios innecesarios.',
  primaryCta: {
    label: 'Contactar con Flopitec',
    href: '/contacto/',
  },
  secondaryCta: {
    label: 'Ver servicios',
    href: '/servicios/',
  },
  schedule: {
    title: '¿Vas a venir al taller?',
    linkLabel: 'Consultar horario',
    href: '/contacto/#horario',
  },
  dismissLabel: 'Seguir navegando',
} as const;
