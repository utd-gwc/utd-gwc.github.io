import React from "react";
import { Box, CheckBox, Header, SkipLink, Heading, ResponsiveContext, Menu } from "grommet";
import * as Icons from "grommet-icons";
import Logo from "./Logo.js";

function linkColor(isLightMode, isExpanded) {
    if (isLightMode) {
        if (!isExpanded) {
            return 'neutral-2';
        } else {
            return 'neutral-1';
        }
    } else {
        if (!isExpanded) {
            return 'brand';
        } else {
            return 'accent-1';
        }
    }
}

function StyledLink({ isLightMode, id, label, pad, isExpanded }) {
    return (
        <Box pad={pad != null ? { ...pad } : { right: 'small' }}>
            <SkipLink color={linkColor(isLightMode, isExpanded)} id={id} label={label} target="_self" />
        </Box>
    )
}

function getMenuLinksArr(isLightMode, isExpanded) {
    return (
        [
            <StyledLink id="events" label="Events" isLightMode={isLightMode} isExpanded={isExpanded} />,
            <StyledLink id="about" label="About" isLightMode={isLightMode} isExpanded={isExpanded} />,
            <StyledLink id="team" label="Team" isLightMode={isLightMode} isExpanded={isExpanded} />,
            <StyledLink id="contact" label="Follow Us" isLightMode={isLightMode} isExpanded={isExpanded} pad={{ right: 'medium' }} />,
        ]
    )
}

export default function NavBar({ scrollTop, isLightMode, setIsLightMode }) {
    const SCROLL_TOP_THRESHOLD = 20
    const isExpanded = scrollTop < SCROLL_TOP_THRESHOLD
    const size = React.useContext(ResponsiveContext)
    const menuLinks = getMenuLinksArr(isLightMode, isExpanded)
    return (
        <Header
            pad={{ left: "medium", right: "small", vertical: "small" }}
            elevation="xsmall"
            background={isExpanded ? "nav-background" : "nav-background-collapsed"}
            fill="horizontal"
            style={{ transition: "all .4s" }}
        >
            <Logo scrollTop={scrollTop} />
            {size !== 'small' ? (
                <Box direction="row" fill="horizontal" justify="end" align="center">
                    {menuLinks.map(x => { return x })}
                    <Box align="center" alignSelf="end" direction="row">
                        <CheckBox
                            toggle
                            checked={!isLightMode}
                            onChange={() => {
                                setIsLightMode(!isLightMode);
                            }}
                            label={
                                <Heading margin={{ vertical: "none" }} pad="none" level={3}>
                                    {isLightMode ? "🌞" : "🌙"}
                                </Heading>
                            }
                        />
                    </Box>
                </Box>
            ) : (
                    <Box direction="row" fill="horizontal" justify="end" align="center" >
                        <Menu
                            margin={{ right: 'medium' }}
                            label={<Icons.Menu color={!isExpanded && isLightMode ? 'white' : null} size={isExpanded ? "large" : "medium"} />}
                            icon={false}
                            dropAlign={{right: 'right', top: 'bottom'}}
                            dropBackground={{ color: isExpanded ? "nav-background" : "nav-background-collapsed", opacity: 'strong' }}
                            items={
                                menuLinks.map(x => {
                                    return {
                                        label: <Box fill="horizontal" align="center">
                                            {x}
                                        </Box>,
                                    }
                                }).concat([
                                    {
                                        label:
                                            <Box fill="horizontal" align="center">
                                                <Heading margin={{ vertical: "none" }} pad="none" level={3} color={linkColor(isLightMode, isExpanded)}>
                                                    {isLightMode ? "Dark Mode 🌙" : "Light Mode 🌞"}
                                                </Heading>
                                            </Box>,
                                        onClick: () => {
                                            setIsLightMode(!isLightMode);
                                        }
                                    }
                                ])
                            } />
                    </Box>
                )
            }
        </Header>
    )
}