export type Session = {
  time: string;
  className: string;
  level: string;
  notes?: string;
};

export type DaySchedule = {
  day: string;
  sessions: Session[];
};

export const schedule2025: DaySchedule[] = [
  {
    day: 'Lunes',
    sessions: [
      { time: '17:00 - 18:00', className: 'Flex', level: 'Inicial · Jóvenes' },
      { time: '18:15 - 19:30', className: 'Danza Clásica', level: 'Intermedio' },
      { time: '19:45 - 21:00', className: 'Contemporáneo', level: 'Adultos' },
    ],
  },
  {
    day: 'Martes',
    sessions: [
      { time: '17:30 - 18:45', className: 'Urbano', level: 'Teen' },
      { time: '19:00 - 20:15', className: 'Trainning', level: 'Mixto' },
      { time: '20:30 - 21:45', className: 'Danza Clásica', level: 'Avanzado', notes: 'Repertorio 2025' },
    ],
  },
  {
    day: 'Miércoles',
    sessions: [
      { time: '17:00 - 18:00', className: 'Flex', level: 'Inicial · Niños' },
      { time: '18:15 - 19:30', className: 'Contemporáneo', level: 'Intermedio' },
      { time: '19:45 - 21:00', className: 'Urbano', level: 'Adultos' },
    ],
  },
  {
    day: 'Jueves',
    sessions: [
      { time: '17:30 - 18:45', className: 'Danza Clásica', level: 'Inicial' },
      { time: '19:00 - 20:15', className: 'Trainning', level: 'Escénico', notes: 'Foco en resistencia' },
      { time: '20:30 - 21:45', className: 'Contemporáneo', level: 'Adultos' },
    ],
  },
  {
    day: 'Viernes',
    sessions: [
      { time: '17:00 - 18:15', className: 'Urbano', level: 'Kids' },
      { time: '18:30 - 19:45', className: 'Flex', level: 'Avanzado' },
      { time: '20:00 - 21:30', className: 'Ensayo general', level: 'Elenco', notes: 'Producción anual' },
    ],
  },
];
