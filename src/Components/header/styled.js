import styled from "styled-components";
import {Button, TextField} from "@material-ui/core";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;
    padding-bottom: 8px;
`;

export const sButton = styled(Button)`
    background-color: #0645AD !important; 
    color: #FFFFFF !important;
`;

export const sTextField = styled(TextField)`
    width:94%;
    &.focused{
        border: 1px solid #12824C !important;
    }
`;