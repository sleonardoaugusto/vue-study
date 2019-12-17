export default {
  filters: {
		spaceToComma(word) {
			return word.split(' ').join('-')
		}
  }
}