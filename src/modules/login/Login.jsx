import React from 'react';
import styled from 'styled-components';
import image from './assets/images/pngwing.com.png';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: #353740;
    position: relative;
    h1 {
        font-weight: 400 !important;
        margin: 0;
    }
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    position: absolute;
`;

const LoginForm = styled.form`
    width: 450px;
    height: 350px;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    color: white;
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
    height: 40px;
    outline: none;
    padding: 5px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
`;

const InputLabel = styled.label`
    width: 80%;
    text-align: left;
    margin-bottom: 30px;
`;

const Submit = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 10px;
    outline: none;
    border: none;
    font-size: 20px;
    margin-bottom: 10px;
    color: white;
    text-shadow: 0 0 5px var(--second-color);
    cursor: pointer;
    box-shadow: inset 0 0 0 2px white, 0 0 10px 3px var(--second-color),
        inset 0 0 10px 3px var(--second-color);
    background-color: transparent;
    transition: 100ms ease-in;
    :hover {
        background-color: var(--second-color);
        box-shadow: inset 0 0 0 2px var(--second-color),
            0 0 10px 3px var(--second-color),
            inset 0 0 10px 3px var(--second-color);
    }
`;

const LoaderWrap = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background: #353740;
    position: relative;
    h1 {
        font-weight: 400 !important;
        margin: 0;
        color: white;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Svg = styled.svg`
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`;

export const Login = () => {
    const [display, setDisplay] = React.useState(true);
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    const audio = new Audio(
        'https://github.com/Fenion/UI-4-drift-server/blob/master/src/modules/login/assets/audio/bg.mp3?raw=true'
    );
    audio.volume = 0.2;

    const handlePlay = () => {
        audio.play();
        audio.addEventListener('ended', () => audio.play());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplay(false);
    };

    const handleLoading = () => {
        setLoading(false);
    };

    React.useEffect(() => {
        return () => {
            audio.removeEventListener('ended', () => audio.play());
            audio.pause();
        };
    }, [audio]);

    if (!display) return null;
    return (
        <Wrapper>
            {loading && (
                <LoaderWrap>
                    <Svg
                        style={{
                            width: 200,
                            height: 200,
                        }}
                    >
                        <g>
                            <path
                                d="M 34.27864074707031 88.09458923339844 C 35.68327713012695 104.70855712890625 40.626075744628906 117.75264739990234 49.107032775878906 127.22687530517578 "
                                fill="none"
                                strokeWidth="4"
                                stroke="#222f3c"
                                transform="matrix(1 0 0 1 0 0)"
                            ></path>
                            <path
                                d="M 15.036738395690918 100.50626373291016 C 16.671178817749023 117.42973327636719 21.35288429260254 131.19125366210938 29.08185577392578 141.7908172607422 "
                                fill="none"
                                strokeWidth="4"
                                stroke="#222f3c"
                                transform="matrix(1 0 0 1 0 0)"
                            ></path>
                            <image
                                x="-234"
                                y="-297.5"
                                data-mantain-aspect-ratio="true"
                                href={image}
                                width="468"
                                height="595"
                                transform="matrix(3.65664e-18 0.0597175 -0.0597175 3.65664e-18 22.3942 87.9197)"
                                filter="hue-rotate(292deg)"
                            ></image>
                        </g>
                    </Svg>
                    <h1>Загрузка</h1>
                </LoaderWrap>
            )}
            <Video
                src="https://github.com/Fenion/UI-4-drift-server/blob/master/src/modules/login/assets/videos/bg.webm?raw=true"
                autoPlay
                muted
                loop
                onPlay={handlePlay}
                onCanPlay={handleLoading}
            />
            <LoginForm onSubmit={handleSubmit}>
                <h1>Авторизация</h1>
                <h5>
                    Добро пожаловать на{' '}
                    <span style={{ color: 'var(--second-color)' }}>
                        %SERVER_NAME%
                    </span>
                </h5>
                <InputLabel>
                    <Input type="text" placeholder="Логин" />
                </InputLabel>
                <InputLabel>
                    <Input type="password" placeholder="Пароль" />
                </InputLabel>
                <Submit>Войти</Submit>
                <a target="_blank" href="/register">
                    Регистрация
                </a>
            </LoginForm>
        </Wrapper>
    );
};
