import * as  React from "react";
import withStyles, { jss } from "react-jss";
import {themeListener} from "theming";
import {JSS} from "jss";




const styles = (theme: any) => ({
    hero: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#baffba",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
});

export default class Hero extends React.Component<{classes: any}, {}> {
    render() {
        const { classes } = this.props;
        return <div className={classes.hero}>
            <h1>Animal Rights Club</h1>
            <h3>at UT Dallas</h3>
        </div>
    }
}
