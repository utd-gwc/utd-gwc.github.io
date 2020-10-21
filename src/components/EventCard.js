import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Paragraph,
  Heading,
} from "grommet";
import * as Icons from "grommet-icons";

export default function EventCard(props) {
  return (
    <Card height="medium" margin="medium" width="medium" background="card-background" elevation="medium">
      <CardHeader pad="small" margin="none" wrap>
        <Heading level="3" margin="none">
          {props.title}
        </Heading>
        <Heading level="4" margin="none">
          {props.date}
        </Heading>
      </CardHeader>
      <CardBody overflow="auto" pad="medium">
        <Paragraph margin="none">{props.description}</Paragraph>
      </CardBody>
      <CardFooter
        pad={{ horizontal: "small" }}
        background="card-footer"
      >
        <Button icon={<Icons.ShareOption color="icon-color" />} hoverIndicator />
        <Button icon={<Icons.More color="icon-color" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
}
