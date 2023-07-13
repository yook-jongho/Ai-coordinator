import React from "react";
import styled from "styled-components";
import ImgSlieder from "./ImgSlider";
import closetImg from "../img/closetImg.png";

const Main = styled.div`
    width: auto;
    margin-top: 3rem;
    background: linear-gradient(to bottom, white, lightgray);
    .text {
        text-align: center;
        padding: 30px;
        h1 {
            margin: 0px;
            font-size: 60px;
        }
        p {
            font-size: 20px;
        }
    }
`;

const Content = styled.div`
    width: 1080px;
    margin: 6.5rem auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    p {
        font-size: 20px;
    }
    img {
        width: auto;
        height: 300px;
        margin-left: 3rem;
        // float: right;
        // margin-top: -100px;
        // margin-bottom: 6rem;
        // box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
        // transform: perspective(800px) rotateY(-15deg);
    }
    .list {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    ul {
        list-style: none;
    }
    li {
        margin: 1rem;
        padding: 10px;
        // border-left: 3px solid lightgray;
        font-size: 1.5rem;
    }
`;

const Hr = styled.hr`
    width: 1080px;
    margin: 6rem auto;
`;

const Last = styled.div`
    width: auto;
    height: 150px;
    padding: 20px;
    text-align: center;
    background-color: black;
    color: white;
    font-size: 30px;
`;

const Footer = styled.footer`
    width: 1080px;
    margin: 0 auto;
    padding: 40px;
    ul {
        list-style: none;
    }
    li {
        margin-bottom: 5px;
    }
`;

const templist = [
    {
        id: 1,
        src: "https://image.musinsa.com/images/codimap/list/2021040511171200000079587.jpg",
    },
    {
        id: 2,
        src: "https://image.musinsa.com/images/codimap/list/2023061513452000000077118.jpg",
    },
    {
        id: 3,
        src: "https://image.musinsa.com/images/codimap/list/2022060814274700000030805.jpg",
    },
    {
        id: 4,
        src: "https://image.musinsa.com/images/codimap/list/2021040511171200000079587.jpg",
    },
    {
        id: 5,
        src: "https://image.musinsa.com/images/codimap/list/2023061513452000000077118.jpg",
    },
    {
        id: 6,
        src: "https://image.musinsa.com/images/codimap/list/2022060814274700000030805.jpg",
    },
];

const MainPage = () => {
    return (
        <>
            <Main>
                <div className="text">
                    <h1>나만의 코디네이터, 에코</h1>
                    <p>
                        손쉽게 자신만의 스타일을 추천받아 보세요.
                        <br /> 에코가 당신에게 알맞는 코디를 추천해줄 거에요.
                    </p>
                </div>
                <ImgSlieder imgList={templist}></ImgSlieder>
            </Main>
            <Content>
                <div>
                    <h1>나만의 온라인 옷장</h1>
                    <p>
                        언제 어디서나 내 옷을 관리해보세요.사진을 찍어 올리면,
                        <br /> 자동으로 에코가 판별해 줍니다.
                        <br /> 에코를 통해 내가 가진 옷을 보다 쉽고 간편하게
                        확인하여,
                        <br /> 중복된 소비를 방지하고 기존 옷들을 토대로
                        어울리는
                        <br />
                        옷을 구매하거나 연출하는데도 도움을 줍니다.
                    </p>
                </div>
                <div className="list">
                    <ul>
                        <li>TOP</li>
                        <li>BOTTOM</li>
                        <li>OUTER</li>
                        <li>SHOES</li>
                        <li>ACCESSORY</li>
                    </ul>
                    <img src={closetImg}></img>
                </div>
            </Content>
            <Hr />
            <Content>
                <div>
                    <h1>코디 추천</h1>
                    <p>
                        어떻게 입을지 고민이 된다면, 지금 내가 입고 싶은 옷의
                        사진을 업로드 하세요.
                        <br /> 그러면 그 옷에 맞춰 입을 아이템들을 우리 에코가
                        추천해 드립니다.
                        <br /> 에코를 통해 보다 쉽고 빠르게, 본인만의 스타일
                        추천을 받을 수 있습니다.
                    </p>
                </div>
            </Content>
            <Hr />
            <Content>
                <div>
                    <h1>코디 공유 게시판</h1>
                    <p>
                        에코에게 추천받은 코디맵을 다른 사람들과 공유해 보세요!
                        <br />
                        추천 받은 코디를 다른 사람들과 공유하는 소통의 장이
                        마련되어 있습니다.
                        <br /> 우리 우든튼 에코를 통해 자신의 코디를 남들에게
                        뽐내고, 타인의 코디를 참고하는 등 활발한 참여를
                        해보세요!
                    </p>
                </div>
            </Content>
            <Last>
                나만의 스타일리스트 에코
                <br /> 지금 바로 사용해보기
            </Last>
            <Footer>
                <ul>
                    <li>@Copyright (주)에이아이코디네이터</li>
                    <li>팀명: 에코</li>
                    <li>팀장: 박병규</li>
                    <li>팀원: 김재민, 손문기, 육종호</li>
                    <li>문의번호: 010-1234-5678</li>
                </ul>
            </Footer>
        </>
    );
};

export default MainPage;
