export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  orientation?: 'portrait' | 'landscape';
};

export const galleryItems: GalleryItem[] = [
  { id: 'gallery-01', src: '/images/gallery-01.jpg', alt: 'Presentación grupal en escenario', orientation: 'landscape' },
  { id: 'gallery-02', src: '/images/gallery-02.jpg', alt: 'Detalle de expresión en danza contemporánea', orientation: 'portrait' },
  { id: 'gallery-03', src: '/images/gallery-03.jpg', alt: 'Coreografía urbana en un ensayo', orientation: 'landscape' },
  { id: 'gallery-04', src: '/images/gallery-04.jpg', alt: 'Danza clásica con tutú en estudio', orientation: 'portrait' },
  { id: 'gallery-05', src: '/images/gallery-05.jpg', alt: 'Salto coordinado de un grupo de bailarines', orientation: 'landscape' },
  { id: 'gallery-06', src: '/images/gallery-06.jpg', alt: 'Dúo contemporáneo en escena', orientation: 'landscape' },
  { id: 'gallery-07', src: '/images/gallery-07.jpg', alt: 'Ensayo grupal frente a espejos', orientation: 'landscape' },
  { id: 'gallery-08', src: '/images/gallery-08.jpg', alt: 'Posición final de una coreografía', orientation: 'landscape' },
  { id: 'gallery-09', src: '/images/gallery-09.jpg', alt: 'Bailarina practicando flexibilidad', orientation: 'portrait' },
  { id: 'gallery-10', src: '/images/gallery-10.jpg', alt: 'Profesoras guiando al grupo', orientation: 'landscape' },
  { id: 'gallery-11', src: '/images/gallery-11.jpg', alt: 'Grupo urbano en exteriores', orientation: 'portrait' },
  { id: 'gallery-12', src: '/images/gallery-12.jpg', alt: 'Momento final de gala de danza', orientation: 'landscape' },
];
