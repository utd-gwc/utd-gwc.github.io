import React from 'react';
import { Box, Heading, Paragraph, Button } from 'grommet'

export default function AboutSection(props) {

    return (
        <Box margin="medium" fill="horizontal">
            <Box fill="horizontal" align="start">
                <Box background="neutral-1" pad="medium" round="small">
                    <Heading level={3} size="medium" margin={{top: "none"}} textAlign="end">
                        @ UTD
                    </Heading>
                    <Paragraph size="medium">
                        @Annie please give me some words for here
                    </Paragraph>
                </Box>
            </Box>
            <Box fill="horizontal" align="end">
                <Box background="card-background" pad="medium" round="small">
                    <Heading level={3} size="medium" margin={{top: "none"}}>
                        Internationally
                    </Heading>
                    <Paragraph size="medium" textAlign="end">
                        Girls Who Code is an international non-profit organization working to close the gender gap in technology and lead the movement to inspire, educate and equip young women with the computing skills needed to pursue 21st century opportunities. Since launching in the United States in 2012, Girls Who Code has reached 185,000 girls through its programs (clubs, campuses, summer immersion programs, College Loops) and over 100 million people through campaigns, advocacy work, and New York Times best-selling series!
                    </Paragraph>
                </Box>
            </Box>
            <Box fill="horizontal" align="center" margin={{ bottom: "none" }}>
                <Heading level={4}>
                    Learn more about GWC from the founders!
                </Heading>
                <Button size="medium" secondary outlined label="Learn More" href="https://girlswhocode.com/" />
            </Box>
        </Box>
    )
}