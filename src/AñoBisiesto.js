export function esBisiesto(ano) {
    if (ano % 400 === 0) {
      return true;
    }
  
    if (ano % 100 === 0) {
      return false;
    }
  
    return ano % 4 === 0;
  }
  