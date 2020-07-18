import * as Font from "expo-font";

async function loadFonts() {
  await Font.loadAsync({
    MeriendaOne: require("./assets/fonts/MeriendaOne.ttf"),
  });
}
