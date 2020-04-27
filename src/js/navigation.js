
// <td> under the mouse right now (if any)
let currentElem = null;
let navitem= document.getElementById("contactlink");


navitem.onmouseover = function(event) {
    // before entering a new element, the mouse always leaves the previous one
    // if currentElem is set, we didn't leave the previous <td>,
    // that's a mouseover inside it, ignore the event
    if (currentElem) return;

    let target = event.target.closest('div');

    // we moved not into a <td> - ignore
    if (!target) return;

    // moved into <td>, but outside of our table (possible in case of nested tables)
    // ignore
    if (!navitem.contains(target)) return;

    // hooray! we entered a new <td>
    currentElem = target;
    onEnter(currentElem);
};


navitem.onmouseout = function(event) {
    // if we're outside of any <td> now, then ignore the event
    // that's probably a move inside the table, but out of <td>,
    // e.g. from <tr> to another <tr>
    if (!currentElem) return;

    // we're leaving the element – where to? Maybe to a descendant?
    let relatedTarget = event.relatedTarget;

    while (relatedTarget) {
        // go up the parent chain and check – if we're still inside currentElem
        // then that's an internal transition – ignore it
        if (relatedTarget == currentElem) return;

        relatedTarget = relatedTarget.parentNode;
    }

    // we left the <td>. really.
    onLeave(currentElem);
    currentElem = null;
};

// any functions to handle entering/leaving an element
function onEnter(elem) {
        //elem.style.background = 'pink';
    insertCanvas(elem,"canvasId");


    createPaperscript("canvasId");



    //document.body.appendChild(paper);
    // show that in textarea
 console.log(currentElem.tagName+" "+currentElem.className);
}

function onLeave(elem) {
    //elem.style.background = '';
    let toRemove= document.getElementById("remove");
    toRemove.parentNode.removeChild(toRemove);


    // show that in textareA
    console.log(toRemove.tagName+" "+elem.className);



}


function insertCanvas(element,canvasiD) {
   let div = document.createElement("div");
   div.setAttribute("id","remove")
    div.setAttribute("class","linkAni");

    let canvas = document.createElement("canvas");
    canvas.setAttribute("id",canvasiD);
    canvas.setAttribute("resize","true");
    console.log(canvas.height+" "+canvas.width)

    div.appendChild(canvas);
    element.appendChild(div);
    fitToContainer(element,div);


}

function fitToContainer(elem,toFit){
    toFit.style.position= "absolute";
    toFit.style.background="pink";
    let offsetTop= elem.offsetTop;
    let offsetLeft=elem.offsetLeft;
    let box = elem.getBoundingClientRect();
    console.log(offsetTop+" "+offsetLeft+" "+ toFit.style.left+" "+toFit.style.top+" "+box.top+" "+box.left)
}


function insertHomeCanvas() {
    insertCanvas("homelink","homeCanvas")
}

function insertContactCanvas() {
    insertCanvas("contactlink","contactCanvas")
}