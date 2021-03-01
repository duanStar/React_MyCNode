function user(user={
    loading:true,
    data:{
        avatar_url:'',
        loginname:'',
        last_reply_at:'',
        title:'',
        score:0,
        recent_topics:[],
        recent_replies:[],
        create_at:''
    }
},action){
    switch(action.type){
        case "USER_LOAD_START":
            return {
                ...user,
                loading:true
            }
        case "USER_UPDATE_SUCC":
            console.log(action.data.data);
            return {
                loading:false,
                data:action.data.data
            }
        case "USER_UPDATE_ERR":
            return {
                loading:false,
                data:{
                    author:{
                        avatar_url:'',
                        loginname:''
                    },
                    last_reply_at:'',
                    title:'',
                    score:0,
                    recent_topics:[],
                    recent_replies:[],
                    create_at:''
                }
            }
        default:
            return user;
    }
}

export default user;