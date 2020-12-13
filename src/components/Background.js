import React from "react";
import { Box } from "grommet";

import { lightTheme, darkTheme } from '../hooks/useGWCTheme'

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function LeftFacingSemicircle({ isLightMode }) {
    const strokeColor = isLightMode ? lightTheme.global.colors["neutral-1"] : darkTheme.global.colors.white
    return (
        <Box height="medium" alignSelf="end">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" height="auto" width="auto">
                <path d="M 100 100 A 50 50 0 1 1 100 200 L 100 100 " stroke={strokeColor} strokeWidth="1" fill="none" />
            </svg>
        </Box>
    )
}

function RightFacingSemicircle({ isLightMode }) {
    const strokeColor = isLightMode ? lightTheme.global.colors["neutral-1"] : darkTheme.global.colors.white
    return (
        <Box height="medium" alignSelf="start">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" height="auto" width="auto">
                <path d="M 100 200 A 50 50 0 1 1 100 100 L 100 200 " stroke={strokeColor} strokeWidth="1" fill="none" />
            </svg>
        </Box>
    )
}

function Squiggle({ isLightMode }) {
    const strokeColor = isLightMode ? lightTheme.global.colors["neutral-3"] : darkTheme.global.colors["accent-1"]
    return (
        <Box height="small" alignSelf="start">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 300" height="auto" width="auto">
                <path d="M 50 150 Q 100 100 150 150 Q 200 200 250 150 Q 300 100 350 150 Q 400 200 450 150 Q 500 100 550 150 Q 600 200 650 150 " stroke={strokeColor} strokeWidth="7" fill="none" />
            </svg>
        </Box>
    )
}

function SquareDots({ isLightMode }) {
    const color = isLightMode ? lightTheme.global.colors["neutral-3"] : darkTheme.global.colors["accent-1"]
    const cxValues = ["50", "300", "550", "800"]
    const cyValues = ["50", "300", "550"]
    return (
        <Box height="small" alignSelf="start">
            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" height="auto" width="auto">
                {cxValues.map((cx, i) => {
                    return (
                        cyValues.map((cy, j) => {
                            return (
                                <circle key={i + " " + j} cx={cx} cy={cy} r="50" fill={color} />
                            )
                        })
                    )
                })}
            </svg>
        </Box>
    )
}

function LightPinkBlob({ isLightMode }) {
    const color = isLightMode ? lightTheme.global.colors["neutral-3"] : darkTheme.global.colors["accent-1"]
    return (
        <Box height="medium" alignSelf="center">
            <svg
                width="auto"
                height="auto"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g transform="translate(300,300)">
                    <path d="M70.2,-92.1C92.4,-48.1,112.7,-24,133.7,21C154.7,66,176.3,132,154.2,160.8C132,189.7,66,181.3,13,168.4C-40.1,155.4,-80.1,137.8,-126.1,109C-172.1,80.1,-224.1,40.1,-230.3,-6.2C-236.6,-52.6,-197.1,-105.1,-151.1,-149.1C-105.1,-193.1,-52.6,-228.6,-14.3,-214.3C24,-200,48.1,-136.1,70.2,-92.1Z"
                        fill={color} />
                </g>
            </svg>
        </Box>
    )
}

function PinkBlob({ isLightMode }) {
    const color = isLightMode ? lightTheme.global.colors["brand"] : darkTheme.global.colors["neutral-1"]
    return (
        <Box height="medium" alignSelf="end">
            <svg width="auto" height="auto" viewBox="0 0 600 600">
                <g transform="translate(300,300)">
                    <path d="M152,22C152,58.7,76,117.3,15.5,117.3C-45,117.3,-90,58.7,-90,22C-90,-14.7,-45,-29.3,15.5,-29.3C76,-29.3,152,-14.7,152,22Z"
                        fill={color} />
                </g>
            </svg>
        </Box>
    )
}

function PinkBlob2({ isLightMode }) {
    const color = isLightMode ? lightTheme.global.colors["brand"] : darkTheme.global.colors["neutral-1"]
    return (
        <Box height="medium" alignSelf="end">
            <svg width="auto" height="auto" viewBox="0 0 600 600">
                <g transform="translate(300,300)">
                    <path d="M116.5,-85.1C149.7,-51.4,174.3,-3,153.7,14.2C133.2,31.5,67.5,17.5,13,54.3C-41.5,91,-84.8,178.4,-123.4,186.5C-162,194.7,-196.1,123.6,-187.8,68.9C-179.4,14.2,-128.8,-24.1,-90.5,-59C-52.1,-93.9,-26.1,-125.4,7.8,-131.7C41.7,-137.9,83.4,-118.8,116.5,-85.1Z"
                        fill={color} />
                </g>
            </svg>
        </Box>
    )
}

function OutlinedBlobs({ isLightMode }) {
    const color = isLightMode ? lightTheme.global.colors["neutral-3"] : darkTheme.global.colors["accent-1"]
    return (
        <Box height="medium" alignSelf="end">
            <svg width="auto" height="auto" viewBox="0 0 800 800">
                <g transform="translate(300,300)">
                    <path d="M112.8,-90.3C145.3,-49.2,170.1,-2.3,171,57.1C171.8,116.5,148.6,188.4,95.7,223.3C42.8,258.3,-39.8,256.2,-85.4,218.4C-131,180.7,-139.6,107.2,-157.8,34.1C-175.9,-39,-203.7,-111.8,-179,-151.1C-154.3,-190.4,-77.1,-196.2,-18.5,-181.4C40.1,-166.7,80.3,-131.3,112.8,-90.3Z"
                        fill="none" stroke={color} strokeWidth={6} />
                </g>
                <g transform="translate(250,100)">
                    <path d="M185.5,-130.3C228.7,-93.7,244,-17.3,218.4,31.7C192.7,80.6,126.1,102,62.5,134.3C-1,166.7,-61.5,209.9,-110.5,198.3C-159.6,186.7,-197.3,120.1,-209.5,52C-221.8,-16.2,-208.6,-86,-169.5,-121.6C-130.3,-157.2,-65.2,-158.6,3,-161C71.1,-163.4,142.3,-166.8,185.5,-130.3Z"
                        fill="none" stroke={color} strokeWidth={6} />
                </g>
            </svg>
        </Box>
    )
}

function OutlinedBlobs2({ isLightMode }) {
    const color = isLightMode ? lightTheme.global.colors["neutral-3"] : darkTheme.global.colors["accent-1"]
    return (
        <Box height="medium" alignSelf="start">
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" height="auto" width="auto">
                <path fill="none" stroke={color} strokeWidth={3} d="M47.4,-56.1C57.2,-48.2,58.2,-29.3,55.9,-14.1C53.5,1.2,47.9,12.8,43,28.1C38.1,43.5,33.9,62.5,21.6,73C9.2,83.5,-11.3,85.4,-23.4,75.9C-35.6,66.5,-39.5,45.8,-44.8,29.4C-50.2,12.9,-57,0.8,-56.8,-11.7C-56.6,-24.2,-49.3,-37.2,-38.7,-44.9C-28,-52.7,-14,-55.3,2.4,-58.1C18.8,-60.9,37.5,-64,47.4,-56.1Z"
                    transform="translate(100 200)" />
                <path fill="none" stroke={color} strokeWidth={3} d="M34.9,-44.7C46.6,-39.6,58.3,-31.2,67.4,-18.3C76.6,-5.5,83.1,11.8,76.7,22.9C70.3,33.9,50.9,38.7,36,42.7C21.1,46.7,10.5,50,-4.4,56.1C-19.4,62.2,-38.8,71.1,-54.1,67.3C-69.5,63.4,-80.7,46.6,-83.4,29.3C-86,11.9,-80,-6.1,-74,-23.9C-68,-41.6,-61.9,-59.2,-49.5,-64.1C-37.2,-69,-18.6,-61.2,-3.5,-56.4C11.6,-51.6,23.3,-49.8,34.9,-44.7Z"
                    transform="translate(150 100)" />
            </svg>
        </Box>
    )
}

function generateDynamicBackgoundComponents(isLightMode) {
    const smallComponents = [
        <SquareDots isLightMode={isLightMode} />,
        <Squiggle isLightMode={isLightMode} />,
    ]
    const largeComponents = [
        <LeftFacingSemicircle isLightMode={isLightMode} />,
        <RightFacingSemicircle isLightMode={isLightMode} />,
        <PinkBlob isLightMode={isLightMode} />,
        <LightPinkBlob isLightMode={isLightMode} />,
        <PinkBlob2 isLightMode={isLightMode} />,
        <OutlinedBlobs isLightMode={isLightMode} />,
        <OutlinedBlobs2 isLightMode={isLightMode} />,
    ]
    shuffleArray(smallComponents);
    shuffleArray(largeComponents);
    let arr =[]
    const MAX_LARGE_COMPONENTS = 5;
    const NUM_BACKGROUND_ELEMENTS = 6;
    let countLarge = 0;
    for (let index = 0; index < NUM_BACKGROUND_ELEMENTS; index++) {
        const flip = Math.random() < 0.8 || countLarge >= MAX_LARGE_COMPONENTS
        if(flip) {
            arr.push(largeComponents[countLarge % largeComponents.length])
            countLarge++;
        } else {
            arr.push(smallComponents[(index - countLarge) % smallComponents.length])
        }
        // arr.push(componentArr[index % componentArr.length])
    }
}

export default function Background({ isLightMode }) {
    // const arr = generateDynamicBackgoundComponents(isLightMode)
    return (
        <Box style={{ position: "absolute", top: 0, zIndex: 0}} fill="horizontal" overflow="hidden" pad="medium">
            <Box height="80vh" margin={{bottom: "medium"}}></Box> {/** Skip Landing page */}
            {/* {arr.map((component, index) => {
                return (
                    <Box key={index}>
                        {component}
                    </Box>
                )
            })} */}
            <OutlinedBlobs />
            <PinkBlob2 />
            <SquareDots />
            <LightPinkBlob />
            <Squiggle />
            <PinkBlob />
        </Box>
    )
}