import { chunk } from 'lodash'
import * as React from 'react'
import { Col, Row, Grid } from 'react-flexbox-grid'

const GridGenerator = ({ cols, children, fullRow }) => {

    const [dynamicCols, setDynamicCols] = React.useState(window.innerWidth < 1920 ? window.innerWidth < 1080 ? 6 : 4 : 3);


    React.useEffect(() => {
        function updateCols() {
            setDynamicCols(window.outerWidth < 1080 ? 6 : window.outerWidth > 1968 ? 3 : 4);
        }
        window.addEventListener('resize', updateCols);
        return () => {
            window.removeEventListener('resize', updateCols);
        }
    }, []);

    const colWidth = 12 / cols
    const rows = chunk(React.Children.toArray(children), fullRow ? (12 / dynamicCols) : cols)
    return (
        <Grid>
            {rows.map((cols, index) => (
                <Row key={index}>
                    {cols.map((col, index) => (
                        <Col key={index} sm={12} md={fullRow ? dynamicCols : colWidth}>
                            {col}
                        </Col>
                    ))}
                </Row>
            ))}
        </Grid>
    )
}
export default GridGenerator