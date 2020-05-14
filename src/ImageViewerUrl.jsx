import { Component, createElement } from "react";
import { Image, View } from "react-native";
import { flattenStyles } from "./utils/common";

const defaultStyle = {
    container: {},
    image: {}
};

export class ImageViewerUrl extends Component {
    render() {
        const style = flattenStyles(defaultStyle, this.props.style);
        const source = { uri: this.props.url.value };
        if (this.props.authToken && this.props.authToken.value) {
            source.headers = {};
            source.headers.Authorization = this.props.authToken.value;
        }
        return (
            <View style={style.container}>
                <Image style={style.image} source={source} />
            </View>
        );
    }
}
