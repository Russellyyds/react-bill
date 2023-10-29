import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const billStore = createSlice({
    name: "bill",
    initialState: {
        billList: []
    },
    reducers: {
        setBillList(state, action) {
            state.billList = action.payload
        }
    }
})
//解构actionCreater函数
const { setBillList } = billStore.actions
//编写异步
export const getBillList = () => {
    return async (dispath) => {
        const res = await axios.get('http//localhost:8888/ka')
        dispath(setBillList(res.data))
    }
}

const reducer = billStore.reducer
export default reducer