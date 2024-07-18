import styled from "styled-components";
import { COLORS } from "@/utils/constants";

export const HeaderContainer = styled.div`
    position: absolute;
    z-index: 10;
    width: calc(100% - 30px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0px 15px;
`;

export const HeaderButton = styled.button`
    color: ${COLORS.WHITE};
    outline: none;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 18px;

    &:hover {
        color: ${COLORS.BLUE}
    }
`;

export const HeaderButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    align-items: center;
`;

export const WeatherContainer = styled.div`
    position: relative; 
    height: 100vh;
`;

export const CityContainer = styled.div`
    position: absolute; 
    bottom: 0px; 
    width: 100%;
`;

export const GridDiv = styled.div`
    display: grid;  
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    padding: 10px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 320px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Btn = styled.button`
    color: ${COLORS.WHITE};
    cursor: pointer;
    outline: none;
    background-color: ${COLORS.BLACK};
    border: 2px solid ${COLORS.BLUE};
    border-radius: 5px;
    font-size: 18px;

    &:active {
        color: ${COLORS.BLUE};
        background-color: ${COLORS.WHITE};
    }
`;

export const SerachContainer = styled.div`
    border: 1px solid ${COLORS.BLUE};
    border-radius: 2px;
    padding: 2px;
    display: flex;
    align-items: center;
`;

export const SearchInput = styled.input`
    border: none;
    background-color: ${COLORS.BLACK};
    outline: none;
    color: ${COLORS.WHITE};
    height: 20px;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background-color: ${COLORS.BLACK};
    border: 2px solid ${COLORS.BLUE};
    border-radius: 10px;
    min-width: 350px;
    max-width: 500px;
    width: 100%;
    padding: 40px 10px;
    display: flex;
    align-items: center;
    justify-center: center;
    flex-direction: column;
    gap: 10px;
`;

export const ModalButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;