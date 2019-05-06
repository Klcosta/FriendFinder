// var path = require("path");
var friendsdata = require("../data/friends");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsdata);
    });

    app.post("/api/friends", function (req, res) {
        friendsdata.push(req.body)
        console.log("friendsdata:")
        console.log(friendsdata)
        res.json({ friendsdata })
        console.log(friendsdata.length)
        var a = friendsdata.length - 1
        var b = friendsdata.length - 2
        console.log("a = " + a)
        console.log("b = " + b)
        for (c = 1; c <= b; c++) {
            console.log("c = " + c)
            compatibility(friendsdata[a].score, friendsdata[c].score)
        }
        console.log("a2: = " + a)
        // bestfriend()
    });

}

function compatibility(array1, array2) {
    var differencearray = []
    for (i = 0; i < 10; i++) {
        console.log(array1[i], array2[i])
        var difference = array1[i] - array2[i]
        differencearray.push(difference)

        //userinput sum - friends sum
    }
    console.log("differencearray: " + differencearray)
    var sum = differencearray.reduce(function (accumulator, currentvalue) {
        return accumulator + currentvalue
    })
    console.log("sum: " + sum)
    if (sum < 0){
        sum = -sum
    }
    friendsdata[c].difference = sum
    console.log("friendsdata2:")
    console.log(friendsdata)
}

