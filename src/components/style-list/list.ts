import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  box: {
    flexDirection: "row",
    width: "94%",
    marginHorizontal: 12,
    marginVertical: 4,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#d4e9f2",
    borderRadius: 8,

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
    fontSize: 16,
    fontWeight: "400",
    color: "#0A0AAA",
  },
  boxsubtitle: {
    flexDirection: "row",
    marginTop: 4,
    marginLeft: -4,
    justifyContent: "flex-start",
    gap: 100,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "500",
    backgroundColor: "#d4d6f2",
    borderRadius: 8,
    paddingHorizontal: 4,
  },
  value: {
    fontSize: 10,
    fontWeight: "500",
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
