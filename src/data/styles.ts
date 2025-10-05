export type DanceStyle = {
  id: string;
  name: string;
  imageSrc: string;
  alt: string;
  description: string;
};

export const danceStyles: DanceStyle[] = [
  {
    id: 'danza-clasica',
    name: 'Danza Clásica',
    imageSrc: '/images/classical-style.jpg',
    alt: 'Bailarina interpretando danza clásica',
    description:
      'Técnica académica para desarrollar postura, control y la elegancia característica del ballet.',
  },
  {
    id: 'contemporaneo',
    name: 'Contemporáneo',
    imageSrc: '/images/contemporary-style.jpg',
    alt: 'Bailarina realizando danza contemporánea',
    description:
      'Explora el movimiento libre y la expresión personal con herramientas modernas y recursos teatrales.',
  },
  {
    id: 'urbano',
    name: 'Urbano',
    imageSrc: '/images/urbano-style.jpg',
    alt: 'Grupo bailando estilo urbano',
    description:
      'Ritmos actuales, freestyle y cambios de energía para conectar con la cultura street y el escenario.',
  },
  {
    id: 'flex',
    name: 'Flex y Trainning',
    imageSrc: '/images/flex-style.jpg',
    alt: 'Bailarina practicando flexibilidad',
    description:
      'Entrenamiento consciente de elongación, movilidad articular y fuerza para ampliar tu rango de movimiento.',
  },
];
