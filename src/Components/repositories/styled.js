import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const Stab = styled(Tab)`
   border-radius: 16px;
   border: 1px solid #ccc;
   padding: 12px;
   user-select: none;
   margin: 8px;
   cursor: pointer;
   z-index: 99999;
   background-color: #ffff;

    &:focus {
        outline: none;
    }
    &.is-selected{
       box-shadow: 3px 2px 10px rgba(0,0,0, 0.5);
    }
`;
export const Stabs = styled(Tabs)`
   font-size: 16px;
   width: 100%;
   margin-top: 16px;
`;
export const StabList = styled(TabList)`
   list-style-type: none;
   padding: 4px;
   display: flex;
   margin: 0;
  
`;

StabList.tabsRole = 'TabList';

export const StabPanel = styled(TabPanel)`
   display: none;
   min-height: 40vh;
   paddin: 8px;
   margin-top: -5px;
   border: 1px solic "#ccc";
   


   &.is-selected{
       display: block;
   }
   `;
StabPanel.tabsRole = 'TabPanel';