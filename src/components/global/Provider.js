//cung cấp global xuống tất cả component qua context
import { useReducer } from "react";
import GlobalConext from "./Context";
import reducer, {initState} from './reducer'

function GlobalProvider({children}) {
    //tạo Global state từ useReducer
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <GlobalConext.Provider value={[state, dispatch]}>
            {children}
        </GlobalConext.Provider>
    )
}

export default GlobalProvider