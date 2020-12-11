import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Paragraph,
  Heading,
  Box,
  Text,
  Image
} from "grommet";
import ReactCardFlip from 'react-card-flip'
import * as Icons from "grommet-icons";

function CardFramework({ children }) {
  return (
    <Card height="medium" margin="medium" width="medium" background="card-background" elevation="medium" round="medium" flex="grow" pad="none" align="center" alignSelf="center">
      {children}
    </Card>
  )
}

function SharedCardFooter({ toggleShowFlyer, flyerUrl, showFlyer }) {
  return (
    <CardFooter align="center" direction="row-responsive" justify="between" gap="medium" pad={{ horizontal: "small" }} fill="horizontal" background="card-footer">
      <Button icon={<Icons.ShareOption color="icon-color" />} hoverIndicator />
      {flyerUrl != null && <Button primary label={<Text>{showFlyer ? "View Text" : "View Flyer"}</Text>} color="card-background" onClick={toggleShowFlyer} />}
      <Button icon={<Icons.More color="icon-color" />} hoverIndicator />
    </CardFooter>
  )
}

export default function EventCard(props) {
  const [showFlyer, setShowFlyer] = useState(false)
  const toggleShowFlyer = e => {
    setShowFlyer(!showFlyer)
  }
  return (
    <ReactCardFlip isFlipped={showFlyer}>
      <CardFramework>
        <CardHeader fill="horizontal" pad="small" align="small" justify="between" margin="none" pad="small" gap="medium" direction="row-responsive">
          <Heading level="2" margin="xsmall" textAlign="start" size="medium">
            {props.title}
          </Heading>
          <Box direction="column" justify="center" align="end">
            <Text>
              {props.date}
            </Text>
            <Text>
              {props.time || "TBD"}
            </Text>
          </Box>
        </CardHeader>
        <Box align="center" justify="center" pad="xsmall" margin="xsmall" height="large">
          <Paragraph size="medium" margin="medium" textAlign="center" truncate>{props.description}</Paragraph>
        </Box>
        <SharedCardFooter toggleShowFlyer={toggleShowFlyer} flyerUrl={props.flyerUrl} showFlyer={showFlyer} />
      </CardFramework>


      <CardFramework toggleShowFlyer={toggleShowFlyer} flyerUrl={props.flyerUrl} showFlyer={showFlyer}>
        <Box align="center" justify="center" pad="none" margin="none" height="large">
          <Image src={props.flyerUrl} fill="vertical" fit="contain" />
        </Box>
        <SharedCardFooter toggleShowFlyer={toggleShowFlyer} flyerUrl={props.flyerUrl} showFlyer={showFlyer} />
      </CardFramework>
    </ReactCardFlip>

  );
}
