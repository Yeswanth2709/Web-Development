//polyphill for promise.all

function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = { id: 1, name: "John Doe" };
            resolve(userData);
        }, 1000);
    });
}

function fetchUserPosts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userPosts = [
                { id: 1, title: "Post 1", content: "Content of Post 1" },
                { id: 2, title: "Post 2", content: "Content of Post 2" }
            ];
            resolve(userPosts);
        }, 1000);
    });
}

function fetchUserComments(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success=Math.random() > 0.5; // Simulating success or failure
            const userComments = [
                { id: 1, postId: 1, content: "Comment on Post 1" },
                { id: 2, postId: 2, content: "Comment on Post 2" }
            ];
            if(success){
                resolve(userComments);
            }else{
                reject("Failed to fetch user comments");
            }
        }, 1000);
    });
}

Promise.myAll=function(subPromisesArr){
    const promise=new Promise(function(resolve,reject){
        const results=[];
        let total=0;

        subPromisesArr.forEach((subPromise,index)=>{
            Promise.resolve(subPromise).then((result)=>{
                results[index]=result;
                total++;
                if(total===subPromisesArr.length){
                    resolve(results);
                }
            }).catch((error)=>{
                reject(error);
            });
        })
    });

    return promise;
}


Promise.myAll([fetchUserData(), fetchUserPosts(), fetchUserComments()])
    .then(function(results){
        console.log("All User Data:", results);
    })
    .catch(function(error){
        console.error("Error:", error);
    });
