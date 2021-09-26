var a = document.getElementById('msg');
var b = document.getElementById('area');
var c = document.getElementById('btn');
var myarr = ['That is the one thing I have faith in!',
    "It isn't one of those things you can talk through, I guess.",
    "They loved one child as much as the other, but one child could never take the place of another.",
    "Lisa was making the beds one morning and Connie was in the bathroom brushing her teeth."
]
var startTime, endTime;
b.disabled = true;

//last come here
const correctmsg = (str1, str2) => {
    const wordarr1 = str1.split(" ");
    const wordarr2 = str2.split(" ");
    var count = 0;
    wordarr2.forEach((element, index) => {
        if (element == wordarr1[index])
            count++;
    });
    var noferror = wordarr2.length - count;
    var finalmymsg = `you have done ${noferror} error out of ${wordarr2.length}`;
    return finalmymsg;
}

//first come here
const endgame = () => {
    endTime = new Date().getTime();
    var typedmsg = b.value;
    var premsg = a.innerText;
    var totaltyped = typedmsg.split(" ").length;
    var timetaken = Math.round((endTime - startTime) / 1000);
    var speed = Math.round((totaltyped / timetaken) * 60);
    var finalmsg = `you have typed ${totaltyped} words out of ${a.innerHTML.split(" ").length} , speed of ${speed} per minute `;

    finalmsg += correctmsg(premsg, typedmsg)
    a.innerHTML = finalmsg;
    b.value = " ";

}

//starting form here

c.addEventListener('click', function() {
    if (c.innerText == 'Start') {
        b.disabled = false;
        var mynum = Math.floor(Math.random() * myarr.length);
        a.innerHTML = myarr[mynum];
        startTime = new Date().getTime();
        c.innerText = 'Done';
    } else if (c.innerText == 'Done') {
        b.disabled = true;
        c.innerText = 'Start';
        endgame();
    }
})