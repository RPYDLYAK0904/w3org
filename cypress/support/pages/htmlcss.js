class Htmlcss {

    get allLinks(){
        return cy.get('a[href]')
    }
}
export default Htmlcss = new Htmlcss()