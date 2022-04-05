class Badpage {

    allLinks(){
        cy.get('a[href]')
    }
}
export default Badpage = new Badpage()