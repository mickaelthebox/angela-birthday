import React from 'react'

export default function ImageContainer() {
    return (
        <View>
        <Image
              style={{ width: 300, height: 450 }}
              source={require("./assets/test.png")}
        ></Image>
        </View>
    )
}
