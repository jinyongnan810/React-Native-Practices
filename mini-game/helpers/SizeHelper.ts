import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const isLargeScreen = deviceWidth >= 470;

const SizeHelper = { deviceWidth, deviceHeight, isLargeScreen };

export default SizeHelper;
