function details(details={
    loading:true,
    data:{
        author:{
            avatar_url:'',
            loginname:''
        },
        replies:[],
        reply_count:0,
        good:true,
        top:true,
        tab:'all',
        create_at:''
    }
},action){
    switch(action.type){
        case "DETAILS_LOAD_START":
            return {
                ...details,
                loading:true
            }
        case "DETAILS_UPDATE_SUCC":
            console.log(action.data.data);
            return {
                loading:false,
                data:action.data.data
            }
        case "DETAILS_UPDATE_ERR":
            return {
                loading:false,
                data:{
                    author:{
                        avatar_url:'',
                        loginname:''
                    },
                    replies:[],
                    reply_count:0,
                    good:true,
                    tab:'all',
                    top:true,
                    create_at:''
                }
            }
        default:
            return details;
    }
}

export default details;