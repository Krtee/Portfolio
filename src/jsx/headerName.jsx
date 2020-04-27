import paper from 'paper';
import React from "react";


export default function Paperscript() {
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.clear();

//-------------------------------------
//-------------------------------------
    var numPaths = 20; //number of paths
    var pointsMin = 2; //minimum number of waves in a path
    var pointsMax = 20; //maximum number of waves in a path
    var pathColor = '#292928';
    var pathWidth = 2;
    var pathExtraHeight = 1000;
//-------------------------------------
    var textcontent = 'MINH VU \nNGUYEN';
    var yText = 0; //minimum distance between top and text
    var xText = 0; //minimum distance between left border and text
    var yTextdiff = 50; //minimum y-direction differences between all texts; the higher the number the closer it gets
    var xTextdiff = 50; //minimum x-direction differences between all texts; the higher the number the closer it gets
    var textsize = 0.1;
    var textcolor = 'black';
    var textfont = 'MORGANITE';
    var fontweight = 'normal';
//-------------------------------------
//-------------------------------------


    var maxheight = height / numPaths;
    var mousePos = height / 2;
    var pathMaxHeights = [];
    var paths = [];
    var pathClones = [];
    var pathHeights = [];
    var pathCenterY = -height / numPaths - (height / (numPaths * 2));
    var texts = [];
    var groups = [];
    var intersection = [];

    window.onload = function () {
        paper.install(window)
        paper.setup('myCanvas');



        for (var i = 0; i < numPaths + 1; i++) {
            pathCenterY += height / numPaths;
            pathHeights.push(pathCenterY);
            pathMaxHeights.push(mousePos.y);
            var path = new paper.Path();
            var pathObject = {
                path: path,
                pathCenterY: pathCenterY,
                pathMaxHeight: mousePos.y,
                points: 0
            }
            paths.push(pathObject);
            //paths[i].path.fillColor = '#0f0f0f';
            paths[i].path.strokeColor = pathColor;
            paths[i].path.strokeWidth = pathWidth;
            initializePath(paths[i]);

            var text = new paper.PointText({
                point: [width / 2 + xText + getRndInteger(-width / xTextdiff, width / xTextdiff), height / 2 + yText + getRndInteger(-height / yTextdiff, height / yTextdiff)],
                content: textcontent,
                fillColor: textcolor,
                fontFamily: textfont,
                fontWeight: fontweight,
                fontSize: width * textsize,
                lineHeight: 0.1
            })
            texts.push(text);

            /*var pathClone= paths[i].path.clone()
            pathClones.push(pathClone);*/


        }
        //console.log("screenwidth: " + width + "screenHeight: " + view.size.height)

        /*for (var i = 0; i <numPaths+1; i++) {
            var layer = new paper.Layer();
            layer.activate();
            layer.addChild(pathClones[i]);
            layer.addChild(texts[i]);
            layer.addChild(paths[i].path);


            groups.push(new paper.Group({
                children: [pathClones[i], texts[i]],
                clipped: true,
                fillColor: textcolor
            }));
         }
         */


        function initializePath(path) {
            path.points = 0;
            path.path.segments = [];
            path.path.add(new paper.Point(-500, height));
            path.path.add(new paper.Point(-100, path.pathCenterY));
            var thisPathpoints = getRndInteger(pointsMin, pointsMax);
            var distancebetweenpoints = width / (thisPathpoints * 1.5);
            var pointsX = randomSpacedIntervalV1(0, width, thisPathpoints, distancebetweenpoints);
            pointsX.sort(function (a, b) {
                return a - b
            });
            for (var i = 0; i < thisPathpoints - 1; i++) {
                var point = new paper.Point(pointsX[i], path.pathCenterY);
                path.path.add(point);
                path.points++;
                //console.log(pointsX[i]);
            }
            path.path.add(new paper.Point(width + 100, path.pathCenterY));
            path.path.add(new paper.Point(width + 500, height));
            //path.path.fullySelected = true;
            path.points += 4;

            console.log("initPath, pathhash: " + path.path + " pathCenter: " + path.pathCenterY + " pathPoints: " + path.points);
        }

        function onFrame(event) {

            //console.log(pathHeight);
        }

        function onMouseMove(event) {
            mousePos = event.point;
        }

        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function changeTextPos(text) {
            text.position = new paper.Point(width / 2 + xText + getRndInteger(-width / xTextdiff, width / xTextdiff), height / 2 + yText + getRndInteger(-height / yTextdiff, height / yTextdiff));
            text.fontSize = width * textsize;
        }

        function randomSpacedIntervalV1(min, max, count, spacing) {
            var available = max - min - spacing * (count - 1);
            console.log("available " + available);
            if (available < 0) return false;
            // not able to fit the this amount of values in this range

            var arr = [];
            for (var i = 0; i < count; i++) {
                var temp = Math.round(Math.random() * available / (count - 1) * 2);
                arr[i] = (i == 0) ? min + temp : arr[i - 1] + temp + spacing;
                available -= temp;
            }
            return arr;
        }


// Reposition the path whenever the window is resized:
        function onResize(event) {
            width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            pathCenterY = -height / numPaths - (height / (numPaths * 2));

            if (width < 500) {
                yText = 0;
                textsize = 0.3;
                xText = 0;
            }

            for (var i = 0; i < numPaths + 1; i++) {
                if (width < 500) {
                    texts[i].content = "MINH VU NGUYEN";
                }
                changeTextPos(texts[i]);
                pathCenterY += height / numPaths;
                paths[i].pathCenterY = pathCenterY;
                initializePath(paths[i]);

                //pathClones[i].copyContent(paths[i].path);
            }
        }

    }
    function draw(event) {
        for (var a = 1; a < paths.length; a++) {
            if (intersection[a - 1]) {
                intersection[a - 1].remove();
            }
            if (groups[a - 1]) {
                groups[a - 1].remove();
            }

            paths[a].pathMaxHeight += (paths[a].pathCenterY - mousePos.y - paths[a].pathMaxHeight) / Math.floor(Math.random() * 50 + 1);
            if (paths[a].pathMaxHeight > maxheight + pathExtraHeight) {
                paths[a].pathMaxHeight = maxheight + pathExtraHeight;
            } else if (paths[a].pathMaxHeight < -maxheight - pathExtraHeight) {
                paths[a].pathMaxHeight = -maxheight - pathExtraHeight;
            }
            for (var i = 1; i < paths[a].points - 2; i++) {
                var sinSeed = event.count + (i + i % 10) * 100;
                var sinHeight = Math.sin(sinSeed / 200) * paths[a].pathMaxHeight;
                var yPos = Math.sin(sinSeed / 100) * sinHeight + paths[a].pathCenterY;
                paths[a].path.segments[i].point.y = yPos;
                //pathClones[a].segments[i].point.y = yPos;
            }
            //pathClones[a].smooth({type: 'continuous'});
            //paths[a].path.smooth({type: 'continuous'});
            intersection[a - 1] = paths[a - 1].path.subtract(paths[a].path);
            intersection[a - 1].fillColor = "black";
            groups[a - 1] = new paper.Group({
                children: [intersection[a - 1], texts[a - 1]],
                clipped: true
            });

        }
    }

    // Most return null
    return null;
}

