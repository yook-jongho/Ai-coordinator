import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

interface ImgProperty {
    id: number;
    src: string;
}

interface Props {
    imgList: ImgProperty[];
}

const ImgBox = styled.div`
    width: 100%;
    padding-bottom: 60px;
    display: flex;
    overflow: hidden;
`;

const slideAnimation = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
`;

const ImgWrapper = styled.div`
    display: flex;
    animation: ${slideAnimation} 45s linear infinite;
`;

const Img = styled.img`
    width: 400px;
    height: 500px;
    border-radius: 3px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
`;

const ImgSlider = ({ imgList }: Props) => {
    const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIndex((prevIndex) => (prevIndex + 1) % imgList.length);
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, [imgList.length]);

    return (
        <ImgBox>
            <ImgWrapper
                style={{
                    width: `${imgList.length * 100}%`,
                    transform: `translateX(-${
                        index * (100 / imgList.length)
                    }%)`,
                }}
            >
                {imgList.map((img, idx) => (
                    <Img key={img.id} src={img.src} alt={`image-${idx}`} />
                ))}
            </ImgWrapper>
        </ImgBox>
    );
};

export default ImgSlider;
