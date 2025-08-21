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


// fetchUserData().then(function(userData) {
//     console.log("User Data:", userData);
//     return fetchUserPosts();
// }).then(function(userPosts) {
//     console.log("User Posts:", userPosts);
// }).catch(function(error) {
//     console.error("Error:", error);
// });

//promise combinators
// Promise.all([fetchUserData(), fetchUserPosts(), fetchUserComments()])
//     .then(function(results) {
//         console.log("User Data:", results[0]);
//         console.log("User Posts:", results[1]);
//         console.log("User Comments:", results[2]);
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });

Promise.allSettled([fetchUserData(), fetchUserPosts(), fetchUserComments()])
    .then(function(results){
        results.forEach((result)=>{
            if(result.status === "fulfilled"){
                console.log("Result:", result.value);
            }else{
                console.error("Error:", result.reason);
            }
        })
    })
