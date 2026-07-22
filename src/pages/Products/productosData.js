import { Layers, CircleDot, Cylinder, Grid3x3, Square, Ruler } from 'lucide-react';

export const CATEGORIAS = [
  'Perfiles',
  'Varilla',
  'Tubería',
  'Lámina',
  'Malla y alambre',
];

export const PRODUCTOS = [
  {
    nombre: 'Viga IPR',
    categoria: 'Perfiles',
    descripcion: 'Perfil estructural IPR en medidas de 4" a 24", acero A-36 y A-572.',
    icono: Layers,
  },
  {
    nombre: 'Canal CPS',
    categoria: 'Perfiles',
    descripcion: 'Canal estructural CPS en largos comerciales de 6 y 12 metros.',
    icono: Layers,
  },
  {
    nombre: 'Ángulo estructural',
    categoria: 'Perfiles',
    descripcion: 'Ángulo de lados iguales de 1/2" a 4", en calibres comerciales.',
    icono: Ruler,
  },
  {
    nombre: 'Varilla corrugada G-42',
    categoria: 'Varilla',
    descripcion: 'Diámetros de 3/8" a 1" en tramos de 12 m, con certificado de calidad.',
    icono: CircleDot,
  },
  {
    nombre: 'Alambrón',
    categoria: 'Varilla',
    descripcion: 'Alambrón de 1/4" en rollo y tramo para habilitado de acero.',
    icono: CircleDot,
  },
  {
    nombre: 'Tubo negro cédula 40',
    categoria: 'Tubería',
    descripcion: 'Tubo redondo de 1/2" a 8" para conducción y estructura.',
    icono: Cylinder,
  },
  {
    nombre: 'PTR / Tubo cuadrado',
    categoria: 'Tubería',
    descripcion: 'Perfil tubular rectangular y cuadrado en calibres 11 a 14.',
    icono: Square,
  },
  {
    nombre: 'Lámina lisa',
    categoria: 'Lámina',
    descripcion: 'Lámina rolada en frío y en caliente, calibres 10 a 26.',
    icono: Grid3x3,
  },
  {
    nombre: 'Lámina antiderrapante',
    categoria: 'Lámina',
    descripcion: 'Placa antiderrapante para pisos industriales y rampas.',
    icono: Grid3x3,
  },
  {
    nombre: 'Malla electrosoldada',
    categoria: 'Malla y alambre',
    descripcion: 'Malla 6x6 10/10 en rollo y hoja para losas y firmes.',
    icono: Grid3x3,
  },
  {
    nombre: 'Alambre recocido',
    categoria: 'Malla y alambre',
    descripcion: 'Alambre recocido calibre 16 y 18 para amarre de acero.',
    icono: CircleDot,
  },
];
