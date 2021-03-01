function list(list={
    data:[],
    loading:true
},action){
    switch(action.type){
        case "LIST_LOAA_START":
            return {
                ...list,
                loading:true
            }
        case "LIST_UPDATE_SUCC":
            return {
                loading:false,
                data:action.data.data
            }
        case "LIST_UPDATE_ERR":
            return {
                loading:false,
                data:[]
            }
        default:
            return list;
    }
}

export default list;