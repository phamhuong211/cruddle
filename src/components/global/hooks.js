import {useContext} from 'react';
import Context from './Context';

export const useGlobal = () => {
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
}

// export như này cũng được, nhanh và gọn hơn, còn bên trên dễ hiểu hơn
// export const useGlobal = () => {
//     return useContext(Context)
// }