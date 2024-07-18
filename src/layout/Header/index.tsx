import React from "react";
import { CITIES, COLORS } from "@/utils/constants";
import { SVGS } from "@/components/svgs";
import { HeaderContainer, HeaderButton, SearchInput, HeaderButtonContainer, SerachContainer } from "@/styles";
import { useDispatch, useSelector } from "react-redux";
import { setCity, setTime } from "@/store/slices/weatherSlice";
import Modal from "@/components/Modal";
import { RootState } from "@/store";
import { OutPutTime } from "@/utils";

const Header = () => {
    const dispatch = useDispatch();
    const { time, type } = useSelector((state: RootState) => state.weather);
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState<string>("");
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);

    const FindCity = () => {
        if (search === "") return;
        const cityIndex = CITIES.findIndex((c: string) => c.toLowerCase().includes(search.toLowerCase()));
        if (cityIndex !== -1) {
            dispatch(setCity(CITIES[cityIndex]));
        }
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            dispatch(setTime(new Date()));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <HeaderContainer>
                <span style={{ fontSize: 20 }}>
                    {OutPutTime(time, type)}
                </span>
                <HeaderButtonContainer>
                    {isSearchOpen ?
                        <SerachContainer>
                            <SearchInput
                                value={search}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setSearch(event.target.value);
                                }}
                                onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                                    if (event.key === 'Enter') {
                                        FindCity()
                                    }
                                }}
                            />
                            <SVGS.CloseCircleSvg
                                fillColor="white"
                                width={15}
                                height={15}
                                handleClick={() => setIsSearchOpen(false)}
                            />
                        </SerachContainer>
                        :
                        <HeaderButton onClick={() => setIsSearchOpen(true)}>Search</HeaderButton>
                    }
                    <HeaderButton onClick={() => setOpen(true)}>Settings</HeaderButton>
                    <SVGS.ThemeSwitchSvg fillColor={COLORS.WHITE} width={20} height={20} />
                </HeaderButtonContainer>
            </HeaderContainer>
            <Modal open={open} setOpen={setOpen} />
        </>
    )
};

export default Header;