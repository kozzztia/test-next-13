
 const en = {
    header : {
        title : "Header",
        logo : "logo",
        navigation : [
            {id : 0 , title : "home" , link : "/"},
            {id : 1 , title : "posts" , link : "/posts"},
            {id : 2 , title : "about" , link : "/about"},
        ]
    }
}

type langType = (typeof en)
export const dictionary : {en  : langType} = {
    en
 }