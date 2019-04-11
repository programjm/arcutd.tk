import * as  React from "react";
import withStyles, { jss } from "react-jss";
import {themeListener} from "theming";
import {JSS} from "jss";




const styles = (theme: any) => ({
    hero: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(9, 71, 14, 0.82)",
        color: theme.colors.bright,

        "& h1": {
            fontSize: theme.sizes.h1,
        },
        "& h2": {
            fontSize: theme.sizes.h2,
        },
        "& h1,& h2": {
            margin: 2,
            textAlign: "center"
        }
    },
    img: {
        width: "100%", //100% of container
        height: "100%",
        background: {
            image: 'url("/img/cow.webp")',
            size: "cover",
            position: "top"
        },
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -2
    },
});

class Hero extends React.Component<{classes: any}, {}> {
    render() {
        const { classes } = this.props;
        return <div className={classes.hero}>
            <div className={classes.img} />
            <h1>Animal Rights Club</h1>
            <h2>at UT Dallas</h2>
        </div>
    }
}

export default withStyles(styles)(Hero);