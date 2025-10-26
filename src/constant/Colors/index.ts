// src/constant/Colors.tsx

export interface ThemeColors {
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  text: string;
  textSecondary: string;
  border: string;
  error: string;
  success: string;
  warning: string;
  card: string;
  cardHover: string;
}
interface Color {
  Black: string;
  BlackRGB10: string;
  Orange: string;
  OrangeRGBA0: string;
  Grey: string;
  DarkGrey: string;
  Yellow: string;
  White: string;
  WhiteRGBA75: string;
  WhiteRGBA50: string;
  WhiteRGBA32: string;
  WhiteRGBA15: string;
}
export interface ThemeGradients {
  primary: string[];
  secondary: string[];
  background: string[];
  overlay: string[];
}

export const darkColors: ThemeColors = {
  background: '#0F111D',
  surface: '#1C1E2E',
  primary: '#E50914',
  secondary: '#564D4D',
  text: '#FFFFFF',
  textSecondary: '#A0A0A0',
  border: '#2A2D3A',
  error: '#CF6679',
  success: '#4CAF50',
  warning: '#FFC107',
  card: '#252836',
  cardHover: '#2E3142',
};

export const lightColors: ThemeColors = {
  background: '#FFFFFF',
  surface: '#F5F5F5',
  primary: '#E50914',
  secondary: '#757575',
  text: '#000000',
  textSecondary: '#666666',
  border: '#E0E0E0',
  error: '#B00020',
  success: '#4CAF50',
  warning: '#FFC107',
  card: '#FFFFFF',
  cardHover: '#F0F0F0',
};

export const darkGradients: ThemeGradients = {
  primary: ['#E50914', '#B20710'],
  secondary: ['#564D4D', '#3D3535'],
  background: ['#0F111D', '#1C1E2E'],
  overlay: ['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)'],
};

export const lightGradients: ThemeGradients = {
  primary: ['#E50914', '#FF1A25'],
  secondary: ['#757575', '#9E9E9E'],
  background: ['#FFFFFF', '#F5F5F5'],
  overlay: ['rgba(255,255,255,0.7)', 'rgba(255,255,255,0.9)'],
};

export const Colors: Color = {
  Black: '#000000',
  BlackRGB10: 'rgba(0,0,0,0.1)',
  Orange: '#FF5524',
  OrangeRGBA0: 'rgba(255,85,36,0)',
  Grey: '#333333',
  DarkGrey: '#0b0b0b',
  Yellow: '#E1CD17',
  White: '#FFFFFF',
  WhiteRGBA75: 'rgba(255,255,255,0.75)',
  WhiteRGBA50: 'rgba(255,255,255,0.50)',
  WhiteRGBA32: 'rgba(255,255,255,0.32)',
  WhiteRGBA15: 'rgba(255,255,255,0.15)',
};