import {useRef, useState, useLayoutEffect} from 'react'

export default function useComponentDimensions() {
    const ref = useRef()
    const [dimensions, setDimensions] = useState({})
    useLayoutEffect(() => {
        const div = ref.current
        setDimensions(div.getBoundingClientRect().toJSON());
    }, [ref])

    return [ref, dimensions]
}