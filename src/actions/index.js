export function testAction() {
  return(dispatch) => {
    console.log("Testing")
    dispatch({
      type: "TESTACTION",
      payload: "Test Data Sent!"
    })
  }
}