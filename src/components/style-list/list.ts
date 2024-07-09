import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // height: "100%",
    backgroundColor: "#27271f",
  },
  box: {
    flexDirection: "row",
    width: "94%",
    marginHorizontal: 12,
    marginVertical: 4,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3b3b33",
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
    color: "#f1f1f1",
  },
  boxsubtitle: {
    flexDirection: "row",
    marginTop: 4,
    marginLeft: -2,
    justifyContent: "flex-start",
    gap: 100,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "500",
    color: "#f1f1f1",
    borderRadius: 8,
    paddingHorizontal: 4,
  },
  value: {
    fontSize: 10,
    fontWeight: "500",
    color: "#e0dede",
    marginHorizontal: -20,
  },
  boxvalue: {
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddeb99",
    borderRadius: 20,
    marginRight: 12,
  },
});
