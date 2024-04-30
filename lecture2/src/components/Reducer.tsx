
interface STATE{
  count1: number;
  count2: number;
}
interface ACTION {
  type: string;
  data: number;
}
export enum ACTION_TYPE{
  INC1 = "INC1",
  INC2 = "INC2"
}
export const reducer = (state: STATE, action: ACTION) => {
  switch(action.type){
    case ACTION_TYPE.INC1:
      if(state.count1 === 1000){
        return state;
      }
      return {...state, count1: action.data};
    case ACTION_TYPE.INC2:
      return {...state, count2: action.data};
    default:
      return state;
  }
}