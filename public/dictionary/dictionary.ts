
 const en = {
    header : {
        title : "Header",
        logo : "logo",
        navigation : [
            {id : 0 , title : "home" , link : "/"},
            {id : 1 , title : "posts" , link : "/posts"},
            {id : 2 , title : "about" , link : "/about"},
        ]
    },
    posts : {
        createNewPost : "create post",
        back : "back",
        link : "/posts",
        newPostTitle : "you can create new one",
        text  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    about : {
        title: "about us container",
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a urna elementum, lacinia purus quis, pulvinar ex. Vestibulum ac odio lacinia, pretium leo ut, gravida dolor. Aenean vitae nisi laoreet, interdum eros at, vehicula elit. Nam ac rutrum dolor, vitae auctor risus. Mauris gravida consectetur velit. Aliquam quis turpis sapien. In eu nunc tempor nunc ornare eleifend. Curabitur ut lacinia eros, feugiat accumsan lacus. Ut sit amet porttitor diam. Etiam laoreet nulla sed enim sollicitudin efficitur. In massa felis, blandit in nibh vel, tempor venenatis nibh. Nulla venenatis vitae justo eleifend tempor."
    }
}

type langType = (typeof en)
export const dictionary : {[key: string]  : langType} = {
    en
 }