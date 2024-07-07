import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // height: "100%",
    // margin: "auto",
    backgroundColor: "#F8F7F2",
  },
  box: {
    flexDirection: "row",
    width: "94%",
    marginHorizontal: 12,
    marginVertical: 4,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#baa2cd",
    borderRadius: 8,
    // borderWidth: 1,
    // borderColor: "rgba(0, 0, 0, 0.3)",

    shadowColor: "rgba(0, 0, 0, 0.7)",
    shadowOffset: {
      width: 8,
      height: 16,
    },
    elevation: 12,
    shadowOpacity: 0.28,
    shadowRadius: 4,
  },
  texts: {
    flexDirection: "column",
    width: "80%",
    padding: 6,
  },
  title: {
    // paddingHorizontal: 18,
    fontSize: 20,
    fontWeight: "bold",
    color: "#0A0AAA",
  },
  boxsubtitle: {
    flexDirection: "row",
    marginTop: 4,
    justifyContent: "flex-start",
    gap: 100,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "#4bbf49",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  value: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0A0AAA",
    marginHorizontal: -20,
  },
  boxvalue: {
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A0AAA",
    borderRadius: 20,
    marginRight: 12,
  },
});
