// styles/styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#d4d4ed'
  },
  input: {
    borderWidth: 1,
    borderColor: '#465ea6',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  title: {
    fontSize: 18,
    marginBottom: 8
  },
  
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },



  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#7b6fbc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalItem: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#7b6fbc',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#7b6fbc',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  dropdownText: {
    fontSize: 16,
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalItem: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#7b6fbc',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  dropdownText: {
    fontSize: 16,
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: '#7b6fbc',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  card: {
    //borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,

    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  
  eventImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  
  eventLocationTime: {
    fontSize: 16,
    color: '#8f84ca',
    marginBottom: 3,
    fontStyle: 'italic',
  },
  
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10,
    color: '#493470'
  },
  
  iconRow: {
    flexDirection: 'row',
  },
  
  icon: {
    marginLeft: 10,
  },
  

  containerStart: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundVideoStart: {
    ...StyleSheet.absoluteFillObject,
  },
  
  
  overlayStart: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  contentStart: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  titleStart: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'HelveticaNeue',
  },
  descriptionStart: {
    fontSize: 16,
    color: '#eee',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonStart: {
    backgroundColor: '#007aff',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  buttonTextStart: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  backgroundSign: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlaySign: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // dark overlay for readability
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSign: {
    width: '85%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  titleSign: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputSign: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonSign: {
    backgroundColor: '#007aff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonTextSign: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  linkTextSign: {
    color: '#007aff',
    textAlign: 'center',
    fontSize: 14,
  },
  buttoncreate: {
    backgroundColor: '#007aff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 15,
  },

  submitButton: {
    backgroundColor: '#7b6fbc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center', // <-- change this from 'flex-start' to 'center'
    marginTop: 20,
  },
  
  
  
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  
});
