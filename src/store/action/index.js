import http from './http';

function getData({dispatch,page,tab}) {
    dispatch({
        type:'LIST_LOAA_START'
    });
    http.get(`/topics?page=${page}&tab=${tab}&limit=15`).then(res=>{
        dispatch({
            type:'LIST_UPDATE_SUCC',
            data:res.data
        })
    }).catch(err=>{
        dispatch({
            type:"LIST_UPDATE_ERR",
            data:err
        })
    });
}
function getDetailsData({dispatch,id}) {
    dispatch({
        type:'DETAILS_LOAD_START'
    });
    http.get(`/topic/${id}`).then(res=>{
        dispatch({
            type:'DETAILS_UPDATE_SUCC',
            data:res.data
        });
    }).catch(err=>{
        dispatch({
            type:"DETAILS_UPDATE_ERR",
            data:err
        })
    });
}
function getUserData({dispatch,username}) {
    dispatch({
        type:'USER_LOAD_START'
    });
    http.get(`/user/${username}`).then(res=>{
        dispatch({
            type:'USER_UPDATE_SUCC',
            data:res.data
        });
    }).catch(err=>{
        dispatch({
            type:"USER_UPDATE_ERR",
            data:err
        })
    });
}

export {
    getData,
    getDetailsData,
    getUserData
}