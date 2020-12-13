import React from "react";
import { Box, CheckBox, Header, SkipLink, Heading } from "grommet";
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

export default function NavBar({ scrollTop, isLightMode, setIsLightMode }) {
    const SCROLL_TOP_THRESHOLD = 20
    const isExpanded = scrollTop < SCROLL_TOP_THRESHOLD
    return (
        <Header
            pad={{ left: "medium", right: "small", vertical: "small" }}
            elevation="xsmall"
            background={isExpanded ? "nav-background" : "nav-background-collapsed"}
            fill="horizontal"
            style={{ transition: "all .4s"}}
        >
            <Logo scrollTop={scrollTop} />
            <Box direction="row" fill="horizontal" justify="end" align="center">
                <StyledLink id="events" label="Events" isLightMode={isLightMode} isExpanded={isExpanded} />
                <StyledLink id="team" label="Team" isLightMode={isLightMode}  isExpanded={isExpanded} pad={{ right: 'medium' }} />
                <Box align="center" alignSelf="end" direction="row">
                    <CheckBox
                        toggle
                        checked={!isLightMode}
                        onChange={() => {
                            setIsLightMode(!isLightMode);
                        }}
                        label={
                            <Heading margin={{vertical: "none"}} pad="none" level={3}>
                                {isLightMode ? "🌞" : "🌙"}
                            </Heading>
                        }
                    />
                </Box>
            </Box>
        </Header>
    )
}