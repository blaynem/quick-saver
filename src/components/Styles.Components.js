import { Platform, StatusBar, StyleSheet } from 'react-native';

export const addTransactionStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "gray",
    padding: 10
  },
  buttonText: {
    backgroundColor: "#212121",
    color: "white"
  },
  buttonResponse: {
    paddingTop: 10,
    textAlign: "center"
  },
  negativeResponse: {
    color: "red"
  },
  positiveResponse: {
    color: "green"
  },
  container: {
    backgroundColor: "#212121",
    margin: 10,
    padding: 15,
  },
  text: {
    color: "white"
  },
  inputs: {
    color: "white",
    borderColor: "white",
    marginBottom: 10
  }
})

export const sideBarStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: Platform.OS === "ios" ? 0 : (StatusBar.currentHeight + 30),
    bottom: 0,
    left: 0,
    backgroundColor: "red",
    backgroundColor: "#333333",
    zIndex: 1,
    paddingLeft: 10
  },
  // hide completely offscreen
  containerHidden: {
    position: "absolute",
    zIndex: -10,
    left: -300,
    top: Platform.OS === "ios" ? 0 : (StatusBar.currentHeight + 30),    
    opacity: 0
  },
  linkStyle: {
    justifyContent: 'space-around',
    height: 50,
    width: 150,
  },
  linkText: {
    color: "white",
  }
})

export const currentBudgetStyles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    margin: 10,
    padding: 15,
  },
  text: {
    color: "white"
  }
})

export const transactionCardStyles = StyleSheet.create({
  text: {
    color: "white"
  },
  paddingBottom: {
    paddingBottom: 10
  },
  transactionCard: {
    backgroundColor: "#272727",
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5
  },
  cardSideRight: {
    alignSelf: "center",
    fontSize: 24,
    flex: 1,
    textAlign: "right"
  },
  cardSideLeft: {
    flex: 2
  },
  category: {
    backgroundColor: "gray",
    maxWidth: 50,
    textAlign: "center",
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    fontSize: 10,
    position: "absolute",
    top: 1,
    right: 1
  }
})