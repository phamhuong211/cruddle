//cung cấp global xuống tất cả component qua context
import { useReducer } from "react";
import GlobalConext from "./Context";
import reducer, {initState} from './reducer';
import logger from './logger';

function GlobalProvider({children}) {
    //tạo Global state từ useReducer
    const [state, dispatch] = useReducer(logger(reducer), initState)

    return (
        <GlobalConext.Provider value={[state, dispatch]}>
            {children}
        </GlobalConext.Provider>
    )
}

export default GlobalProvider