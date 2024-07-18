import React from "react";
import { ModalContent, ModalOverlay, ModalButtonContainer } from "@/styles"
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setType, setUnit } from "@/store/slices/weatherSlice";
import { OutPutTime } from "@/utils";

interface IModal {
    open: boolean,
    setOpen: (value: boolean) => void
}

const Modal: React.FC<IModal> = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const { time, unit, type } = useSelector((state: RootState) => state.weather);
    const [unitValue, setUnitValue] = React.useState<string>("");
    const [typeValue, setTypeValue] = React.useState<'AM/PM' | '24H'>('AM/PM');

    const SaveSetting = () => {
        dispatch(setType(typeValue));
        dispatch(setUnit(unitValue));
        setOpen(false);
    }

    React.useEffect(() => {
        setUnitValue(unit);
        setTypeValue(type);
    }, [unit, type]);

    return (
        <>
            {open ?
                <ModalOverlay>
                    <ModalContent>
                        <h2>Setting</h2>
                        <h4 style={{ marginTop: 10 }}>Units</h4>
                        <ModalButtonContainer>
                            <Button
                                styles={{ padding: 5, width: 100 }}
                                isActive={unitValue === 'imperial'}
                                onClick={() => setUnitValue('imperial')}
                            >Imperial</Button>
                            <Button
                                styles={{ padding: 5, width: 100 }}
                                isActive={unitValue === 'metric'}
                                onClick={() => setUnitValue('metric')}
                            >Metric</Button>
                            <Button
                                styles={{ padding: 5, width: 100 }}
                                isActive={unitValue === 'standard'}
                                onClick={() => setUnitValue('standard')}
                            >Standard</Button>
                        </ModalButtonContainer>
                        <h4 style={{ marginTop: 20 }}>Time</h4>
                        <ModalButtonContainer>
                            <Button
                                styles={{ padding: 5, width: 100 }}
                                isActive={typeValue === 'AM/PM'}
                                onClick={() => setTypeValue('AM/PM')}
                            >AM/PM</Button>
                            <Button
                                styles={{ padding: 5, width: 100 }}
                                isActive={typeValue === '24H'}
                                onClick={() => setTypeValue('24H')}
                            >24H</Button>
                        </ModalButtonContainer>
                        <br />
                        <ModalButtonContainer>
                            <Button styles={{ padding: 5, width: 100 }} onClick={() => setOpen(false)}>Cancel</Button>
                            <Button styles={{ padding: 5, width: 100 }} onClick={() => SaveSetting()}>Save</Button>
                        </ModalButtonContainer>
                        <span style={{ fontSize: 20, marginTop: 20 }}>
                            {OutPutTime(time, typeValue)}
                        </span>
                    </ModalContent>
                </ModalOverlay> : null}
        </>
    )
};

export default Modal;