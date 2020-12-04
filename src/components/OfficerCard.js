import React from "react";
import {
    Button,
    Heading,
    Box, Text
} from "grommet";
import * as Icons from "grommet-icons";

function RenderLinks({ externalLinks }) {
    if (externalLinks == null) {
        return null
    } else {
        return (
            <div>
                {externalLinks['GITHUB'] != null &&
                    <Button icon={<Icons.Github color="accent-3" />} href={externalLinks['GITHUB']} target="_blank" referrer="noreferrer" />
                }
                {externalLinks['LINKEDIN'] != null &&
                    <Button icon={<Icons.Linkedin color="accent-3" />} href={externalLinks['LINKEDIN']} target="_blank" referrer="noreferrer" />
                }
                {externalLinks['INSTAGRAM'] != null &&
                    <Button icon={<Icons.Instagram color="accent-3" />} href={externalLinks['INSTAGRAM']} target="_blank" referrer="noreferrer" />
                }
                {externalLinks['WEBSITE'] != null &&
                    <Button icon={<Icons.Domain color="accent-3" />} href={externalLinks['WEBSITE']} target="_blank" referrer="noreferrer" />
                }
            </div>
        )
    }
}

export default function OfficerCard(props) {
    const profilePhotoUrl = props.profilePhotoUrl != null ? "url('" + props.profilePhotoUrl + "\n')" : "url('https://avatars2.githubusercontent.com/u/72423830?s=400&u=4a017c61d36667ab14429abaf655243af85988a9&v=4')";
    return (
        <Box>
            {/* <Box align="start" justify="start" pad="small" direction="row" alignSelf="start">
                <Button primary color="brand" hoverIndicator={false} disabled={false} reverse={false} />
            </Box> */}
            <Box align="center" justify="center" pad="xsmall" margin="xsmall">
                <Box align="center" justify="center" pad="xlarge" margin="medium" background={{ "dark": false, "color": "light-2", "image": profilePhotoUrl }} round="full" />
                <Heading level="3" size="medium" margin="xsmall" textAlign="center">
                    {props.name}
                </Heading>
                <Text textAlign="center">
                    {props.position}
                </Text>
                {/* <Paragraph size="small" margin="medium" textAlign="center">
                    {props.bio}
                </Paragraph> */}
                <Box align="center" justify="center" pad="small" direction="row-responsive" flex alignSelf="center" basis="xxsmall" gap="small" margin="xsmall">
                    <RenderLinks externalLinks={props.externalLinks} />
                </Box>
            </Box>
        </Box >
    );
}
