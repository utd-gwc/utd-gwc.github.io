import React from "react";
import { Box, CheckBox, Header, SkipLink } from "grommet";
import Logo from "./Logo.js";

function linkColor(isLightMode, scrollTop) {
    if (isLightMode) {
        if (scrollTop > 20) {
            return 'neutral-2';
        } else {
            return 'neutral-1';
        }
    } else {
        if (scrollTop > 20) {
            return 'brand';
        } else {
            return 'accent-1';
        }
    }
}

function StyledLink({ isLightMode, scrollTop, id, label }) {
    return (
        <Box pad={{ right: 'small' }}>
            <SkipLink color={linkColor(isLightMode, scrollTop)} id={id} label={label} target="_self" />
        </Box>
    )
}

export default function NavBar({ scrollTop, isLightMode, setIsLightMode }) {
    return (
        <Header
            pad={{ left: "medium", right: "small", vertical: "small" }}
            elevation="xsmall"
            background={scrollTop < 20 ? "background" : "neutral-3"}
            style={{ transition: "all .4s" }}
        >
            <Logo scrollTop={scrollTop} />
            <Box direction="row" fill="horizontal" justify="end" align="center">
                <StyledLink id="events" label="Events" isLightMode={isLightMode} scrollTop={scrollTop} />
                <StyledLink id="team" label="Team" isLightMode={isLightMode} scrollTop={scrollTop} />
                <CheckBox
                    toggle
                    checked={!isLightMode}
                    onChange={() => {
                        setIsLightMode(!isLightMode);
                    }}
                />
            </Box>
        </Header>
    )
}