import { useState, useEffect } from 'react';



export default function sketch(p){
    let canvas;
    var img;

    let lines=2000;
    let num = 2;
    let range = 6;

    let alllines=[];



    p.preload =() =>{
        img=p.loadImage('/me5.jpg');
    }



    p.setup = () => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        img.resize(p.windowWidth-300,p.windowHeight+200);

        for(let j=0;j<lines;j++){
            let point = new Object();
            point.ax=[];
            point.ay=[];
            alllines.push(point);
            for ( let i = 0; i < num; i++ ) {
                point.ax[i] = p.width / 1.5;
                point.ay[i] = p.height / 2;
            }
        }

        p.frameRate(30);
    }

    p.draw = () => {

        for(let i=0;i<alllines.length;i++){
            drawline(alllines[i].ax,alllines[i].ay)
        }

    };
    function drawline(ax,ay){
        for ( let i = 1; i < num; i++ ) {
            ax[i - 1] = ax[i];
            ay[i - 1] = ay[i];
        }

        // Put a new value at the end of the array
        ax[num - 1] += p.random(-range, range);
        ay[num - 1] += p.random(-range, range);

        // Constrain all points to the screen
        ax[num - 1] = p.constrain(ax[num - 1], 0, p.width);
        ay[num - 1] = p.constrain(ay[num - 1], 0, p.height);



        // Draw a line connecting the points
        for ( let j = 1; j < num; j++ ) {
            let val = j / num * 204.0 + 51;

            /*if(p.brightness(img.get(p.round(ax[j]),p.round(ay[j])))> 70 || ax[j] < 0 || ax[j]> p.windowWidth || ay[j] < 0 || ay[j] > p.windowHeight){

            }*/


            p.stroke(img.get(ax[j],ay[j]));
            p.line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
        }

        p.windowResized = ()=>{
            p.clear();
            canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            img.resize(p.windowWidth-200,p.windowHeight);
            alllines=[];

            for(let j=0;j<lines;j++){
                let point = new Object();
                point.ax=[];
                point.ay=[];
                alllines.push(point);
                for ( let i = 0; i < num; i++ ) {
                    point.ax[i] = p.width / 1.5;
                    point.ay[i] = p.height / 2;
                }
            }
        }
    }

}
