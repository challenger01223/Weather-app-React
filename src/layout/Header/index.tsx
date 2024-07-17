import React from "react";
import styled from 'styled-components';
import { COLORS } from "@/utils/constants";
import { SVGS } from "@/components/svgs";

const HeaderDiv = styled.div`
    display: flex;
    height: 40px;
    justify-content: space-between;
    align-items: center;
`;

const TimeSpan = styled.span`
    font-size: 20px;
`;

const HeaderBtn = styled.button`
    color: ${COLORS.WHITE};
    cursor: pointer;
    outline: none;
    background-color: transparent;
    border: none;
    font-size: 18px;

    &:hover {
        color: ${COLORS.BLUE}
    }
`;

const Header = () => {
    const [time, setTime] = React.useState<Date>(new Date());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <HeaderDiv>
            <TimeSpan>
                {time.getHours()}:{`${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}`}
            </TimeSpan>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '10px'
            }}>
                <HeaderBtn>Search</HeaderBtn>
                <HeaderBtn>Settings</HeaderBtn>
                <SVGS.ThemeSwitchSvg fillColor={COLORS.WHITE} width={20} height={20} />
            </div>
        </HeaderDiv>
    )
};

export default Header;