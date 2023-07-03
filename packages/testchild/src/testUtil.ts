export default class TestUtil {
    static consolefad() {
        const moudles = import.meta.globEager('../../**/**.json')
        for (const moudle in moudles) {
            console.log(moudle)
        }
        console.log(1111)
    }
}
