import * as React from "react";
import { View } from "../components/View";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "../components/Icon";
import { useTheme } from "../hooks/useTheme";
type Color = {
  name: string;
  value: string;
};

export type PrimaryColorSelectProps = {
  colors: Color[];
  selectedIndex: number;
  onPress: (color: string) => void;
};

export function PrimaryColorSelect(props: PrimaryColorSelectProps) {
  const { colors, selectedIndex, onPress } = props;
  const { applyThemeColor, theme } = useTheme();

  return (
    <View style={styles.container}>
      {colors.map((color, index) => {
        const isSelected = index === selectedIndex;
        return (
          <TouchableOpacity
            key={color.name}
            onPress={() => onPress(color.value)}
            style={{
              backgroundColor: color.value,
              alignItems: "center",
              height: 75,
              width: 75,
              borderRadius: 100,
              borderWidth: 4,
              borderColor: isSelected ? "#e68c05" : "transparent",
              margin: 8,
            }}
          >
            {/* {isSelected && (
              <Icon
                name="check"
                size="xxl"
                style={{ position: "relative", right: -25, top: 0 }}
                color={applyThemeColor({}, "text")}
              />
            )} */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

// import * as React from "react";
// import { View } from "../components/View";
// import { Text } from "../components/Text";
// import { TouchableOpacity, StyleSheet } from "react-native";
// import { Icon } from "../components/Icon";
// import { capitalCase } from "../utils";
// import { CheckItem } from "../components/CheckItem";

// type Color = {
//   name: string;
//   value: string;
// };

// export type PrimaryColorSelectProps = {
//   colors: Color[];
//   selectedIndex: number;
//   onChange: (value: string) => void;
// };

// export function PrimaryColorSelect(props: PrimaryColorSelectProps) {
//   const { colors, selectedIndex, onChange } = props;
//   return (
//     <View style={styles.container}>
//       {colors.map((value, index) => {
//         const isSelected = index === selectedIndex;
//         return (
//           <CheckItem
//             value={value as any}
//             index={index}
//             isSelected={isSelected}
//             renderLabel={() => (
//               <>
//                 <View
//                   style={{
//                     width: 40,
//                     height: 40,
//                     borderRadius: 80,
//                     backgroundColor: value.value,
//                   }}
//                 />
//                 <Text style={{ fontSize: 20, flex: 1, marginLeft: 10 }}>
//                   {capitalCase(value.name)}
//                 </Text>
//               </>
//             )}
//             onPress={() => onChange(value.value)}
//           />
//         );
//       })}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 8,
//     width: "100%",
//   },
//   item: {
//     padding: 8,
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
// });
