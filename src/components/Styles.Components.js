import { StyleSheet } from 'react-native';

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
    elevation: 3,
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

export const bottomBarStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    borderTopWidth: 2,
    borderColor: "#1c1c1c"
  },
  linkStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  linkText: {
    color: "white",
  },
  borderLeft: {
    borderLeftWidth: 1,
    borderColor: "#1c1c1c",
  },
  borderRight: {
    borderRightWidth: 1,
    borderColor: "#1c1c1c",
  }
})

export const currentBudgetStyles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    margin: 10,
    padding: 15,
    elevation: 3,
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
    elevation: 2,
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