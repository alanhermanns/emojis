export const getFace = state => {
    if(isTired(state) && isHungry(state)) return '😠';
    if(isHyper(state) && isHungry(state)) return '😱';
    if(isTired(state)) return '😴';
    if(isHyper(state)) return '🙀';
    if(isEducated(state)) return '😲';
    if(isHungry(state)) return '😡';
  
    return '😀';
  };