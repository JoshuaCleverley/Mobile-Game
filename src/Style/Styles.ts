import { StyleSheet } from 'react-native'

// Styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    paddingTop: 40,
  },
  gameTitle: {
    marginTop: 100,
    fontSize: 60,
  },
  instructionsBody: {
    marginHorizontal: 30,
    paddingBottom: 50,
    fontSize: 20,
  },
  buttons: {
    position: 'absolute',
    gap: 10,
    width: '50%',
    flex: 1,
    bottom: 100,
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    gap: 50,
    marginBottom: 15,
  },
  moneyDisplay: {
    marginVertical: 20,
    alignItems: 'center',
    display: 'flex',
  },
  moneyDisplayText: {
    fontSize: 30,
  },
  generatorDisplay: {
    marginVertical: 10,
    width: '100%',
  },
  generatorText: {
    fontSize: 20,
  },
  generatorButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 20,
    gap: 5,
  },
  listContainer: {
    width: '95%',
    display: 'flex',
  },
  upgradeDisplay: {
    marginVertical: 10,
    width: '100%',
  },
  upgradeText: {
    fontSize: 20,
  },
})
