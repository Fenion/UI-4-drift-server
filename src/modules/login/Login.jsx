import React from "react";
import styled from "styled-components";
import video from "./assets/videos/bg.webm";
import sound from "./assets/audio/bg.mp3";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: #353740;
    position: relative;
    h1 {
        font-weight: 100 !important;
    }
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    position: absolute;
`;

const LoginForm = styled.div`
    width: 350px;
    height: 350px;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    color: var(--second-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    a {
        text-decoration: none;
        color: var(--second-color);
    }
`;

const Input = styled.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    border-radius: 10px;
`;

const InputLabel = styled.label`
    width: 80%;
    text-align: left;
    h5 {
        margin: 0;
        font-weight: 100;
    }
    margin-bottom: 30px;
`;

const Submit = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 10px;
    outline: none;
    border: none;
    margin-bottom: 10px;
    background-color: var(--second-color);
`;

export const Login = () => {
    const audio = new Audio(sound);
    audio.volume = 0.2;

    React.useEffect(() => {
        audio.play();
        audio.addEventListener("ended", () => audio.play());
        return () => {
            audio.removeEventListener("ended", () => audio.play());
            audio.pause();
        };
    }, [audio]);

    return (
        <Wrapper>
            <Video
                src="https://drive.google.com/file/d/1SQrWIp1kBHffMabnm7LKQ9mKBhXt4k68/view?usp=sharing"
                autoPlay
                muted
                loop
            />
            <LoginForm>
                <h1>Авторизация</h1>
                <InputLabel>
                    <h5>Логин</h5>
                    <Input type="text" placeholder="Логин" />
                </InputLabel>
                <InputLabel>
                    <h5>Пароль</h5>
                    <Input type="password" placeholder="Пароль" />
                </InputLabel>
                <Submit>Войти</Submit>
                <a href="/register">Регистрация</a>
            </LoginForm>
        </Wrapper>
    );
};
