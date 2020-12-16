import React from 'react';

import { Box, Footer, Image, Heading, SkipLink } from 'grommet';
import * as Icons from "grommet-icons";

import logo from "./../static/gwc2020_website_logo_nobg.png";
import WiCySLogo from './../static/WiCyS_UTD_logo.png';
import WWCLogo from './../static/wwc-logo-transparent.png';

export default function FooterSection() {

    return (
        <Footer fill="horizontal" background="footer-background" flex="grow" pad="medium">
            <Box width="medium">
                <Image
                    src={logo}
                    fit="contain"
                    fill="vertical"
                    a11yTitle="UTD Girls Who Code logo"
                />
                <Heading textAlign="center" margin="none" level={2} color="black">UTD Girls Who Code</Heading>
            </Box>
            <Box fill="vertical" flex="grow">
                <Box basis="1/4" direction="row" justify="between" align="center" margin={{ vertical: "small", horizontal: "medium" }}>
                    <Box align="center" justify="center" basis="1/2" fill="vertical">
                        <Icons.Link color="white" />
                    </Box>
                    <Box align="center" basis="1/2" justify="center" fill="vertical">
                        <Heading color="white" level={3} margin="none">
                            Sister Organizations
                        </Heading>
                        <Heading level={3} margin="none">
                            <span role="img" aria-label="female technologists">👩‍💻 👩‍💻 👩‍💻</span>
                        </Heading>
                    </Box>
                </Box>
                <Box basis="3/4" direction="row" align="center" justify="between" margin="medium">
                    <Box basis="1/2" align="center" fill="vertical" justify="between">
                        <SkipLink color="link-color" id={"events"} label={"Upcoming Events"} target="_self" />
                        <SkipLink color="link-color" id={"about"} label={"About Us"} target="_self" />
                        <SkipLink color="link-color" id={"team"} label={"Our Team"} target="_self" />
                        <SkipLink color="link-color" id={"contact"} label={"Follow Us"} target="_self" />
                    </Box>
                    <Box basis="1/2" align="center" fill="vertical" justify="between">
                        <Box width="xsmall">
                            <a href="https://utdwwc.com/" target="_blank" referrer="noreferrer">
                                <Image
                                    src={WWCLogo}
                                    fit="contain"
                                    fill="horizontal"
                                    a11yTitle="UTD Women Who Compute logo"
                                />
                            </a>
                        </Box>
                        <Box width="xsmall">
                            <a href="https://utdwwc.com/wicys.html" target="_blank" referrer="noreferrer">
                                <Image
                                    src={WiCySLogo}
                                    fit="contain"
                                    fill="horizontal"
                                    a11yTitle="UTD Women in CyberSecurity logo"
                                />
                            </a>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Footer>
    )
}