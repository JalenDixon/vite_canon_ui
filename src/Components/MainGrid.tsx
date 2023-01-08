import Layer from "@arcgis/core/layers/Layer";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"
import { Container, Grid, Paper, styled } from "@mui/material"
import Map from "@arcgis/core/Map"
import { useCallback, useEffect, useState } from "react";


export const MainGrid = () => {
    const [baseMap, setBaseMap] = useState("streets-night-vector")
    const [allLayers, setLayers] = useState<Layer[]>([])
    const [mainMap, setMainMap] = useState<Map>(new Map({
        basemap: baseMap,
        layers: allLayers
    }))
    const mapElement = <div id="mapDiv" style={{
        padding: 0,
        margin: 0,
        height: '800px',
        width: '100%'
    }} />


    useEffect(() => {

        console.log('hello')
        new MapView({
            map: mainMap,
            container: "mapDiv",
            center: [118.805, 34.027],
            zoom: 2,
        });
        let graphicsLayer = new GraphicsLayer()
        mainMap.add(graphicsLayer)

        console.log(mainMap)

    }, [])


    return (
        <Container sx={{ maxHeight: '1200px' }}>
            <Grid container spacing={2}>
                <Grid item={true} xs={12}>
                    <Item> Tools go There</Item>
                </Grid>
                <Grid item={true} xs={3}>
                    <Item>Content pane</Item>
                </Grid>
                <Grid item={true} xs={7}>
                    <Item>
                        {mapElement}
                    </Item>
                </Grid>
                <Grid item={true} xs={2}>
                    <Item>Logs go here</Item>
                </Grid>
            </Grid>
        </Container >
    )
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
