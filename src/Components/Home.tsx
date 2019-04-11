import * as  React from "react";
import withStyles, { jss } from "react-jss";
import {themeListener} from "theming";
import {JSS} from "jss";
import Hero from "./Hero";


export default class Home extends React.Component<{}, {}> {
    render() {
        return <div>
            <Hero />
        </div>
    }
}