class Multimodal {

    get allLinks(){
        return cy.get('a[href]')
    }
}
export default Multimodal = new Multimodal()