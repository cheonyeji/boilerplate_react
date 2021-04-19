import React, { useState, useRef, useEffect } from 'react'
import { Button, Typography, Form } from 'antd';

const { Title } = Typography;

function WorkingPage() {

    let canvas;
    let canvasRef = useRef();
    let pos = {
        drawable: false,
        X: -1,
        Y: -1
    };
    let ctx;

    const initialrectInfo = { x: 0, y: 0, w: 0, h: 0 };
    const [Rect, setRect] = useState(initialrectInfo);

    useEffect(() => {
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        canvas.addEventListener("mousedown", initDraw);
        canvas.addEventListener("mousemove", draw);
        canvas.addEventListener("mouseup", finishDraw);
        canvas.addEventListener("mouseout", finishDraw);
    }, []);

    useEffect(() => {
        const rectStyle = { borderColor: 'red', borderWidth: 2 };
        drawRect(Rect, rectStyle);
    }, []);

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

    function initDraw(event) {
        ctx.beginPath();
        pos = { drawable: true, ...getPosition(event) };
        ctx.moveTo(pos.X, pos.Y);
        setRect({ x: pos.x, y: pos.y });
        console.log(pos.x, pos.y);
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


    const initialProducts = {
        name: "",
        image_array: [], // array of strings 
    };

    const [FileUrl, setFileUrl] = useState(null);
    const [products, setProducts] = useState(initialProducts);

    const onMultipleImgHandler = (event) => {
        if (event.target.files) {
            setProducts({ ...products, image_array: [...event.target.files] });
        }
        console.log("Update slider images", products);


        const imgFile = event.target.files[0];
        const imgUrl = URL.createObjectURL(imgFile);
        setFileUrl(imgUrl)

    };

    // const onUploadFileHandler = (event) => {
    //     const imgFile = event.target.files[0];
    //     const imgUrl = URL.createObjectURL(imgFile);
    //     setFileUrl(imgUrl)

    //     files = event.target.files;
    //     console.log("files에 들어있는 값 : ", files)
    // }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}>Annotation Workspace</Title>
            </div>

            <Form>
                <div style={{ position: 'relative', height: '600px', width: '600px', backgroundColor: '#efefef' }}>
                    <canvas ref={canvasRef} width="600px" height="600px" style={{ zIndex: 10, position: 'absolute' }} />
                    <img style={{ maxHeight: '100%', maxWidth: '100%', position: 'absolute' }} src={FileUrl} />
                </div>

                <br />


                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <input type="file" multiple onChange={onMultipleImgHandler} />
                </div>
                <br />
                <br />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button onClick>사진 업로드</Button>
                    <Button onClick>사진 다운로드</Button>
                </div>

            </Form>
        </div>
    )
}

export default WorkingPage