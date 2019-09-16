module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: [
            "Australian Green Tree Frog", 
            "White-lipped Tree Frog", 
            "Cane Toad", 
            "Red-eyed Tree Frog", 
            "Purple borrowing Frog",
            "Tiger-striped belly Leaf Frog"
        ]
    };
};