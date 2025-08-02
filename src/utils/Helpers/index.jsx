export const getDataStorage =  (key) => {
    try{
        let res = localStorage.getItem(key)
        if(res) {
            res = JSON.parse(res)
            return res
        }else {
            return  null
        }
    }catch (e){
        return null
    }
}