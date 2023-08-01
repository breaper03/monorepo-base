import React from "react"
import {useState} from "react"
import {useUser} from "../../context/users/useUser"
import {FaUserCircle} from "react-icons/fa"
import {UserSettings} from "./menu/UserSettings"
import {UserAccount} from "./menu/UserAccount"
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, {AccordionProps} from '@mui/material/Accordion';
import MuiAccordionSummary, {AccordionSummaryProps} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props : AccordionProps) => (<MuiAccordion disableGutters elevation={0} square TransitionProps={{ unmountOnExit: true }} {...props}/>))(({theme}) => ({
  // border: `2px solid #6366F1`,
  margin: 5,
  backgroundColor: "transparent",
  color: "white",
  borderRadius: "1em",
  '&:not(:last-child)': {
    // borderBottom: 0
  },
  '&:before': {
    display: 'none',
  }
}));

const AccordionSummary = styled((props : AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={< ArrowForwardIosSharpIcon sx = {{ color: "#fafafa", fontSize: '0.9rem' }}/>}
      {...props}/>
  )) (({theme}) => ({
    color: "#fafafa",
    flexDirection: 'row-reverse',
    borderRadius: "1em",
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      color: "#fafafa",
      transform: 'rotate(90deg)'

    },
    '& .MuiAccordionSummary-content': {
      color: "#fafafa",
      marginLeft: theme.spacing(1)
    },
    '&:hover': {
      backgroundColor: "#3f4d5f",
    }
  }));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(1),
    color: "#fafafa",
    // borderTop: '2px solid #8284FF',
}));

export const Users = () => {
  
  const {currentUser} = useUser()

  const [menuSelection, setmenuSelection] = useState("profile")

  const [expanded, setExpanded] = React.useState<string | false>('panel0');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
  };

  const handleMenuChange = (selectedMenu: string) => {
    setmenuSelection(selectedMenu) 
  }

  const menus = [
    {title: "My Account", panel: "panel1", sons: [
      {name: "Profile", field: "profile", type: "component", link: <UserAccount />}, 
      {name: "Transactions", field: "transactions", type: "link", link: "user-transactions"}
    ]}, 
    {title: "Settings" , panel: "panel2", sons: [
      {name: "Change Password", field: "change-password", type: "component", component: ""}, 
      {name: "Set 2FA", field: "2FA", type: "component", link: ""}
    ]}, 
  ]

  return (
    <>
      <div className="h-screen bg-gray-800 w-full flex mx-auto flex-wrap justify-center">
        {/* sidebar actions */}
        <div className="bg-[#232c38] h-[45em] w-1/4 rounded-l-lg mt-16 p-3 shadow-2xl">
          <div className="flex items-start justify-center text-white text-[10em] mb-2 mt-5"> {/* user photo */}
            <FaUserCircle />
          </div>
          <div className="font-semibold text-white text-3xl flex items-start justify-center mb-5">
            <span>{currentUser.name} {currentUser.lastname}</span>
          </div>
          {/* <div className="bg-indigo-500 h-1 mb-2"></div> */}

            {/* Animation no run :( */}
            {/* {
              menus.map((menu) => (
                <Accordion expanded={expanded === menu.panel} onChange={handleChange(menu.panel)} key={Math.random()}>
                  <AccordionSummary aria-controls={`${menu.panel}-content`} id={`${menu.panel}-header`}>
                    <Typography>{menu.title}</Typography>
                  </AccordionSummary>
                    {menu.sons.map((son) => (
                      <AccordionDetails className="hover:bg-opacity-60 delay-100 accent-transparent" translate="yes" key={Math.random()}>
                        {typeof son.link !== "string" 
                          ? (
                              <div className="flex items-center justify-between w-full">
                                <button 
                                  className="flex items-center justify-center w-full" 
                                  onClick={() => handleMenuChange(son.field)}>{son.name}</button>
                              </div>
                            )
                          : (<div className="flex items-center justify-between w-full">
                              <a className="flex items-center justify-center w-full" href={son.link}>{son.name}</a>
                            </div>)}
                      </AccordionDetails>
                    ))}
                </Accordion>
              ))
            } */}

            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
              <AccordionSummary>My Account</AccordionSummary>
              <AccordionDetails className="items-start flex flex-col justify-center">
                <div className="flex items-center justify-start w-full transition delay-150 hover:bg-[#3f4d5f] rounded-lg">
                  <button 
                    className="flex items-center justify-start w-full py-2 px-8" 
                    onClick={() => handleMenuChange("profile")}>Profile</button>
                </div>
                <div className="flex items-center justify-between w-full transition delay-150 hover:bg-[#3f4d5f] rounded-lg mt-3">
                  <a className="flex items-center justify-start w-full py-2 px-8" 
                      href="user-transactions">Transaction</a>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
              <AccordionSummary>Security</AccordionSummary>
              <AccordionDetails className="items-start flex flex-col justify-start">
                <div className="flex items-center justify-between w-full transition delay-150 hover:bg-[#3f4d5f] rounded-lg">
                  <button 
                    className="flex items-center justify-start w-full py-2 px-8" 
                    onClick={() => handleMenuChange("change-password")}>Change Password</button>
                </div>
                <div className="flex items-center justify-between w-full transition delay-150 hover:bg-[#3f4d5f] rounded-lg mt-3">
                  <button 
                    className="flex items-center justify-start w-full py-2 px-8" 
                    onClick={() => handleMenuChange("2FA")}>Set 2FA</button>
                </div>
              </AccordionDetails>
            </Accordion>

        </div>

        {/* action selected */}
        <div className="bg bg-indigo-400 bg-opacity-60 h-[45em] w-1/2 rounded-r-lg mt-16 p-3 shadow-2xl">
          {
            menuSelection === "profile"
              ? (<UserAccount />)
              : menuSelection === "settings"
                ? (<UserSettings />)
                : menuSelection === "2FA"
                  ? (<div>2fa</div>)
                  : (<div className="text-red-500">ERROR</div>)
          }
        </div>
      </div>
    </>
  )
}