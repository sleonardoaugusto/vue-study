export default {
  filters: {
		spaceToComma(word) {
			return word.split(' ').join('-')
		}
  },
	computed: {
		spaceToComma() {
			return this.word.split(' ').join('-')
		}
  }
}