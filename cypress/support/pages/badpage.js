class Badpage {

    get allLinks(){
        return cy.get('a[href]')
    }
}
export default Badpage = new Badpage()