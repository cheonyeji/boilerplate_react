import React, { useRef, useState, useEffect } from "react";

function Draw(props) {

    let canvas;
    let canvasRef = useRef();
    let pos = {
        drawable: false,
        X: -1,
        Y: -1
    };
    let ctx;

    useEffect(() => {
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        canvas.addEventListener("mousedown", initDraw);
        canvas.addEventListener("mousemove", draw);
        canvas.addEventListener("mouseup", finishDraw);
        canvas.addEventListener("mouseout", finishDraw);
    }, []);

    function initDraw(event) {
        ctx.beginPath();
        pos = { drawable: true, ...getPosition(event) };
        ctx.moveTo(pos.X, pos.Y);
    }

    function draw(event) {
        if (pos.drawable) {
            pos = { ...pos, ...getPosition(event) };
            ctx.lineTo(pos.X, pos.Y);
            ctx.stroke();
        }
    }

    function finishDraw() {
        pos = { drawable: false, X: -1, Y: -1 };
    }

    function getPosition(event) {
        return { X: event.offsetX, Y: event.offsetY };
    }

  // draw rectangle
  const drawRect = (info, style = {}) => {
    const { x, y, w, h } = info;
    const { borderColor = 'black', borderWidth = 1 } = style;
 
    ctx.beginPath();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.rect(x, y, w, h);
    ctx.stroke();
  }

    return (
        <>
            <canvas ref={canvasRef} width="1000" height={"1000"} />
        </>
    );
}

export default Draw;

// import React, { useRef, useEffect } from 'react';
 
// function Draw() {
//   const canvas = useRef();
//   let ctx = null;
 
//   // initialize the canvas context
//   useEffect(() => {
//     // dynamically assign the width and height to canvas
//     const canvasEle = canvas.current;
//     canvasEle.width = canvasEle.clientWidth;
//     canvasEle.height = canvasEle.clientHeight;
 
//     // get context of the canvas
//     ctx = canvasEle.getContext("2d");
//   }, []);
 
//   useEffect(() => {
//     const r1Info = { x: 20, y: 30, w: 100, h: 50 };
//     const r1Style = { borderColor: 'red', borderWidth: 10 };
//     drawRect(r1Info, r1Style);
 
//     const r2Info = { x: 100, y: 100, w: 80, h: 150 };
//     drawRect(r2Info);
 
//     const r3Info = { x: 250, y: 80, w: 80, h: 120 };
//     drawFillRect(r3Info, { backgroundColor: 'green' });
 
//     const r4Info = { x: 200, y: 220, w: 100, h: 50 };
//     drawFillRect(r4Info);
//   }, []);
 
//   // draw rectangle
//   const drawRect = (info, style = {}) => {
//     const { x, y, w, h } = info;
//     const { borderColor = 'black', borderWidth = 1 } = style;
 
//     ctx.beginPath();
//     ctx.strokeStyle = borderColor;
//     ctx.lineWidth = borderWidth;
//     ctx.rect(x, y, w, h);
//     ctx.stroke();
//   }
 
//   // draw rectangle with background
//   const drawFillRect = (info, style = {}) => {
//     const { x, y, w, h } = info;
//     const { backgroundColor = 'black' } = style;
 
//     ctx.beginPath();
//     ctx.fillStyle = backgroundColor;
//     ctx.fillRect(x, y, w, h);
//   }
 
//   return (
//     <>
//       <canvas ref={canvas} width="1000" height={"1000"}/>
//     </>
//   );
// }
 
// export default Draw;