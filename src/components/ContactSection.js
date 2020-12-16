import React from 'react';
import { Box, Heading, Image } from 'grommet';
// import LinkedIn from '../static/logos/linkedin-icon.svg'
import Discord from '../static/logos/discord-4.svg'
import Gmail from '../static/logos/gmail-icon-3.svg'
import Facebook from '../static/logos/facebook-3.svg'
import Instagram from '../static/logos/instagram-2-1.svg'
import Teams from '../static/Microsoft_Teams-Logo.wine.svg'

function SocialLink({ isLightMode, socialInfo: { src, url, title }, key }) {
    return (
        <a key={key} href={url} target="_blank" referrer="noopener noreferrer" style={{ color: isLightMode ? "black" : "white" }}>
            <Box direction="row" align="center">
                <Box height="xxsmall" width="xxsmall" margin="small" align="center">
                    <Image src={src} fit="contain" fill="vertical" width="small" />
                </Box>
                <Heading level={3} margin={{ vertical: "none", horizontal: "small" }}>
                    {title}
                </Heading>
            </Box>
        </a>
    )
}

export default function ContactSection({ isLightMode }) {
    const socials = [
        {
            title: "@utdgwc",
            url: "https://www.instagram.com/utdgwc",
            src: Instagram
        },
        {
            title: "/utdgirlswhocode",
            url: "https://www.facebook.com/utdgirlswhocode",
            src: Facebook,
        },
        {
            title: "Discord",
            url: "https://discord.gg/JSyy29F7hY",
            src: Discord,
        },
        {
            title: "Teams",
            url: "https://bit.ly/2W8pxdL",
            src: Teams
        },
        // {
        //     src: LinkedIn,
        //     url: 'https://www.linkedin.com/in/utdgwc',
        //     title: "LinkedIn"
        // },
        {
            title: "Contact Us!",
            url: "mailto:utdgirlswhocode@gmail.com",
            src: Gmail
        },
    ]
    return (
        <Box align="center" basis="1/2" justify="center" margin="medium">
            <Box direction="column" align="start" justify="center">
                {socials.map((social, index) => {
                    return (
                        <SocialLink isLightMode={isLightMode} socialInfo={social} key={index} />
                    )
                })}
            </Box>
        </Box>
    )
}